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
import { const_color } from '../TS_SS_EditImg/const_color';
import { uPSM } from '../utility/uPSM';
import { uLANGUAGE } from '../utility/uLANGUAGE';
import { const_ShowColor } from '../TS_SS_ShowImg/const_showcolor';
const P_Head_OCR = (
{
}
:{
})=>{
const{SS_OCR}=useContext(Context_Main)
const{setSS_OCR}=useContext(Context_Main)
const[SS_OCRActivate,setSS_OCRActivate]=useState<boolean>(SS_OCR.Operate)
const[SS_PSM,setSS_PSM]=useState<typeof uPSM[number]>(SS_OCR.PSM)
const[SS_Languages,setSS_Languages]=useState<typeof uLANGUAGE[number][]|null>(SS_OCR.Languages)
const[SS_SelectLanguage,setSS_SelectLanguage]=useState<typeof uLANGUAGE[number]|''>(uLANGUAGE[0])
useEffect(()=>{
    setSS_OCR({
        Operate:SS_OCRActivate,
        PSM:SS_PSM,
        Languages:SS_Languages
    })
},[
    SS_OCRActivate,
    SS_PSM,
    SS_Languages,
])

    return (
<UI_DisplayFlex
JSX={[
<UI_Button
Name="Operate OCR"
Function={()=>{setSS_OCRActivate(true)}}
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
Name={'Language '}
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
</div>,
<UI_Button
Name="Apply All OCR Setting"
Function={()=>{setSS_OCRActivate(true)}}
/>
]}
Color='#FFFFFF'

/>
    )}

export default P_Head_OCR