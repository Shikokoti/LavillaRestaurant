from flask import Blueprint, request, jsonify
import os
import smtplib
from email.message import EmailMessage

from ..database import db
from ..models import Reservation

reservation_bp = Blueprint("reservations", __name__)

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")


@reservation_bp.route("/", methods=["POST"])
def create_reservation():
    data = request.get_json(force=True)

    required = ["name", "email", "phone", "guests", "date", "time"]
    for field in required:
        if field not in data or not data[field]:
            return jsonify({"error": f"{field} is required"}), 400

    reservation = Reservation(
        name=data["name"],
        email=data["email"],
        phone=data["phone"],
        guests=data["guests"],
        date=data["date"],
        time=data["time"]
    )

    db.session.add(reservation)
    db.session.commit()

    send_email(reservation)

    return jsonify({
        "message": "Reservation successful",
        "reservation": reservation.to_dict()
    }), 201


def send_email(res):
    if not EMAIL_ADDRESS or not EMAIL_PASSWORD:
        print("⚠️ Email not configured")
        return

    msg = EmailMessage()
    msg["Subject"] = "🍽️ New Reservation - La Villa"
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = EMAIL_ADDRESS

    msg.set_content(f"""
New Reservation Received

Name: {res.name}
Email: {res.email}
Phone: {res.phone}
Guests: {res.guests}
Date: {res.date}
Time: {res.time}
""")

    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
        server.starttls()
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        server.send_message(msg)
