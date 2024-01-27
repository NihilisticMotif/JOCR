import { JsxElement } from 'typescript';
import './index.css';
import React, { FC, ReactNode } from 'react';

const UI_DisplayFlex = (
{
JSX
}
:{
JSX:ReactNode[]
}):ReactNode=>{

    return (
        <div className='ClassNameUI_DisplayFlex'>
            {
            // https://react.dev/learn/rendering-lists
            JSX.map(i=><>{i}</>)
            }
        </div>
    )}

export default UI_DisplayFlex