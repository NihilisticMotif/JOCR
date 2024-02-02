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
import { uID } from '../utility/uID';
import TS_File from '../TS_File/An_Index';
const P_Image = (
{
This_File,
SelectKey
}
:{
This_File:TS_File,
SelectKey:number
})=>{
//const{SS_File}=useContext(Context_Main)
const{SS_ShowImg}=useContext(Context_Main)
const{setSS_ShowImg}=useContext(Context_Main)


const[SS_ShowOriginImg,setSS_ShowOriginImg]=useState<typeof const_ShowColor[number]>(SS_ShowImg.OriginalImage)
const[SS_Img,setSS_Img]=useState<File|null>(()=>{
if(SS_ShowImg.OriginalImage===const_ShowColor[0]){
return This_File.Img.OriginFile
}
// EditedImage
if(SS_ShowImg.OriginalImage===const_ShowColor[1]){
return This_File.Img.EditedFile
}
// GrayImage
if(SS_ShowImg.OriginalImage===const_ShowColor[2]){
return This_File.Img.OriginFile
}
// ReverseImage
if(SS_ShowImg.OriginalImage===const_ShowColor[3]){
return This_File.Img.OriginFile
}
else{
    return This_File.Img.EditedFile
}
})

useEffect(()=>{
    setSS_ShowImg({
        Zoom:SS_ShowImg.Zoom,
        OriginalImage:SS_ShowOriginImg
    })
if(SS_ShowOriginImg===const_ShowColor[0]){
setSS_Img(This_File.Img.OriginFile)
}
// EditedImage
if(SS_ShowOriginImg===const_ShowColor[1]){
setSS_Img(This_File.Img.EditedFile)
}
// GrayImage
if(SS_ShowOriginImg===const_ShowColor[2]){
setSS_Img(This_File.Img.OriginFile)
}
// ReverseImage
if(SS_ShowOriginImg===const_ShowColor[3]){
setSS_Img(This_File.Img.OriginFile)
}
else{
setSS_Img(This_File.Img.EditedFile)
}
},[SS_ShowImg.Zoom,SS_ShowOriginImg])

return (<div>
{
    SS_Img && 
    <img 
    src={uImg64+SS_Img} 
    id={"I02id_Midjourney"+SelectKey.toString()}
    alt="Uploaded" 
    style={{
      height:`calc( ${SS_ShowImg.Zoom} * 100%)`
  }}
  />
}
</div>)}

export default P_Image