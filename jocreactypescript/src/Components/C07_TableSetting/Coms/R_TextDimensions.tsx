import { useState } from "react"
import './R_TextDimensions.css'
const R_TextDimensions = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_IsCharacterArray,
setSS_IsCharacterArray
}
:{
SS_IsCharacterArray:boolean
setSS_IsCharacterArray:(S:boolean)=>void
})=>{

//****************************************************************************
// OUTPUT
//****************************************************************************

    const let_WidthTr='50px'
    return (
        <div className='C06id_R_TextDim'>
<h1 style={{fontSize:'14px',marginTop:'0px',marginBottom:'0px'}}>Output Type</h1>
<button onClick={()=>setSS_IsCharacterArray(false)} 
style={{backgroundColor: SS_IsCharacterArray?'white':'lightgreen'}}>String</button>
<button onClick={()=>setSS_IsCharacterArray(true)}  
style={{backgroundColor: SS_IsCharacterArray?'lightgreen':'white'}}>String Array</button>
        </div>
    )}

export default R_TextDimensions