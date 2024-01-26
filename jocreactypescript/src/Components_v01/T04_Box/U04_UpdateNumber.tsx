import TS_Box from "./An_Index"

export function U04_UpdateNumber(
    // Renamed Column
    THISBOX:TS_Box,
    // All BOXES
    BOXES:TS_Box[],
    NUMBERINPUT:number,
    INDEXINPUT:number
    ):TS_Box[]{
    // Delete the column with selected key
    for(let i:number=0;i<BOXES.length;i++){
        if(BOXES[i].Key===THISBOX.Key){
            THISBOX.XYWH[INDEXINPUT]=NUMBERINPUT
            break
        }
    }
    return BOXES
}