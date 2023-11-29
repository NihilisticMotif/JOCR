// React
//import { useState , useEffect} from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_Row from '../../T01_Row/An_Index';
import TS_Column from '../../T02_Column/An_Index';
import {C_Create} from '../../T01_Row/C_Create';
import {C_CreateColumn} from '../../T02_Column/C_CreateColumn'

const C_CreateRow = (
//****************************************************************************
// INPUT
//****************************************************************************
{   // PARAMETER
    // HOOK: setState()
    SS_Row,         // Update Columns
    setSS_Row,      // -
    SS_Columns,
    setSS_Columns
}:
{   // TYPE
    // HOOK: setState()
    SS_Row        :TS_Row[],
    setSS_Row     :(S:TS_Row[])=>void,
    // https://stackoverflow.com/questions/60130319/react-typescript-how-to-setstate
    SS_Columns:TS_Column[]
    setSS_Columns:(S:TS_Column[])=>void
}
) => {
//****************************************************************************
// FUNCTION_00: Create New Column
//****************************************************************************
    function f_CreateRow():void{
        alert('Hello')
        /*
        // https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
        let let_Name:string=(document.getElementById('C01id_InputName')  as HTMLInputElement).value.toString();
        // By ChatGPT
        //let let_Price : number = parseFloat((document.getElementById('C01id_InputPrice') as HTMLInputElement).value);
        //let_Price = isNaN(let_Price) ? 0 : let_Price;
        
        let ss_Row:TS_Row[]=[... SS_Row]
        let let_NewRow:TS_Row={
            Key:0,
            Name:let_Name,
        }
        let let_UpdateRows:TS_Row[]=C_Create(ss_Row,let_NewRow)
        setSS_Row(let_UpdateRows)
        /*
        // Calculate the new SS_Column
        let let_NewName:string=(document.getElementById('C01id_CreateNewColumn') as HTMLInputElement).value.toString();
        let ss_Row:TS_Row[]=[... SS_Row]
        let let_UpdateColumns:TS_Row[]=C_Create(SS_Row,let_NewName)
        
        // Calculate the order of SS_Column inside of C01_Table
        let ss_IndexColumns:number[]=[...SS_IndexColumns]
        let let_UpdateIndexColumns:number[]=[...ss_IndexColumns,let_UpdateColumns[0].Key]
        
        // Update both the SS_IndexColumns and SS_Row
        setSS_IndexColumns(let_UpdateIndexColumns)
        setSS_Row(let_UpdateColumns)
        */
    }

//****************************************************************************
// FUNCTION_01: Create Column
//****************************************************************************
    function f_CreateColumn():void{
        let let_NewColumn:string=(document.getElementById('C01id_CreateColumn')  as HTMLInputElement).value.toString();
        let ss_Columns=[...SS_Columns]
        let let_UpdateColumns=C_CreateColumn(ss_Columns,let_NewColumn)
        setSS_Columns(let_UpdateColumns)

        let ss_Rows=SS_Row
        for(let i=0;i<ss_Rows.length;i++){
            ss_Rows[i].Array.push('-')
        }
        setSS_Row(ss_Rows)
    }
//****************************************************************************
// JSX_00: Input
//****************************************************************************
    let ss_Columns=SS_Columns
    const JSX_Input=ss_Columns.map((Column)=>{
        return(
            <tr><td>

            <div className='C01id_CreateRowDiv'>
                <h1>{Column.Name}:   </h1>
                <div className='C01id_CreateRowButton'>
                <button>X</button>
                <button>...</button>
                </div>
            </div>

            <input id={'C01id_Input'+Column}></input>

            </td></tr>
        )
    })
//****************************************************************************
// OUTPUT
//****************************************************************************
return(
<div id='C01id_Div1'>

<h1 id='C01id_Div1Header'>Create New Row</h1>
<hr/>
<div className='C01id_CreateColumnDiv'>
<input id='C01id_CreateColumn'></input>
<button onClick={f_CreateColumn}>Add New Column</button>
</div>

<hr/>
<div >
<table>
{JSX_Input}
</table>

</div>
<hr />
<tr><td>
<div id='C01id_Div1Button'>
<button onClick={f_CreateRow}>Ok</button>
<button>Cancel</button>
</div>
</td></tr>
</div>
    )
}

export default C_CreateRow