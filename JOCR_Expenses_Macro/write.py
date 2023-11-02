import pytesseract as ts
from PIL import Image
import cv2
import pandas as pd
import numpy as np

from kernel import canny,get_grayscale,sharpen,erode,dilate,opening,ShowMustGoOn,WhiteBackGround
from txt import pensil, eraser

path = [
    '/Users/imac/Desktop/SoloOpenSourceProject/JOCR/TestImage/Expenses_Macro/IMG_7553.jpeg',
    '/Users/imac/Desktop/SoloOpenSourceProject/JOCR/TestImage/Small/Small000.png',
    '/Users/imac/Desktop/SoloOpenSourceProject/JOCR/TestImage/Utility/LopburiMeme.png',
    '/Users/imac/Desktop/SoloOpenSourceProject/JOCR/TestImage/Expenses_Macro/IMG_7554.jpeg'
    ]

img = cv2.imread(path[0])
img = get_grayscale(img)
img = sharpen(img)
img = WhiteBackGround(img)
img=img[1100:,:]#600:2000]   
# To convert from OpenCV image to PIL image use:
# https://stackoverflow.com/questions/43232813/convert-opencv-image-format-to-pil-image-format
#img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
img = Image.fromarray(img)
img.show() 
# Convert Image to text using OCR
# https://stackoverflow.com/questions/64723694/permission-denied-when-reading-a-image-text-in-pytesseract
#img=Image.open(img)
txt=ts.image_to_string(img, lang='tha', 
                       config='--psm 6',
                       #config="--psm 13"
                       )
# lang='tha'
# lang='eng'
# lang='eng+tha'
    
txt=''.join(str(txt).split(' '))

#eraser('demo.txt')
pensil('demo02.txt',txt)

'''
python3 write.py
'''