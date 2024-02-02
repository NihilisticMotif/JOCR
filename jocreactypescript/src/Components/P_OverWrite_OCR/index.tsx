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
const P_OverWrite_OCR = (
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

// const [SS_OCR,setSS_OCR ] = useState<TS_SS_OCR>(()=>{
// if(This_File.SS_OCR){
// return This_File.SS_OCR!
// }
// else{
//     return Default_SS_OCR
// }
// })

const[SS_OCRActivate,setSS_OCRActivate]=useState<boolean>(()=>{
    if(This_File.SS_OCR){
        return This_File.SS_OCR?.Operate as boolean
    }
    else{
        return false
    }
})
const[SS_PSM,setSS_PSM]=useState<typeof uPSM[number]>(()=>{
    if(This_File.SS_OCR){
        return This_File.SS_OCR?.PSM as typeof uPSM[number]
    }
    else{
        return uPSM[0]
    }
})
const[SS_Languages,setSS_Languages]=useState<typeof uLANGUAGE[number][]|null>(()=>{
    if(This_File.SS_OCR){
        return This_File.SS_OCR?.Languages as typeof uLANGUAGE[number][]|null
    }
    else{
        return null
    }
})
const[SS_SelectLanguage,setSS_SelectLanguage]=useState<typeof uLANGUAGE[number]>(uLANGUAGE[0])

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
        SS_OCR:{
            Operate:SS_OCRActivate,
            Languages:SS_Languages,
            PSM:SS_PSM
        },
        SS_ReadOCR:This_File.SS_ReadOCR,
        SS_EditImg:This_File.SS_EditImg
    })
    setSS_File({
        AllFiles:let_Update,
        SelectThisFile:SS_File.SelectThisFile,
        FolderName:SS_File.FolderName
    })
}
},[
    SS_OCRActivate    ,
    SS_Languages,
    SS_PSM
])



return <UI_DisplayFlex
JSX={[
<UI_Button
Name='Operate OCR'
Function={()=>setSS_OCRActivate(true)}
/>,
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
Name="Add Language"
Function={()=>{
    if(SS_Languages){
    let cSS_Language=[...SS_Languages]
    let let_Update=[SS_SelectLanguage,...cSS_Language]
    setSS_Languages(let_Update)
    }
    else{
    setSS_Languages([SS_SelectLanguage])
    }
}}
/>
{SS_Languages?.map((i,index)=>
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
}

export default P_OverWrite_OCR