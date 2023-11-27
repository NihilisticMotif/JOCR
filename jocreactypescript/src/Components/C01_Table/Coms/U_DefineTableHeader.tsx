// React
//import { useState , useEffect} from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_Row from '../../T01_Row/An_Index';

// CSS

const U_DefineTableHeader = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    // PARAMETER
    // HOOK: setState()
    SS_Row,
}:{
    // TYPE
    // HOOK: setState() 
    SS_Row:TS_Row[],
}
) => {
//****************************************************************************
// FUNCTION_00: Sort SS_Column
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
    /*
    function f_DSort(IsD:boolean):void{
        // Get the Alphabet Name Order of SS_Row
        let ss_Row:TS_Row[] = [...SS_Row]
        SS_Row.sort(f_Sort("Name"));
        if(IsD===true){SS_Row.reverse();}
        // https://www.w3schools.com/jsref/jsref_sort.asp
        // https://stackoverflow.com/questions/11182924/how-to-check-if-javascript-object-is-json
        
        // Update SS_IndexColumns
        setSS_IndexColumns(SS_Row.map((Column)=>Column.Key))
    }
    */

return(
<div className='C01id_DivHeader'>
<td><button className='C01id_Header' /*onClick={()=>f_DSort(true)}*/>Export Data</button></td>
<td><button className='C01id_Header' /*onClick={()=>f_DSort(true)}*/>Rename Table</button></td>
</div>
    )
}

export default U_DefineTableHeader