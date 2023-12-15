// React
import { useState } from 'react';
import { CSVLink } from "react-csv";
// https://stackoverflow.com/questions/48760815/export-to-csv-button-in-react-table

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_Row from '../T01_Row/An_Index';
import TS_Column from '../T02_Column/An_Index';

// CSS
import './index00.css'
import './index01.css'

const C03_Header = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    // PARAMETER
    // HOOK: setState()
    SS_Row,
    SS_Columns,
    SS_C02,
    setSS_C02,
    SS_OpenPanel,
    setSS_OpenPanel,
}:{
    // TYPE
    // HOOK: setState() 
    SS_Row:TS_Row[],
    SS_Columns:TS_Column[],
    SS_C02:boolean,
    setSS_C02:(S:boolean)=>void,
    SS_OpenPanel:0|1|2,
    setSS_OpenPanel:(S:0|1|2)=>void,
}
) => {
//****************************************************************************
// HOOK
//****************************************************************************
    const[SS_Open,setSS_Open]=useState<boolean>(false)
    const[SS_FileName,setSS_FileName]=useState<string>('filename')

//****************************************************************************
// VARIABLE: Data Cleaning
//****************************************************************************
    let let_RowData=SS_Row.map((Row)=>{
        return Row.Array
    })

    let let_ColumnData=SS_Columns.map((Column)=>{
        return Column.Name
    })

    let let_Data=[let_ColumnData,...let_RowData]

//****************************************************************************
// FUNCTION_00: Open / Close C02_Input
//****************************************************************************
    function f_Open(){
        setSS_C02(true)
        //if(SS_IsNarrow===false){
        //    setSS_C02(true)
        //}
    }
    function f_Close(){
        setSS_C02(false)
    }

//****************************************************************************
// FUNCTION_01: Edit File Name
//****************************************************************************
    function f_FileName(){
        let let_Word=(document.getElementById('C03id_FileName') as HTMLInputElement).value.toString()
        setSS_FileName(let_Word)
    }

//****************************************************************************
// FUNCTION_02: Open C04_Canvas
//****************************************************************************
    function f_OpenC04(){
        setSS_OpenPanel(2)
    }

//****************************************************************************
// FUNCTION_03: Close C01_Table
//****************************************************************************
    function f_CloseC01(){
        // 1 = have only C04
        setSS_OpenPanel(1)
    }

//****************************************************************************
// JSX_00: Open C02
//****************************************************************************
    let JSX_Button=<></>
    if(SS_C02===false){
        JSX_Button=<td><button className='C03id_Header' onClick={f_Open}>Open Input Tab</button></td>
    }
    else{
        JSX_Button=<td><button className='C03id_Header' onClick={f_Close}>Close Input Tab</button></td>
    }

//****************************************************************************
// JSX_01: Open Export Data
//****************************************************************************
    let JSX_Export=<></>
    if(SS_Open===true){
        JSX_Export=<td>
            <input id='C03id_FileName' style={{height:'23px',fontSize:'14px'}} onChange={f_FileName}></input>
            <button className='C03id_Header'>
            <CSVLink data={let_Data} style={{color:'black'}} filename={SS_FileName}>
                Download CSV
            </CSVLink>
            </button>
            <button className='C03id_Header' onClick={()=>setSS_Open(false)}>Cancel</button>
        </td>
    }
    else{
        JSX_Export=<td><button className='C03id_Header' onClick={()=>setSS_Open(true)}>Export Data</button></td>
    }

//****************************************************************************
// JSX_02: Open C04_Canvas or Close C01_Table
//****************************************************************************
    let JSX_OpenC04=<td><button className='C03id_Header' onClick={f_OpenC04}>+</button></td>
    if(SS_OpenPanel===2){
        JSX_OpenC04=<td><button className='C03id_Header' onClick={f_CloseC01}>X</button></td>
    }
    else if(SS_OpenPanel===0){
        JSX_OpenC04=<td><button className='C03id_Header' onClick={f_OpenC04}>+</button></td>
    }

//****************************************************************************
// OUTPUT
//****************************************************************************
return(
<div id='C03id_DivHeader'>
{JSX_OpenC04}
{JSX_Button}
{JSX_Export}
</div>
    )
}

export default C03_Header