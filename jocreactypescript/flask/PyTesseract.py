import re
import cv2 
import numpy as np
import pytesseract
from pytesseract import Output
from matplotlib import pyplot as plt
import pytesseract as ts

def DrawBoxAroundText(img,RGB,LineWidth):
    # https://github.com/NanoNets/ocr-with-tesseract/blob/master/tesseract-tutorial.ipynb
    BoxColor=(int(255*RGB[2]),int(255*RGB[1]),int(255*RGB[0]))
    h, w, c = img.shape
    boxes = pytesseract.image_to_boxes(img) 
    for b in boxes.splitlines():
        b = b.split(' ')
        img = cv2.rectangle(img, 
            (int(b[1]), h - int(b[2])), (int(b[3]), h - int(b[4])), 
            BoxColor, 
            LineWidth)
    #b,g,r = cv2.split(img)
    #rgb_img = cv2.merge([r,g,b])
    return img

def DrawBoxAroundTextGray(img,RGB,LineWidth):
    # https://github.com/NanoNets/ocr-with-tesseract/blob/master/tesseract-tutorial.ipynb
    BoxColor=int(255/3*(RGB[2]+RGB[1]+RGB[0]))#(int(255*RGB[2]),int(255*RGB[1]),int(255*RGB[0]))
    h, w = img.shape
    '''
        h, w, c = img.shape
ValueError: not enough values to unpack (expected 3, got 2)
    '''
    boxes = pytesseract.image_to_boxes(img) 
    for b in boxes.splitlines():
        b = b.split(' ')
        img = cv2.rectangle(img, 
            (int(b[1]), h - int(b[2])), (int(b[3]), h - int(b[4])), 
            BoxColor, 
            LineWidth)
    #b,g,r = cv2.split(img)
    #rgb_img = cv2.merge([r,g,b])
    return img


def Image2String(img,lang):
    txt=ts.image_to_string(img, lang=lang, 
                       config='--psm 6',
                       #config="--psm 13"
                       )
    return txt