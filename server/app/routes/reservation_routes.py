from flask import Blueprint, request, jsonify
from datetime import datetime
from ..models import Reservation
from ..extensions import db


reservations_bp = Blueprint(
    "reservations",
    __name__,
    url_prefix="/reservations"
)

# Create a new reservation
@reservations_bp.route("/create", methods=["POST"])
def create_reservation():
    data = request.get_json()
    try:
        reservation = Reservation(
            full_name=data["full_name"],
            phone_number=data["phone_number"],
            email=data["email"],
            date=datetime.strptime(data["date"], "%Y-%m-%d").date(),
            time=datetime.strptime(data["time"], "%H:%M").time()
        )
        db.session.add(reservation)
        db.session.commit()
        return jsonify({"message": "Reservation created", "id": reservation.id}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Get all reservations
@reservations_bp.route("/all", methods=["GET"])
def get_reservations():
    reservations = Reservation.query.all()
    result = [
        {
            "id": r.id,
            "full_name": r.full_name,
            "phone_number": r.phone_number,
            "email": r.email,
            "date": r.date.strftime("%Y-%m-%d"),
            "time": r.time.strftime("%H:%M"),
            "created_at": r.created_at.strftime("%Y-%m-%d %H:%M:%S")
        } for r in reservations
    ]
    return jsonify(result)
