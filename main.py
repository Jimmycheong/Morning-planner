import os
import time
from flask import (
    Flask,
    request,
    url_for,
    redirect,
    make_response,
    render_template,
    jsonify
)

app = Flask(__name__)

@app.route("/",  methods=['GET'])
def index():
    app_id = os.environ['TFL_API_ID']
    app_key = os.environ['TFL_API_KEY']
    return render_template(
        "index.html",
        app_id=app_id,
        app_key=app_key
    )

@app.errorhandler(404)
def not_found(error):
    return render_template('error.html'), 404
