import TS_Row from "./An_Index"

export function D_DeleteColumnName(
    // Renamed Column
    ThisColumn:TS_Row,
    // All Columns
    Columns:TS_Row[]):TS_Row[]{
    // Delete the column with selected key
    for(let i:number=0;i<Columns.length;i++){
        if(Columns[i].Key===ThisColumn.Key){
            Columns.splice(i, 1);
        }
    }
    return Columns
}
