// React
import { useState, useEffect } from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_Row from '../../T01_Row/An_Index';
import TS_Column from '../../T02_Column/An_Index'
import {U02_UpdateDisplay} from '../../T02_Column/U02_UpdateDisplay'
import {U02_Edit} from '../../T02_Column/U02_Edit'
import {D02_Delete} from '../../T02_Column/D02_Delete'
import {R02_ReturnIndex} from '../../T02_Column/R02_ReturnIndex'
import {U01_DeleteColumn} from '../../T01_Row/U01_DeleteColumn'

// CSS
import './C_ColumnButton.css'

const C_ColumnButton = (
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
//****************************************************************************
// HOOK
//****************************************************************************
    const [SS_IsD,setSS_IsD] = useState<boolean>(true)

//****************************************************************************
// FUNCTION_00: Sort Row
//****************************************************************************
    function f_Sort(index:number):any{
        // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
        // https://www.w3schools.com/jsref/jsref_sort.asp
        // https://stackoverflow.com/questions/39583327/javascript-sort-array-of-arrays-by-second-element-in-each-inner-array
        let ss_Rows=[...SS_Row]
        ss_Rows.sort((a,b) => a.Array[index]?.localeCompare(b.Array[index]));
        /*
        Cannot read properties of undefined (reading 'localeCompare')
TypeError: Cannot read properties of undefined (reading 'localeCompare')
        */
        if(SS_IsD){
            setSS_Row(ss_Rows)
            setSS_IsD(false)
        }
        else{
            setSS_Row(ss_Rows.reverse())
            setSS_IsD(true)
        }
    }

//****************************************************************************
// FUNCTION_02: Open
//****************************************************************************

    function f_Open(THISCOLUMN:TS_Column,MODE:0|1|2):void{
        setSS_EditColumn(0)
        let ss_Columns=[...SS_Columns]
        let let_UpdateColumns=U02_UpdateDisplay(THISCOLUMN,ss_Columns,MODE)
        setSS_Columns(let_UpdateColumns)
    }

//****************************************************************************
// FUNCTION_03: Rename Column
//****************************************************************************
    function f_Rename(THISCOLUMN:TS_Column):void{
        let let_Input:string=(document.getElementById('C01id_RenameColumn'+THISCOLUMN.Key)  as HTMLInputElement).value.toString();
        let ss_Columns=[...SS_Columns]
        let let_UpdateColumn=U02_Edit(THISCOLUMN,ss_Columns,let_Input)
        setSS_Columns(let_UpdateColumn)
    }

//****************************************************************************
// FUNCTION_04: Delete Column
//****************************************************************************
    function f_Delete(THISCOLUMN:TS_Column):void{
        let ss_Rows=[...SS_Row]
        let ss_Columns=[...SS_Columns]
        
        let let_UpdateRow=U01_DeleteColumn(ss_Rows,R02_ReturnIndex(THISCOLUMN,ss_Columns))
        let let_UpdateColumn=D02_Delete(THISCOLUMN,ss_Columns)

        setSS_Row(let_UpdateRow)
        setSS_Columns(let_UpdateColumn)

        if(SS_Columns.length==1){
            setSS_Row([{Key:0 ,Next:1  , Array:['Xedni Wor'],Display:4}])
        }
    }

//****************************************************************************
// FUNCTION_05: Sort By Index
//****************************************************************************
    function f_IndexSort(){
        let ss_Rows=[...SS_Row]
        let let_Push=[...SS_Row]
        let let_UpdateRows:TS_Row[]=[{Key:0,Next:1,Array:['HelloWorld'],Display:4}]
        let let_i=0
        for(let j=0;j<ss_Rows.length;j++){
            for(let i=0;i<let_Push.length;i++){
                if(let_Push[i].Display==4){
                    continue
                }
                if(let_Push[i].Key==let_UpdateRows[let_i].Next){
                    let_UpdateRows.push(let_Push[i])
                    let_i+=1
                    let_Push.splice(i,1)
                    break
                }
            }
        }
        if(SS_IsD){
            setSS_IsD(false)
            setSS_Row(let_UpdateRows)
        }
        else{
            // reverse
            setSS_IsD(true)
            setSS_Row(let_UpdateRows.reverse())
        }
    }
//****************************************************************************
// JSX_00: Column Button
//****************************************************************************
    const ss_Columns=[...SS_Columns]
    const JSX_ColumnsButton=ss_Columns.map((Column,index)=>{
        if(Column.Display===1 && SS_EditColumn===0){
        return (
            <td>
                <div className='C01id_SortButton'>
                    <input style={{width:'100%'}} id={'C01id_RenameColumn'+Column.Key}></input>
                    <button style={{width:'45px'}} onClick={()=>f_Rename(Column)}>Ok</button>
                    <button style={{width:'90px'}} onClick={()=>f_Open(Column,0)}>Cancel</button>
                </div>
            </td>
        )}
        else if(Column.Display===2 && SS_EditColumn===0){
        return (
            <td>
                <div className='C01id_SortButton'>
                    <div style={{whiteSpace: 'normal',fontSize:'14px'}}>
                        Do you want to delete this column?
                    </div>
                    <button style={{width:'45px'}} onClick={()=>f_Delete(Column)}>Ok</button>
                    <button style={{width:'90px'}} onClick={()=>f_Open(Column,0)}>Cancel</button>
                </div>
            </td>
        )}
        else{
        return (
            <td><div className='C01id_SortButton'>
                <button onClick={()=>f_Open(Column,1)}>Rename</button>
                <button onClick={()=>f_Sort(index)}>Sort</button>
                <button onClick={()=>f_Open(Column,2)}>X</button>
                {//<button>Type</button>
                }
            </div></td>
        )}
    })

//****************************************************************************
// FUNCTION_01: Sort SS_Row
//****************************************************************************
return(
<tr className='C01id_TR'>
    <td><div className='C01id_Left'><button onClick={f_IndexSort}>Sort</button></div></td>
    {JSX_ColumnsButton}
    {//<td><div className='C01id_SortRight'><div className='C01id_EditRowButton'><input></input><button>Add Column</button></div></div></td>
    }
    <td><div className='C01id_RightEmpty'></div></td>
</tr>
    )
}

export default C_ColumnButton