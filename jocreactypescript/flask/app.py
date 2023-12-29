
from flask import Flask, jsonify, Response, request, redirect, url_for, json
import numpy as np
from PIL import Image
import cv2
from kernel import canny,get_grayscale,sharpen,erode,dilate,opening,ShowMustGoOn,WhiteBackGround
import base64
import pickle

#from flask_cors import CORS 

app = Flask(__name__) 
#CORS(app) 

@app.route('/')
def home():
    return "<h1>Hello<h1>"

#****************************************************************************
# Print
#****************************************************************************
@app.route('/printt<x>')
def printt(x):
    return "<h1>"+x+"<h1>"

@app.route('/HelloWorld')#,methods = ['POST', 'GET'])
def HelloWorld():
    # https://www.geeksforgeeks.org/how-to-connect-reactjs-with-flask-api/
    return {'messenger':33}

@app.route('/Square',methods = ['POST', 'GET'])
def HelloSomeone():
    if request.method == 'POST':
        Let_JSON  = request.get_json()
        let_IsRGB = Let_JSON.get('IsRGB')
        if let_IsRGB=='false':
            return {'messenger':'Bordom'}
        else:
            return {'messenger':'Addiction'}

#****************************************************************************
# Edit Image
#****************************************************************************
@app.route('/def_OpenCV',methods = ['POST', 'GET'])
def def_OpenCV():
    # https://stackoverflow.com/questions/23066821/flask-post-a-file-with-accompying-json
    if request.method == 'POST':
        Let_JSON  = request.get_json()
        let_IsRGB = Let_JSON.get('IsRGB')
        let_File = Let_JSON.get('file')
        return {'IsRGB':let_IsRGB,'file':let_File}
        #if let_File!=None:
        #    let_Img = cv2.imdecode(np.frombuffer(Let_JSON.get('file').read(), np.uint8), cv2.IMREAD_COLOR)
        #    let_Bytes = cv2.imencode('.png', let_Img)[1].tobytes()
        #    response = Response(let_Bytes, content_type='image/png')
        #    return Let_JSON #jsonify({'py':response})
            #if let_IsRGB=='false':
            #    return {'messenger':'Bordom'}
            #else:
            #    return {'messenger':'Addiction'}
    #pass
    '''
    # By ChatGPT
    if request.method == 'POST':
        let_File=request.files['file']
        if let_File!=None:
            let_Img = cv2.imdecode(np.frombuffer(let_File.read(), np.uint8), cv2.IMREAD_COLOR)
            let_Bytes = cv2.imencode('.png', let_Img)[1].tobytes()
            response = Response(let_Bytes, content_type='image/png')
            return response #jsonify({'py':response})
        else:
            return jsonify({'error': 'No file uploaded'})'''


#****************************************************************************
# Running app
#****************************************************************************

if __name__ == '__main__':
    app.run(debug=True)


'''
python3 hello02.py
'''