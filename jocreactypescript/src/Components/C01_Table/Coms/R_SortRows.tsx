// React
import { useState } from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_Row from '../../T01_Row/An_Index';
import {C_Create} from '../../T01_Row/C_Create';


const R_SortRows = (
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
// HOOK
//****************************************************************************
    const [SS_IsD,setSS_IsD] = useState<boolean>(true)

//****************************************************************************
// FUNCTION_00: Sort
//****************************************************************************
    function f_Sort(property:any):any{
        // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
        let let_SortOrder:number = 1;
        if(property[0] === "-") {
            let_SortOrder = -1;
            property = property.substr(1);
        }
        return function(a:any,b:any){
            let let_Result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return let_Result * let_SortOrder;
        }
    }

//****************************************************************************
// FUNCTION_01: Sort SS_Row
//****************************************************************************
    function f_DSort(COLUMN:string):void{
        // Get the Alphabet Name Order of SS_Row
        let ss_Row:TS_Row[] = [...SS_Row]
        ss_Row.sort(f_Sort(COLUMN));
        if(SS_IsD===true){
            ss_Row.reverse();
            setSS_IsD(false)
        }
        else{
            setSS_IsD(true)
        }
        // https://www.w3schools.com/jsref/jsref_sort.asp
        // https://stackoverflow.com/questions/11182924/how-to-check-if-javascript-object-is-json
        
        // Update SS_IndexColumns
        setSS_Row(ss_Row)
    }

return(
<tr>
    <td></td>
    <td><div className='C01id_SortButton'><button onClick={()=>f_DSort('Name')}>Sort</button></div></td>
    <td><div className='C01id_SortButton'><button onClick={()=>f_DSort('Price')}>Sort</button><button>Currency</button></div></td>
    <td><div className='C01id_SortButton'><button onClick={()=>f_DSort('Amount')}>Sort</button><button>Unit</button></div></td>
    <td></td>
</tr>
    )
}

export default R_SortRows