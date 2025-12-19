import os
import jwt
from functools import wraps
from flask import request, jsonify
from ..models import User, TokenBlocklist

SECRET_KEY = os.getenv("JWT_SECRET", "super-secret-change-me")


def admin_required(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        auth = request.headers.get("Authorization")
        if not auth:
            return jsonify({"error": "Missing token"}), 401

        token = auth.split()[1]
        decoded = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        user = User.query.get(decoded["sub"])

        if user.role != "admin":
            return jsonify({"error": "Admin only"}), 403

        return f(*args, **kwargs)
    return wrapper
