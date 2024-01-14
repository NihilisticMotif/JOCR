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
    setSS_EditRow
}:{
    INDEX:number,
    TheMainCharacter:string[],
    setTheMainCharacter:(S:string[])=>void,
    SS_EditRow:[number,'None'|'Edit'|'Delete']
    setSS_EditRow:(S:[number,'None'|'Edit'|'Delete'])=>void
}) => {

//****************************************************************************
// HOOK
//****************************************************************************
let THISROW=TheMainCharacter[INDEX]
const [SS_OnClick,setSS_OnClick]=useState<string>(THISROW)
//****************************************************************************
// FUNCTION_01: Back
//****************************************************************************

    function f_Delete():void{
        let ss_TheMainCharacter=[...TheMainCharacter]
        ss_TheMainCharacter.splice(INDEX,1)
        setTheMainCharacter(ss_TheMainCharacter)
        setSS_EditRow([INDEX,'None'])
    }

    // Help user to compare user's edited and the original data
    function f_OnChange():void{
        let let_Input:string=(document.getElementById('C01id_Edit'+INDEX.toString()) as HTMLInputElement).value.toString();
        setSS_OnClick(let_Input)
    }
    // Turn back the original data
    function f_ResetUpdate():void{
        setSS_OnClick(TheMainCharacter[INDEX])
    }

    // Actually Update Data
    function f_Update():void{
        let ss_Rows=[...TheMainCharacter]
        ss_Rows[INDEX]=SS_OnClick
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
        <div className='C01id_EditRowButton'><button onClick={()=>setSS_EditRow([INDEX,'Edit'])}>Edit</button></div>
        <div className='C01id_EditRowButton'><button onClick={()=>setSS_EditRow([INDEX,'Edit'])}>Insert</button></div>
        <div className='C01id_EditRowButton'><button onClick={()=>setSS_EditRow([INDEX,'Delete'])}>X</button></div></td>
</tr>
    JSX_Row=JSX_DefaultRow
    if(SS_EditRow[0]===INDEX){}
        if(SS_EditRow[1]==='None'){
            JSX_Row=JSX_DefaultRow
        }
        if(SS_EditRow[1]==='Edit'){
            JSX_Row=<>
<tr className='C01id_HeightLightRow C01id_Left'>
    <td>Original</td>
    <td><div style={{width:'100%'}}>{THISROW}</div></td>
    <td></td>
</tr>
<tr className='C01id_HeightLightRow C01id_Left'>
    <td>Edited</td>
    <td><div style={{width:'100%'}}>{SS_OnClick}</div></td>
    <td><div className='C01id_EditRowButton'><button onClick={f_Update}>Ok</button></div></td>
</tr>
<tr className='C01id_HeightLightRow C01id_Left'>
    <td></td>
    <td><div style={{display:'flex'}}>
            <input id={'C01id_Edit'+INDEX.toString()} style={{width:'860px'}}></input>
            <button onClick={f_OnChange} style={{marginLeft:'20px',width:'40px'}}>Ok</button>
            <button onClick={f_ResetUpdate} style={{width:'55px'}}>Reset</button>
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
    <td><div style={{width:'100%'}}>{THISROW}</div></td>
    <td className='C01id_Right'></td>
</tr>
<tr className='C01id_HeightLightRow C01id_Left'>
    <td></td>
    <td >Do you sure you want to delete this row?</td>
    <td>
        <div className='C01id_EditRowButton' style={{marginLeft:'auto'}}>
        <button onClick={f_Delete}>Ok</button>
        </div>
        <div className='C01id_EditRowButton'>
        <button onClick={()=>{setSS_EditRow([INDEX,'None'])}}>Cancel</button>
        </div>
    </td>
</tr>
</>
        }
    

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
