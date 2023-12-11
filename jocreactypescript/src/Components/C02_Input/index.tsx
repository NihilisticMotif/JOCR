// React
import { useState , useEffect} from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_Row from  '../T01_Row/An_Index';
import TS_Column from  '../T02_Column/An_Index';
import {C01_Create} from  '../T01_Row/C01_Create';
import {C02_Create} from  '../T02_Column/C02_Create'
import {U02_UpdateDisplay} from  '../T02_Column/U02_UpdateDisplay'
import {U02_Edit} from  '../T02_Column/U02_Edit'
import {D02_Delete} from  '../T02_Column/D02_Delete'
import {R02_ReturnIndex} from  '../T02_Column/R02_ReturnIndex'
import {U01_CreateColumn} from  '../T01_Row/U01_CreateColumn'
import {U01_DeleteColumn} from  '../T01_Row/U01_DeleteColumn'

// CSS
import './index00.css'  // General
import './index01.css'  // Specific

const C02_Input = (
//****************************************************************************
// INPUT
//****************************************************************************
{   // PARAMETER
    // HOOK: setState()
    SS_Row,         // Update Columns
    setSS_Row,      // -
    SS_Columns,
    setSS_Columns,
    SS_EditColumn,
    setSS_EditColumn
}:
{   // TYPE
    // HOOK: setState()
    SS_Row        :TS_Row[],
    setSS_Row     :(S:TS_Row[])=>void,
    // https://stackoverflow.com/questions/60130319/react-typescript-how-to-setstate
    SS_Columns:TS_Column[],
    setSS_Columns:(S:TS_Column[])=>void,
    SS_EditColumn:0|1,
    setSS_EditColumn:(S:0|1)=>void
}
) => {
    const css_LineHeight=2

    // useEffect(()=>{
    //     
    // },[])

//****************************************************************************
// FUNCTION_00: Create New Column
//****************************************************************************
    function f_CreateRow():void{
        let let_NewArray:string[]=[]
        let ss_Columns=[...SS_Columns]
        for(let i=0;i<ss_Columns.length;i++){
            //alert('C02id_Input'+ss_Columns[i].Name)
            let let_Input:string=(
                document.getElementById(
                    'C02id_Input'+ss_Columns[i].Name) as HTMLInputElement
                    ).value.toString();

            let_NewArray.push(let_Input)
        }
        let ss_Rows=SS_Row
        let let_UpdateRows=C01_Create(ss_Rows,let_NewArray)
        setSS_Row(let_UpdateRows)
    }

//****************************************************************************
// FUNCTION_01: Create Column
//****************************************************************************
    function f_CreateColumn():void{
        let let_NewColumn:string=(document.getElementById('C02id_CreateColumn')  as HTMLInputElement).value.toString();
        let ss_Columns=[...SS_Columns]
        let let_UpdateColumns=C02_Create(ss_Columns,let_NewColumn)
        if(ss_Columns!==let_UpdateColumns){
        let ss_Rows=[...SS_Row]
        let let_UpdateRow=U01_CreateColumn(ss_Rows)
        setSS_Columns(let_UpdateColumns)
        setSS_Row(let_UpdateRow)
    }
    }

//****************************************************************************
// FUNCTION_02: Open
//****************************************************************************
    function f_Open(THISCOLUMN:TS_Column,MODE:0|1|2):void{
        setSS_EditColumn(1)
        let ss_Columns=[...SS_Columns]
        let let_UpdateColumns=U02_UpdateDisplay(THISCOLUMN,ss_Columns,MODE)
        setSS_Columns(let_UpdateColumns)
    }

//****************************************************************************
// FUNCTION_03: Rename Column
//****************************************************************************
    function f_Rename(THISCOLUMN:TS_Column):void{
        let let_Input:string=(document.getElementById('C02id_RenameColumn'+THISCOLUMN.Key)  as HTMLInputElement).value.toString();
        let ss_Columns=[...SS_Columns]
        let let_UpdateColumn=U02_Edit(THISCOLUMN,ss_Columns,let_Input)
        setSS_Columns(let_UpdateColumn)
    }

//****************************************************************************
// FUNCTION_04: Delete Column
//****************************************************************************
    function f_Delete(THISCOLUMN:TS_Column):void{
        let ss_Columns=[...SS_Columns]
        let let_UpdateColumn=D02_Delete(THISCOLUMN,ss_Columns)
        setSS_Columns(let_UpdateColumn)
        let ss_Rows=[...SS_Row]
        let let_UpdateRow=U01_DeleteColumn(ss_Rows,R02_ReturnIndex(THISCOLUMN,ss_Columns))
        setSS_Row(let_UpdateRow)
    }

//****************************************************************************
// FUNCTION_05: Reset input
//****************************************************************************
    function f_ResetInput() {
        // By ChatGPT
        const inputElements = document.querySelectorAll('input');
        inputElements.forEach((input) => {
          input.value = '';
        });
    }
    
//****************************************************************************
// JSX_00: Input
//****************************************************************************
    let ss_Columns=[...SS_Columns]
    let JSX_Input=ss_Columns.map((Column)=>{
        // Rename Column
        if(Column.Display===1 && SS_EditColumn===1){
            return(
            <tr className='C02id_HeightLightRow'><td>
            <div className='C02id_CreateRowDiv'>
                <h1>{Column.Name} to</h1>
            </div>
            <input id={'C02id_RenameColumn'+Column.Key}  ></input>
            <div style={{display:'flex;',marginRight: 'auto',marginTop:'5px'}}>
                <button onClick={()=>f_Rename(Column)}>Ok</button>
                <button onClick={()=>f_Open(Column,0)}>Cancel</button>
            </div>
            </td></tr>
            )
        }
        // Delete Column
        else if(Column.Display===2 && SS_EditColumn===1){
            return(
            <>
            <tr className='C02id_HeightLightRow' style={{lineHeight: css_LineHeight}}><td>

            <div className='C02id_CreateRowDiv'>
                <h1>Do you sure you want</h1>
            </div>
            </td></tr>

            <tr className='C02id_HeightLightRow' style={{ lineHeight: css_LineHeight, marginTop: '-20px' }}><td>
            <div className='C02id_CreateRowDiv'>
                <h1>to delete {Column.Name}?</h1>
            </div>
            </td></tr>

            <tr className='C02id_HeightLightRow' style={{lineHeight: css_LineHeight, marginTop: '-20px' }}>
                <div style={{display:'flex;',float:'left',marginLeft:'10px'}}>
                <button onClick={()=>f_Delete(Column)}>Ok</button>
                <button onClick={()=>f_Open(Column,0)}>Cancel</button>
                </div>
            </tr>
            </>
            )
        }
        // Default State
        else
        {return(
            <tr><td>
            <div className='C02id_CreateRowButton'>
                <button onClick={()=>f_Open(Column,2)}>X</button>
                <button onClick={()=>f_Open(Column,1)}>...</button>
                <h1>{Column.Name}</h1>
            </div>
            <input id={'C02id_Input'+Column.Name}  ></input>

            </td></tr>
        )}
    })
//****************************************************************************
// OUTPUT
//****************************************************************************
return(
<div id='C02id_Div'>
<hr/>
<h1 id='C02id_DivHeader'>Create New Column</h1>
<div className='C02id_CreateColumnDiv'>
<input id='C02id_CreateColumn'></input>
<button onClick={f_CreateColumn}>Add New Column</button>
</div>

<hr/>
<div >
<h1 id='C02id_DivHeader' >Create New Row</h1>
<table>
{JSX_Input}
</table>

</div>
<tr><td>
<div id='C02id_DivButton'>
<button onClick={f_CreateRow}>Ok</button>
<button onClick={f_ResetInput}>Reset Input</button>
</div>
</td></tr>
<hr />
</div>
    )
}

export default C02_Input