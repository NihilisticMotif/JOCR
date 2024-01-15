import './I_Row1D.css'
import { useEffect, useState } from 'react'
const I_Row1D = (
//****************************************************************************
// INPUT
//****************************************************************************
{
TheMainCharacter,
setTheMainCharacter,
OCR_OutputFile
}
:{
TheMainCharacter:string|string[]
setTheMainCharacter:(S:string|string[])=>void
OCR_OutputFile:string[]
})=>{
const let_HeaderHeight=100
const [SS_IsEdit,setSS_IsEdit]=useState<boolean>(false)
const [SS_OnChange,setSS_OnChange]=useState<string>(
    typeof TheMainCharacter==='string'?
        TheMainCharacter
    : 'Error'
)

function f_OnChange(){
let let_Input:string=(document.getElementById('C01id_UpdateStringInTextArea') as HTMLInputElement).value.toString();
setSS_OnChange(let_Input)
}

function f_Update(){
setTheMainCharacter(SS_OnChange)
setSS_IsEdit(false)
}
//****************************************************************************
// OUTPUT
//****************************************************************************
    let JSX_Return=<h1>Error</h1>
    let JSX_Button=<h1>Error</h1>
    if(typeof TheMainCharacter==='string'){if(SS_IsEdit===false){
JSX_Return=<div style={{
    overflowY:'auto',
    marginLeft:'10px',
    height:`calc(100vh - ${0}px - ${102+let_HeaderHeight}px)`}}>
{TheMainCharacter}
</div>
JSX_Button=<button style={{marginLeft:'10px'}} onClick={()=>setSS_IsEdit(true)}>Edit</button>
    }
    else{
JSX_Return=<div style={{
    marginLeft:'0px'
    }}>
<textarea 
id='C01id_UpdateStringInTextArea'
value={SS_OnChange} 
onChange={f_OnChange}
style={{
    fontSize:'14px',
    width:'100%',
    minHeight:`calc(100vh - ${0}px - ${110+let_HeaderHeight}px)`,
    maxHeight:`calc(100vh - ${0}px - ${110+let_HeaderHeight}px)`,
    minWidth:'99%',
    maxWidth:'99%',
    paddingLeft: '10px',
    overflowY:'auto'
    }}>
</textarea>
</div>
JSX_Button=<>
<button style={{marginLeft:'10px'}} onClick={f_Update}>Update</button>
<button style={{marginLeft:'10px'}} onClick={()=>setSS_OnChange(TheMainCharacter)}>Reset</button>
<button style={{marginLeft:'10px'}} onClick={()=>setSS_IsEdit(false)}>Cancel</button>
</>
    }}
    return (
<div className='C01id_Box' style={{
    height:`calc(100vh - ${0}px - ${105+let_HeaderHeight-30-15}px)`,
    width:'100%',
    }}>
<div style={{
    paddingTop:'10px',
    paddingBottom:'10px',
    backgroundColor:'#CCFFAA',
    display:'flex',
    }}>
{JSX_Button}
<th style={{marginLeft:'10px'}} >{OCR_OutputFile[0]}.{OCR_OutputFile[1]}</th>
 </div>
{JSX_Return}
</div>
    )}

export default I_Row1D