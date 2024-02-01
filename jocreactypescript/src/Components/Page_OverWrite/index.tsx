import './index.css';
import React, { FC, ReactNode } from 'react';
import { Context_Main } from '../Context_Main';
import { useState,useEffect,useContext } from 'react';

import { SSFile_NameFolder } from '../TS_SS_File/SSFile_NameFolder';
import UI_SearchOption from '../UI_SearchOption';
import UI_DisplayFlex from '../UI_DisplayFlex';
import UI_Button from '../UI_Button';
import UI_ResettingInput from '../UI_ResettingInput';
import UI_Title from '../UI_Title';
import UI_Activate from '../UI_Activate';
import { const_color } from '../TS_SS_EditImg/const_color';
import { uPSM } from '../utility/uPSM';
import { uLANGUAGE } from '../utility/uLANGUAGE';
import { const_ShowColor } from '../TS_SS_ShowImg/const_showcolor';

import { TS_SS_OCR } from '../TS_SS_OCR/An_Index';
import { TS_SS_File } from '../TS_SS_File/An_Index';
import TS_File from '../TS_File/An_Index';
import { TS_SS_EditImg } from '../TS_SS_EditImg/An_Index';
import { TS_SS_ShowImg } from '../TS_SS_ShowImg/An_Index';
import { TS_SS_ReadOCR } from '../TS_SS_ReadOCR/An_Index';

import { Default_SS_EditImg } from '../TS_SS_EditImg/default';
import { Default_SS_OCR } from '../TS_SS_OCR/default';
import { Default_SS_ReadOCR } from '../TS_SS_ReadOCR/default';
const Page_OverWrite = (
{
}
:{
})=>{
//***************************************************************************************************************************************
// HOOK
//***************************************************************************************************************************************
const{SS_File}=useContext(Context_Main)
const{setSS_File}=useContext(Context_Main)
const SelectKey=SS_File.SelectThisFile.index
const [SS_EditImg,setSS_EditImg ] = useState(SS_File.AllFiles![SelectKey].SS_EditImg)
const [SS_OCR    ,setSS_OCR     ] = useState(SS_File.AllFiles![SelectKey].SS_OCR)
const [SS_ReadOCR,setSS_ReadOCR ] = useState(SS_File.AllFiles![SelectKey].SS_ReadOCR)
const [SS_OpenSS ,setSS_OpenSS  ] = useState(SS_File.AllFiles![SelectKey].OpenSS)

let ThisFile=SS_File.AllFiles![SelectKey]
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
            Name:ThisFile.Text.Name,
            File:ThisFile.Text.File
        },
        OpenSS:ThisFile.OpenSS,
        SS_OCR:SS_OCR,
        SS_ReadOCR:SS_ReadOCR,
        SS_EditImg:SS_EditImg
    })
    setSS_File({
        AllFiles:let_Update,
        SelectThisFile:SS_File.SelectThisFile,
        FolderName:SS_File.FolderName
    })
}
},[
    SS_EditImg,
    SS_OCR    ,
    SS_ReadOCR,
])

useEffect(()=>{
if(SS_File.AllFiles && SS_OpenSS===true){
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
            Name:ThisFile.Text.Name,
            File:ThisFile.Text.File
        },
        OpenSS:SS_OpenSS,
        SS_OCR:    Default_SS_OCR    ,
        SS_ReadOCR:Default_SS_ReadOCR,
        SS_EditImg:Default_SS_EditImg
    })
    setSS_File({
        AllFiles:let_Update,
        SelectThisFile:SS_File.SelectThisFile,
        FolderName:SS_File.FolderName
    })
setSS_EditImg(Default_SS_EditImg)
setSS_OCR(Default_SS_OCR)
setSS_ReadOCR(Default_SS_ReadOCR)
}
else if(SS_File.AllFiles && SS_OpenSS===false){
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
            Name:ThisFile.Text.Name,
            File:ThisFile.Text.File
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
setSS_EditImg(null)
setSS_OCR(null)
setSS_ReadOCR(null)
}
},[SS_OpenSS])

