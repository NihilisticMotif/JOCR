import { useState } from "react"
import './R_TextDimensions.css'
const R_TextDimensions = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_TextDimension,
setSS_TextDimension
}
:{
SS_TextDimension:number;
setSS_TextDimension:(S:number)=>void;
})=>{

//****************************************************************************
// OUTPUT
//****************************************************************************
    let let_Color=[
        'white',
        'white',
        'white',
        'white'
    ]
    let_Color[SS_TextDimension]='lightgreen'
    const let_WidthTr='50px'
    return (
        <div className='C06id_R_TextDim'>
<button onClick={()=>setSS_TextDimension(0)} style={{backgroundColor:let_Color[0]}}>Row</button>
<button onClick={()=>setSS_TextDimension(1)} style={{backgroundColor:let_Color[1]}}>Text</button>
<button onClick={()=>setSS_TextDimension(2)} style={{backgroundColor:let_Color[2]}}>Table</button>
<button onClick={()=>setSS_TextDimension(3)} style={{backgroundColor:let_Color[3]}}>Full Table</button>
        </div>
    )}

export default R_TextDimensions