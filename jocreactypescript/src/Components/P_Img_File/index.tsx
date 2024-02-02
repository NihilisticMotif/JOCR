import './index.css';
import React, { FC, ReactNode } from 'react';

import UI_ResettingInput from '../UI_ResettingInput';
import UI_Button from '../UI_Button';
import { Context_Main } from '../Context_Main';
import { useState,useEffect,useContext } from 'react';
import UI_DisplayFlex from '../UI_DisplayFlex';
import { TS_SS_File } from '../TS_SS_File/An_Index';
import TS_File from '../TS_File/An_Index';
const P_Img_File = (
{
This_File,
SelectKey
}
:{
This_File:TS_File,
SelectKey:number
})=>{
const{SS_File}=useContext(Context_Main)
const{setSS_File}=useContext(Context_Main)
const[SS_FileName,setSS_FileName]=useState<string>(()=>{
if(This_File.Img.Name){
    return This_File.Img.Name!
}
else{
    if(SS_File.FolderName.Img){
        return SS_File.FolderName.Img+SelectKey.toString()
    }else{
        return 'UntitledImg'+SelectKey.toString()
    }
}})

useEffect(()=>{
if(SS_File.AllFiles){
    let let_Update=[...SS_File.AllFiles]
    let_Update.splice(SelectKey,1,{
        Key:SelectKey,
        Img:{
            Name:SS_FileName,
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
        SS_EditImg:This_File.SS_EditImg
    })
    setSS_File({
        AllFiles:let_Update,
        SelectThisFile:SS_File.SelectThisFile,
        FolderName:SS_File.FolderName
    })
}
},[SS_FileName])


let SS_DefaultValue=''
if(SS_File.FolderName.Img){
    SS_DefaultValue=SS_File.FolderName.Img+SelectKey.toString()
}
else{
    SS_DefaultValue='UntitledImg'+SelectKey.toString()
}

return <UI_DisplayFlex
JSX={[
<UI_ResettingInput<string>
Name='Image File Name'
SS_Value={SS_FileName}
setSS_Value={setSS_FileName}
SS_DefaultValue={SS_DefaultValue}
/>,
<UI_Button
Name="Export Image File"
Function={()=>{alert('Export Image File')}}
/>
]}
Color='#FFFFFF'
/>
}

export default P_Img_File