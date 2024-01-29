import './index.css';
import {uID} from '../utility/uID'
import React, { FC, ReactNode } from 'react';
import UI_Title from '../UI_Title';

const UI_Options = (
{
Name,
Options,
SS_Option,
setSS_Options
}
:{
Name:string
Options:string[]
SS_Option:string
setSS_Options:(S:string)=>void
}):ReactNode=>{
    function f_OnChange(){
        let let_Word=(document.getElementById('UI_OptionsId_'+uID(Name)+let_ID) as HTMLInputElement).value.toString()
        setSS_Options(let_Word)
    }
    let let_ID=uID(Math.random().toString())

    let JSX_Options=(<select 
            id={'UI_OptionsId_'+uID(Name)+let_ID} 
            value={SS_Option}
            onChange={f_OnChange}>
            {Options.map(i=><option value={uID(i)}>{i}</option>)}
            </select>)

    let JSX_Name:ReactNode=<></>
    if(Name!==''){
        JSX_Name=UI_Title({Name:Name})
    }
    return (
        <div>
        {JSX_Name}
        {JSX_Options}
        </div>
    )}

export default UI_Options