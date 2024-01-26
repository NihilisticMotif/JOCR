// https://nanonets.com/blog/ocr-with-tesseract/#ocr-with-pytesseract-and-opencv
import TS_Box from "../../T04_Box/An_Index"
import { useState } from "react"
const OCR_WhiteList = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    OCR_WhiteList,
    setOCR_WhiteList,
    id,
    Header,
    Comment
}
:{
    OCR_WhiteList:string
    setOCR_WhiteList:(S:string)=>void 
    id:string
    Header:string
    Comment:string
})=>{

//****************************************************************************
// FUNCTION_00: Zoom setting
//****************************************************************************
    function f_OnChange(){
let let_Input:string=(document.getElementById(id) as HTMLInputElement).value.toString();
setOCR_WhiteList(let_Input)
    }
    return (
        <>
<h1 style={{fontSize:'14px'}}>
{Header}
</h1>
<input style={{margin:"auto",fontSize:'15px',height:'25px',width:'80%'}} 
id={id}
placeholder={Comment}
onChange={f_OnChange}
value={OCR_WhiteList}>
</input>
    </>
    )}

export default OCR_WhiteList