let JSX_OpenOverWrite=<UI_Activate
Name='Open OCR Setting'
IsActivate={SS_OpenSS}
setIsActivate={setSS_OpenSS}
/>
let JSX_OverWriteTool=<></>
if(
    SS_File.AllFiles!==null 
    && SS_File.AllFiles!== undefined 
    && SS_File.AllFiles[SelectKey]!==null 
    &&SS_File.AllFiles[SelectKey]!==undefined
    && SS_EditImg
    && SS_OCR 
    && SS_ReadOCR 
    && SS_OpenSS){

// SS_EditImg
const[SS_EditImgActivate,setSS_EditImgActivate]=useState<boolean>(SS_EditImg.Operate)
const[SS_ColorMode,setSS_ColorMode]=useState<typeof const_color[number]>(SS_EditImg.Color)
const[SS_Rotate,setSS_Rotate]=useState<number>(SS_EditImg.Rotate)

// SS_OCR
const[SS_OCRActivate,setSS_OCRActivate]=useState<boolean>(SS_OCR.Operate)
const[SS_PSM,setSS_PSM]=useState<typeof uPSM[number]>(SS_OCR.PSM)
const[SS_Languages,setSS_Languages]=useState<typeof uLANGUAGE[number][]|null>(SS_OCR.Languages)
const[SS_SelectLanguage,setSS_SelectLanguage]=useState<typeof uLANGUAGE[number]|''>(uLANGUAGE[0])
const[eSS_ReadOCR,seteSS_ReadOCR]=useState<boolean>(SS_ReadOCR.Operate)

useEffect(()=>{
    setSS_EditImg({
        Operate:SS_EditImgActivate,
        Color:SS_ColorMode,
        Rotate:SS_Rotate
    })
    setSS_OCR({
        Operate:SS_OCRActivate,
        PSM:SS_PSM,
        Languages:SS_Languages
    })
    setSS_ReadOCR({
        Operate:   eSS_ReadOCR,
        Script:    SS_ReadOCR.Script,
        SAccurate: SS_ReadOCR.SAccurate,
        Rotation:  SS_ReadOCR.Rotation,
        Detected:  SS_ReadOCR.Detected,
        Adjustment:SS_ReadOCR.Adjustment,
        RAccurate: SS_ReadOCR.RAccurate
    })
},[
    // EditImg
    SS_EditImgActivate,
    SS_ColorMode,
    SS_Rotate,
    // OCR
    SS_OCRActivate,
    SS_PSM,
    SS_Languages,
    // ReadOCR
    eSS_ReadOCR
])

let JSX_EditImg=<UI_DisplayFlex
JSX={[
<UI_Button
Name="Edit Image"
Function={()=>{setSS_EditImgActivate(true)}}
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
SS_DefaultValue={0}
/>
]}
Color='#FFFFFF'
/>

let JSX_OCR =<UI_DisplayFlex
JSX={[
// <UI_Button
// Name="Operate OCR"
// Function={()=>{setSS_OCRActivate(true)}}
// />,
<UI_SearchOption
Name="Detect Image as "
List={uPSM}
SS_Option={SS_PSM}
setSS_Option={setSS_PSM}
IsSearch={false}
/>,
<div>
<UI_SearchOption
Name={'Language'}
List={uLANGUAGE}
SS_Option={SS_SelectLanguage}
setSS_Option={setSS_SelectLanguage}
IsSearch={true}
/>
<UI_Button
Name="Operate OCR"
Function={()=>{
    if(SS_Languages){
    let cSS_Language=[...SS_Languages]
    let let_Update=[SS_SelectLanguage,...cSS_Language]
    setSS_Languages(let_Update)
    }
    else{
    console.log(SS_SelectLanguage)
    setSS_Languages([SS_SelectLanguage])
    }
}}
/>
{SS_OCR.Languages?.map((i,index)=>
<div>
<h1>{i}</h1>
<UI_Button
Name="x"
Function={()=>{
    if(SS_Languages){
    let cSS_Language=[...SS_Languages]
    cSS_Language.splice(index,1)
    setSS_Languages(cSS_Language)
    }
}}
/>
</div>
)}
</div>
]}
Color='#FFFFFF'
/>
let JSX_ReadOCR=<div>
<UI_Title
Name='Analyze Image'/>
<UI_Button
Name='Operate'
Function={()=>{seteSS_ReadOCR(true)}}
/>
<UI_Title Name="Script"/>
<UI_Title Name={"Script:"+SS_ReadOCR.Script}/>
<UI_Title Name={'Script Accuracy:'+SS_ReadOCR.SAccurate?.toString()}/>
<UI_Title Name='Rotation'/>
<UI_Title Name={'Rotate:'+SS_ReadOCR.Rotation?.toString()}/>
<UI_Title Name={'Detected:'+SS_ReadOCR.Detected?.toString()}/>
<UI_Title Name={'Adjustment:'+SS_ReadOCR.Adjustment?.toString()}/>
<UI_Title Name={'Rotate Accuracy:'+SS_ReadOCR.RAccurate?.toString()}/>
<UI_Title Name="Higher accuracy is better."/>
</div>

JSX_OverWriteTool=<>
{JSX_EditImg}
{JSX_OCR}
{JSX_ReadOCR}
</>
}
return(<UI_DisplayFlex
JSX={[
    JSX_OpenOverWrite,
    JSX_OverWriteTool
]}
Color="#FFFFFF"
/>)
}

export default Page_OverWrite