import TS_Column from "./An_Index"

export function R02_ReturnIndex(
    // Renamed Column
    THISCOLUMN:TS_Column,
    // All COLUMNS
    COLUMNS:TS_Column[]):number{
    // Delete the column with selected key
    let let_Return=0
    for(let i:number=0;i<COLUMNS.length;i++){
        if(COLUMNS[i].Key===THISCOLUMN.Key){
            let_Return=i
            break
        }
    }
    return let_Return
}