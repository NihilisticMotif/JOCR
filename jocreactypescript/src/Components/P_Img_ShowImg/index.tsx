import './index.css';
import React, { FC, ReactNode } from 'react';

import UI_ResettingInput from '../UI_ResettingInput';
import UI_Button from '../UI_Button';
import UI_Title from '../UI_Title';
import UI_SearchOption from '../UI_SearchOption';
import { Context_Main } from '../Context_Main';
import { useState,useEffect,useContext } from 'react';
import { const_ShowColor } from '../TS_SS_ShowImg/const_showcolor';
import UI_DisplayFlex from '../UI_DisplayFlex';
import { uImg64 } from '../utility/uImg64';
import { TS_SS_ShowImg } from '../TS_SS_ShowImg/An_Index';
import Page_OverWrite from '../Page_OverWrite';
import TS_File from '../TS_File/An_Index';
const P_Img_ShowImg = (
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
const{SS_ShowImg}=useContext(Context_Main)
const{setSS_ShowImg}=useContext(Context_Main)
const[SS_ShowOriginImg,setSS_ShowOriginImg]=useState<typeof const_ShowColor[number]>(SS_ShowImg.OriginalImage)
const[SS_Zoom,setSS_Zoom]=useState<number>(SS_ShowImg.Zoom)

useEffect(()=>{
    setSS_ShowImg({
        Zoom:SS_Zoom,
        OriginalImage:SS_ShowOriginImg
    })
},[SS_Zoom,SS_ShowOriginImg])

return <UI_DisplayFlex
JSX={[
<div>
<UI_Title
Name={'Zoom: '+SS_Zoom.toString()}
/>
<UI_Button
Name='+'
Function={()=>{
if(SS_Zoom<10){
    let ss_Zoom=SS_Zoom 
    let let_Zoom = parseFloat((ss_Zoom+0.1).toFixed(1));
    setSS_Zoom(let_Zoom)
}}}
/>
<UI_Button
Name='-'
Function={()=>{
if(SS_Zoom>0.1){
    let ss_Zoom=SS_Zoom 
    let let_Zoom = parseFloat((ss_Zoom-0.1).toFixed(1));
    setSS_Zoom(let_Zoom)
}}}
/>
</div>,
<UI_SearchOption
Name="Show"
List={const_ShowColor}
SS_Option={SS_ShowOriginImg}
setSS_Option={setSS_ShowOriginImg}
IsSearch={false}
/>,
]}
Color='#FFFFFF'
/>

}

export default P_Img_ShowImg