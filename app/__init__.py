import flask
import os
import subprocess
import json
from flask import Flask, request
import werkzeug
werkzeug.cached_property = werkzeug.utils.cached_property
#FOR LOCAL TEST, NEED TO INSTALL THIS 2 NEXT LINES
#import flask.scaffold
#flask.helpers._endpoint_from_view_func = flask.scaffold._endpoint_from_view_func
####################################################
from flask_restplus import Api, Namespace, Resource, fields
from flask_cors import CORS
#correct the mixed content for kubernetes : https://github.com/python-restx/flask-restx/issues/188
from werkzeug.middleware.proxy_fix import ProxyFix
from flask import url_for

@property
def specs_url(self):
    scheme = 'http' if 'localhost' in self.base_url else 'https'
    return url_for(self.endpoint('specs'), _external=True, _scheme=scheme)
Api.specs_url = specs_url


api = Api()
app = flask.Flask(__name__)
CORS(app) # This will enable CORS for all routes

app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_port=1)

api.init_app(app,title='NigthWatch Rest API', 
          description='Rest API for the CISEL Nightwatch project')
ns_default = api.default_namespace
#ns_cisel = api.namespace('cisel-nightwatch', description='Operations related to nightwatch')


import kubernetes
import gitanalyze
import container

@ns_default.route('/hello/')
class HelloWorld(Resource):
    def get(self):
        return "Hello World"
    
# MAIN CLASS / launch application on port 5000
#################################################
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
