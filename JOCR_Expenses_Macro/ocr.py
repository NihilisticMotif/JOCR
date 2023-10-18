import pytesseract as ts
from PIL import Image
import cv2
import pandas as pd
import numpy as np

from kernel import canny,get_grayscale,sharpen,erode,dilate,opening,ShowMustGoOn 
from txt import pensil, eraser

paths = [
    '/Users/imac/Desktop/SoloOpenSourceProject/JOCR/TestImage/Expenses_Macro/IMG_7553.jpeg',
    '/Users/imac/Desktop/SoloOpenSourceProject/JOCR/TestImage/Expenses_Macro/IMG_7554.jpeg'
    ]
txts=[]
for path in paths:
    # Modify image
    img = cv2.imread(path)
    img = sharpen(img)
    #ShowMustGoOn(img)
    
    # To convert from OpenCV image to PIL image use:
    # https://stackoverflow.com/questions/43232813/convert-opencv-image-format-to-pil-image-format
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    img=Image.fromarray(img)

    # Convert Image to text using OCR
    # https://stackoverflow.com/questions/64723694/permission-denied-when-reading-a-image-text-in-pytesseract
    #img=Image.open(img)
    txt=ts.image_to_string(img, lang='eng+tha', config='--psm 6')
    # lang='tha'
    # lang='eng'
    # lang='eng+tha'
    
    txt=''.join(txt)
    txts.append(txt)

eraser('demo.txt')
pensil('demo.txt',txt)

'''
python3 ocr.py
'''