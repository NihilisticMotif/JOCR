import './index.css';
import React, { FC, ReactNode } from 'react';
import { uID } from '../utility/uID';
import { useState,useEffect } from 'react';
const UI_TextArea = (
{
SS_Message,
setSS_Message,
}
:{
SS_Message:string
setSS_Message:(S:string)=>void,
})=>{
const[eSS_Message,seteSS_Message]=useState<string>(SS_Message)
const ID="TextAreaareaareaareaTextAreaareaareaTexteeare"+uID(Math.random.toString())
useEffect(()=>{
    setSS_Message(eSS_Message)
},[eSS_Message])
function f_OnChange(){
let let_Input:string=(document.getElementById(ID) as HTMLInputElement).value.toString();
seteSS_Message(let_Input)
}
    return (
<textarea id={ID} onChange={f_OnChange}>
{eSS_Message}
</textarea>
    )}

export default UI_TextArea