// https://github.com/NanoNets/ocr-with-tesseract/blob/master/tesseract-tutorial.ipynb
import TS_Box from "../../T04_Box/An_Index"
import { useState , useEffect } from "react"
import { ChangeEvent } from "react"
const U_DPI = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    OCR_DPI,
    setOCR_DPI
}
:{
    OCR_DPI:number 
    setOCR_DPI:(S:number)=>void 
})=>{
const [SS_OnChange,setSS_OnChange]=useState<string>(OCR_DPI.toString())
//****************************************************************************
// FUNCTION_00: Zoom setting
//****************************************************************************
    useEffect(()=>{
setSS_OnChange(OCR_DPI.toString())
    },[OCR_DPI])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSS_OnChange(event.target.value);
  };

    function f_OnChange(){
    let let_Input:string=(document.getElementById('C06id_PageSegmentationMethoeSegmentationMethod') as HTMLInputElement).value.toString();
    setSS_OnChange(let_Input)
    }

    function f_Update(){
    let let_Input:string=(document.getElementById('C06id_PageSegmentationMethoeSegmentationMethod') as HTMLInputElement).value.toString();
    if(isNaN(parseInt(let_Input))===false && parseInt(let_Input)>300){
        setOCR_DPI(parseInt(let_Input))
    }else{
        setOCR_DPI(300)
    }
    setSS_OnChange(OCR_DPI.toString())
    }

    return (
        <div style={{display:'flex'}}>
<h1 style={{fontSize:'14px',marginLeft:'5px'}}>
DPI
</h1>
<input type='text' 
style={{marginLeft:'5px',marginTop:'5px',fontSize:'15px',height:'20px',width:'55%'}} 
id='C06id_PageSegmentationMethoeSegmentationMethod'
onChange={handleInputChange}
placeholder="x > 300"
value={SS_OnChange}
>
</input>
<button style={{marginTop:'5px',width:'30px',height:'25px'}} onClick={f_Update}>Ok</button>
    </div>
    )}

export default U_DPI