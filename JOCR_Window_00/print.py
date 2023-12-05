import pytesseract as ts
from PIL import Image
import cv2
import pandas as pd
import numpy as np

from kernel import canny,get_grayscale,sharpen,erode,dilate,opening,ShowMustGoOn,WhiteBackGround
#from txt import pensil, eraser

# https://stackoverflow.com/questions/37400974/error-unicode-error-unicodeescape-codec-cant-decode-bytes-in-position-2-3
path='C:\\Users\\Admin\\Documents\\GitHub\\JOCR\\TestImage_00\\Expenses_Macro\\IMG_7553.jpeg'

img = cv2.imread(path)
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

print(txt)
#txt=''.join(str(txt).split(' '))
#eraser('demo.txt')
#pensil('demo.txt',txt)

'''
python print.py
'''