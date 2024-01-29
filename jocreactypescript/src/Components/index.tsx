import { useState,useEffect,useContext,createContext } from 'react';
import React, { FC, ReactNode } from 'react';

import TS_Page from './TS_Page/An_Index';

import { context_Header } from './Page_Header/context';
import Page_Header from './Page_Header';

import { context_Body } from './Page_Body/context';
import Page_Body from './Page_Body';

import './index.css';
import { uLANGUAGE } from "./utility/uLANGUAGE"
import { uPSM } from "./utility/uPSM"



//************************************************************************************
// INPUT
//************************************************************************************

const Component = (
{
}
:{
})=>{
//************************************************************************************
// USESTATE
//************************************************************************************
//-----------------------------------------------------------------------
// Test Set State
//-----------------------------------------------------------------------
// const[SS_Text,setSS_Text]=useState<string>('')
//-----------------------------------------------------------------------
// File
//-----------------------------------------------------------------------
/**
// Create shorter variable name like ChatGPT did.
const [allFiles, setAllFiles] = useState({
  originalImages: null,
  editedImages: null,
  allImagesNames: null,
  thisOriginalImages: null,
  thisEditedImages: null,
  thisImagesNames: null,
  allTextFiles: null,
  allTextNames: null,
  thisTextFile: null,
  thisTextName: null,
});
 */
// All Input Image Files
const[SSFiles_AllOriginalImagesFiles    ,setSSFiles_AllOriginalImagesFiles  ]=useState<File[]|null>(null)
const[SSFiles_AllEditedImagesFiles      ,setSSFiles_AllEditedImagesFiles    ]=useState<File[]|null>(null)
const[SSFiles_AllImagesNames            ,setSSFiles_AllImagesNames          ]=useState<string[]|null>(null)
// This Input Image File
const[SSFiles_ThisOriginalImagesFiles   ,setSSFiles_ThisOriginalImagesFiles ]=useState<File[]|null>(null)
const[SSFiles_ThisEditedImagesFiles     ,setSSFiles_ThisEditedImagesFiles   ]=useState<File[]|null>(null)
const[SSFiles_ThisImagesNames           ,setSSFiles_ThisImagesNames         ]=useState<string[]|null>(null)
// All Output Image Files
const[SSFiles_AllTextFiles              ,setSSFiles_AllTextFiles]=useState<string[]|null>(null)
const[SSFiles_AllTextNames              ,setSSFiles_AllTextNames]=useState<string[]|null>(null)
// This Output Image File
const[SSFiles_ThisTextFiles             ,setSSFiles_ThisTextFiles]=useState<string|null>(null)
const[SSFiles_ThisTextName              ,setSSFiles_ThisTextName]=useState<string|null>(null)
//-----------------------------------------------------------------------
// Img
//-----------------------------------------------------------------------
// 1. SSImg = Editing Image
const[SSImg_Operate     ,setSSImg_Operate]=useState<'This'|'All'|'None'>('None')
const[SSImg_Color       ,setSSImg_Color]=useState<"Color"|"Gray"|"ReverseGray">("Gray")
const[SSImg_Rotate      ,setSSImg_Rotate]=useState<number>(0)
// 2. SSShowImg = Display Image
const[SSShowImg_Zoom,setSSShowImg_Zoom]=useState<number>(1)
const[SSShowImg_OriginalImage,setSSShowImg_OriginalImage]=useState<"Original"|"Edited"|"Original_Gray"|"Original_Reverse">("Edited")
const[SSShowImg_Dimension,setSSShowImg_Dimension]=useState<[number,number]>([0,0])
//-----------------------------------------------------------------------
// OCR
//-----------------------------------------------------------------------
const[SSOCR_Operate     ,setSSOCR_Operate]=useState<'This'|'All'|'None'>('None')
const[SSOCR_Languages   ,setSSOCR_Languages]=useState<typeof uLANGUAGE[number][]|null>(null)
const[SSOCR_PSM,setSSOCR_PSM]=useState<typeof uPSM[number]>('Text (Default Option, PSM-3)')
//-----------------------------------------------------------------------
// UI
//-----------------------------------------------------------------------
const[SSUI_AllPages,setSSUI_AllPages]=useState<TS_Page[]|null>(null)
const[SSUI_ThisPage,setSSUI_ThisPage]=useState<TS_Page|null>(null)

//************************************************************************************
// USEEFFECT
//************************************************************************************
useEffect(()=>{
    //...
},[])
//************************************************************************************
// VARIABLE
//************************************************************************************
const const_LANGUAGE=uLANGUAGE
const const_PSM = uPSM
//************************************************************************************
// FUNCTION
//************************************************************************************
//************************************************************************************
// OUTPUT
//************************************************************************************
    return (
<div>
    <context_Header.Provider 
    value={{
        SSFiles_AllOriginalImagesFiles,
        setSSFiles_AllOriginalImagesFiles,
        SSFiles_AllEditedImagesFiles,
        setSSFiles_AllEditedImagesFiles,
        SSFiles_AllImagesNames,
        setSSFiles_AllImagesNames,
        SSFiles_AllTextFiles,
        setSSFiles_AllTextFiles,
        SSFiles_AllTextNames,
        setSSFiles_AllTextNames,
        SSImg_Operate,
        setSSImg_Operate,
        SSImg_Color,
        setSSImg_Color,
        SSImg_Rotate,
        setSSImg_Rotate,
        SSShowImg_Dimension,
        setSSShowImg_Dimension,
        SSShowImg_OriginalImage,
        setSSShowImg_OriginalImage,
        SSShowImg_Zoom,
        setSSShowImg_Zoom,
        SSOCR_Operate,
        setSSOCR_Operate,
        SSOCR_Languages,
        setSSOCR_Languages,
        const_LANGUAGE,
        SSOCR_PSM,
        setSSOCR_PSM,
        const_PSM,
        SSUI_AllPages,
        setSSUI_AllPages,
        SSUI_ThisPage,
        setSSUI_ThisPage
    }}>
        <Page_Header/>
    </context_Header.Provider>
    <context_Body.Provider 
    value={{
        SSFiles_AllOriginalImagesFiles,
        setSSFiles_AllOriginalImagesFiles,
        SSFiles_AllEditedImagesFiles,
        setSSFiles_AllEditedImagesFiles,
        SSFiles_AllImagesNames,
        setSSFiles_AllImagesNames,
        SSFiles_AllTextFiles,
        setSSFiles_AllTextFiles,
        SSFiles_AllTextNames,
        setSSFiles_AllTextNames,
        SSImg_Operate,
        setSSImg_Operate,
        SSImg_Color,
        setSSImg_Color,
        SSImg_Rotate,
        setSSImg_Rotate,
        SSShowImg_Dimension,
        setSSShowImg_Dimension,
        SSShowImg_OriginalImage,
        setSSShowImg_OriginalImage,
        SSShowImg_Zoom,
        setSSShowImg_Zoom,
        SSOCR_Operate,
        setSSOCR_Operate,
        SSOCR_Languages,
        setSSOCR_Languages,
        const_LANGUAGE,
        SSOCR_PSM,
        setSSOCR_PSM,
        const_PSM,
        SSUI_AllPages,
        setSSUI_AllPages,
        SSUI_ThisPage,
        setSSUI_ThisPage
    }}
    >
        <Page_Body/>
    </context_Body.Provider>
</div>
    )}

export default Component

//************************************************************************************
// REFERENCE
//************************************************************************************
// This Link is about useContext
// https://dev.to/madv/usecontext-with-typescript-23ln