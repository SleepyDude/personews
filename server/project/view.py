from app import app
from flask import jsonify


@app.route('/api/ping')
def api_index():
    return jsonify({'data': 'different ping from flask'})