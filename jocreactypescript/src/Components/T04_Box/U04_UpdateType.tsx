import TS_Box from "./An_Index"

export function U04_UpdateType(
    // Renamed Column
    THISBOX:TS_Box,
    // All BOXES
    BOXES:TS_Box[],
    TYPE:string,
    ):TS_Box[]{
    // Delete the column with selected key
    for(let i:number=0;i<BOXES.length;i++){
        if(BOXES[i].Key===THISBOX.Key){
            THISBOX.Type[0]=TYPE
            break
        }
    }
    return BOXES
}