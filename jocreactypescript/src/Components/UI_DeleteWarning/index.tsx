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
    <div>
    <h1>Do you want to delete {Name}?</h1>
    <button onClick={()=>{Delete()}}>Yes</button>
    <button onClick={()=>{Cancel()}}>No</button>
    </div>
    )}

export default UI_DeleteWarning