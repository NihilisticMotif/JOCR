
import { useState } from "react"
import U_Language from "./Coms/U_Language"
import C_ExportFile from "./Coms/C_ExportFile"
const C06_OCREditor = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    OCR_OutputFile,
    setOCR_OutputFile,
    OCR_Languages,
    setOCR_Languages
}
:{
    OCR_OutputFile:string[]
    setOCR_OutputFile:(S:string[])=>void
    OCR_Languages:string[][]
    setOCR_Languages:(S:string[][])=>void
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
<h1>OCR Options</h1>
<hr/>
<U_Language
OCR_Languages={OCR_Languages}
setOCR_Languages={setOCR_Languages}/>
<hr/>

{
/****************************************************************************
// Scale = SS_Aff[0] = SS_Aff[1]
//****************************************************************************
}
<hr style={{marginTop:'5px',marginBottom:'3px'}} />


{
//****************************************************************************
// Scale Y = SS_Aff[1]
//****************************************************************************
}
<hr style={{marginTop:'5px',marginBottom:'3px'}} />
<tr>
    <td style={{width:let_WidthTr}} >Scale Y</td>
    <td>Aff[1]</td>
</tr>
<tr>
    <td><input  style={{marginTop:'3px'}} id='C04id_Aff1'></input></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>alert('f_UpdateAff(1,1)')}>Ok</button></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>alert('f_ResetAff(1,1) ')}>Reset</button></td>
</tr>
{
//****************************************************************************
// Rotation = SS_Aff[4]
//****************************************************************************
}
<hr style={{marginTop:'5px',marginBottom:'3px'}} />
<tr>
    <td style={{width:let_WidthTr}} >Rotation</td>
    <td>Aff[4]</td>
</tr>
<tr>
    <td><input  style={{marginTop:'3px'}} id='C04id_Aff4'></input></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>alert('f_UpdateAff(4,0)')}>Ok</button></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>alert('f_ResetAff(4,0) ')}>Reset</button></td>
</tr>
{
//****************************************************************************
// Show Origin
//****************************************************************************
}
<hr style={{marginTop:'5px',marginBottom:'3px'}} />
<tr>
    <td style={{width:let_WidthTr}} >Show Origin</td>
    <td><input type='color' id='C04id_AffShowColorr'></input></td>
</tr>
<tr>
<select id="C04id_AffShoww">
  <option value="NoOrigin">No Origin</option>
  <option value="CenterOrigin">Center Origin</option>
  <option value="TopLeftOrigin">Top Left Origin</option>
</select>
<td><button style={{marginTop:'3px'}} onClick={()=>alert('f_UpdateOrigin')}>Ok</button></td>
</tr>
{
//****************************************************************************
// Pos X = SS_Aff[2]
//****************************************************************************
}
<hr style={{marginTop:'5px',marginBottom:'3px'}} />
<tr>
    <td style={{width:let_WidthTr}} >Pos X</td>
    <td>Aff[2]</td>
</tr>
<tr>
    <td><input  style={{marginTop:'3px'}} id='C04id_Aff2'></input></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>alert('f_UpdateAff(2,0)')}>Ok</button></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>alert('f_ResetAff(2,0) ')}>Reset</button></td>
</tr>
{
//****************************************************************************
// Pos Y = SS_Aff[3]
//****************************************************************************
}
<hr style={{marginTop:'5px',marginBottom:'3px'}} />
<tr>
    <td style={{width:let_WidthTr}} >Pos Y</td>
    <td>Aff[3]</td>
</tr>
<tr>
    <td><input  style={{marginTop:'3px'}} id='C04id_Aff3'></input></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>alert('f_UpdateAff(3,0)')}>Ok</button></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>alert('f_ResetAff(3,0) ')}>Reset</button></td>
</tr>
<hr style={{marginTop:'5px',marginBottom:'3px'}} />
*/}
    </div>
    </>
    )}

export default C06_OCREditor