// React
import { useState , useEffect, useRef } from 'react';
// Components
import C_TopButton from './Coms/C_TopButton'
import C_ColumnButton from './Coms/C_ColumnButton';
import C_Row from './Coms/C_Row'
// Type
import TS_Row from '../T01_Row/An_Index';
import TS_Column from '../T02_Column/An_Index';

//-------------------------+--------------+----------+
// CSS                     | File Name    | General  |
//-------------------------+--------------+----------+
import './index00.css'; // | index.jsx    | General  |
import './index01.css'; // | index.jsx    | Specific |
//-------------------------+--------------+----------+

const C01_Table = (
//****************************************************************************
// INPUT
//****************************************************************************
{
// PARAMETER
// PERPERTY
// HOOK
SS_Row,
setSS_Row,
SS_Columns,
setSS_Columns,
SS_EditColumn,
setSS_EditColumn,
SS_C02,
setSS_C02
}:{
// TYPE
// PERPERTY
// HOOK
SS_Row:TS_Row[],
setSS_Row:(S:TS_Row[])=>void,
SS_Columns:TS_Column[],
setSS_Columns:(S:TS_Column[])=>void,
SS_EditColumn:0|1,
setSS_EditColumn:(S:0|1)=>void,
SS_C02:boolean,
setSS_C02:(S:boolean)=>void
}
) => {
    useEffect(() => {
        
    }, []);

//****************************************************************************
// JSX_00: Filter SS_Column.Name by IsVisible=true
//****************************************************************************
    const let_Rows:TS_Row[] = [...SS_Row]
    const JSX_TH_Rows:JSX.Element[] = let_Rows.map((Row,index) => {
        return (
            <>
            <C_Row
            INDEX={index}
            THISROW={Row}
            SS_Row={SS_Row}
            setSS_Row={setSS_Row}
            />
            </>)
    })
    const ss_Columns=[...SS_Columns]
    const JSX_ColumnsName=ss_Columns.map((Column)=>{
        return (
            <th>{Column.Name}</th>
        )
    })
    const JSX_Input=ss_Columns.map((Column)=>{
        return (
            <td>{Column.Name}</td>
        )
    })
//****************************************************************************
// OUTPUT
//****************************************************************************
    return (

<div id='C01id_H'>
<hr />

<C_TopButton
// Export Data
// Rename Table
    SS_Row    = {SS_Row}
    SS_C02    = {SS_C02}
    setSS_C02 = {setSS_C02}
/>
<hr />

<div id='C01id_DivTable'>
<div id='C01id_InnerTable'>
<table id='C01id_Table'>
<thead>
<tr>
    <th className='C01id_Left'>Index </th>
    {JSX_ColumnsName}
    <th className='C01id_Right'>Edit  </th>
</tr>
{
// Button under each column.
// 1. rename column
// 2. delete column
// 3. sort data
// 4. change data type
}
<C_ColumnButton
SS_Row={SS_Row}
setSS_Row={setSS_Row}
SS_Columns={SS_Columns}
setSS_Columns={setSS_Columns}
SS_EditColumn={SS_EditColumn}
setSS_EditColumn={setSS_EditColumn}
/>
</thead>
<tbody id='C02id_Height' style={{}}>
{
// Data
JSX_TH_Rows}
</tbody>
</table>
</div>

</div>

</div>
    )
}

export default C01_Table