

import { useState } from "react"
import './language.css'
import {languageList} from './languageList'
const C_ExportFile = (
//****************************************************************************
// INPUT
//****************************************************************************
{
OCR_OutputFile,
setOCR_OutputFile
}
:{
OCR_OutputFile:string[]
setOCR_OutputFile:(S:string[])=>void
})=>{

    function f_UpdateFileName(){
    let let_Input:string=(document.getElementById("C06id_UpdateFileName") as HTMLInputElement).value.toString();
    let ocr_OutputFile=[...OCR_OutputFile]
    ocr_OutputFile[0]=let_Input
    setOCR_OutputFile(ocr_OutputFile)
    }
    function f_UpdateFileFormat(){
    let let_Input:string=(document.getElementById("C06id_UpdateFileFormat") as HTMLInputElement).value.toString();
    let ocr_OutputFile=[...OCR_OutputFile]
    ocr_OutputFile[1]=let_Input
    setOCR_OutputFile(ocr_OutputFile)
    }
//****************************************************************************
// OUTPUT
//****************************************************************************

    const let_WidthTr='50px'
    return (
        <>

    <div  style={{height:'80px'}}>
<tr>
    <td><h1 style={{marginTop:'-5px',marginBottom:'0px',fontSize:'15px'}}>
        {OCR_OutputFile[0]+'.'+OCR_OutputFile[1]}
        </h1></td>
</tr>
<tr>
    <div style={{display:'inline-block'}}>
<div style={{display:'flex'}}>
<input
        type="text"
        id='C06id_UpdateFileName'
        style={{fontSize:'15px',marginLeft:'10px',width:'calc( 70% - 10px )',height:'20px',marginTop:'10px'}}
/>
      <select id="C06id_UpdateFileFormat" style={{marginTop:'10px', width: '30%' ,height:'25px'}}
      value={OCR_OutputFile[1]}
      onChange={f_UpdateFileFormat}
      >
          <option value='txt'>.txt</option>
          <option value='csv'>.csv</option>
          <option value='pdf'>.pdf</option>
          <option value='alto'>.alto</option>
          <option value='hocr'>.hocr</option>
      </select>
      </div>
      <div style={{display:'flex',marginTop:'5px'}}>
      <button style={{width:'80px',marginLeft:'10px'}} onClick={f_UpdateFileName}>Ok</button>
      <button style={{width:'80px',marginLeft:'10px'}}>Download</button>
</div>
</div>
</tr>
</div>


</>
    )}

export default C_ExportFile