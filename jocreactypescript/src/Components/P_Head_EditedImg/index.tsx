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
const  P_Head_EditedImg = (
{
}
:{
})=>{
//***************************************************************************************************************************************
// HOOK
//***************************************************************************************************************************************

const{SS_EditImg}=useContext(Context_Main)
const{setSS_EditImg}=useContext(Context_Main)

const[SS_EditImgActivate,setSS_EditImgActivate]=useState<boolean>(SS_EditImg.Operate)
const[SS_ColorMode,setSS_ColorMode]=useState<typeof const_color[number]>(SS_EditImg.Color)
const[SS_Rotate,setSS_Rotate]=useState<number>(SS_EditImg.Rotate)


useEffect(()=>{

    setSS_EditImg({
        Operate:SS_EditImgActivate,
        Color:SS_ColorMode,
        Rotate:SS_Rotate
    })

},[
    // EditImg
    SS_EditImgActivate,
    SS_ColorMode,
    SS_Rotate,
])

    return (
<UI_DisplayFlex
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
/>,
<UI_Button
Name="Apply All Image Setting"
Function={()=>{setSS_EditImgActivate(true)}}
/>
]}
Color='#FFFFFF'
/>
    )}

export default  P_Head_EditedImg