
import TS_Column from "./An_Index"

export function U02_Edit(        
        // Renamed Column
        THISCOLUMN:TS_Column,
        // All Columns
        COLUMNS:TS_Column[],
        // New Column Name
        NEWCOLUMN:string):TS_Column[]{
    if(NEWCOLUMN.length<30){
    for(let i:number=0;i<COLUMNS.length;i++){
            if(COLUMNS[i].Key===THISCOLUMN.Key){
                COLUMNS.splice(i, 1,{
                Key: THISCOLUMN.Key,
                Name:NEWCOLUMN,
                Display:0
            });
            break
            }
        }
    return COLUMNS
    }
    else{
    return COLUMNS
    }
}


export default {}