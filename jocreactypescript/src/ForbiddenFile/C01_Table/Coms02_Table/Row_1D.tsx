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
    // HOOK: setState()
    SS_Row,         // Used for f_Rename, f_Delete, f_UnSelect | List of All Column that IsVisible !== undefined
    setSS_Row,      // Used for f_Rename, f_Delete, f_UnSelect | Update SS_Column
    SS_SelectRowMode,
    setSS_SelectRowMode
}:{
    // TYPE
    // PROPERTY

    // HOOK: setState()
    SS_Row:string,
    setSS_Row:(S:string)=>void,
    SS_SelectRowMode:string
    setSS_SelectRowMode:(S:string)=>void
}) => 
{

//****************************************************************************
// HOOK
//****************************************************************************
    const [SS_UpdateRow,setSS_UpdateRow]=useState<string>(SS_Row)

    //useEffect(()=>{setSS_SelectRowMode('Edit')},[])

    //const [SS_Display,setSS_Display]=useState<0|1|2|3>((typeof THISROW.Display ==='undefined') ? 0 : THISROW.Display)
    // Set Mode of this component for Rename and/or Delete itself
    //      0|  // Default JSX Column | f_Cancel       => let_DefaultDisplay(0) => Open Default JSX Column
    //      1|  // Rename JSX Column  | f_OpenRename   => let_DefaultDisplay(1) => Open Rename JSX Column 
    //      2|  // Delete JSX Column  | f_OpenDelete   => let_DefaultDisplay(2) => Open Delete JSX Column 
    //useEffect(()=>{
    //    setSS_UpdateRow(THISROW)
    //},[SS_Row])
//****************************************************************************
// FUNCTION_01: Back
//****************************************************************************
    function f_Cancel():void{
        setSS_SelectRowMode('None')
    }
//****************************************************************************
// FUNCTION_01: Rename Column
//****************************************************************************
    function f_OpenRename():void{
        setSS_SelectRowMode('Edit')
    }
//****************************************************************************
// FUNCTION_01: Delete Column
//****************************************************************************
    function f_OpenDelete():void{
        setSS_SelectRowMode('Delete')
    }
    function f_Delete():void{
        setSS_Row('')
        setSS_SelectRowMode('None')
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
        setSS_SelectRowMode('None')
    }
//****************************************************************************
// JSX_00: JSX_Row_td
//****************************************************************************

    const JSX_EditRow=<td><div style={{width:'100%'}}>{SS_UpdateRow}</div></td>
    const JSX_EditRowInput=<td>
            <div style={{display:'flex'}}>
                <input id={'C01id_Edit'+'INDEX.toString()'} style={{width:'860px'}}></input>
                <button onClick={f_SmallUpdate} style={{marginLeft:'20px',width:'40px'}}>Ok</button>
                <button onClick={f_ResetUpdate} style={{width:'55px'}}>Reset</button>
            </div></td>
//****************************************************************************
// JSX_01: JSX_Row
//****************************************************************************
    // JSX = representing in JSX
    // Default Column JSX
    let JSX_Row:JSX.Element=<h1></h1>
    // Default Column JSX
    JSX_Row=<></>

        if(SS_SelectRowMode==='Edit'){
    JSX_Row=<>
<tr className='C01id_HeightLightRow C01id_Left'>
    <td>Original</td>
    <td><div style={{width:'1000px'}}>{SS_Row}</div></td>
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
        else if(SS_SelectRowMode==='Delete'){
    JSX_Row=
<>
<tr className='C01id_HeightLightRow C01id_Left'>
    <td>Death131332</td>
    <td><div style={{width:'1000px'}}>{JSX_EditRow}</div></td>
    <td className='C01id_Right'></td>
</tr>
<tr className='C01id_HeightLightRow C01id_Left'>
    {// https://stackoverflow.com/questions/38302507/react-colspan-not-working
    }
    <td></td>
    <td >Do you sure you want to delete this data?</td>
    <td><div className='C01id_EditRowButton' style={{marginLeft:'auto'}}><button onClick={f_Delete}>Ok</button></div><div className='C01id_EditRowButton'><button onClick={f_Cancel}>Cancel</button></div></td>
</tr>
</>
        }
        else{
        JSX_Row=<tr style={{width:'100%'}}>
    <td className='C01id_Left'></td>
    <td><div style={{width:'1000px'}}>{SS_Row}</div></td>
    <td className='C01id_RightRow'>
        <div className='C01id_EditRowButton'><button onClick={f_OpenRename}>Edit</button>
        <button onClick={f_OpenDelete}>X</button></div></td>
</tr>
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