import TS_Box from "./An_Index"

export function Box_UpdateColor(
    // Renamed Column
    THISBOX:TS_Box,
    // All BOXES
    BOXES:TS_Box[],
    COLOR:string,
    ):TS_Box[]{
    // Delete the column with selected key
    for(let i:number=0;i<BOXES.length;i++){
        if(BOXES[i].Key===THISBOX.Key){
            THISBOX.Type[1]=COLOR
            break
        }
    }
    return BOXES
}