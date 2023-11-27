import TS_Row from "./An_Index"

export function U_RenameColumnName(        
        // Renamed Column
        THISROW:TS_Row,
        // All Columns
        ROWS:TS_Row[],
        // New Column Name
        NEWNAME:string):TS_Row[]{
        // Check duplicate Column Name
        if(ROWS.map(Column=>Column.Name).includes(NEWNAME)===false){
            // Replace the previous name (the name with selected key) with new name
            for(let i:number=0;i<ROWS.length;i++){
                if(ROWS[i].Key===THISROW.Key){
                    ROWS.splice(i, 1,{
                    Key: THISROW.Key,
                    Name: NEWNAME, 
                    Price: THISROW.Price,
                    Amount: THISROW.Amount
                });
                }
            }
            return ROWS
        }
    return ROWS
}