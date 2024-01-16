import { useState } from "react"
const U_Aff = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    SS_Aff,
    setSS_Aff,
    SS_AffOrigin,
    setSS_AffOrigin,
setSS_UseEffect,
SS_IsActivate,
setSS_IsActivate,
DefaultOrientation
}
:{
    SS_Aff:number[]
    setSS_Aff:(S:number[])=>void
    SS_AffOrigin:string[]
    setSS_AffOrigin:(S:string[])=>void
setSS_UseEffect:(S:boolean)=>void
SS_IsActivate:boolean[]
setSS_IsActivate:(S:boolean[])=>void,
DefaultOrientation:number
})=>{
    const [SS_AffSTR,setSS_AffSTR]=useState<string[]>([
        SS_Aff[0].toString(),   // Scale X
        SS_Aff[1].toString(),   // Scale Y
        SS_Aff[2].toString(),   // Position X
        SS_Aff[3].toString(),   // Position Y
        SS_Aff[4].toString(),   // Rotation
    ])
//****************************************************************************
// FUNCTION 00: UPDATE INPUT
//****************************************************************************

    function f_SuggestRotation(){
        let ss_Aff=[...SS_Aff]
        let ss_AffSTR=[...SS_AffSTR]
        ss_Aff[4]=DefaultOrientation
        ss_AffSTR[4]=DefaultOrientation.toString()
        setSS_Aff(ss_Aff)
        setSS_AffSTR(ss_AffSTR)
    }

    function f_UpdateAff(id:number,defaultt:0|1){
        let let_Input:string=(
            document.getElementById(
                'C04id_Aff'+id.toString()) as HTMLInputElement)
            .value.toString();
        let ss_Aff=[...SS_Aff]
        let ss_AffSTR=[...SS_AffSTR]
        if(isNaN(parseFloat(let_Input))===false){
            ss_Aff[id]=parseFloat(let_Input)
            ss_AffSTR[id]=let_Input
        }
        else{
            ss_Aff[id]=defaultt
            ss_AffSTR[id]=defaultt.toString()
        }
        setSS_Aff(ss_Aff)
        setSS_AffSTR(ss_AffSTR)
    }

    function f_ResetAff(id:number,defaultt:0|1){
        let ss_Aff=[...SS_Aff]
        let ss_AffSTR=[...SS_AffSTR]
        ss_Aff[id]=defaultt
        ss_AffSTR[id]=defaultt.toString()
        setSS_Aff(ss_Aff)
        setSS_AffSTR(ss_AffSTR)
    }

//****************************************************************************
// FUNCTION 01: UPDATE INPUT SCALE
//****************************************************************************

    function f_UpdateScale(){
        let let_Input:string=(document.getElementById('C04id_AffScale') as HTMLInputElement).value.toString();
        let ss_Aff=[...SS_Aff]
        let ss_AffSTR=[...SS_AffSTR]
        if(isNaN(parseFloat(let_Input))===false){
            ss_Aff[0]=parseFloat(let_Input)
            ss_Aff[1]=parseFloat(let_Input)
            ss_AffSTR[0]=let_Input
            ss_AffSTR[1]=let_Input
        }
        else{
            ss_Aff[0]=1
            ss_Aff[1]=1
            ss_AffSTR[0]='1'
            ss_AffSTR[1]='1'
        }
        setSS_Aff(ss_Aff)
        setSS_AffSTR(ss_AffSTR)
    }

    function f_ResetScale(){
        let ss_Aff=[...SS_Aff]
        let ss_AffSTR=[...SS_AffSTR]
        ss_Aff[0]=1
        ss_Aff[1]=1
        ss_AffSTR[0]='1'
        ss_AffSTR[1]='1'
        setSS_Aff(ss_Aff)
        setSS_AffSTR(ss_AffSTR)
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
    const let_WidthTr='50px'
    return (
        <>
        <div className='C04id_Scalar' style={{display:'inline-block',marginLeft:'10px',margin:'auto'}}>
<h1>Linear Map</h1>
{
//****************************************************************************
// Scale = SS_Aff[0] = SS_Aff[1]
//****************************************************************************
}
<hr style={{marginTop:'5px',marginBottom:'3px'}} />
<tr>
    <td style={{width:let_WidthTr}} >Scale</td>
</tr>
<tr>
    <td><input  style={{marginTop:'3px'}} id='C04id_AffScale'></input></td>
    <td><button style={{marginTop:'3px'}} onClick={f_UpdateScale}>Ok</button></td>
    <td><button style={{marginTop:'3px'}} onClick={f_ResetScale}>Reset</button></td>
</tr>
{
//****************************************************************************
// Scale X = SS_Aff[0]
//****************************************************************************
}
<hr style={{marginTop:'5px',marginBottom:'3px'}} />
<tr>
    <td style={{width:let_WidthTr}} >Scale X</td>
    <td>{SS_AffSTR[0]}</td>
</tr>
<tr>
    <td><input  style={{marginTop:'3px'}} id='C04id_Aff0'></input></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>f_UpdateAff(0,1)}>Ok</button></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>f_ResetAff(0,1)}>Reset</button></td>
</tr>
{
//****************************************************************************
// Scale Y = SS_Aff[1]
//****************************************************************************
}
<hr style={{marginTop:'5px',marginBottom:'3px'}} />
<tr>
    <td style={{width:let_WidthTr}} >Scale Y</td>
    <td>{SS_AffSTR[1]}</td>
</tr>
<tr>
    <td><input  style={{marginTop:'3px'}} id='C04id_Aff1'></input></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>f_UpdateAff(1,1)}>Ok</button></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>f_ResetAff(1,1)}>Reset</button></td>
