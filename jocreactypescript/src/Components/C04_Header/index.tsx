// React
import { useState } from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_Row from '../T01_Row/An_Index';

// CSS
import './index00.css'
import './index01.css'

const C04_Header = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    // PARAMETER
    // HOOK: setState()
    SS_C02,
    setSS_C02
}:{
    // TYPE
    // HOOK: setState() 
    SS_C02:boolean,
    setSS_C02:(S:boolean)=>void
}
) => {
//****************************************************************************
// FUNCTION_00: Open / Close C02_Input
//****************************************************************************
    
    function f_Open(){
        setSS_C02(true)
    }
    function f_Close(){
        setSS_C02(false)
    }

//****************************************************************************
// JSX
//****************************************************************************
    let JSX_Button=<></>
    if(SS_C02===false){
        JSX_Button=<td><button className='C04id_Header' onClick={f_Open}>Open Input Tab</button></td>
    }
    else{
        JSX_Button=<td><button className='C04id_Header' onClick={f_Close}>Close Input Tab</button></td>
    }
//****************************************************************************
// OUTPUT
//****************************************************************************
return(
<div className='C04id_DivHeader'>
{JSX_Button}
<td><button className='C04id_Header'>Export Data</button></td>
</div>
    )
}

export default C04_Header