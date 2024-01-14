// React
import { useState , useEffect, useRef, useInsertionEffect } from 'react';
// Components
import C_ColumnButton from './Coms02_Table/C_ColumnButton';
import C_Row from './Coms01_Text/C_Row'
// Type
import TS_Row from '../T01_Row/An_Index';
import TS_Column from '../T02_Column/An_Index';

//-------------------------+--------------+----------+
// CSS                     | File Name    | General  |
//-------------------------+--------------+----------+
//import './index00.css'; // | index.jsx    | General  |
//import './index01.css'; // | index.jsx    | Specific |
//-------------------------+--------------+----------+

const M01_Text = (
//****************************************************************************
// INPUT
//****************************************************************************
{
// PARAMETER
// PERPERTY
// HOOK
SS_Text,
setSS_Text,
setSS_OpenPanel,
Header
}:{
// TYPE
// PERPERTY
// HOOK
SS_Text:string[]
setSS_Text:(S:string[])=>void
setSS_OpenPanel:(S:0|1|2)=>void
Header:string
}
) => {
//****************************************************************************
// Function 00: Automately close C02 when the width is too narrow.
//****************************************************************************
const let_HeaderHeight=100
let let_HeaderWidth=1000
const [SS_SelectRow,setSS_SelectRow]=useState<string>('0,None')
//****************************************************************************
// JSX_00: Filter SS_Column.Name by IsVisible=true
//****************************************************************************
    useEffect(()=>{
        let let_C01Width=(document.getElementById('C01id_H')as HTMLElement)!.offsetWidth
        let_HeaderWidth=let_C01Width
    },[])

    const let_Rows:string[] = [...SS_Text]
    const JSX_TH_Rows:JSX.Element[] = let_Rows.map((Row,index) => {
        return (
            <>
            <C_Row
            INDEX={index}
            THISROW={Row}
            SS_Row={SS_Text}
            setSS_Row={setSS_Text}
            SS_SelectRow={SS_SelectRow}
            setSS_SelectRow={setSS_SelectRow}
            />
            </>)
    })

//****************************************************************************
// OUTPUT
//****************************************************************************
    return (

<div id='C01id_H' //ref={Ref_C01}
>

<div id='C01id_InnerTable' style={{overflowX:'hidden'}}>
<table id='C01id_Table' style={{width:'1000px'}}>

<tbody id='C02id_Height' style={{
    height:`calc(100vh - ${0}px - ${105+let_HeaderHeight-30-15}px)`,
    }}>
<tr>
    <th className='C01id_Left'>Index</th>
    <th><div style={{
        //width:`${let_HeaderWidth}px`
        width:`100vh`

}}>{Header}</div></th>
    <th className='C01id_RightRow'><div className='C01id_EditRowButton'>
        Edit</div></th>
</tr>
{
// Data
JSX_TH_Rows}
</tbody>
</table>


</div>

</div>
    )
}

export default M01_Text