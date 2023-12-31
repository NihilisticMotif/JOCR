import cv2
import matplotlib.colors as mcolors

'''
# Case 1
Data = "[[0,0],[0,1],[1,0],],[[0,0],[0,1],[1,0],]"
'''

# Case 2
Data = "0,0,0,1,1,0,0,0,0,1,1,0"

def hex_to_rgb_3Dvector(hex_color):
    rgba = mcolors.to_rgba(hex_color)
    rgb = rgba[:3]
    return rgb

ii='#000000'
print(hex_to_rgb_3Dvector(ii.replace('#','')))

'''
python3 clean.py
'''