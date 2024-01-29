import './index.css';
import {uID} from '../utility/uID'
import { useState } from 'react';
import UI_Options from '../UI_Options';
import UI_Title from '../UI_Title';
import React, { FC, ReactNode } from 'react';

const UI_Factory = (
{
Name,
Create,
Options,
InputName
}
:{
Name:string
Create:(S:void)=>any
Options:string[]|null|void
InputName:string|null|void
}):ReactNode=>{
    let let_Options=Options?Options:['','']
    const [SS_Options,setSS_Options]=useState<string>(
        Options?Options[0]:'')
    
    let let_ID=uID(Math.random().toString())
    let JSX_Options:ReactNode=<h1>Error in Options of UI_Factory</h1>
    let JSX_Input:ReactNode=<h1>Error in Input of UI_Factory</h1>
    if(Options && Options[0] && SS_Options){
        // https://react.dev/learn/rendering-lists
        JSX_Options=UI_Options({
            Name:'',
            Options:let_Options,
            SS_Option:SS_Options,
            setSS_Options:setSS_Options,
        })
    }
    else{JSX_Options=<></>}
    if(InputName){
        JSX_Input=<input 
        id={'UI_FactoryId_'+uID(InputName)+let_ID} 
        placeholder={InputName}></input>
    }else{
        JSX_Input=<></>
    }
    return (

    <div>
        {UI_Title({Name:Name})}
        {JSX_Options}
        {JSX_Input}
        <button onClick={()=>Create}>Add</button>
    </div>
    )}


/*
Who use it?
1. Image_... 
 * Kernal (Options,Add)
 * Box (Options,Add)
 * Threshold (Add)
2. ImageSettingJSONFile (InputName,Add)
3. Language (Options,Add)
 */
export default UI_Factory