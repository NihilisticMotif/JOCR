import './index.css';
import React, { FC, ReactNode } from 'react';

const UI_DeleteWarning = (
{
Name,
Delete,
Cancel
}
:{
Name:string
Delete:(S:void)=>void
Cancel:(S:void)=>void
})=>{
    return (
    <div className="UIIDDeleteWarning_Body">
    <h1>Do you want to delete {Name}?</h1>
    <div className="UIIDDeleteWarning_Button">
    <button onClick={()=>{Delete()}}>Yes</button>
    <button onClick={()=>{Cancel()}}>No</button>
    </div>
    </div>
    )}

export default UI_DeleteWarning