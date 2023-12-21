
from flask import Flask, jsonify, request, redirect, url_for
import numpy as np
#from flask_cors import CORS 

app = Flask(__name__) 
#CORS(app) 

@app.route('/')
def home():
    return "<h1>Hello<h1>"

@app.route('/<Input>')#,methods=['Get'])
def def_OutPut(Input):
    var=Input
    return jsonify({'py':var})

@app.route('/def_Update')#,methods=['Get'])
def def_Update():
    return jsonify({'py':100})

# y = x^2
# https://www.geeksforgeeks.org/flask-app-routing/
@app.route('/def_Ysquare/<Input>')#,methods=['Get'])
def def_Ysquare(Input):
    var=float(Input)**2
    return jsonify({'py':var})

@app.route('/def_Ycube/<Input>')#,methods=['Get'])
def def_Ycube(Input):
    var=float(Input)**3
    return jsonify({'py':var})

# Running app
if __name__ == '__main__':
    app.run()#debug=True,port=5001)


'''
python3 hello02.py
'''