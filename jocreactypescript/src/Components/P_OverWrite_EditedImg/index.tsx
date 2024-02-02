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
const P_OverWrite_EditedImg = (
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

const[SS_OperateImg,setSS_OperateImg]=useState<boolean>(()=>{
if(This_File.SS_EditImg){
return This_File.SS_EditImg!.Operate
}
else{
    return false
}
})
const[SS_ColorMode,setSS_ColorMode]=useState<typeof const_color[number]>(()=>{
if(This_File.SS_EditImg){
return This_File.SS_EditImg!.Color
}
else{
    return Default_SS_EditImg.Color
}
})
const[SS_Rotate,setSS_Rotate]=useState<number>(()=>{
if(This_File.SS_EditImg){
return This_File.SS_EditImg!.Rotate
}
else{
    return 0
}
})

useEffect(()=>{
if(SS_File.AllFiles){
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
        OpenSS:This_File.OpenSS,
        SS_OCR:This_File.SS_OCR,
        SS_ReadOCR:This_File.SS_ReadOCR,
        SS_EditImg:{
            Operate:SS_OperateImg,
            Color:SS_ColorMode,
            Rotate:SS_Rotate
        }
    })
    setSS_File({
        AllFiles:let_Update,
        SelectThisFile:SS_File.SelectThisFile,
        FolderName:SS_File.FolderName
    })
}
},[
    SS_OperateImg,
    SS_ColorMode,
    SS_Rotate
])

let Default_SS_Rotate=0
if(This_File&&This_File.SS_ReadOCR&&This_File.SS_ReadOCR.Adjustment){
    Default_SS_Rotate=This_File.SS_ReadOCR.Adjustment
}

return <UI_DisplayFlex
JSX={[
<UI_Button
Name="Edit Image"
Function={()=>{setSS_OperateImg(true)}}
/>,
<UI_SearchOption
Name='Color Mode'
List={const_color}
SS_Option={SS_ColorMode}
setSS_Option={setSS_ColorMode}
IsSearch={false}
/>,
<UI_ResettingInput
Name={'Rotation: '+SS_Rotate.toString()}
setSS_Value={setSS_Rotate}
SS_Value={SS_Rotate}
SS_DefaultValue={Default_SS_Rotate}
/>
]}
Color='#FFFFFF'
/>
}

export default P_OverWrite_EditedImg