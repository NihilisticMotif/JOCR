
import TS_Row from "./An_Index"

export function U01_EditRow(        
        // Renamed Column
        THISROW:TS_Row,
        // All Columns
        ROWS:TS_Row[],
        // New Column Name
        NEWARRAY:string[]):TS_Row[]{

    for(let i:number=0;i<ROWS.length;i++){
            if(ROWS[i].Key===THISROW.Key){
                ROWS.splice(i, 1,{
                Key: THISROW.Key,
                Next: THISROW.Next,
                Array: NEWARRAY, 
                Display:0
            });
            break
            }
        }
    return ROWS
}


export default {}