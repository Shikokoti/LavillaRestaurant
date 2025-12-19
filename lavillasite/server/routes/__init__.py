from .reservation_routes import reservation_bp
from .admin import admin_bp
from .auth_routes import auth_bp

def register_routes(app):
    app.register_blueprint(reservation_bp, url_prefix="/api/reservations")
    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(admin_bp, url_prefix="/api/admin")
