from server.app import create_app, db
from server.models import User, Reservation

app = create_app()

with app.app_context():

    db.session.query(User).delete()
    db.session.query(Reservation).delete()
    
    # Add admin user
    admin = User(username="admin", email="admin@example.com")
    admin.set_password("password123")
    db.session.add(admin)
    
    # Add sample reservation
    res = Reservation(
        name="Faith Wangari",
        email="wangari@example.com",
        phone="0712345678",
        guests="2",
        date="2025-12-25",
        time="19:00"
    )
    db.session.add(res)
    
    db.session.commit()
    
    # Verify entries
    print(User.query.all())
    print(Reservation.query.all())
