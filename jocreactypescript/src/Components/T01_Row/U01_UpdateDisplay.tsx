
import TS_Row from "./An_Index"

export function U01_UpdateDisplay(
        THISROW:TS_Row,
        ROWS:TS_Row[],
        STATE:0|1|2|3,
    ):TS_Row[]{
    for(let i:number=0;i<ROWS.length;i++){
        if(ROWS[i].Key===THISROW.Key){
            THISROW.Display=STATE
        }
        else if(ROWS[i].Display===4){
            continue
        }
        else{
            ROWS[i].Display=0
        }
    }
    return ROWS
}