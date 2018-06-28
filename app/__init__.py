from flask import Flask
from config import Config


def create_app(config_cls=Config):
    app = Flask(__name__, static_folder='../static')
    app.config.from_object(config_cls)
    from app.main import bp as bp_main
    app.register_blueprint(bp_main)
    return app
