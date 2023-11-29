
import TS_Row from "./An_Index"

export function D_DeleteColumnName(
    // Renamed Column
    ThisRow:TS_Row,
    // All Rows
    Rows:TS_Row[]):TS_Row[]{
    // Delete the column with selected key
    for(let i:number=0;i<Rows.length;i++){
        if(Rows[i].Key===ThisRow.Key){
            Rows.splice(i, 1);
        }
    }
    return Rows
}

export default {}