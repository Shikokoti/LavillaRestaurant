import os
from flask import Flask
from dotenv import load_dotenv
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

load_dotenv()

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", "sqlite:///instance/lavilla.db")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["SECRET_KEY"] = os.getenv("JWT_SECRET", "secret")

    CORS(app)
    db.init_app(app)

# -----------------------------
# Import all models here
# -----------------------------
    from .models import User, Reservation, MenuItem, Order, TokenBlocklist

# -----------------------------
# Initialize migrations
# -----------------------------
    migrate = Migrate(app, db)

# -----------------------------
# Register routes
# -----------------------------
    from .routes import register_routes
    register_routes(app)


    return app

# CLI command for manual DB init
def init_cli_commands(app):
    @app.cli.command("init-db")
    def init_db():
        """Manually create all tables (alternative to migrations)."""
        with app.app_context():
            db.create_all()
            print("Database initialized")

if __name__ == "__main__":
    app = create_app()
    init_cli_commands(app)
    app.run(debug=True)