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
    return osd


def NoTextExcept(input_str, letter_to_keep):
    TextList=[]
    for i in letter_to_keep:
        TextList.append(i.lower())
    result = ''
    for char in input_str:
        if char.isalpha() and char.lower() not in TextList:
            continue
        result += char
    return result

def Image2String(img,
                 lang,
                 psm,
                 WhiteList,
                 BlackList,
                 ):
    # https://youtu.be/v0HL-sAevaQ?si=mkM8vNGItpIrB6nJ
    WhiteLS = ''
    if WhiteList.strip() != '':
        WhiteLS = '-c tessedit_char_whitelist=' + WhiteList.strip()

    BlackLS = ''
    if BlackList.strip() != '':
        BlackLS = '-c tessedit_char_blacklist=' + BlackList.strip()
    
    TargetList='-c tessedit_char_blacklist=0123456789' #WhiteLS+' '+BlackLS
    txt=ts.image_to_string(img, lang=lang, 
                           # +' -c min_characters_to_try=5'
                       config=' --psm '+psm+'--oem 3 ',#+TargetList,
                       )
    print('Tesseract is Working in the 4D World')
    print(txt)
    return txt
'''
    raise TesseractError(proc.returncode, get_errors(error_string))
pytesseract.pytesseract.TesseractError: (1, "read_params_file: Can't open = read_params_file: Can't open 0123456789 read_params_file: Can't open -c read_params_file: Can't open tessedit_char_blacklist read_params_file: Can't open = read_params_file: Can't open 3 read_params_file: Can't open --psm read_params_file: Can't open = read_params_file: Can't open 0123456789 read_params_file: Can't open -c read_params_file: Can't open tessedit_char_blacklist read_params_file: Can't open = read_params_file: Can't open 3 read_params_file: Can't open --psm Missing = in configvar assignment")
'''