import './index.css';
import React, { FC, ReactNode } from 'react';
import UI_TextArea from '../UI_TextArea';
import UI_ResettingInput from '../UI_ResettingInput';
import { Context_Main } from '../Context_Main';
import { useState,useEffect,useContext } from 'react';
import { TS_SS_File } from '../TS_SS_File/An_Index';
import TS_File from '../TS_File/An_Index';
const Page_Image = (
{
}
:{
})=>{
const{SS_File}=useContext(Context_Main)
const{setSS_File}=useContext(Context_Main)
const SelectKey=SS_File.SelectThisFile.index
let ThisFile=SS_File.AllFiles![SelectKey]
let JSX_Body=<></>
if(
    SS_File.AllFiles!==null
    &&SS_File.AllFiles!==undefined
    &&ThisFile
    &&ThisFile!==null
    &&ThisFile!==undefined
    ){

const[SS_Message,setSS_Message]=useState<string>(SS_File.AllFiles[SelectKey].Text.File!)
const[SS_FileName,setSS_FileName]=useState<string>(()=>{
if(ThisFile.Text.Name){
    return ThisFile.Text.Name!
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
            Name:ThisFile.Img.Name,
            EditedFile:ThisFile.Img.EditedFile,
            OriginFile:ThisFile.Img.OriginFile,
            Shape:ThisFile.Img.Shape
        },
        Text:{
            Name:SS_FileName,
            File:SS_Message
        },
        OpenSS:ThisFile.OpenSS,
        SS_OCR:ThisFile.SS_OCR,
        SS_ReadOCR:ThisFile.SS_ReadOCR,
        SS_EditImg:ThisFile.SS_EditImg
    })
    setSS_File({
        AllFiles:let_Update,
        SelectThisFile:SS_File.SelectThisFile,
        FolderName:SS_File.FolderName
    })
}
},[SS_FileName,SS_Message])

let SS_DefaultValue=''
if(SS_File.FolderName.Text){
    SS_DefaultValue=SS_File.FolderName.Text+SelectKey.toString()
}
else{
    SS_DefaultValue='UntitledText'+SelectKey.toString()
}
JSX_Body=<>
<UI_ResettingInput<string>
Name='Text File Name'
SS_Value={SS_FileName}
setSS_Value={setSS_FileName}
SS_DefaultValue={SS_DefaultValue}
/>
<UI_TextArea
SS_Message={SS_Message}
setSS_Message={setSS_Message}
/>
</>
}
return (
{JSX_Body}
)}

export default Page_Image