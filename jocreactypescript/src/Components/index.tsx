import { useState,useEffect,useContext,createContext } from 'react';
import React, { FC, ReactNode } from 'react';

import TS_File from './TS_File/An_Index';
import { TS_SS_File } from './TS_SS_File/An_Index';
import { TS_SS_EditImg } from './TS_SS_EditImg/An_Index';
import { TS_SS_ShowImg } from './TS_SS_ShowImg/An_Index';
// import { TS_SS_ImageProcessing } from './TS_UseState/TS_SS_ImageProcessing';
import { TS_SS_OCR } from './TS_SS_OCR/An_Index';

import { Context_Main } from './Context_Main';

import './index.css';
import { uLANGUAGE } from "./utility/uLANGUAGE"
import { uPSM } from "./utility/uPSM"

import Page_Head        from './Page_Head';
import Page_Img         from './Page_Img';
import Page_OverWrite   from './Page_OverWrite';
import Page_Image       from './Page_Image';
import Page_Text        from './Page_Text';    
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
    Operate:false,
    Color:"Gray",
    Rotate:0
})
const[SS_ShowImg,setSS_ShowImg]=useState<TS_SS_ShowImg>({
    Zoom:1,
    OriginalImage:"EditedImage",
})
const[SS_OCR,setSS_OCR]=useState<TS_SS_OCR>({
Operate:   false,
Languages: null,
PSM:       uPSM[0] ,
})
const[SS_ThisEditImg,setSS_ThisEditImg]=useState<TS_SS_EditImg[]|null>(null)
const[SS_ThisOCR,setSS_ThisOCR]=useState<TS_SS_OCR[]|null>(null)

const[SS_File,setSS_File]=useState<TS_SS_File>({
    AllFiles:null,
    SelectThisFile:{
        index:0,
        mode:'Default'
    },
    FolderName:{
        Img:'',
        Text:''
    }
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

//************************************************************************************
// FUNCTION
//************************************************************************************
//************************************************************************************
// OUTPUT
//************************************************************************************
//...
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
SS_ThisOCR,
setSS_ThisOCR,
SS_ThisEditImg,
setSS_ThisEditImg
}}
>
<Page_Head       />
<Page_Img        />
<Page_OverWrite  />
<Page_Image      />
<Page_Text       />
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