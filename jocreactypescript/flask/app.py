
from flask import Flask, jsonify, Response, request, redirect, url_for, json
import numpy as np
from PIL import Image
import cv2
from kernel import AffineTransformations, canny,get_grayscale,sharpen,erode,dilate,opening,ShowMustGoOn,WhiteBackGround
import base64
import pickle
import matplotlib.colors as mcolors
#...
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

        # SS_IsRGB
        let_IsRGB_str = request.form.get('IsRGB')  # Get the 'IsRGB' parameter as a string
        let_IsRGB = let_IsRGB_str.lower() == 'true'

        # SS_2DMatrix
        let_LinearMap_str = request.form.get('LinearMap')
        let_LinearMap_list = let_LinearMap_str.split(',')
        let_LinearMap_list = [float(item) for item in let_LinearMap_list]  # Example: convert to float
        let_LinearMap=np.array(let_LinearMap_list).reshape(-1,3)

        # SS_nDMatrix
        let_Convolution_str = request.form.get('Convolution')
        let_Convolution_list = let_Convolution_str.split(',')
        let_Convolution_list = [float(item) for item in let_Convolution_list]  # Example: convert to float
        let_Convolution=np.array(let_Convolution_list).reshape(-1,5)

        # SS_Thresholds
        let_Thresholds_str=request.form.get('Thresholds')
        let_Thresholds_data = json.loads(let_Thresholds_str)
        let_Thresholds = [[item['PositionY'], item['IsDefault'], item['Gray']] for item in let_Thresholds_data]
        def hex_to_rgb_vector(hex_color):
            rgba = mcolors.to_rgba(hex_color)
            rgb = rgba[:3]
            return rgb[0]
        '''
        [
            [86, True, '#000000'],
            [148, True, '#e1e1e1'],
            [284, True, '#5b5b5b']
        ]
        '''
        list_Minn=[0]
        list_Maxx=[]
        list_Gray=[]
        list_Bool=[]

        for i in range(len(let_Thresholds)):
            list_Bool.append(let_Thresholds[i][1])
            if i==0:
                list_Maxx.append(let_Thresholds[i][0])
            if  i!=0:
                list_Maxx.append(let_Thresholds[i][0])
                list_Minn.append(let_Thresholds[i-1][0])
        
        for i in range(len(let_Thresholds)):
            let_Gray=hex_to_rgb_vector(let_Thresholds[i][2])
            if let_Gray>=255:
                list_Gray.append(255)
            if let_Gray<=0:
                list_Gray.append(0)
            if let_Gray>0 and let_Gray<255:
                list_Gray.append(let_Gray)

        # SS_ImageFile
        let_File=request.files['file']
        if let_File!=None:
            # convert let_File to Black and White Image if let_IsRGB === 'false'
            let_Img = cv2.imdecode(np.frombuffer(let_File.read(), np.uint8), cv2.IMREAD_COLOR)
            #let_Img = AffineTransformations(let_Img)
            if not let_IsRGB:
                let_Img = cv2.cvtColor(let_Img, cv2.COLOR_BGR2GRAY)
                let_Img = cv2.filter2D(let_Img, -1, let_Convolution)
                let_Img = WhiteBackGround(let_Img,list_Minn,list_Maxx,list_Gray,list_Bool)
            let_Bytes = cv2.imencode('.png', let_Img)[1].tobytes()
            response = Response(let_Bytes, content_type='image/png')
            return response #jsonify({'py':response})
        else:
            return jsonify({'error': 'No file uploaded'})

        #let_JSON  = request.get_json()
        #let_IsRGB = let_JSON.get('IsRGB')
        #let_Image = let_JSON.get('file')
        #if let_Image!=None:
        #    let_Img = cv2.imdecode(np.frombuffer(let_Image, np.uint8), cv2.IMREAD_COLOR)
        #    let_Bytes = cv2.imencode('.png', let_Img)[1].tobytes()
        #    response = Response(let_Bytes, content_type='image/png')
        #    return response
    
        # Decode base64 encoded image
        #encoded_image = let_Image#.get('file')
        #decoded_image = base64.b64decode(encoded_image)
        #nparr = np.frombuffer(decoded_image, np.uint8)
        #image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        #_, buffer = cv2.imencode('.png', image)
        #processed_image_base64 = base64.b64encode(buffer).decode('utf-8')
#
        #return buffer#{'IsRGB':let_IsRGB,'file':let_Image}
    

        # This is the posted data.
        # convert "file" to image and return image
        # If "IsRGB"=="false" then return black and white image
        # {"IsRGB":"true","file":"{\"file\":{}}"}
        #return {'IsRGB':let_IsRGB,'file':let_File}
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