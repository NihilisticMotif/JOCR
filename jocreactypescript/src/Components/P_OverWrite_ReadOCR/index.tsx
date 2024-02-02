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
import { TS_SS_File } from '../TS_SS_File/An_Index';
import TS_File from '../TS_File/An_Index';
const P_OverWrite_ReadOCR = (
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
const[SS_RunPSM0,setSS_RunPSM0]=useState<boolean>(()=>{
if(This_File.SS_ReadOCR){
return This_File.SS_ReadOCR?.Operate!
}
else{
    return false
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
        SS_ReadOCR:{
            Operate:SS_RunPSM0,
            Script:This_File.SS_ReadOCR?.Script!,
            SAccurate:This_File.SS_ReadOCR?.SAccurate!,
            Rotation:This_File.SS_ReadOCR?.Rotation!,
            Detected:This_File.SS_ReadOCR?.Detected!,
            Adjustment:This_File.SS_ReadOCR?.Adjustment!,
            RAccurate:This_File.SS_ReadOCR?.RAccurate!,
        },
        SS_EditImg:This_File.SS_EditImg
    })
    setSS_File({
        AllFiles:let_Update,
        SelectThisFile:SS_File.SelectThisFile,
        FolderName:SS_File.FolderName
    })
}
},[
    SS_RunPSM0
])


let Default_SS_Rotate=0
if(This_File.SS_ReadOCR?.Adjustment!==null){
    Default_SS_Rotate=This_File.SS_ReadOCR?.Adjustment!
}

return <div>
<UI_Title
Name='Analyze Image'/>
<UI_Button
Name='Operate'
Function={()=>{setSS_RunPSM0(true)}}
/>
<UI_Title Name="Script"/>
<UI_Title Name={"Script:"+This_File.SS_ReadOCR?.Script!.toString()}/>
<UI_Title Name={'Script Accuracy:'+This_File.SS_ReadOCR?.SAccurate?.toString()}/>
<UI_Title Name='Rotation'/>
<UI_Title Name={'Rotate:'+This_File.SS_ReadOCR?.Rotation?.toString()}/>
<UI_Title Name={'Detected:'+This_File.SS_ReadOCR?.Detected?.toString()}/>
<UI_Title Name={'Adjustment:'+This_File.SS_ReadOCR?.Adjustment?.toString()}/>
<UI_Title Name={'Rotate Accuracy:'+This_File.SS_ReadOCR?.RAccurate?.toString()}/>
<UI_Title Name="Higher accuracy is better."/>
</div>
}

export default P_OverWrite_ReadOCR