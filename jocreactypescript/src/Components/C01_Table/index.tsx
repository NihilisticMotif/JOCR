// React
import { useState , useEffect, useRef } from 'react';
// Components
import U_DefineTableHeader from './Coms/U_DefineTableHeader'
import R_SortRows from './Coms/R_SortRows';
import C_CreateRow from './Coms/C_CreateRow';
import C_DefineRow from './Coms/C_DefineRow'
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
        
//****************************************************************************
// JSX_00: Filter SS_Column.Name by IsVisible=true
//****************************************************************************
    const let_Rows:TS_Row[] = [...SS_Row]
    const JSX_TH_Rows:JSX.Element[] = let_Rows.map((Row,index) => {
        return (
            <>
            <C_DefineRow
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
    
    /*
    const JSX_TH_Rows:JSX.Element[] = let_Rows.map((Column,index) => 
        {
        // https://stackoverflow.com/questions/44969877/if-condition-inside-of-map-react
        // Default Mode
        if (Column.Display===undefined || Column.Display===0)
        {return <th>{Column.Name}</th>}
        // Rename
        else if (Column.Display===1){
            return <th><input type='text' className='C01id' id={'C01id_Rename'+Column.Key.toString()}></input></th>
        }
        // Delete Warning
        else if (Column.Display===2){
            return  <th >
                    <p className='C01id_P'>Do you want to delete</p> 
                    <p className='C01id_P'>{Column.Name}</p> 
                    </th>
        }
        // Unselect Warning
        else{
            return  <th >
                    <p className='C01id_P'>Do you want to unselect</p> 
                    <p className='C01id_P'>{Column.Name}</p> 
                    </th>
        }
        }
        );
    
    const JSX_BUTTON_Rows:JSX.Element[] = let_Rows.map((Column)=>
        <td>
        <C_DefineColumnButton
            THISROW={Column}
            SS_IndexColumns={SS_IndexColumns}
            setSS_IndexColumns={setSS_IndexColumns}
            SS_Row={SS_Row}
            setSS_Row={setSS_Row}
        />
        </td>
        );
    */
//****************************************************************************
// OUTPUT
//****************************************************************************
    return (
<div id='C01id_Div'>

<C_CreateRow
SS_Row={SS_Row}
setSS_Row={setSS_Row}
SS_Columns={SS_Columns}
setSS_Columns={setSS_Columns}
/>

<div id='C01id_Div2'>
<h3>C01_Table</h3>
<hr />

<U_DefineTableHeader
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
    <th>Index </th>
    {JSX_ColumnsName}
    <th>Edit  </th>
</tr>
<R_SortRows
SS_Row={SS_Row}
setSS_Row={setSS_Row}
SS_Columns={SS_Columns}
/>
</thead>
<tbody>
<tr><td></td><td>i</td></tr>
<tr><td></td><td>i</td></tr>
{JSX_TH_Rows}
</tbody>
</table>
</div>

</div>

</div>
</div>
    )
}

export default C01_Table