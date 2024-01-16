// https://github.com/NanoNets/ocr-with-tesseract/blob/master/tesseract-tutorial.ipynb
import TS_Box from "../../T04_Box/An_Index"
import { useState } from "react"
const U_PSM = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    OCR_PSM,
    setOCR_PSM
}
:{
    OCR_PSM:number 
    setOCR_PSM:(S:number)=>void 
})=>{

//****************************************************************************
// FUNCTION_00: Zoom setting
//****************************************************************************
    function f_OnChange(){
let let_Input:string=(document.getElementById('C06id_PageSegmentationMethod') as HTMLInputElement).value.toString();
setOCR_PSM(parseInt(let_Input))
    }
    return (
        <>
<h1 style={{fontSize:'14px'}}>
<h1 style={{fontSize:'14px'}}>
Delect Image as 
</h1>
</h1>
<select style={{fontSize:'15px',height:'25px',width:'90%'}} 
id='C06id_PageSegmentationMethod'
onChange={f_OnChange}
value={OCR_PSM}>
<option value={3}>Text (PSM-3)</option>
<option value={4}>A Table (PSM-4)</option>
<option value={5}>A Rotated Table (PSM-5)</option>
<option value={6}>A Simple Page with Text (PSM-6)</option>
<option value={7}>A Single Text Line (PSM-7)</option>
<option value={8}>A Single Word (PSM-8)</option>
<option value={10}>A Single Charecter (PSM-10)</option>
<option value={11}>Sparse Text (PSM-11)</option>
<option value={13}>Last Options (PSM-13)</option>
</select>


<div style={{display:'flex',marginLeft:'10px',marginTop:'5px'}}>

    </div>
    </>
    )}

export default U_PSM