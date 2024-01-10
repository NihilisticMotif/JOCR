import cv2
import pandas as pd
import numpy as np

########################################################################################
#   Image Processing Function
########################################################################################

def canny(image):
    # X
    return cv2.Canny(image, 100, 200)

def get_grayscale(image):
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)


#erosion
def erode(image):
    # X
    kernel = np.ones((5,5),np.uint8)
    return cv2.erode(image, kernel, iterations = 1)

#dilation
def dilate(image):
    # X
    kernel = np.ones((5,5),np.uint8)
    return cv2.dilate(image, kernel, iterations = 1)
    # https://www.geeksforgeeks.org/erosion-dilation-images-using-opencv-python/

#opening - erosion followed by dilation
def opening(image):
    # X
    kernel = np.ones((5,5),np.uint8)
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
    #print('Hii')
    #print(pts[0].shape)
    pts0 = np.float32(list(pts[0].reshape(-1))).reshape(3,2)
    pts1 = np.float32(list(pts[1].reshape(-1))).reshape(3,2)
    M = cv2.getAffineTransform(pts0,pts1)
    img = cv2.warpAffine(img, M, (cols, rows))
    return img

def DrawPoints(Img,Vector,Color,Bool):
    Color=255*Color.reshape((-1,3))
    Vector=Vector.reshape((-1,2))
    Bool=Bool.reshape((-1))
    for v,c,b in zip(Vector,Color,Bool):
        if b==True:
            #print("merry go 'round: ᴀ ᴊᴀᴘᴀɴᴇꜱᴇ ᴄɪᴛʏ ᴘᴏᴘ ᴘʟᴀʏʟɪꜱᴛ ꜰᴏʀ ᴀ ᴡᴀʟᴋ ᴛʜʀᴏᴜɢʜ ᴛʜᴇ ɴɪɢʜᴛ")
            #print(str((float(v[0]),float(v[1]))))
            #print('v',tuple(list(v)))
            #print(type(tuple(list(v))[0]))
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