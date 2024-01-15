// React
import { useState , useEffect } from 'react';
// Components


// CSS
//import './C_Row.css'

//****************************************************************************

// Define what is Column
const Row_2D = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    INDEX,
    TheMainCharacter,         // Used for f_Rename, f_Delete, f_UnSelect | List of All Column that IsVisible !== undefined
    setTheMainCharacter,      // Used for f_Rename, f_Delete, f_UnSelect | Update SS_Column
    SS_EditRow,
    setSS_EditRow,
    inputwidth
}:{
    INDEX:number,
    TheMainCharacter:string[],
    setTheMainCharacter:(S:string[])=>void,
    SS_EditRow:[number,'None'|'Edit'|'Delete'|'Insert']
    setSS_EditRow:(S:[number,'None'|'Edit'|'Delete'|'Insert'])=>void
    inputwidth:number
}) => {

//****************************************************************************
// HOOK
//****************************************************************************
let THISROW=TheMainCharacter[INDEX]
//****************************************************************************
// FUNCTION_01: Back
//****************************************************************************

    function f_Delete():void{
        let ss_TheMainCharacter=[...TheMainCharacter]
        ss_TheMainCharacter.splice(INDEX,1)
        setTheMainCharacter(ss_TheMainCharacter)
        setSS_EditRow([INDEX,'None'])
    }

    function f_InsertRow(){
        let let_Input:string=(document.getElementById('C01id_Edit'+INDEX.toString()) as HTMLInputElement).value.toString();
        let ss_Rows=[...TheMainCharacter]
        ss_Rows.splice(INDEX+1,0,let_Input)
        setTheMainCharacter(ss_Rows)
        setSS_EditRow([INDEX,'None'])
    }

    // Actually Update Data
    function f_Update():void{
        let let_Input:string=(document.getElementById('C01id_Edit'+INDEX.toString()) as HTMLInputElement).value.toString();
        let ss_Rows=[...TheMainCharacter]
        ss_Rows[INDEX]=let_Input
        setTheMainCharacter(ss_Rows)
        setSS_EditRow([INDEX,'None'])
    }

//****************************************************************************
// JSX_01: JSX_Row
//****************************************************************************
    let JSX_Row:JSX.Element=<h1></h1>
    let JSX_DefaultRow=<tr style={{width:'100%'}}>
    <td className='C01id_Left'>{INDEX}</td>
    <td><div style={{width:'100%'}}>{THISROW}</div></td>
    <td className='C01id_RightRow'>
        <div className='C01id_EditRowButton'>
            <button style={{width:'45px'}} onClick={()=>setSS_EditRow([INDEX,'Edit'])}>Edit</button>
            <button style={{width:'calc( 100% -45px - 45px)'}} onClick={()=>setSS_EditRow([INDEX,'Insert'])}>Insert</button>
            <button style={{width:'45px'}} onClick={
                ()=>setSS_EditRow([INDEX,'Delete'])
                }>X</button>
            </div>  
    </td></tr>
    JSX_Row=JSX_DefaultRow
    if(SS_EditRow[0]===INDEX){
        if(SS_EditRow[1]==='None'){
            JSX_Row=JSX_DefaultRow
        }
        if(SS_EditRow[1]==='Edit'){
            JSX_Row=<>
<tr className='C01id_HeightLightRow C01id_Left'>
    <td>Original</td>
    <td><div style={{width:'100%'}}>{THISROW}</div></td>
    <div className='C01id_EditRowButton'><button onClick={f_Update}>Ok</button></div>
</tr>
<tr className='C01id_HeightLightRow C01id_Left'>
    <td>Edited</td>
    <td><div style={{display:'flex'}}>
            <input id={'C01id_Edit'+INDEX.toString()} style={{fontSize:'16px',width:`${inputwidth}px`}}></input>
        </div>
    </td>
    <td><div className='C01id_EditRowButton'>
            <button onClick={()=>setSS_EditRow([INDEX,'None'])}>Cancel</button>
        </div>
    </td>
</tr>
</>
        }
        if(SS_EditRow[1]==='Delete'){
        JSX_Row=<>
<tr className='C01id_HeightLightRow C01id_Left'>
    <td>{INDEX}</td>
    <td>{THISROW}</td>
    <td>
        <div className='C01id_EditRowButton' style={{marginLeft:'auto'}}>
        <button onClick={f_Delete}>Ok</button>
        </div>
    </td>
</tr>
<tr className='C01id_HeightLightRow C01id_Left'>
    <td></td>
    <td >Do you sure you want to delete this row?</td>
    <td>
        <div className='C01id_EditRowButton'>
        <button onClick={()=>{setSS_EditRow([INDEX,'None'])}}>Cancel</button>
        </div>
    </td>
</tr>
</>
        }
        if(SS_EditRow[1]==='Insert'){
            JSX_Row=<>
<tr style={{width:'100%'}}>
    <td className='C01id_Left'>{INDEX}</td>
    <td><div style={{width:'100%'}}>{THISROW}</div></td>
    <td className='C01id_RightRow'>
        <div className='C01id_EditRowButton'>
            <button style={{width:'45px'}} onClick={()=>setSS_EditRow([INDEX,'Edit'])}>Edit</button>
            <button style={{width:'calc( 100% -45px - 45px)'}} onClick={()=>setSS_EditRow([INDEX,'Insert'])}>Insert</button>
            <button style={{width:'45px'}} onClick={()=>setSS_EditRow([INDEX,'Delete'])}>X</button>
        </div>  
    </td>
</tr>
<tr style={{width:'100%'}}>
    <td className='C01id_Left'>New Line</td>
    <td><div style={{display:'flex'}}>
            <input id={'C01id_Edit'+INDEX.toString()} style={{fontSize:'16px',width:`${inputwidth}px`}}></input>
        </div>
    </td>
    <td><div className='C01id_EditRowButton'>
            <button style={{width:'50%'}} onClick={f_InsertRow}>Create</button>
            <button style={{width:'50%'}} onClick={()=>setSS_EditRow([INDEX,'None'])}>Cancel</button> 
        </div>
    </td>
</tr>
</>
        }}
    

//****************************************************************************
// OUTPUT
//****************************************************************************
return (
<>

{JSX_Row}
</>
)}

//****************************************************************************
export default Row_2D
