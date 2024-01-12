
from flask import Flask, jsonify, Response, request, redirect, url_for, json
import numpy as np
from PIL import Image
import cv2
from kernel import DrawingBoxes,AffineMoveOrigin,AffineRotation,AffineScale,DrawPointOrigin,DrawPoints,AffineTransformations, canny,get_grayscale,erode,dilate,opening,WhiteBackGround
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
            return rgb[0]*255
        
        def hex_to_rgb_3Dvector(hex_color):
            rgba = mcolors.to_rgba(hex_color)
            rgb = rgba[:3]
            return rgb
        # SS_IsRGB
        SS_IsShow_str=request.form.get('SS_IsShow')
        SS_IsShow = SS_IsShow_str.lower() == 'true'

        SS_IsRGB_str = request.form.get('SS_IsRGB')  # Get the 'IsRGB' parameter as a string
        SS_IsRGB = SS_IsRGB_str.lower() == 'true'

        SS_IsActicate_str=request.form.get('SS_IsActivate') # type boolean[]
        SS_IsActicate_list = SS_IsActicate_str.split(',')
        #SS_IsActicate_list = [bool(item) for item in SS_IsActicate_list]
        SS_IsActicate=[]
        SS_False=[]
        for i in SS_IsActicate_list:
            SS_False.append(False)
            if 'rue' in i:
                SS_IsActicate.append(True) 
            else:
                SS_IsActicate.append(False) 
        if SS_IsShow==False:
            SS_IsActicate=SS_False

        
        # SS_Affine
        # https://youtu.be/Ad9e5eoHm9U?si=rlnmPMVsNRuB5QPt
        SS_Affine_str=request.form.get('SS_Affine')
        SS_Affine_list=SS_Affine_str.split(',')
        SS_Affine=np.array(SS_Affine_list).astype(float)
        SS_Affine=SS_Affine.reshape((2,3,2))

        SS_AffineBOOL_str=request.form.get('SS_AffineBOOL')
        SS_AffineBOOL_list=SS_AffineBOOL_str.split(',')
        SS_AffineBOOL=[]
        for i in SS_AffineBOOL_list:
            if 'rue' in i:
                SS_AffineBOOL.append(True)
            else:
                SS_AffineBOOL.append(False)
        SS_AffineBOOL=np.array(SS_AffineBOOL).reshape((2,-1))

        SS_AffineRGB_str=request.form.get('SS_AffineRGB')
        SS_AffineRGB_list=SS_AffineRGB_str.split(',')
        SS_AffineRGB=[]
        for i in SS_AffineRGB_list:
            SS_AffineRGB.append(hex_to_rgb_3Dvector(i))
        SS_AffineRGB=np.array(SS_AffineRGB).reshape((2,-1))
        Is_Affine=SS_IsActicate[2]

        # SS_Kernals
        # 5
        SS_Kernals_str = request.form.get('SS_Kernals')
        SS_Kernals_data = json.loads(SS_Kernals_str)
        SS_Kernals = [[item['Key'],item['Name'], item['Kernal'], item['Kernal_str'],item['Iterations'],item['IsActivate']] for item in SS_Kernals_data]
        SS_Kernals_Matrix=[]
        SS_Kernals_IsActive=[]
        SS_Kernals_Iterations=[]
        for i in SS_Kernals:
            SS_Kernals_Matrix.append(np.array(i[2]).reshape((-1,5)))
            SS_Kernals_IsActive.append(i[-1])
            SS_Kernals_Iterations.append(i[4])
            print(type(i[-1]))

        # SS_Thresholds
        SS_Thresholds_str=request.form.get('SS_Thresholds')
        SS_Thresholds_data = json.loads(SS_Thresholds_str)
        SS_Thresholds = [[item['PositionY'],item['ScalePosition'], item['IsDefault'], item['Gray']] for item in SS_Thresholds_data]
        SS_ScaleThresholds=[]
        for i in SS_Thresholds:
            SS_ScaleThresholds.append([i[1],i[2],i[3]])
        SS_Thresholds=SS_ScaleThresholds
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
        
        # SS_AffOrigin
        SS_AffOrigin_str = request.form.get('SS_AffOrigin')
        SS_AffOrigin_Mode=SS_AffOrigin_str.split(',')[0]
        SS_AffOrigin_Color=SS_AffOrigin_str.split(',')[1]

        # SS_Aff
        SS_Aff_str=request.form.get('SS_Aff')
        SS_Aff_list=SS_Aff_str.split(',')
        SS_Aff = [float(item) for item in SS_Aff_list]
        SS_Aff_ScaleX=SS_Aff[0]
        SS_Aff_ScaleY=SS_Aff[1]
        SS_Aff_PositionX=SS_Aff[2]
        SS_Aff_PositionY=SS_Aff[3]
        SS_Aff_Rotation=SS_Aff[4]

        # SS_Boxes
        SS_Boxes_str = request.form.get('SS_Boxes')
        SS_Boxes_data = json.loads(SS_Boxes_str)
        SS_Boxes = [[item['Key'],item['XYWH'], item['Type'], item['IsShow']] for item in SS_Boxes_data]
        SS_Boxes_XYWH=[]
        SS_Boxes_IsShow=[]
        SS_Boxes_Type=[]
        SS_Boxes_Color=[]
        for i in SS_Boxes:
            SS_Boxes_XYWH.append(i[1])
            SS_Boxes_Type.append(i[2][0])
            SS_Boxes_Color.append(hex_to_rgb_3Dvector(i[2][1]))
            SS_Boxes_IsShow.append(i[3])

        # SS_ImageFile
        let_File=request.files['file']
        if let_File!=None:
            let_Img = cv2.imdecode(np.frombuffer(let_File.read(), np.uint8), cv2.IMREAD_COLOR)
            if SS_IsShow==True:
                let_Img=AffineScale(let_Img,SS_Aff_ScaleX,SS_Aff_ScaleY)
                let_Img=AffineMoveOrigin(let_Img,SS_Aff_PositionX,SS_Aff_PositionY)
                let_Img=AffineRotation(let_Img,SS_Aff_Rotation)
                let_Img=DrawingBoxes(let_Img,SS_Boxes_XYWH,SS_Boxes_Type,SS_Boxes_Color,SS_Boxes_IsShow)
            let_Img=DrawPointOrigin(
                let_Img,
                SS_AffOrigin_Mode,
                hex_to_rgb_3Dvector(SS_AffOrigin_Color),
                SS_Aff_PositionX,
                SS_Aff_PositionY
                )
            let_Img = DrawPoints(let_Img,SS_Affine[0],SS_AffineRGB[0],SS_AffineBOOL[0])
            if Is_Affine==True:
                let_Img=AffineTransformations(let_Img,SS_Affine)
            let_Img = DrawPoints(let_Img,SS_Affine[1],SS_AffineRGB[1],SS_AffineBOOL[1])
            if not SS_IsRGB:
                let_Img = cv2.cvtColor(let_Img, cv2.COLOR_BGR2GRAY)
                if SS_Kernals_IsActive[0]==True:
                    let_Img=cv2.filter2D(let_Img,-1,SS_Kernals_Matrix[0])
                if SS_Kernals_IsActive[1]==True:
                    let_Img=cv2.erode(let_Img,SS_Kernals_Matrix[1],SS_Kernals_Iterations[1])
                if SS_Kernals_IsActive[2]==True:
                    let_Img=cv2.dilate(let_Img,SS_Kernals_Matrix[1],SS_Kernals_Iterations[1])
                if SS_Kernals_IsActive[3]==True:
                    let_Img=cv2.filter2D(let_Img,-1,SS_Kernals_Matrix[3])
                if SS_Kernals_IsActive[4]==True:
                    let_Img=cv2.morphologyEx(let_Img, cv2.MORPH_OPEN, SS_Kernals_Matrix[4])
                if Is_Thresholds==True:
                    let_Img = WhiteBackGround(let_Img,list_Minn,list_Maxx,list_Gray,list_Bool)
            let_Bytes = cv2.imencode('.png', let_Img)[1].tobytes()
            response = Response(let_Bytes, content_type='image/png')
            return response 

        else:
            return jsonify({'error': 'No file uploaded'})

#****************************************************************************
# Running app
#****************************************************************************

if __name__ == '__main__':
    app.run(debug=True)
'''
# https://stackoverflow.com/questions/73309491/port-xxxx-is-in-use-by-another-program-either-identify-and-stop-that-program-o
# Type command in terminal
lsof -i :5000 
# Use the below command to kill PID(s)
kill -9 PID
'''

'''
python3 app.py
'''