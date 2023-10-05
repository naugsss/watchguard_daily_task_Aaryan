import os
from flask import Flask
from flask_smorest import Api
from db import db
import models
from resources.item import blp as ItemBlueprint
from resources.store import blp as StoreBlueprint

def create_app(db_url=None):

    app = Flask(__name__)

    app.config["PROPAGATE_EXCEPTIONS"] = True   
    app.config["API_TITLE"] = "Stores REST API"
    app.config["API_VERSION"] = "v1"
    app.config["OPENAPI_VERSION"] = "3.0.3"
    app.config["OPENAPI_URL_PREFIX"] = "/"
    app.config["OPENAPI_SWAGGER_UI_PATH"] = "/swagger-ui"
    app.config["OPENAPI_SWAGGER_UI_URL"] = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"
    app.config["SQLALCHEMY_DATABASE_URI"] = db_url or os.getenv("DATABASE_URL","sqlite:///data.db")
    # this will first use the db_url if exists or use the environment variable if exists or lastly it will use sqlite as database
    app.config["SQLALCHEMY_TRACK_MODIFICATION"] = False
    db.init_app(app)   
# this basically initializes the FLASK SQLAlchemy extension giving it our Flask app so that it can connect the Flask app to SQLAlchemy

    api = Api(app)

    with app.app_context():
        db.create_all()


    api.register_blueprint(ItemBlueprint)
    api.register_blueprint(StoreBlueprint)

    return app
