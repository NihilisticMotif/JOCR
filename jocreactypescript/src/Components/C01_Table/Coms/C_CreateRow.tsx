// React
import { useState , useEffect } from 'react';
// Components


// CSS
//import './C_Row.css'

//****************************************************************************

// Define what is Column
const C_CreateRow = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    TheMainCharacter,         // Used for f_Rename, f_Delete, f_UnSelect | List of All Column that IsVisible !== undefined
    setTheMainCharacter,      // Used for f_Rename, f_Delete, f_UnSelect | Update SS_Column
    inputwidth
}:{
    TheMainCharacter:string[]|string,
    setTheMainCharacter:(S:string[]|string)=>void,
    inputwidth:number
}) => {

//****************************************************************************
// HOOK
//****************************************************************************
//****************************************************************************
// FUNCTION_01: Back
//****************************************************************************
    function f_CreateNewRow(){
        if(typeof TheMainCharacter!=='string'){
        let let_Input:string=(document.getElementById('C01id_CreateNewRow') as HTMLInputElement).value.toString();
        let ss_Rows=[...TheMainCharacter]
        setTheMainCharacter([let_Input,...ss_Rows])
        }
    }

//****************************************************************************
// JSX_01: JSX_Row
//****************************************************************************
    let JSX_Row:JSX.Element=<h1></h1>
    if(typeof TheMainCharacter!=='string'){JSX_Row=<>
<tr style={{width:'100%'}}>
    <td className='C01id_Left'></td>
    <td><div style={{display:'flex'}}>
            <input id={'C01id_CreateNewRow'} style={{fontSize:'16px',width:`${inputwidth}px`}}></input>
        </div>
    </td>
    <td><div className='C01id_EditRowButton'>
            <button style={{width:'100%'}} onClick={f_CreateNewRow}>Create</button>
        </div>
    </td>
</tr>
</>}
    

//****************************************************************************
// OUTPUT
//****************************************************************************
return (
<>

{JSX_Row}
</>
)}

//****************************************************************************
export default C_CreateRow
