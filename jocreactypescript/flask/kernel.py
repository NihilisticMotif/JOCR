import cv2
import pandas as pd
import numpy as np

########################################################################################
#   Image Processing Function
########################################################################################

def get_grayscale(image):
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

def canny(image):
    # X
    return cv2.Canny(image, 100, 200)

#erosion
def erode(image,kernel,iterations):
    #kernel = np.ones((5,5),np.uint8)
    # iterations = 1
    return cv2.erode(image, kernel,iterations=iterations)

#dilation
def dilate(image,kernel,iterations):
    # X
    #kernel = np.ones((5,5),np.uint8)
    return cv2.dilate(image, kernel, iterations = iterations)
    # https://www.geeksforgeeks.org/erosion-dilation-images-using-opencv-python/

#opening - erosion followed by dilation
def opening(image,kernel):
    return cv2.morphologyEx(image, cv2.MORPH_OPEN, kernel)

#White
def WhiteBackGround(img,Minn,Maxx,Gray,Bool):
    if Minn!=[]:
        for minn,maxx,gray,bool in zip(Minn,Maxx,Gray,Bool):
            mark=np.logical_and(img>minn,img<maxx)
            if bool:
                img[mark]=gray
        return img
        #try:
        #    img[img>=Maxx[-1]]=255
        #    return img
        #except:
        #    return img
    else:
        return img

def AffineTransformations(img,pts):
    # https://youtu.be/Ad9e5eoHm9U?si=RQMj8ASrsi1-Xov-
    # https://www.geeksforgeeks.org/python-opencv-affine-transformation/
    rows, cols, ch = img.shape
    pts0 = np.float32(list(pts[0].reshape(-1))).reshape(3,2)
    pts1 = np.float32(list(pts[1].reshape(-1))).reshape(3,2)
    M = cv2.getAffineTransform(pts0,pts1)
    img = cv2.warpAffine(img, M, (cols, rows))
    return img

def AffineScale(Img,ScaleX,ScaleY):
    rows, cols, ch = Img.shape
    M=np.array([[ScaleX,0,0],
                [0,ScaleY,0]])
    Img=cv2.warpAffine(Img,M,(cols,rows))
    return Img

def AffineRotation(Img,Rotation):
    # https://articulatedrobotics.xyz/5-transformation_matrices/
    # https://www.geeksforgeeks.org/python-opencv-getrotationmatrix2d-function/
    height, width = Img.shape[:2] 
    M = cv2.getRotationMatrix2D(
        center=(width/2, height/2), 
        angle=Rotation, 
        scale=1
        )
    Img=cv2.warpAffine(src=Img, M=M, dsize=(width, height))
    return Img

def AffineMoveOrigin(Img,PositionX,PositionY):
    rows, cols, ch = Img.shape
    M=np.array([[1,0,PositionX],
                [0,1,PositionY]])
    Img=cv2.warpAffine(Img,M,(cols,rows))
    return Img

def DrawPoints(Img,Vector,Color,Bool):
    Color=255*Color.reshape((-1,3))
    Vector=Vector.reshape((-1,2))
    Bool=Bool.reshape((-1))
    for v,c,b in zip(Vector,Color,Bool):
        if b==True:
            Img=cv2.circle(
                img=Img,
                center=(int(v[0]),int(v[1])),
                radius=22,
                color=(int(c[2]),int(c[1]),int(c[0])),
                thickness=-1)
            
            Img=cv2.circle(
                img=Img,
                center=(int(v[0]),int(v[1])),
                radius=22,
                color=(255,255,255),
                thickness=3)
    return Img

def DrawPointOrigin(Img,Mode,RGB,PositionX,PositionY):
    RGB=(int(255*RGB[2]),int(255*RGB[1]),int(255*RGB[0]))
    if Mode=='NoOrigin':
        return Img
    if Mode=='CenterOrigin':
        height, width, _ = Img.shape
        CenterOrigin=(int(width/2)+int(PositionX),int(height/2)+int(PositionY))
        Img=cv2.circle(
            img=Img,
            center=CenterOrigin,
            radius=22,
            color=RGB,
            thickness=-1)
        Img=cv2.circle(
            img=Img,
            center=CenterOrigin,
            radius=22,
            color=(255,255,255),
            thickness=3)
        return Img
    if Mode=='TopLeftOrigin':
        Img=cv2.circle(
            img=Img,
            center=(0,0),
            radius=22,
            color=RGB,
            thickness=-1)
        Img=cv2.circle(
            img=Img,
            center=(0,0),
            radius=22,
            color=(255,255,255),
            thickness=3)
        return Img

def DrawingBoxes(Img,XYWH,Type,Color,IsShow):
    height, width, _ = Img.shape
    # https://www.geeksforgeeks.org/python-opencv-cv2-rectangle-method/
    for xy,t,c,i in zip(XYWH,Type,Color,IsShow):
        B=int(255*c[2])
        G=int(255*c[1])
        R=int(255*c[0])
        RGB=(B,G,R)
        lineWidth=1
        if i==True:
            if t=='Rectangle':
                if int(xy[4])>0:
                    lineWidth=int(xy[4])
                Img = cv2.rectangle(
                    Img, 
                    (int(xy[0]),int(xy[1])), 
                    (int(xy[0])+int(xy[2]),int(xy[1])+int(xy[3])), 
                    RGB, 
                    -1
                    ) 
                Img = cv2.rectangle(
                    Img, 
                    (int(xy[0]),int(xy[1])), 
                    (int(xy[0])+int(xy[2]),int(xy[1])+int(xy[3])), 
                    (255,255,255), 
                    lineWidth
                    ) 
            if t=='Frame':
                if int(xy[4])>0:
                    lineWidth=int(xy[4])
                Img = cv2.rectangle(
                    Img, 
                    (int(xy[0]),int(xy[1])), 
                    (int(xy[0])+int(xy[2]),int(xy[1])+int(xy[3])), 
                    RGB, 
                    lineWidth
                    ) 
            if t=='Line':
                if int(xy[4])>0:
                    lineWidth=int(xy[4])
                Img = cv2.line(
                    Img, 
                    (int(xy[0]),int(xy[1])), 
                    (int(xy[2]),int(xy[3])), 
                    RGB, 
                    lineWidth
                    ) 
            if t=='LineX':
                if int(xy[1])>0:
                    lineWidth=int(xy[1])
                Img = cv2.line(
                    Img, 
                    (0,int(xy[0])), 
                    (width,int(xy[0])), 
                    RGB, 
                    lineWidth
                    ) 
            if t=='LineY':
                if int(xy[1])>0:
                    lineWidth=int(xy[1])
                Img = cv2.line(
                    Img, 
                    (int(xy[0]),0), 
                    (int(xy[0]),height), 
                    RGB, 
                    lineWidth
                    ) 
            if t=='Crop':
                Img=Img[
                    int(xy[1]):int(xy[1])+int(xy[3]),
                    int(xy[0]):int(xy[0])+int(xy[2])
                    ]
    return Img
'''
value="Rectangle">
value="Frame">Fram
value="Line">Line<
value="LineX">Hori
value="LineY">Vert
'''    
########################################################################################
#   Display the Image
########################################################################################



'''
path='/Users/imac/Desktop/SoloOpenSourceProject/JOCR/TestImage/Expenses_Macro/IMG_7553.jpeg'
img = cv2.imread(path)
img = get_grayscale(img)
#print(type(img))
#print(img.shape)
#img = erode(img)
img = sharpen(img)
#img = dilate(img)
ShowMustGoOn(img)
'''

'''
python3 kernel.py
'''