import TS_Box from "./An_Index"

export function Box_Select(
    // Renamed Column
    KEY:number,
    // All BOXES
    BOXES:TS_Box[]):TS_Box{
    // Delete the column with selected key
    for(let i:number=0;i<BOXES.length;i++){
        if(BOXES[i].Key===KEY){
            return BOXES[i]
            break
        }
    }
    return BOXES[0]
}