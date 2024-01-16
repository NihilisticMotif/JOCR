import re
import cv2 
import numpy as np
import pytesseract
from pytesseract import Output
from matplotlib import pyplot as plt
import pytesseract as ts

def DrawBoxAroundText(img,RGB,LineWidth):
    # https://github.com/NanoNets/ocr-with-tesseract/blob/master/tesseract-tutorial.ipynb
    BoxColor=(int(255*RGB[0]),int(255*RGB[1]),int(255*RGB[2]))
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

def PSM0(img):
    osd = pytesseract.image_to_osd(img)
    # UnboundLocalError: cannot access local variable 'OCR_Img' where it is not associated with a value
    #angle = re.search('(?<=Rotate: )\d+', osd).group(0)
    #script = re.search('(?<=Script: )\d+', osd).group(0)
    return osd

def Image2String(img,lang,psm):
    txt=ts.image_to_string(img, lang=lang, 
                       config='--oem 3 --psm '+psm+' -c min_characters_to_try=5',
                       )
    '''
TypeError: image_to_string() got an unexpected keyword argument 'dpi'
# How can I set dpi?
    '''
    return txt