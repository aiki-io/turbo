from flask import redirect, url_for
from app.main import bp


@bp.route('/')
@bp.route('/index')
def index():
    return redirect(url_for('static', filename='index.html'))
