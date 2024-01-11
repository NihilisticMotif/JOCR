import TS_Box from "./An_Index"

export function U04_UpdateIsShow(
    // Renamed Column
    THISBOX:TS_Box,
    // All BOXES
    BOXES:TS_Box[],
    ISSHOW:boolean
    ):TS_Box[]{
    // Delete the column with selected key
    for(let i:number=0;i<BOXES.length;i++){
        if(BOXES[i].Key===THISBOX.Key){
            THISBOX.IsShow=ISSHOW
            break
        }
    }
    return BOXES
}