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

def sharpen(image):
    k2=-0.1
    k1=-5
    k0=-(k2*16+k1*8)+1
    kernel = np.array([
        [k2,k2,k2,k2,k2,], 
        [k2,k1,k1,k1,k2,], 
        [k2,k1,k0,k1,k2,], 
        [k2,k1,k1,k1,k2,], 
        [k2,k2,k2,k2,k2,]
        ])
    # https://youtu.be/KuXjwB4LzSA?si=mt-leKGKjpMnJGfg
    # https://www.geeksforgeeks.org/python-opencv-filter2d-function/
    return cv2.filter2D(image, -1, kernel)

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
    if len(Minn)>=1:
        for minn,maxx,gray,bool in zip(Minn,Maxx,Gray,Bool):
            mark=np.logical_and(img>minn,img<maxx)
            if bool:
                img[mark]=gray
        try:
            img[img>=Maxx[-1]]=255
            return img
        except:
            return img
    else:
        return img

def AffineTransformations(img):
    # https://youtu.be/Ad9e5eoHm9U?si=RQMj8ASrsi1-Xov-
    # https://www.geeksforgeeks.org/python-opencv-affine-transformation/
    rows, cols, ch = img.shape
    pts1 = np.float32([[50, 50],
                   [200, 50], 
                   [50, 200]])
 
    pts2 = np.float32([[10, 100],
                       [200, 50], 
                       [100, 250]])
    
    M = cv2.getAffineTransform(pts1, pts2)
    dst = cv2.warpAffine(img, M, (cols, rows))
    return dst

########################################################################################
#   Display the Image
########################################################################################

def ShowMustGoOn(img):
    cv2.imshow("image", img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

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