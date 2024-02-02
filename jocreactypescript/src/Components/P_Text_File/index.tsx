import './index.css';
import React, { FC, ReactNode } from 'react';
import UI_TextArea from '../UI_TextArea';
import UI_ResettingInput from '../UI_ResettingInput';
import { Context_Main } from '../Context_Main';
import { useState,useEffect,useContext } from 'react';
import UI_Button from '../UI_Button';
import TS_File from '../TS_File/An_Index';
const P_Text_File = (
{
This_File,
SelectKey
}
:{
This_File:TS_File
SelectKey:number
})=>{
const{SS_File}=useContext(Context_Main)
const{setSS_File}=useContext(Context_Main)
const[SS_FileName,setSS_FileName]=useState<string>(()=>{
if(This_File.Text.Name){
    return This_File.Text.Name!
}
else{
    if(SS_File.FolderName.Text){
        return SS_File.FolderName.Text+SelectKey.toString()
    }else{
        return 'UntitledText'+SelectKey.toString()
    }
}})
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
            Name:SS_FileName,
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

return <>
<UI_ResettingInput<string>
Name='Text File Name'
SS_Value={SS_FileName}
setSS_Value={setSS_FileName}
SS_DefaultValue={
SS_File.FolderName.Text
  ? SS_File.FolderName.Text + SelectKey.toString()
  : 'UntitledText' + SelectKey.toString()
}
/>

<UI_Button
Name='Export Text File'
Function={()=>{alert('Export Text File')}}
/>
</>}

export default P_Text_File