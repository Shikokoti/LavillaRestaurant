from flask import Flask
from flask_cors import CORS
from .extensions import db, migrate
from .routes.reservation_routes import reservations_bp
from .routes.main import main as main_bp
from . import models
import os

def create_app():
    app = Flask(__name__)
    
    app.config.from_object("config.Config")

    CORS(app) #Added to handle the front end requests

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    
    # Register blueprints
    app.register_blueprint(reservations_bp, url_prefix="/reservations")
    app.register_blueprint(main_bp)

    return app
