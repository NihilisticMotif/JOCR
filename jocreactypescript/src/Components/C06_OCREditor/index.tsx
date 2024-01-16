
import { useState } from "react"
import U_Language from "./Coms/U_Language"
import C_ExportFile from "./Coms/C_ExportFile"
import U_ImageBox from "./Coms/U_ImageBox"
import U_RunOCR from "./Coms/U_RunOCR"
import R_SuggestScript from "./Coms/R_Analysis"
import R_Analysis from "./Coms/R_Analysis"
import U_PSM from "./Coms/U_PSM"
import U_DPI from "./Coms/U_DPI"
const C06_OCREditor = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    OCR_OutputFile,
    setOCR_OutputFile,
    OCR_Languages,
    setOCR_Languages,
    OCR_BoxColor,
    setOCR_BoxColor,
    OCR_IsViewBox,
    setOCR_IsViewBox,
    OCR_BoxLineWidth,
    setOCR_BoxLineWidth,
    OCR_IsOCR,
    setOCR_IsOCR,
    OCR_PSM0,
    setOCR_PSM0,
    OCR_PSM,
    setOCR_PSM,
    OCR_DPI,
    setOCR_DPI
}
:{
    OCR_DPI:number 
    setOCR_DPI:(S:number)=>void 
    OCR_OutputFile:string[]
    setOCR_OutputFile:(S:string[])=>void
    OCR_Languages:string[][]
    setOCR_Languages:(S:string[][])=>void
    OCR_BoxColor:string 
    setOCR_BoxColor:(S:string)=>void
    OCR_IsViewBox:boolean 
    setOCR_IsViewBox:(S:boolean)=>void
    OCR_BoxLineWidth:number 
    setOCR_BoxLineWidth:(S:number)=>void
    OCR_IsOCR:boolean 
    setOCR_IsOCR:(S:boolean)=>void
    OCR_PSM0:string[]
    setOCR_PSM0:(S:string[])=>void
    OCR_PSM:number 
    setOCR_PSM:(S:number)=>void
})=>{

/****************************************************************************
// FUNCTION 00: UPDATE INPUT
//****************************************************************************

    function f_UpdateAff(id:number,defaultt:0|1){
        let let_Input:string=(
            document.getElementById(
                'C04id_Aff'+id.toString()) as HTMLInputElement)
            .value.toString();
        let ss_Aff=[...SS_Aff]
        let Aff=[...Aff]
        if(isNaN(parseFloat(let_Input))===false){
            ss_Aff[id]=parseFloat(let_Input)
            Aff[id]=let_Input
        }
        else{
            ss_Aff[id]=defaultt
            Aff[id]=defaultt.toString()
        }
        setSS_Aff(ss_Aff)
        setSS_AffSTR(Aff)
    }

    function f_ResetAff(id:number,defaultt:0|1){
        let ss_Aff=[...SS_Aff]
        let Aff=[...Aff]
        ss_Aff[id]=defaultt
        Aff[id]=defaultt.toString()
        setSS_Aff(ss_Aff)
        setSS_AffSTR(Aff)
    }

//****************************************************************************
// FUNCTION 01: UPDATE INPUT SCALE
//****************************************************************************

    function f_UpdateScale(){
        let let_Input:string=(document.getElementById('C04id_AffScale') as HTMLInputElement).value.toString();
        let ss_Aff=[...SS_Aff]
        let Aff=[...Aff]
        if(isNaN(parseFloat(let_Input))===false){
            ss_Aff[0]=parseFloat(let_Input)
            ss_Aff[1]=parseFloat(let_Input)
            Aff[0]=let_Input
            Aff[1]=let_Input
        }
        else{
            ss_Aff[0]=1
            ss_Aff[1]=1
            Aff[0]='1'
            Aff[1]='1'
        }
        setSS_Aff(ss_Aff)
        setSS_AffSTR(Aff)
    }

    function f_ResetScale(){
        let ss_Aff=[...SS_Aff]
        let Aff=[...Aff]
        ss_Aff[0]=1
        ss_Aff[1]=1
        Aff[0]='1'
        Aff[1]='1'
        setSS_Aff(ss_Aff)
        setSS_AffSTR(Aff)
    }

//****************************************************************************
// FUNCTION 02: SHOW ORIGIN
//****************************************************************************

    function f_UpdateOrigin(){
        let let_Input:string=(document.getElementById('C04id_AffShoww') as HTMLInputElement).value.toString();
        let let_InputColor:string=(document.getElementById('C04id_AffShowColorr') as HTMLInputElement).value.toString();
        setSS_AffOrigin([let_Input,let_InputColor])
    }

    
//****************************************************************************
// OUTPUT
//****************************************************************************
*/
    const let_WidthTr='50px'
    return (
        <>
<div className='C04id_Scalar' style={{display:'inline-block',marginLeft:'10px',margin:'auto'}}>
<h1 style={{marginTop:'-5px',marginBottom:'-5px'}}>Tesseract OCR</h1>
<hr/>
<U_RunOCR
OCR_IsOCR={OCR_IsOCR}
setOCR_IsOCR={setOCR_IsOCR}
/>
{/*<U_PSM
OCR_PSM={OCR_PSM}
setOCR_PSM={setOCR_PSM}
/>*/}
<U_DPI
OCR_DPI={OCR_DPI}
setOCR_DPI={setOCR_DPI}
/>
<hr/>
<R_Analysis
OCR_PSM0={OCR_PSM0}
setOCR_PSM0={setOCR_PSM0}/>
<hr/>
<U_Language
OCR_Languages={OCR_Languages}
setOCR_Languages={setOCR_Languages}/>
<hr/>
<U_ImageBox
OCR_BoxColor={OCR_BoxColor}
setOCR_BoxColor={setOCR_BoxColor}
OCR_IsViewBox={OCR_IsViewBox}
setOCR_IsViewBox={setOCR_IsViewBox}
OCR_BoxLineWidth={OCR_BoxLineWidth}
setOCR_BoxLineWidth={setOCR_BoxLineWidth}
//SS_Boxes={SS_Boxes}
//setSS_Boxes={setSS_Boxes}
/>
<hr/>

    </div>
    </>
    )}

export default C06_OCREditor