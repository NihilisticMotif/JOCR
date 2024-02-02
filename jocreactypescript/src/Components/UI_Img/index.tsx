import './index.css';
import React, { FC, ReactNode } from 'react';

const UI_Img = (
{
Name,
Function
}
:{
Name:string
Function:(S:void)=>void
})=>{
    return (
    <button onClick={()=>Function()}>{Name}</button>
    )}

export default UI_Img