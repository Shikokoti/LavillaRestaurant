from flask import Blueprint, jsonify, request
from ..database import db
from ..models import MenuItem, Order, Reservation, User
from ..utils.auth_decorators import admin_required

admin_bp = Blueprint('admin', __name__)

@admin_bp.route('/users', methods=['GET'])
@admin_required
def list_users():
    users = User.query.all()
    return jsonify([u.to_dict() for u in users])

@admin_bp.route('/orders', methods=['GET'])
@admin_required
def admin_list_orders():
    orders = Order.query.order_by(Order.id.desc()).all()
    return jsonify([o.to_dict() for o in orders])

@admin_bp.route('/menu', methods=['POST'])
@admin_required
def admin_create_menu():
    data = request.get_json(force=True)
    required = ['name','price']
    for k in required:
        if k not in data:
            return jsonify({'error': f'missing {k}'}), 400
    item = MenuItem(
        name=data['name'],
        description=data.get('description'),
        price=float(data['price']),
        category=data.get('category'),
        image=data.get('image')
    )
    db.session.add(item)
    db.session.commit()
    return jsonify(item.to_dict()), 201

@admin_bp.route('/menu/<int:item_id>', methods=['DELETE'])
@admin_required
def admin_delete_menu(item_id):
    item = MenuItem.query.get_or_404(item_id)
    db.session.delete(item)
    db.session.commit()
    return jsonify({'deleted': item_id})
