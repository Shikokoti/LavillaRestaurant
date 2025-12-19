import os
import uuid
import jwt
from datetime import datetime, timedelta

from flask import Blueprint, request, jsonify
from ..database import db
from ..models import User, TokenBlocklist

auth_bp = Blueprint('auth', __name__)

SECRET_KEY = os.getenv('JWT_SECRET', 'super-secret-change-me')
ACCESS_TOKEN_EXPIRES_MINUTES = int(os.getenv('ACCESS_TOKEN_MINUTES', 30))
REFRESH_TOKEN_EXPIRES_DAYS = int(os.getenv('REFRESH_TOKEN_DAYS', 7))

def generate_token(payload: dict, expires_delta: timedelta, jti: str):
    to_encode = payload.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire, "iat": datetime.utcnow(), "jti": jti})
    token = jwt.encode(to_encode, SECRET_KEY, algorithm="HS256")
    return token

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json(force=True)
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    if not username or not password:
        return jsonify({'error':'username and password required'}), 400

    if User.query.filter((User.username == username) | (User.email == email)).first():
        return jsonify({'error':'user with that username or email already exists'}), 409

    user = User(username=username, email=email, role=data.get('role','user'))
    user.set_password(password)
    db.session.add(user)
    db.session.commit()
    return jsonify({'user': user.to_dict()}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json(force=True)
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error':'username and password required'}), 400

    user = User.query.filter_by(username=username).first()
    if not user or not user.check_password(password):
        return jsonify({'error':'invalid credentials'}), 401

    payload = {'sub': user.id, 'username': user.username, 'role': user.role}
    access_jti = str(uuid.uuid4())
    refresh_jti = str(uuid.uuid4())

    access_token = generate_token(payload, timedelta(minutes=ACCESS_TOKEN_EXPIRES_MINUTES), access_jti)
    refresh_token = generate_token(payload, timedelta(days=REFRESH_TOKEN_EXPIRES_DAYS), refresh_jti)

    return jsonify({
        'access_token': access_token,
        'refresh_token': refresh_token,
        'token_type': 'bearer',
        'expires_in': ACCESS_TOKEN_EXPIRES_MINUTES * 60
    }), 200

@auth_bp.route('/refresh', methods=['POST'])
def refresh():
    data = request.get_json(force=True)
    refresh_token = data.get('refresh_token')
    if not refresh_token:
        return jsonify({'error':'refresh_token required'}), 400
    try:
        decoded = jwt.decode(refresh_token, SECRET_KEY, algorithms=['HS256'])
    except jwt.ExpiredSignatureError:
        return jsonify({'error':'refresh token expired'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'error':'invalid token'}), 401

    jti = decoded.get('jti')
    if TokenBlocklist.query.filter_by(jti=jti).first():
        return jsonify({'error':'refresh token revoked'}), 401

    user_id = decoded.get('sub')
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error':'user not found'}), 404

    new_access_jti = str(uuid.uuid4())
    payload = {'sub': user.id, 'username': user.username, 'role': user.role}
    access_token = generate_token(payload, timedelta(minutes=ACCESS_TOKEN_EXPIRES_MINUTES), new_access_jti)

    return jsonify({'access_token': access_token, 'expires_in': ACCESS_TOKEN_EXPIRES_MINUTES * 60}), 200

@auth_bp.route('/logout', methods=['POST'])
def logout():
    data = request.get_json(force=True)
    refresh_token = data.get('refresh_token')
    if not refresh_token:
        return jsonify({'error':'refresh_token required'}), 400
    try:
        decoded = jwt.decode(refresh_token, SECRET_KEY, algorithms=['HS256'])
    except jwt.InvalidTokenError:
        return jsonify({'error':'invalid token'}), 401

    jti = decoded.get('jti')
    tb = TokenBlocklist(jti=jti)
    db.session.add(tb)
    db.session.commit()
    return jsonify({'status':'logged_out'}), 200

@auth_bp.route('/me', methods=['GET'])
def me():
    auth = request.headers.get('Authorization', None)
    if not auth:
        return jsonify({'error':'Authorization header required'}), 401
    parts = auth.split()
    if parts[0].lower() != 'bearer' or len(parts) != 2:
        return jsonify({'error':'Invalid Authorization format'}), 401
    token = parts[1]
    try:
        decoded = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
    except jwt.ExpiredSignatureError:
        return jsonify({'error':'access token expired'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'error':'invalid token'}), 401

    user = User.query.get(decoded.get('sub'))
    if not user:
        return jsonify({'error':'user not found'}), 404

    return jsonify({'user': user.to_dict()}), 200
