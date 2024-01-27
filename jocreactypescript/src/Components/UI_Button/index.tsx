import './index.css';
import React, { FC, ReactNode } from 'react';

const UI_Button = (
{
Name,
Function
}
:{
Name:string
Function:(S:void)=>void
}):ReactNode=>{
    return (
    <button onClick={()=>Function()}>{Name}</button>
    )}

export default UI_Button