</tr>
{
//****************************************************************************
// Rotation = SS_Aff[4]
//****************************************************************************
}
<hr style={{marginTop:'5px',marginBottom:'3px'}} />
<tr>
    <td style={{width:let_WidthTr}} >Rotation</td>
    <td>{SS_AffSTR[4]}</td>
    <td><button style={{marginTop:'3px',width:'55px',paddingLeft:'0px'}} onClick={f_SuggestRotation}>Suggest</button></td>
</tr>
<tr>
    <td><input  style={{marginTop:'3px'}} id='C04id_Aff4'></input></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>f_UpdateAff(4,0)}>Ok</button></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>f_ResetAff(4,0)}>Reset</button></td>
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
<td><button style={{marginTop:'3px'}} onClick={f_UpdateOrigin}>Ok</button></td>
</tr>
{
//****************************************************************************
// Pos X = SS_Aff[2]
//****************************************************************************
}
<hr style={{marginTop:'5px',marginBottom:'3px'}} />
<tr>
    <td style={{width:let_WidthTr}} >Pos X</td>
    <td>{SS_AffSTR[2]}</td>
</tr>
<tr>
    <td><input  style={{marginTop:'3px'}} id='C04id_Aff2'></input></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>f_UpdateAff(2,0)}>Ok</button></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>f_ResetAff(2,0)}>Reset</button></td>
</tr>
{
//****************************************************************************
// Pos Y = SS_Aff[3]
//****************************************************************************
}
<hr style={{marginTop:'5px',marginBottom:'3px'}} />
<tr>
    <td style={{width:let_WidthTr}} >Pos Y</td>
    <td>{SS_AffSTR[3]}</td>
</tr>
<tr>
    <td><input  style={{marginTop:'3px'}} id='C04id_Aff3'></input></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>f_UpdateAff(3,0)}>Ok</button></td>
    <td><button style={{marginTop:'3px'}} onClick={()=>f_ResetAff(3,0)}>Reset</button></td>
</tr>
<hr style={{marginTop:'5px',marginBottom:'3px'}} />

    </div>
    </>
    )}

export default U_Aff