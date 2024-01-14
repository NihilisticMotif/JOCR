
import TS_Row from "./An_Index"

export function D01_Delete(
    // Renamed Column
    THISROW:TS_Row,
    // All ROWS
    ROWS:TS_Row[]):TS_Row[]{
    // Delete the column with selected key
    for(let i:number=0;i<ROWS.length;i++){
        if(ROWS[i].Key===THISROW.Key){
            // Update Linked List
            if(i>0 && i<ROWS.length-1){
                ROWS[i-1].Next=ROWS[i+1].Key
            }
            ROWS.splice(i, 1);
        }
    }
    return ROWS
}