
import TS_Box from "./An_Index"

export function D04_Delete(
    // Renamed Column
    THISBOX:TS_Box,
    // All BOXES
    BOXES:TS_Box[]):TS_Box[]{
    // Delete the column with selected key
    for(let i:number=0;i<BOXES.length;i++){
        if(BOXES[i].Key===THISBOX.Key){
            BOXES.splice(i, 1);
            //alert(BOXES[i].Name)
            break
        }
    }
    return BOXES
}