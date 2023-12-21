from PIL import Image
import cv2
from kernel import canny,get_grayscale,sharpen,erode,dilate,opening,ShowMustGoOn,WhiteBackGround

def f_Image(path):
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