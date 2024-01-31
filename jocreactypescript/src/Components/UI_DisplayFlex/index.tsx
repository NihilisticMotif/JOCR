import { JsxElement } from 'typescript';
import './index.css';
import React, { FC, ReactNode } from 'react';

const UI_DisplayFlex = (
{
JSX,
Color
}
:{
JSX:ReactNode[]
Color:string
})=>{

    return (
        <div className='UIIDDisplayFlex_Body' style={{backgroundColor:Color}}>
            {
            // https://react.dev/learn/rendering-lists
            JSX.map(i=><>{i}</>)
            }
        </div>
    )}

export default UI_DisplayFlex