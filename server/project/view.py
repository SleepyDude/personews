from app import app
from flask import jsonify


@app.route('/api/index')
def api_index():
    return jsonify({'data': 'Hello World'})