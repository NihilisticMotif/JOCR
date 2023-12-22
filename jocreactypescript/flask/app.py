
from flask import Flask, jsonify, Response, request, redirect, url_for
import numpy as np
from PIL import Image
import cv2
from kernel import canny,get_grayscale,sharpen,erode,dilate,opening,ShowMustGoOn,WhiteBackGround

#from flask_cors import CORS 

app = Flask(__name__) 
#CORS(app) 

@app.route('/')
def home():
    return "<h1>Hello<h1>"
#****************************************************************************
# Useless
#****************************************************************************
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

@app.route('/def_TheGreatestShowMustGoOn')#,methods=['Get'])
def def_TheGreatestShowMustGoOn():
    # By ChatGPT
    path = '/Users/imac/Desktop/SoloOpenSourceProject/JOCR/jocreactypescript/flask/TheNowNow.png'
    original_img = cv2.imread(path)
    grayscale_img = get_grayscale(original_img)
    img_bytes = cv2.imencode('.png', grayscale_img)[1].tobytes()
    response = Response(img_bytes, content_type='image/png')
    return response

'''
def def_TheGreatestShowMustGoOn():
    path='/Users/imac/Desktop/SoloOpenSourceProject/JOCR/jocreactypescript/flask/TheNowNow.png'
    img = cv2.imread(path)
    with open(path, 'rb') as file:
        img = get_grayscale(file)
        img_bytes = img.read()
    #img = get_grayscale(img)
    #img = sharpen(img)
    #img = WhiteBackGround(img)
    ##img=img[1100:,:]#600:2000]   
    ## To convert from OpenCV image to PIL image use:
    ## https://stackoverflow.com/questions/43232813/convert-opencv-image-format-to-pil-image-format
    #img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    #img = Image.fromarray(img)
    # Convert the PIL image to bytes
    #img_bytes = img.tobytes()
#
    ## Set appropriate content type in response headers
    response = Response(img_bytes, content_type='image/png')
    return response'''
#****************************************************************************

@app.route('/def_OpenCV&<IsRGB>',methods = ['POST', 'GET'])
def def_OpenCV(IsRGB):
    # By ChatGPT
    #path = '/Users/imac/Desktop/SoloOpenSourceProject/JOCR/jocreactypescript/flask/TheNowNow.png'
    if request.method == 'POST':
        #print(request.files)
        let_File=request.files['file']
        #let_JSON=request.json['IsRGB']
        #IsRGB=request.files['IsRGB']
        if let_File:
            let_Img = cv2.imdecode(np.frombuffer(let_File.read(), np.uint8), cv2.IMREAD_COLOR)
            if IsRGB=='false':
                let_Img = get_grayscale(let_Img)
            let_Bytes = cv2.imencode('.png', let_Img)[1].tobytes()
            response = Response(let_Bytes, content_type='image/png')
            return response #jsonify({'py':response})
        else:
            return jsonify({'error': 'No file uploaded'})


#****************************************************************************
# Running app
#****************************************************************************

if __name__ == '__main__':
    app.run(debug=True)


'''
python3 hello02.py
'''