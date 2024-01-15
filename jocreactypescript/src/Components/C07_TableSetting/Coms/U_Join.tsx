import { useState } from "react"
import './R_TextDimensions.css'
const U_Join = (
//****************************************************************************
// INPUT
//****************************************************************************
{
TheMainCharacter,
setTheMainCharacter
}
:{
TheMainCharacter:string[]|string 
setTheMainCharacter:(S:string[]|string)=>void
})=>{
    function f_Join(){
        if(typeof TheMainCharacter!=='string'){
            let let_Input:string=(document.getElementById('C07id_JoinButton') as HTMLInputElement).value.toString();
            let ss_TheMainCharacter=[...TheMainCharacter]
            let let_Update=ss_TheMainCharacter.join(let_Input)
            setTheMainCharacter(let_Update)
        }
    }
    function f_JoinNewLine(){
        if(typeof TheMainCharacter!=='string'){
            let ss_TheMainCharacter=[...TheMainCharacter]
            let let_Update=ss_TheMainCharacter.join('\n')
            setTheMainCharacter(let_Update)
        }
    }
//****************************************************************************
// OUTPUT
//****************************************************************************

    const let_WidthTr='50px'
    return (
        <div className='C06id_R_TextDim'>
<h1 className='C07id_SmallH1'>Join:</h1>
<input  className='C07id_SmallH1' id='C07id_JoinButton'></input>
<div className='C07id_SmallH1'>
    <button onClick={f_Join}>Ok</button>
    <button onClick={f_JoinNewLine}>Join '\n'</button>
</div>
        </div>
    )}

export default U_Join