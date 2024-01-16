// https://github.com/NanoNets/ocr-with-tesseract/blob/master/tesseract-tutorial.ipynb
import TS_Box from "../../T04_Box/An_Index"
import { useState ,useEffect} from "react"
const R_Analysis = (
//****************************************************************************
// INPUT
//****************************************************************************
//...
{
OCR_PSM0,
setOCR_PSM0
}
:{
OCR_PSM0:string[]
setOCR_PSM0:(S:string[])=>void
})=>{
//****************************************************************************
// FUNCTION_00: Zoom setting
//****************************************************************************
//useEffect(()=>{alert(OCR_PSM0)},[OCR_PSM0])
function f_Activate(IsAct:string){
    let ocr_PSM0:string[]=[...OCR_PSM0]
    ocr_PSM0[-1]=IsAct
    setOCR_PSM0(ocr_PSM0)
}

//...
let OCR_IsViewBox=false
if(OCR_PSM0[-1]==='true'){
    OCR_IsViewBox=true
}
    return (
        <>
{
// https://www.kaggle.com/code/dhorvay/pytesseract-orientation-script-detection-osd
}
<h1 style={{fontSize:'14px',marginLeft:'10px',marginTop:'0px'}}>
Analysing Script
</h1>
<h1 style={{fontSize:'13px', textAlign: 'left',marginLeft:'10px',marginTop:'-4px'}}>
Script: {OCR_PSM0[0]}
</h1>
<h1 style={{fontSize:'13px', textAlign: 'left',marginLeft:'10px',marginTop:'-4px'}}>
Accuracy: {OCR_PSM0[1]}
</h1>
<hr style={{width:'90%'}}></hr>
<h1 style={{fontSize:'14px',marginLeft:'10px',marginTop:'0px'}}>
Analysing Roration
</h1>
<h1 style={{fontSize:'13px', textAlign: 'left',marginLeft:'10px',marginTop:'-4px'}}>
Detected: {OCR_PSM0[2]}
</h1>
<h1 style={{fontSize:'13px', textAlign: 'left',marginLeft:'10px',marginTop:'-4px'}}>
Adjustment: {OCR_PSM0[3]}
</h1>
<h1 style={{fontSize:'13px', textAlign: 'left',marginLeft:'10px',marginTop:'-4px'}}>
Accuracy: {OCR_PSM0[4]}
</h1>
<hr style={{width:'90%'}}></hr>
<h1 style={{fontSize:'13px', textAlign: 'left',marginLeft:'10px',marginTop:'-4px'}}>
(higher Accuracy is better)
</h1>
<hr style={{width:'90%'}}></hr>
<div style={{display:'flex',marginLeft:'10px',marginTop:'0px'}}>
<button 
style={{
    fontSize:'14px',
    width:'45%',
    backgroundColor:OCR_IsViewBox?'lightgreen':'white'
    }}
    onClick={()=>f_Activate('true')}
>Activate</button>
<button 
style={{
    fontSize:'14px',
    width:'45%',
    backgroundColor:OCR_IsViewBox?'white':'lightgreen'
    }}
    onClick={()=>f_Activate('false')}
>Deactivate</button>
    </div>
    </>
    )}

export default R_Analysis