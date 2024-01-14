// React
import { useState } from 'react';
import { CSVLink } from "react-csv";
// https://stackoverflow.com/questions/48760815/export-to-csv-button-in-react-table

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type


// CSS
import './index00.css'
import './index01.css'

const C03_Header = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    SS_OpenPanel,
    setSS_OpenPanel,
}:{
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
    let let_ExportCharacter:string=''
    //if(typeof TheMainCharacter==='string'){
    //    let_ExportCharacter=TheMainCharacter
    //}else{
    //    let_ExportCharacter=TheMainCharacter.map()
    //}

//****************************************************************************
// JSX_01: Open Export Data
//****************************************************************************

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
{/*JSX_Button*/}
{/*JSX_Export*/}
</div>
    )
}

export default C03_Header