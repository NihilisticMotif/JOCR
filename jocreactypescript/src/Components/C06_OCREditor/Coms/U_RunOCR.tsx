// https://github.com/NanoNets/ocr-with-tesseract/blob/master/tesseract-tutorial.ipynb
import TS_Box from "../../T04_Box/An_Index"
import { useState } from "react"
const U_RunOCR = (
//****************************************************************************
// INPUT
//****************************************************************************
{
OCR_IsOCR,
setOCR_IsOCR,
//SS_Boxes,
//setSS_Boxes
}
:{
OCR_IsOCR:boolean 
setOCR_IsOCR:(S:boolean)=>void
//SS_Boxes:TS_Box[]
//setSS_Boxes:(S:TS_Box[])=>void
})=>{

//****************************************************************************
// FUNCTION_00: Zoom setting
//****************************************************************************

    return (
        <>
<h1 style={{fontSize:'14px'}}>
Run OCR ({OCR_IsOCR?'Active':'Inactive'})
</h1>

<div style={{display:'flex',marginLeft:'10px',marginTop:'5px'}}>

<button 
onClick={()=>setOCR_IsOCR(true)}
style={{
    fontSize:'14px',
    width:'45%',
    backgroundColor:OCR_IsOCR?'lightgreen':'white'
    }}
>Activate</button>
<button 
onClick={()=>setOCR_IsOCR(false)}
style={{
    fontSize:'14px',
    width:'45%',
    backgroundColor:OCR_IsOCR?'white':'lightgreen'
    }}
>Deactivate</button>
    </div>
    </>
    )}

export default U_RunOCR