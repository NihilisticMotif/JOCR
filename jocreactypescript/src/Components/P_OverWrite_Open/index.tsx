import './index.css';
import React, { FC, ReactNode } from 'react';
import { Context_Main } from '../Context_Main';
import { useState,useEffect,useContext } from 'react';

import UI_SearchOption from '../UI_SearchOption';
import UI_DisplayFlex from '../UI_DisplayFlex';
import UI_Button from '../UI_Button';
import UI_ResettingInput from '../UI_ResettingInput';
import UI_Title from '../UI_Title';
import UI_Activate from '../UI_Activate';
import { const_color } from '../TS_SS_EditImg/const_color';
import { uPSM } from '../utility/uPSM';
import { uLANGUAGE } from '../utility/uLANGUAGE';

import { Default_SS_EditImg } from '../TS_SS_EditImg/default';
import { Default_SS_OCR } from '../TS_SS_OCR/default';
import { Default_SS_ReadOCR } from '../TS_SS_ReadOCR/default';

import { TS_SS_OCR } from '../TS_SS_OCR/An_Index';
import { TS_SS_EditImg } from '../TS_SS_EditImg/An_Index';
import { TS_SS_ReadOCR } from '../TS_SS_ReadOCR/An_Index';
import TS_File from '../TS_File/An_Index';
const P_OverWrite_Open = (
{
This_File,
SelectKey
}
:{
This_File:TS_File
SelectKey:number
})=>{
//***************************************************************************************************************************************
// HOOK
//***************************************************************************************************************************************
const{SS_File}=useContext(Context_Main)
const{setSS_File}=useContext(Context_Main)
const [SS_EditImg,setSS_EditImg ] = useState<TS_SS_EditImg>(()=>{
if(This_File.SS_EditImg){
return This_File.SS_EditImg!
}
else{
    return Default_SS_EditImg
}
})
const [SS_OCR,setSS_OCR ] = useState<TS_SS_OCR>(()=>{
if(This_File.SS_OCR){
return This_File.SS_OCR!
}
else{
    return Default_SS_OCR
}
})
const [SS_ReadOCR,setSS_ReadOCR ] = useState<TS_SS_ReadOCR>(()=>{
if(This_File.SS_ReadOCR){
return This_File.SS_ReadOCR!
}
else{
    return Default_SS_ReadOCR
}
})

const [SS_OpenSS ,setSS_OpenSS  ] = useState<boolean>(This_File.OpenSS)

useEffect(()=>{
if(SS_File.AllFiles && SS_OpenSS===true){
    let let_Update=[...SS_File.AllFiles]
    let_Update.splice(SelectKey,1,{
        Key:SelectKey,
        Img:{
            Name:This_File.Img.Name,
            EditedFile:This_File.Img.EditedFile,
            OriginFile:This_File.Img.OriginFile,
            Shape:This_File.Img.Shape
        },
        Text:{
            Name:This_File.Text.Name,
            File:This_File.Text.File
        },
        OpenSS:SS_OpenSS,
        SS_OCR:    SS_OCR,
        SS_ReadOCR:SS_ReadOCR,
        SS_EditImg:SS_EditImg
    })
    setSS_File({
        AllFiles:let_Update,
        SelectThisFile:SS_File.SelectThisFile,
        FolderName:SS_File.FolderName
    })
}
else if(SS_File.AllFiles && SS_OpenSS===false){
    let let_Update=[...SS_File.AllFiles]
    let_Update.splice(SelectKey,1,{
        Key:SelectKey,
        Img:{
            Name:This_File.Img.Name,
            EditedFile:This_File.Img.EditedFile,
            OriginFile:This_File.Img.OriginFile,
            Shape:This_File.Img.Shape
        },
        Text:{
            Name:This_File.Text.Name,
            File:This_File.Text.File
        },
        OpenSS:SS_OpenSS,
        SS_OCR:null,
        SS_ReadOCR:null,
        SS_EditImg:null
    })
    setSS_File({
        AllFiles:let_Update,
        SelectThisFile:SS_File.SelectThisFile,
        FolderName:SS_File.FolderName
    })
}
},[SS_OpenSS])

return <UI_Activate
Name='Open OCR Setting'
IsActivate={SS_OpenSS}
setIsActivate={setSS_OpenSS}
/>
}

export default P_OverWrite_Open