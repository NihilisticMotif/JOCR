import './CSS_Convolution.css'
import { useState, useEffect } from 'react'
import U_Kernal from './U_Kernal'
import './CSS_Utility.css'
import TS_Kernal from '../../T05_Kernal/An_Index'

const U_Convolution = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_Kernals,
setSS_Kernals
}
:{
SS_Kernals:TS_Kernal[]
setSS_Kernals:(S:TS_Kernal[])=>void
})=>{
  const let_Width='100%'
  let JSX_Kernals=SS_Kernals.map((kernal,index)=>{
        return(<>
        <U_Kernal
        SS_Kernals={SS_Kernals}
        setSS_Kernals={setSS_Kernals}
        SS_ThisKernal={kernal}
        Index={index}
        />
        </>
        )})

//****************************************************************************
// OUTPUT
//****************************************************************************
return(
<div style={{
  height:`calc(100vh - 40px - ${(143+20)}px )`,
  width:let_Width,
  backgroundColor:'lightblue',
  overflowY: 'scroll'}}>
{JSX_Kernals}
</div>
  )
}

export default U_Convolution