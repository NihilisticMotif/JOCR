import { useState } from 'react';

const U_UpdateImage = (
//****************************************************************************
// INPUT
//****************************************************************************
{
  setSS_IsShow,
setSS_UseEffect,
setSS_IsRGB,
}
:{
  setSS_IsShow:(S:boolean)=>void
setSS_UseEffect:(S:boolean)=>void
setSS_IsRGB:(S:boolean)=>void
})=>{

//****************************************************************************
// FUNCTION_00: Zoom setting
//****************************************************************************

    function f_Gray(){
      setSS_IsRGB(false)
      setSS_IsShow(false)
      setSS_UseEffect(true)
    }

    function f_RGB(){
      setSS_IsRGB(true)
      setSS_IsShow(false)
      setSS_UseEffect(true)
    }

    function f_Edit(){
      setSS_IsShow(true)
      setSS_UseEffect(true)
    }
    return (
        <>
    <div style={{display:'inline-block',marginLeft:'10px',margin:'auto'}}>
    <h1 className='C04id_Zoom' style={{marginTop:'10px'}}>Show Image</h1>
    <button onClick={f_RGB} className='C04id_Button'>Original RGB Image</button>
    <button onClick={f_Gray}  className='C04id_Button'>Original BW Image</button>
    <button onClick={f_Edit}  className='C04id_Button'>Edited Image</button>
    </div>
    </>
    )}

export default U_UpdateImage