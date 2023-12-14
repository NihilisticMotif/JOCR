
import TS_Column from "./An_Index"

export function D02_Delete(
    // Renamed Column
    THISCOLUMN:TS_Column,
    // All COLUMNS
    COLUMNS:TS_Column[]):TS_Column[]{
    // Delete the column with selected key
    for(let i:number=0;i<COLUMNS.length;i++){
        if(COLUMNS[i].Key===THISCOLUMN.Key){
            COLUMNS.splice(i, 1);
            //alert(COLUMNS[i].Name)
            break
        }
    }
    return COLUMNS
}