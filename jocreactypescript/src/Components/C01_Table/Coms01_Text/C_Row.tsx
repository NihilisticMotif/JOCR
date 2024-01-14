// React
import { useState , useEffect } from 'react';
// Components


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
    SS_SelectRow,
    setSS_SelectRow
}:{
    // TYPE
    // PROPERTY
    INDEX:number,
    THISROW:string,

    // HOOK: setState()
    SS_Row:string[],
    setSS_Row:(S:string[])=>void,
    SS_SelectRow:string
    setSS_SelectRow:(S:string)=>void
}) => 
{

//****************************************************************************
// HOOK
//****************************************************************************
    const [SS_UpdateRow,setSS_UpdateRow]=useState<string>(THISROW)
    let let_SelectRowIndex=SS_SelectRow.split(',')[0]
    let let_SelectRowMode=SS_SelectRow.split(',')[1]
//****************************************************************************
// FUNCTION_01: Back
//****************************************************************************
    function f_Cancel():void{
        setSS_SelectRow(INDEX.toString()+',None')
    }
//****************************************************************************
// FUNCTION_01: Edit Row
//****************************************************************************
    function f_EditRow():void{
        setSS_SelectRow(INDEX.toString()+',Edit')
    }
//****************************************************************************
// FUNCTION_01: Delete Column
//****************************************************************************
    function f_OpenDelete():void{
        setSS_SelectRow(INDEX.toString()+',Delete')
    }
    function f_Delete():void{
        let ss_Row=[...SS_Row]
        ss_Row.splice(INDEX,1)
        setSS_Row(ss_Row)
        setSS_SelectRow(INDEX.toString()+',None')
    }
//****************************************************************************
// FUNCTION_03: Update
//****************************************************************************
    // Help user to compare user's edited and the original data
    function f_SmallUpdate():void{
        let let_Input:string=(document.getElementById('C01id_Edit'+INDEX.toString()) as HTMLInputElement).value.toString();
        setSS_UpdateRow(let_Input)
    }
    // Turn back the original data
    function f_ResetUpdate():void{
        setSS_UpdateRow(SS_Row[INDEX])
    }
    // Actually Update Data
    function f_Update():void{
        let ss_UpdateRow=SS_UpdateRow
        let ss_Rows=[...SS_Row]
        ss_Rows[INDEX]=ss_UpdateRow
        setSS_Row(ss_Rows)
        setSS_SelectRow(INDEX.toString()+',None')
    }
//****************************************************************************
// JSX_00: JSX_Row_td
//****************************************************************************
    const JSX_EditRow=<td><div style={{width:'100%'}}>{SS_UpdateRow}</div></td>
    const JSX_EditRowInput=<td>
            <div style={{display:'flex'}}>
                <input id={'C01id_Edit'+INDEX.toString()} style={{width:'860px'}}></input>
                <button onClick={f_SmallUpdate} style={{marginLeft:'20px',width:'40px'}}>Ok</button>
                <button onClick={f_ResetUpdate} style={{width:'55px'}}>Reset</button>
            </div></td>
//****************************************************************************
// JSX_01: JSX_Row
//****************************************************************************
    let JSX_Row:JSX.Element=<h1></h1>
    let JSX_DefaultRow=<tr style={{width:'100%'}}>
    <td className='C01id_Left'>{INDEX}</td>
    <td><div style={{width:'100%'}}>{THISROW}</div></td>
    <td className='C01id_RightRow'>
        <div className='C01id_EditRowButton'><button onClick={f_EditRow}>Edit</button>
        <button onClick={f_OpenDelete}>X</button></div></td>
</tr>
    JSX_Row=JSX_DefaultRow
    if(let_SelectRowIndex===INDEX.toString()){
        if(let_SelectRowMode==='None'){
            JSX_Row=JSX_DefaultRow
        }
        if(let_SelectRowMode==='Edit'){
            JSX_Row=<>
                <tr className='C01id_HeightLightRow C01id_Left'>
                    <td>Original</td>
                    <td><div style={{width:'100%'}}>{THISROW}</div></td>
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
        }
        if(let_SelectRowMode==='Delete'){
    JSX_Row=
        <>
        <tr className='C01id_HeightLightRow C01id_Left'>
            <td>{INDEX}</td>
            <td><div style={{width:'100%'}}>{THISROW}</div></td>
            <td className='C01id_Right'></td>
        </tr>
        <tr className='C01id_HeightLightRow C01id_Left'>
            {// https://stackoverflow.com/questions/38302507/react-colspan-not-working
            }
            <td></td>
            <td >Do you sure you want to delete this row?</td>
            <td><div className='C01id_EditRowButton' style={{marginLeft:'auto'}}><button onClick={f_Delete}>Ok</button></div><div className='C01id_EditRowButton'><button onClick={f_Cancel}>Cancel</button></div></td>
        </tr>
        </>
        }
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