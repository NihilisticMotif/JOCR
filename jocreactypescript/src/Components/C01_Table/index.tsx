// React
import { useState , useEffect, useRef } from 'react';
// Components
import C_TopButton from './Coms/C_TopButton'
import C_ColumnButton from './Coms/C_ColumnButton';
import C_Input from './Coms/C_Input';
import C_Row from './Coms/C_Row'
// Type
import TS_Row from '../T01_Row/An_Index';
import TS_Column from '../T02_Column/An_Index';
// CSS
import './index.css';

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
setSS_Columns
//setSS_Columns

}:{
// TYPE
// PERPERTY
// HOOK
SS_Row:TS_Row[],
setSS_Row:(S:TS_Row[])=>void,
SS_Columns:TS_Column[],
setSS_Columns:(S:TS_Column[])=>void,
}
) => {
//****************************************************************************
// HOOK
//****************************************************************************
        const [SS_EditColumn,setSS_EditColumn]=useState<0|1>(0)
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
<div id='C01id_Div'>
{
// Input tab
}
<C_Input
SS_Row={SS_Row}
setSS_Row={setSS_Row}
SS_Columns={SS_Columns}
setSS_Columns={setSS_Columns}
SS_EditColumn={SS_EditColumn}
setSS_EditColumn={setSS_EditColumn}
/>

<div id='C01id_Div2'>
<h3>C01_Table</h3>
<hr />

<C_TopButton
// Export Data
// Rename Table
    SS_Row    = {SS_Row}
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
<tbody>

{
// Data
JSX_TH_Rows}
</tbody>
</table>
</div>

</div>

</div>
</div>
    )
}

export default C01_Table