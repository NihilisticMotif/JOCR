import './index.css';
import React, { FC, ReactNode } from 'react';

const UI_MultiTabs = (
{
Input_Titles
}
:{
Input_Titles:string[]
}):ReactNode=>{
    function f_Select(){}
    function f_Delete(){}
    let JSX_Tabs=Input_Titles.map((i,index)=><div key={index} onClick={f_Select}>
        <h1>{i}</h1>
        <button onClick={f_Delete}>X</button>
    </div>
    )
    return (
        <div>
    {JSX_Tabs}
    </div>
    )}

export default UI_MultiTabs