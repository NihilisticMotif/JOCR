// React
import { useState , useEffect } from 'react';
// Components

// Type
import TS_Row from '../../T01_Row/An_Index';
import {U01_EditRow} from '../../T01_Row/U01_EditRow'
import {D01_Delete} from '../../T01_Row/D01_Delete'
import {U01_UpdateDisplay} from '../../T01_Row/U01_UpdateDisplay'

// CSS
//import './C_Row.css'

//****************************************************************************

// Define what is Column
const C_Row = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    // PARAMETER
    // PROPERTY
    INDEX,
    THISROW,
    // HOOK: setState()
    SS_Row,         // Used for f_Rename, f_Delete, f_UnSelect | List of All Column that IsVisible !== undefined
    setSS_Row,      // Used for f_Rename, f_Delete, f_UnSelect | Update SS_Column
}:{
    // TYPE
    // PROPERTY
    INDEX:number,
    THISROW:TS_Row,

    // HOOK: setState()
    SS_Row:TS_Row[],
    setSS_Row:(S:TS_Row[])=>void,
}) => 
{

//****************************************************************************
// HOOK
//****************************************************************************

    const [SS_UpdateRow,setSS_UpdateRow]=useState<string[]>(THISROW.Array)
    //const [SS_Display,setSS_Display]=useState<0|1|2|3>((typeof THISROW.Display ==='undefined') ? 0 : THISROW.Display)
    // Set Mode of this component for Rename and/or Delete itself
    //      0|  // Default JSX Column | f_Cancel       => let_DefaultDisplay(0) => Open Default JSX Column
    //      1|  // Rename JSX Column  | f_OpenRename   => let_DefaultDisplay(1) => Open Rename JSX Column 
    //      2|  // Delete JSX Column  | f_OpenDelete   => let_DefaultDisplay(2) => Open Delete JSX Column 
    useEffect(()=>{setSS_UpdateRow(THISROW.Array)},[SS_Row])
//****************************************************************************
// FUNCTION_01: Back
//****************************************************************************
    function f_Cancel():void{
        let ss_Row=[...SS_Row]
        let let_UpdateRows=U01_UpdateDisplay(THISROW,ss_Row,0)
        setSS_Row(let_UpdateRows)
    }
//****************************************************************************
// FUNCTION_01: Rename Column
//****************************************************************************

    function f_OpenRename():void{
        let ss_Row=[...SS_Row]
        let let_UpdateRows=U01_UpdateDisplay(THISROW,ss_Row,1)
        setSS_Row(let_UpdateRows)
    }

//****************************************************************************
// FUNCTION_01: Delete Column
//****************************************************************************

    function f_OpenDelete():void{
        let ss_Row=[...SS_Row]
        let let_UpdateRows=U01_UpdateDisplay(THISROW,ss_Row,2)
        setSS_Row(let_UpdateRows)
    }

    function f_Delete():void{
        let ss_Row=[...SS_Row]
        let let_UpdateRows=D01_Delete(THISROW,ss_Row)
        setSS_Row(let_UpdateRows)
    }

//****************************************************************************
// FUNCTION_03: Update
//****************************************************************************
    // Help user to compare user's edited and the original data
    function f_SmallUpdate(NAME:string,INDEX:number):void{
        let ss_UpdateRow=[...SS_UpdateRow]
        let let_Input:string=(document.getElementById('C01id_Edit'+NAME) as HTMLInputElement).value.toString();
        if(let_Input.length<30){
            ss_UpdateRow.splice(INDEX, 1,let_Input)
            setSS_UpdateRow(ss_UpdateRow)
        }
    }
    // Turn back the original data
    function f_ResetUpdate(INDEX:number):void{
        let ss_UpdateRow=[...SS_UpdateRow]
        let ss_Row=[...THISROW.Array]
        ss_UpdateRow.splice(INDEX, 1,ss_Row[INDEX])
        setSS_UpdateRow(ss_UpdateRow)
    }
    // Actually Update Data
    function f_Update():void{
        let ss_UpdateRow=[...SS_UpdateRow]
        let ss_Rows=[...SS_Row]
        let let_UpdateRow = U01_EditRow(THISROW,ss_Rows,ss_UpdateRow)
        //alert(JSON.stringify(let_UpdateRow))
        setSS_Row(let_UpdateRow)
    }
//****************************************************************************
// JSX_00: JSX_Row_td
//****************************************************************************
    let let_ThisRow=[...THISROW.Array]
    const JSX_Row_TD=let_ThisRow.map((Row)=>{
        return(
            <td>{Row}</td>
        )
    })
    let ss_UpdateRow=[...SS_UpdateRow]
    const JSX_EditRow=ss_UpdateRow.map((Row)=>{
        return(
            <td>{Row}</td>
        )
    })

    const JSX_EditRowInput=let_ThisRow.map((Row,index)=>{
        return(
            <td><div className='C01id_EditRowButton'>
                <input id={'C01id_Edit'+Row}></input>
                <button onClick={()=>f_SmallUpdate(Row,index)}>Ok</button>
                <button onClick={()=>f_ResetUpdate(index)} >Reset</button>
            </div></td>
        )
    })
//****************************************************************************
// JSX_01: JSX_Row
//****************************************************************************
    // JSX = representing in JSX
    // Default Column JSX
    let JSX_Row:JSX.Element=<h1></h1>
    // Default Column JSX
    if (THISROW.Display===0 || typeof THISROW.Display==='undefined'){
    JSX_Row=
<tr>
    <td className='C01id_Left'>{INDEX}</td>
    {JSX_Row_TD}
    <td className='C01id_RightRow'><div className='C01id_EditRowButton'><button onClick={f_OpenRename}>Edit</button><button onClick={f_OpenDelete}>X</button></div></td>
</tr>
    }else if (THISROW.Display===1){
        JSX_Row=
<>
<tr className='C01id_HeightLightRow C01id_Left'>
    <td>Original</td>
    {JSX_Row_TD}
    <td></td>
</tr>
<tr className='C01id_HeightLightRow C01id_Left'>
    <td>Edited</td>
    {JSX_EditRow}
    <td><div className='C01id_EditRowButton'><button onClick={f_Update}>Ok</button></div></td>
</tr>
<tr className='C01id_HeightLightRow C01id_Left'>
    <td></td>
    {JSX_EditRowInput}
    <td><div className='C01id_EditRowButton'><button onClick={f_Cancel}>Cancel</button></div></td>
</tr>
</>
    // Delete Column JSX
    }else if (THISROW.Display===2){
        JSX_Row=
<>
<tr className='C01id_HeightLightRow C01id_Left'>
    <td>{INDEX}</td>
    {JSX_Row_TD}
    <td className='C01id_Right'></td>
</tr>
<tr className='C01id_HeightLightRow C01id_Left'>
    {// https://stackoverflow.com/questions/38302507/react-colspan-not-working
    }
    <td colSpan={THISROW.Array.length}>Do you sure you want to delete this row?</td>
    <td><div className='C01id_EditRowButton'><button onClick={f_Delete}>Ok</button></div></td>
    <td><div className='C01id_EditRowButton'><button onClick={f_Cancel}>Cancel</button></div></td>
</tr>
</>
    // Unselect Column JSX
    }

//****************************************************************************
// OUTPUT
//****************************************************************************
return (
<>
{JSX_Row}
</>
)
}
//****************************************************************************
export default C_Row