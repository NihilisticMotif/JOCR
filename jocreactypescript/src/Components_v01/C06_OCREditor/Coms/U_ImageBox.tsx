// https://github.com/NanoNets/ocr-with-tesseract/blob/master/tesseract-tutorial.ipynb
import TS_Box from "../../T04_Box/An_Index"
import { useState } from "react"
const U_ImageBox = (
//****************************************************************************
// INPUT
//****************************************************************************
{
OCR_BoxColor,
setOCR_BoxColor,
OCR_IsViewBox,
setOCR_IsViewBox,
OCR_BoxLineWidth,
setOCR_BoxLineWidth
//SS_Boxes,
//setSS_Boxes
}
:{
OCR_BoxColor:string 
setOCR_BoxColor:(S:string)=>void
OCR_IsViewBox:boolean 
setOCR_IsViewBox:(S:boolean)=>void
OCR_BoxLineWidth:number 
setOCR_BoxLineWidth:(S:number)=>void
//SS_Boxes:TS_Box[]
//setSS_Boxes:(S:TS_Box[])=>void
})=>{
    const [SS_OnChange,setSS_OnChange]=useState<string>(OCR_BoxLineWidth.toString())

    function f_UpdateOCR_BoxColor(){
    let let_Input:string=(document.getElementById('C06id_UpdateOCR_BoxColor') as HTMLInputElement).value.toString();
    setOCR_BoxColor(let_Input)
    }

    function f_UpdateBoxLineWidth(){
    let let_Input:string=(document.getElementById('C06id_OCRBoxLineWidth') as HTMLInputElement).value.toString();
    if(isNaN(parseInt(let_Input))===false){
        setOCR_BoxLineWidth(parseInt(let_Input))
        setSS_OnChange(let_Input)
    }
    else{
        setOCR_BoxLineWidth(2)
        setSS_OnChange('2')
    }
    }

    function f_OnChange(){
    let let_Input:string=(document.getElementById('C06id_OCRBoxLineWidth') as HTMLInputElement).value.toString();
    setSS_OnChange(let_Input)
    }
//****************************************************************************
// FUNCTION_00: Zoom setting
//****************************************************************************

    return (
        <>
<h1 style={{fontSize:'14px'}}>
Draw the Box around the Text ({OCR_IsViewBox?'Active':'Inactive'})
</h1>

<div style={{display:'flex',marginLeft:'10px',marginTop:'5px',height:'25px'}}>
<input 
placeholder="Line Width"
value={SS_OnChange}
onChange={f_OnChange}
style={{marginLeft:'0px',width:'50%',fontSize:'16px'}} id='C06id_OCRBoxLineWidth'></input>
<button onClick={f_UpdateBoxLineWidth}>Ok</button>
<input 
type='color'
value={OCR_BoxColor}
onChange={f_UpdateOCR_BoxColor}
id='C06id_UpdateOCR_BoxColor'
style={{width:'20%'}}
></input>
</div>

<div style={{display:'flex',marginLeft:'10px',marginTop:'5px'}}>

<button 
onClick={()=>setOCR_IsViewBox(true)}
style={{
    fontSize:'14px',
    width:'45%',
    backgroundColor:OCR_IsViewBox?'lightgreen':'white'
    }}
>Activate</button>
<button 
onClick={()=>setOCR_IsViewBox(false)}
style={{
    fontSize:'14px',
    width:'45%',
    backgroundColor:OCR_IsViewBox?'white':'lightgreen'
    }}
>Deactivate</button>
    </div>
    </>
    )}

export default U_ImageBox