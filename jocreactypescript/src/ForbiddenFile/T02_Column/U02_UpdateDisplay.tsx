import TS_Column from "./An_Index"

export function U02_UpdateDisplay(
        THISCOLUMN:TS_Column,
        COLUMNS:TS_Column[],
        STATE:0|1|2|3,
    ):TS_Column[]{
    for(let i:number=0;i<COLUMNS.length;i++){
        if(COLUMNS[i].Key===THISCOLUMN.Key){
            THISCOLUMN.Display=STATE
        }
        else{
            COLUMNS[i].Display=0
        }
    }
    return COLUMNS
}