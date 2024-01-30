import { useState,useEffect,useContext,createContext } from 'react';
import React, { FC, ReactNode } from 'react';

import TS_File from './TS_File/An_Index';
import { TS_SS_File } from './TS_UseState/TS_SS_File';
import { TS_SS_EditImg } from './TS_UseState/TS_SS_EditImg';
import { TS_SS_ShowImg } from './TS_UseState/TS_SS_ShowImg';
// import { TS_SS_ImageProcessing } from './TS_UseState/TS_SS_ImageProcessing';
import { TS_SS_OCR } from './TS_UseState/TS_SS_OCR';

import { Context_Main } from './Context_Main/context';

import Page_Tab from './Page_Tab';

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
const[SS_EditImg,setSS_EditImg]=useState<TS_SS_EditImg>({
    Operate:'None',
    Color:"Gray",
    Rotate:0
})
const[SS_ShowImg,setSS_ShowImg]=useState<TS_SS_ShowImg>({
    Zoom:0,
    OriginalImage:"Edited",
    Dimension:[0,0]
})
const[SS_OCR,setSS_OCR]=useState<TS_SS_OCR>({
SSOCR_Operate:   'None',
SSOCR_Languages: null,
const_LANGUAGE:  uLANGUAGE,
SSOCR_PSM:       uPSM[0] ,
const_PSM:       uPSM
})
const[SS_File,setSS_File]=useState<TS_SS_File>({
    AllFiles:null,
    ThisFile:null,
    ImageFolderName:null,
    TextFolderName:null
})
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

return(
<div>
<Context_Main.Provider
value={{
SS_File,         
setSS_File,      
SS_OCR,        
setSS_OCR,     
SS_ShowImg,    
setSS_ShowImg, 
SS_EditImg,    
setSS_EditImg,   
}}
>
<Page_Tab/>
<Page_Body/>
</Context_Main.Provider>
</div>
)
}

export default Component

//************************************************************************************
// REFERENCE
//************************************************************************************
// This Link is about useContext
// https://dev.to/madv/usecontext-with-typescript-23ln