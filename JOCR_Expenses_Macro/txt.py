def pensil(note,txt):
    f = open(note, "w",encoding="utf-8")
    f.write(''.join(txt))
    f.close()

def eraser(note):
    f = open(note,'w')
    f.close()
    # https://www.pythonforbeginners.com/basics/how-to-clear-a-text-file-in-python
'''
python3 txt.py
'''