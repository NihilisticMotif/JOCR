import { useState } from 'react';

const U_UpdateImage = (
//****************************************************************************
// INPUT
//****************************************************************************
{
  setSS_IsShow,
  SS_IsShow,
setSS_UseEffect,
setSS_IsRGB,
SS_IsRGB
}
:{
  setSS_IsShow:(S:boolean)=>void
setSS_UseEffect:(S:boolean)=>void
setSS_IsRGB:(S:boolean)=>void
SS_IsShow:boolean
SS_IsRGB:boolean
})=>{
  let let_Color=['white','white','white']
  let let_Selector=0
  if(SS_IsRGB===true && SS_IsShow===true){
    let_Selector=2
  }
  if(SS_IsRGB===true && SS_IsShow===false){
    let_Selector=0
  }
  if(SS_IsRGB===false && SS_IsShow===false){
    let_Selector=1
  }
  if(SS_IsRGB===false && SS_IsShow===true){
    let_Selector=2
  }
  let_Color[let_Selector]='lightgreen'
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
    <button onClick={f_RGB}  style={{backgroundColor:let_Color[0]}} className='C04id_Button'>Original Image</button>
    <button onClick={f_Gray} style={{backgroundColor:let_Color[1]}} className='C04id_Button'>Original BW Image</button>
    <button onClick={f_Edit} style={{backgroundColor:let_Color[2]}} className='C04id_Button'>Edited Image</button>
    </div>
    </>
    )}

export default U_UpdateImage