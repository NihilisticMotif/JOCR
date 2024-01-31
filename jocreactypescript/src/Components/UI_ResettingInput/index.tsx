import './index.css';
import {uID} from '../utility/uID'
import { useState } from 'react';
import React, { FC, ReactNode } from 'react';
import UI_Title from '../UI_Title';
import { Dispatch, SetStateAction } from 'react';

// By ChatGPT
type UI_ResettingInputProps<T> = {
  Name: string;
  setSS_Value: (value: T) => void;
  SS_Value: T;
  SS_DefaultValue: T | null;
};

const UI_ResettingInput = <T,>(
{
Name,
setSS_Value,
SS_Value,
SS_DefaultValue,
}
:UI_ResettingInputProps<T>)=>{

const [SS_ReadValue,setSS_ReadValue]=useState<string>(()=>{
    if(typeof SS_Value==='string'){
        return SS_Value
    }
    else if(typeof SS_Value==='number'){
        return SS_Value.toString()
    }
    else{
        return ''
    }
}
)

const ID='UI_ResettingInput'+uID(Name)+uID(Math.random().toString())

function f_OnChange(){
    let let_input=(document.getElementById(ID) as HTMLInputElement).value.toString()
    setSS_ReadValue(let_input)
}

function f_Ok(){
    if(SS_Value!==null || SS_Value!==undefined){
    if(typeof SS_Value==='string'){
        setSS_Value(SS_ReadValue as T)
    }else{
        if(typeof SS_Value==='number' && isNaN(parseFloat(SS_ReadValue))===false){
            setSS_Value(parseFloat(SS_ReadValue) as T)
        }else{
            f_Reset()
        }
    }
    }
}
//...

function f_Reset(){
    if(typeof SS_DefaultValue===typeof SS_Value && SS_DefaultValue!==null &&SS_DefaultValue!==undefined){
    setSS_ReadValue(SS_DefaultValue.toString())
    setSS_Value(SS_DefaultValue)
    }
}

let JSX_ResetButton=<></>
if(typeof SS_DefaultValue===typeof SS_Value){
    JSX_ResetButton=<button onClick={f_Reset}>Reset</button>
}
    return (
    <div>
        {UI_Title({Name:Name})}
        <input id={ID}
        value={SS_ReadValue}
        onChange={f_OnChange}
        ></input>
    <button onClick={f_Ok}>Ok</button>
    {JSX_ResetButton}
    </div>)
}

export default UI_ResettingInput