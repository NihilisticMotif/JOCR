// React
import { useState } from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_Row from '../../T01_Row/An_Index';
import TS_Column from '../../T02_Column/An_Index'
import {C_Create} from '../../T01_Row/C_Create';


const R_SortRows = (
//****************************************************************************
// INPUT
//****************************************************************************
{   // PARAMETER
    // HOOK: setState()
    SS_Row,         // Update Columns
    setSS_Row,      // -
    SS_Columns
}:
{   // TYPE
    // HOOK: setState()
    SS_Row        :TS_Row[],
    setSS_Row     :(S:TS_Row[])=>void,
    // https://stackoverflow.com/questions/60130319/react-typescript-how-to-setstate
    SS_Columns:TS_Column[]
}
) => {
//****************************************************************************
// HOOK
//****************************************************************************
    const [SS_IsD,setSS_IsD] = useState<boolean>(true)

//****************************************************************************
// FUNCTION_00: Sort
//****************************************************************************
    function f_Sort(index:number):any{
        // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
        // https://www.w3schools.com/jsref/jsref_sort.asp
        // https://stackoverflow.com/questions/39583327/javascript-sort-array-of-arrays-by-second-element-in-each-inner-array
        let ss_Rows=[...SS_Row]
        ss_Rows.sort((a,b) => a.Array[index].toUpperCase().localeCompare(b.Array[index].toUpperCase()));
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
// JSX_00: Column Button
//****************************************************************************
    const ss_Columns=[...SS_Columns]
    const JSX_ColumnsButton=ss_Columns.map((Column,index)=>{
        return (
            <td><div className='C01id_SortButton'><button onClick={()=>f_Sort(index)}>Sort</button><button>Rename</button><button>Type</button><button>X</button></div></td>
        )
    })

//****************************************************************************
// FUNCTION_01: Sort SS_Row
//****************************************************************************
return(
<tr>
    <td></td>
    {JSX_ColumnsButton}
    <td><div className='C01id_SortButton' style={{color: "red"}} ><button>Add Column</button></div></td>
</tr>
    )
}

export default R_SortRows