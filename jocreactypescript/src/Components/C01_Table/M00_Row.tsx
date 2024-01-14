// React
import { useState , useEffect, useRef, useInsertionEffect } from 'react';

const M00_Row = (
//****************************************************************************
// INPUT
//****************************************************************************
{
// PARAMETER
// PERPERTY
// HOOK
SS_Row,
setSS_Row,
setSS_OpenPanel,
Header
}:{
// TYPE
// PERPERTY
// HOOK
SS_Row:string
setSS_Row:(S:string)=>void
setSS_OpenPanel:(S:0|1|2)=>void
Header:string
}
) => {
//****************************************************************************
// Function 00: Automately close C02 when the width is too narrow.
//****************************************************************************
const let_HeaderHeight=100
let let_HeaderWidth=0
//****************************************************************************
// HOOK
//****************************************************************************
    const [SS_UpdateRow,setSS_UpdateRow]=useState<string>(SS_Row)
    const [SS_SelectRow,setSS_SelectRow]=useState<string>('None')

//****************************************************************************
// FUNCTION_01: Back
//****************************************************************************
    function f_Cancel():void{
        setSS_SelectRow('None')
    }
//****************************************************************************
// FUNCTION_01: Rename Column
//****************************************************************************
    function f_OpenRename():void{
        setSS_SelectRow('Edit')
    }

//****************************************************************************
// FUNCTION_03: Update
//****************************************************************************
    // Help user to compare user's edited and the original data
    function f_SmallUpdate():void{
        let let_Input:string=(document.getElementById('C01id_Edit'+'INDEX.toString()') as HTMLInputElement).value.toString();
        setSS_UpdateRow(let_Input)
    }
    // Turn back the original data
    function f_ResetUpdate():void{
        setSS_UpdateRow(SS_Row)
    }
    // Actually Update Data
    function f_Update():void{
        setSS_Row(SS_UpdateRow)
        setSS_SelectRow('None')
    }
//****************************************************************************
// JSX_00: JSX_Row_td
//****************************************************************************

    const JSX_EditRow=<td><div style={{width:'100%'}}>{SS_UpdateRow}</div></td>
    const JSX_EditRowInput=
    <td>
            <div style={{display:'flex',height:'300px'}}>
                <input id={'C01id_Edit'+'INDEX.toString()'} value={SS_UpdateRow} onChange={f_SmallUpdate} style={{fontSize:'14px',width:'860px'}}></input>
            </div></td>
//****************************************************************************
// JSX_01: JSX_Row
//****************************************************************************
    // JSX = representing in JSX
    // Default Column JSX
    let JSX_Row:JSX.Element=<h1></h1>
    // Default Column JSX
    JSX_Row=<></>

        if(SS_SelectRow==='Edit'){
    JSX_Row=<>
<tr className='C01id_HeightLightRow C01id_Left'>
    <td>Original</td>
    <td><div style={{width:'1000px'}}>{SS_Row}</div></td>
    <td></td>
</tr>
<tr className='C01id_HeightLightRow C01id_Left'>
    <td></td>
    {JSX_EditRowInput}
    <td><div className='C01id_EditRowButton'>
                <button onClick={f_SmallUpdate} style={{marginLeft:'0px',width:'35px'}}>Ok</button>
                <button onClick={f_ResetUpdate} style={{width:'55px'}}>Reset</button>
                <button onClick={f_Cancel} style={{width:'65px'}}>Cancel</button>
        </div></td>
</tr>
    </>
        }
        else{
        JSX_Row=<tr style={{width:'100%'}}>
    <td className='C01id_Left'></td>
    <td><div style={{width:'1000px'}}>{SS_Row}</div></td>
    <td className='C01id_RightRow'>
        <div className='C01id_EditRowButton'><button onClick={f_OpenRename}>Edit</button></div></td>
</tr>
        }
//****************************************************************************
// OUTPUT
//****************************************************************************
    return (

<div id='C01id_H' //ref={Ref_C01}
>

<div id='C01id_InnerTable' style={{overflowX:'hidden'}}>
<table id='C01id_Table' style={{width:'100%'}}>
<tbody id='C02id_Height' style={{
    height:`calc(100vh - ${0}px - ${105+let_HeaderHeight-30-15}px)`,
    }}>
<tr>
    <th className='C01id_Left'>Index</th>
    <th><div style={{width:'1000px'}}>{Header}</div></th>
    <th className='C01id_RightRow'><div className='C01id_EditRowButton'>
        Edit</div></th>
</tr>
{JSX_Row}
</tbody>
</table>


</div>

</div>
    )
}

export default M00_Row