import './index.css';
import {uID} from '../utility/uID'
import { useState } from 'react';
import React, { FC, ReactNode } from 'react';
import UI_Title from '../UI_Title';
const UI_ResettingInput = (
{
Name,
setSS_Value,
SS_Value,
SS_DefaultValue
}
:{
Name:string
setSS_Value:(S:string|number)=>void
SS_Value:string|number
SS_DefaultValue:string|number
}):ReactNode[]=>{

    const [SS_ReadValue,setSS_ReadValue]=useState<string>(SS_Value.toString())
    let let_ID=uID(Math.random().toString())

    function f_OnChange(){
        let let_input=(document.getElementById('UI_ResettingInput'+uID(Name)+let_ID) as HTMLInputElement).value.toString()
        setSS_ReadValue(let_input)
    }

    function f_Ok(){
        if(typeof SS_Value==='string'){
            setSS_Value(SS_ReadValue)
        }else{
            if(isNaN(parseFloat(SS_ReadValue))===false){
                setSS_Value(parseFloat(SS_ReadValue))
            }else{
                f_Reset()
            }
        }
    }

    function f_Reset(){
        setSS_ReadValue(SS_DefaultValue.toString())
        setSS_Value(SS_DefaultValue)
    }
    return ([
        UI_Title({Name:Name}),
        <input id={'UI_ResettingInput'+uID(Name)+let_ID}
        value={SS_ReadValue}
        onChange={f_OnChange}
        ></input>,
    <button onClick={f_Ok}>Ok</button>,
    <button onClick={f_Reset}>Reset</button>
    ])}

export default UI_ResettingInput