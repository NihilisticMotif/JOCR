// React
import { useState , useEffect, useRef } from 'react';
// Components
import U_DefineTableHeader from './Coms/U_DefineTableHeader'
import R_SortRows from './Coms/R_SortRows';
import C_CreateRow from './Coms/C_CreateRow';
import C_DefineRow from './Coms/C_DefineRow'
// Type
import TS_Row from '../T01_Row/An_Index';

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
}:{
// TYPE
// PERPERTY
// HOOK
SS_Row:TS_Row[],
setSS_Row:(S:TS_Row[])=>void,
}
) => {
//****************************************************************************
// HOOK
//****************************************************************************
    

    // Copy SS_Column usinf useState, because I want to rememder the index of each object inside SS_Row of C01_Table.
    const [SS_UpdateRow,setSS_UpdateRow]=useState<TS_Row[]>(SS_Row)
    
    useEffect(()=>{
        //alert(JSON.stringify(SS_Row))
        // https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
        setSS_UpdateRow(SS_Row)
    },[SS_Row])
        

//****************************************************************************
// JSX_00: Filter SS_Column.Name by IsVisible=true
//****************************************************************************
    const let_Rows:TS_Row[] = [...SS_UpdateRow]
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
<table id='C01id_Table'>
<tr>
    <th>Index </th>
    <th>Name  </th>
    <th>Price </th>
    <th>Amount</th>
    <th>Edit  </th>
</tr>
<R_SortRows
SS_Row={SS_Row}
setSS_Row={setSS_Row}
/>
{JSX_TH_Rows}

</table>
</div>

</div>
</div>
    )
}

export default C01_Table