import { JsxElement } from 'typescript';
import './index.css';
import React, { FC, ReactNode } from 'react';

const UI_SmallGroup = (
{
JSX
}
:{
JSX:ReactNode[]
}):ReactNode=>{

    return (
        <div className='ClassNameUI_SmallGroup'>
            {
            // https://react.dev/learn/rendering-lists
            JSX.map(i=><>{i}</>)
            }
        </div>
    )}

export default UI_SmallGroup
