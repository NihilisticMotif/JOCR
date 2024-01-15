import { useState } from "react"
import './R_TextDimensions.css'
const U_Split = (
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
    function f_Split(){
        if(typeof TheMainCharacter==='string'){
            let let_Input:string=(document.getElementById('C07id_SplitButton') as HTMLInputElement).value.toString();
            let ss_TheMainCharacter=TheMainCharacter
            let let_Update=ss_TheMainCharacter.split(let_Input)
            setTheMainCharacter(let_Update)
        }
    }
//****************************************************************************
// OUTPUT
//****************************************************************************

    const let_WidthTr='50px'
    return (
        <div className='C06id_R_TextDim'>
<h1 className='C07id_SmallH1'>Split:</h1>
<input  className='C07id_SmallH1' id='C07id_SplitButton'></input>
<div className='C07id_SmallH1'>
    <button onClick={f_Split}>Ok</button>
</div>
        </div>
    )}

export default U_Split