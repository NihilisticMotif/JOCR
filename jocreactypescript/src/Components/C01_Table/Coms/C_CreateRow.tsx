// React
//import { useState , useEffect} from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_Row from '../../T01_Row/An_Index';
import {C_Create} from '../../T01_Row/C_Create';


const C_CreateRow = (
//****************************************************************************
// INPUT
//****************************************************************************
{   // PARAMETER
    // HOOK: setState()
    SS_Row,         // Update Columns
    setSS_Row,      // -
}:
{   // TYPE
    // HOOK: setState()
    SS_Row        :TS_Row[],
    setSS_Row     :(S:TS_Row[])=>void,
    // https://stackoverflow.com/questions/60130319/react-typescript-how-to-setstate
}
) => {
//****************************************************************************
// FUNCTION_00: Create New Column
//****************************************************************************
    function f_CreateRow():void{
        // https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
        let let_Name:string=(document.getElementById('C01id_InputName')  as HTMLInputElement).value.toString();
        // By ChatGPT
        let let_Price : number = parseFloat((document.getElementById('C01id_InputPrice') as HTMLInputElement).value);
        let let_Amount:number = parseFloat((document.getElementById('C01id_InputAmount') as HTMLInputElement).value);
        let_Price = isNaN(let_Price) ? 0 : let_Price;
        let_Amount = isNaN(let_Amount) ? 0 : let_Amount;
        
        let ss_Row:TS_Row[]=[... SS_Row]
        let let_NewRow:TS_Row={
            Key:0,
            Name:let_Name,
            Price :let_Price ,
            Amount:let_Amount,
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
// FUNCTION_01: Reset Input
//****************************************************************************
    function f_ResetInput():void{
        alert('LoL')
    }
return(
<div id='C01id_Div1'>
<table>
<h1 id='C01id_Div1Header'>Create New Row</h1>
<hr/>
<div >
<tr><td><h1>Name:   </h1><input id='C01id_InputName'></input></td></tr>
<tr><td><h1>Price:  </h1><input id='C01id_InputPrice'></input></td></tr>
<tr><td><h1>Amount: </h1><input id='C01id_InputAmount'></input></td></tr>
</div>
<hr />
<tr><td>
<div id='C01id_Div1Button'>
<button onClick={f_CreateRow}>Ok</button>
<button onClick={f_ResetInput}>Cancel</button>
</div>
</td></tr>
</table>
</div>
    )
}

export default C_CreateRow