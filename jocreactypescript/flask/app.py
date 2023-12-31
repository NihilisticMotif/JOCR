
from flask import Flask, jsonify, Response, request, redirect, url_for, json
import numpy as np
from PIL import Image
import cv2
from kernel import DrawPoints,AffineTransformations, canny,get_grayscale,sharpen,erode,dilate,opening,ShowMustGoOn,WhiteBackGround
import base64
import pickle
import matplotlib.colors as mcolors
import ast
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
        def hex_to_rgb_vector(hex_color):
            rgba = mcolors.to_rgba(hex_color)
            rgb = rgba[:3]
            return rgb[0]
        
        def hex_to_rgb_3Dvector(hex_color):
            rgba = mcolors.to_rgba(hex_color)
            rgb = rgba[:3]
            return rgb
        # SS_IsRGB
        SS_IsRGB_str = request.form.get('SS_IsRGB')  # Get the 'IsRGB' parameter as a string
        SS_IsRGB = SS_IsRGB_str.lower() == 'true'

        SS_IsActicate_str=request.form.get('SS_IsActivate') # type boolean[]
        SS_IsActicate_list = SS_IsActicate_str.split(',')
        #SS_IsActicate_list = [bool(item) for item in SS_IsActicate_list]
        SS_IsActicate=[]
        for i in SS_IsActicate_list:
            if 'rue' in i:
                SS_IsActicate.append(True) 
            else:
                SS_IsActicate.append(False) 

        '''
        # SS_Affine
        # https://youtu.be/Ad9e5eoHm9U?si=rlnmPMVsNRuB5QPt
        SS_Affine_str=request.form.get('SS_Affine')
        
        SS_Affine_list = SS_Affine_str.split(',')
        SS_Affine_list = [float(item) for item in SS_Affine_list]  # Example: convert to float
        SS_Affine=np.array(SS_Affine_list).reshape(2,3,2)
        SS_AffineRGB_str=request.form.get('SS_AffineRGB')
        SS_AffineRGB_hex=[str(item) for item in SS_AffineRGB_str]
        #print(SS_AffineRGB_hex)
        SS_AffineRGB=[]
        for i in SS_AffineRGB_hex:
            ii = i.strip().replace('#', '')
            ii = ii.replace(',', '')
            if ii:
                SS_AffineRGB.append(hex_to_rgb_3Dvector(ii))
        SS_AffineBOOL_str=request.form.get('SS_AffineBOOL')
        SS_AffineBOOL=[bool(item) for item in SS_AffineBOOL_str]
        #SS_AffineBOOL=np.array(SS_AffineBOOL).reshape(2,-1)
        Is_Affine=SS_IsActicate
        print('Title: SS_Affine_str\n'+SS_Affine_str+'\n')
        print('Title: SS_Affine\n'+SS_Affine+'\n')
        print('Title: SS_AffineRGB_str\n'+SS_AffineRGB_str+'\n')
        print('Title: SS_AffineRGB\n'+SS_AffineRGB+'\n')
        print('Title: SS_Affine_str\n'+SS_AffineBOOL_str+'\n')
        print('Title: SS_Affine\n'+SS_AffineBOOL+'\n')'''

        # SS_nDMatrix
        SS_nDMatrix_str = request.form.get('SS_nDMatrix')
        SS_nDMatrix_list = SS_nDMatrix_str.split(',')
        SS_nDMatrix_list = [float(item) for item in SS_nDMatrix_list]  # Example: convert to float
        SS_nDMatrix=np.array(SS_nDMatrix_list)#.reshape(-1,5)
        Is_nDMatrix=SS_IsActicate[0]
        #Is_...

        # SS_Thresholds
        SS_Thresholds_str=request.form.get('SS_Thresholds')
        SS_Thresholds_data = json.loads(SS_Thresholds_str)
        SS_Thresholds = [[item['PositionY'], item['IsDefault'], item['Gray']] for item in SS_Thresholds_data]
        Is_Thresholds=SS_IsActicate[1]
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

        for i in range(len(SS_Thresholds)):
            list_Bool.append(SS_Thresholds[i][1])
            if i==0:
                list_Maxx.append(SS_Thresholds[i][0])
            if  i!=0:
                list_Maxx.append(SS_Thresholds[i][0])
                list_Minn.append(SS_Thresholds[i-1][0])
        
        for i in range(len(SS_Thresholds)):
            let_Gray=hex_to_rgb_vector(SS_Thresholds[i][2])
            if let_Gray>=255:
                list_Gray.append(255)
            if let_Gray<=0:
                list_Gray.append(0)
            if let_Gray>0 and let_Gray<255:
                list_Gray.append(let_Gray)

        # SS_ImageFile
        let_File=request.files['file']
        if let_File!=None:
            let_Img = cv2.imdecode(np.frombuffer(let_File.read(), np.uint8), cv2.IMREAD_COLOR)
            #if Is_Affine==True:
            #    let_Img=DrawPoints(let_Img,SS_Affine,SS_AffineRGB,SS_AffineBOOL)
            if not SS_IsRGB:
                let_Img = cv2.cvtColor(let_Img, cv2.COLOR_BGR2GRAY)
                if Is_nDMatrix==True:
                    let_Img = cv2.filter2D(let_Img, -1, SS_nDMatrix)
                if Is_Thresholds==True:
                    let_Img = WhiteBackGround(let_Img,list_Minn,list_Maxx,list_Gray,list_Bool)
                #if Is_Affine==True:
                #    let_Img=AffineTransformations(let_Img,SS_Affine)
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