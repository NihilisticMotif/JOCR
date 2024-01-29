import './index.css';
import { useState,useEffect,useContext,createContext } from 'react';
import React, { FC, ReactNode } from 'react';
import TS_Page from './TS_Page/An_Index';

// Contect_File
import { contect_Header } from './Contect_File/contect_Header';
import { contect_Image  } from './Contect_File/contect_Image';
import { contect_Text   } from './Contect_File/contect_Text';

// Contect_Img
import { contect_Img    } from './Contect_Img/contect_Img';
// import { contect_JSONImg} from './Contect_Img/contect_JSONImg';
// import { contect_Kernal  } from './Contect_Img/contect_Kernal';

// Contect_OCR
import { contect_OCR    } from './Contect_OCR/contect_OCR';
// import { contect_OCRAI  } from './Contect_OCR/contect_OCRAI';

// Contect_UI
import { contect_Page   } from './Contect_UI/contect_Page';
import Page_Header from './Page_Header';
// import { contect_ImageToolBar   } from './Contect_UI/contect_ImageToolBar';

//************************************************************************************
// TYPE
//************************************************************************************


export type GlobalUseState = {

}

const let_Context = createContext(null)


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
    // All Input Image Files
    const[SSFiles_AllOriginalImagesFiles    ,setSSFiles_AllOriginalImagesFiles  ]=useState<File[]|null>(null)
    const[SSFiles_AllEditedImagesFiles      ,setSSFiles_AllEditedImagesFiles    ]=useState<File[]|null>(null)
    const[SSFiles_AllImagesNames            ,setSSFiles_AllImagesNames          ]=useState<string[]|null>(null)
    // This Input Image File
    const[SSFiles_ThisOriginalImagesFiles   ,setSSFiles_ThisOriginalImagesFiles ]=useState<File[]|null>(null)
    const[SSFiles_ThisEditedImagesFiles     ,setSSFiles_ThisEditedImagesFiles   ]=useState<File[]|null>(null)
    const[SSFiles_ThisImagesNames           ,setSSFiles_ThisImagesNames         ]=useState<string[]|null>(null)
    // All Output Text Files

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
    return (
<div>
    <div>
        <Page_Header>
        </Page_Header>
    </div>
    <div>
        <div>
            <Page_SingleInput>
            </Page_SingleInput>
            <Page_SingleOutput>
            </Page_SingleOutput>
        </div> 
        <div></div>   
        <Page_ImageSettingEditor>
        </Page_ImageSettingEditor>
    </div>
</div>
    )}

export default Component

//************************************************************************************
// REFERENCE
//************************************************************************************
// This Link is about useContext
// https://dev.to/madv/usecontext-with-typescript-23ln