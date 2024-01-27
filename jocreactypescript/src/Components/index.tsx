import './index.css';
import { useState,useEffect,useContext,createContext } from 'react';
import React, { FC, ReactNode } from 'react';

// This Link is about useContext
// https://dev.to/madv/usecontext-with-typescript-23ln

/**
ToDoNow
1. Page_...
2. Func... 
3. npm start and solve all error 
4. index.css
 */

const let_Context = createContext(null)

const Component = (
{
}
:{
})=>{
    const[Img_Color,setImg_Color]=useState<string>('Color')
    // Color
    // Black and White
    // Reverse
    const[Img_Rotate,setImg_Rotate]=useState<number>(0)
    // const[Image_,setImage_]=useState<null>() // for Page_ImageSettingEditor and Page_ImageSettingJSONFile
    const[ShowImg_Zoom,setShowImg_Zoom]=useState<number>(1)
    // const[ShowImg_Original,setShowImg_Original]=useState<string>('Edit')
    // Edited Image
    // Original Image
    // Black and White Original Image
    // Reverse
    const[Ocr_Language,setOcr_Language]=useState<string[][]>([
        ['tha','Thai'],
        ['eng','English'],
          ])
    const[Ocr_,setOcr_]=useState<null>()
    // const[OcrAi_,setOcrAi_]=useState<null>() // for additional Tesseract Settting
    const[Files_AllImages,setFiles_AllImages]=useState<null>()
    const[Files_ThisImages,setFiles_ThisImages]=useState<null>()
    const[Files_AllTxTs,setFiles_AllTxTs]=useState<string[]>([
        '',
        ''
    ])
    const[Files_ThisTxTs,FilesThisTxTs]=useState<[number,string]>([0,''])
    const[UI_OpenImageTool,setUI_OpenImageTool]=useState<boolean>(false)
    useEffect(()=>{
        //...
    },[])

    return (
    <let_Context.Provider
    value={[Img_Color,setImg_Color]}
    >

    </let_Context.Provider>
    )}

export default Component