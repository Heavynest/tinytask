"""Hello."""
import flask
import json
import index


@index.app.route('/api/', methods=["GET","POST"])
def get_score():
    """We want you."""
    response=flask.jsonify({"value" : "Hello World."})
    # response.headers.add = ('Access-Control-Allow-Origin','*')
    # rst.headers['Access-Control-Allow-Origin'] = '*'
    return response
