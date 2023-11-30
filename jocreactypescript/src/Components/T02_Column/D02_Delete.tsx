
import TS_Row from "./An_Index"

export function D02_Delete(
    // Renamed Column
    THISCOLUMN:TS_Row,
    // All COLUMNS
    COLUMNS:TS_Row[]):TS_Row[]{
    // Delete the column with selected key
    for(let i:number=0;i<COLUMNS.length;i++){
        if(COLUMNS[i].Key===THISCOLUMN.Key){
            COLUMNS.splice(i, 1);
        }
    }
    return COLUMNS
}