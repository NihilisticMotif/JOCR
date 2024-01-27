import './index.css';
import React, { FC, ReactNode } from 'react';
import UI_Title from '../UI_Title';
import UI_SmallGroup from '../UI_SmallGroup';
const UI_Activate = (
{
Name,
IsActivate,
setIsActivate
}
:{
Name:string
IsActivate:boolean
setIsActivate:(S:boolean)=>void
}):ReactNode=>{
    let let_Status='IsActivate is not working.'
    if(IsActivate){
        let_Status='Activate';
    }else{
        let_Status='Deactivate'
    }
    return (
    <UI_SmallGroup JSX={[
    UI_Title({Name:Name+({let_Status})}),
    <button onClick={()=>setIsActivate(true)}>Activate</button>,
    <button onClick={()=>setIsActivate(false)}>Deactivate</button>,]}/>
    )}

export default UI_Activate