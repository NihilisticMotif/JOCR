
import TS_Column from "./An_Index"

export function C02_Create(
        // SS_Columns
        COLUMNS:TS_Column[],
        // New Column Name
        NEWCOLUMN:string
        ):TS_Column[]{
    // Check duplicate Column Name
    if(NEWCOLUMN.toString().length>0 
            && NEWCOLUMN.toString().length<30
            && COLUMNS.map(ROW=>ROW.Name).includes(NEWCOLUMN)===false){
            // https://stackoverflow.com/questions/43846531/check-if-dictionary-object-in-array-contains-certain-value-in-javascript

            // Generate New Key
            let let_NewKey:number = Math.random()
            while(COLUMNS.map(ROW=>ROW.Key).includes(let_NewKey)===true){
                let_NewKey = Math.random()
            }
            
            // Add New Column in List of All Columns
            // https://stackoverflow.com/questions/31048953/what-are-these-three-dots-in-react-doing
            const let_NEWCOLUMN:TS_Column={
                Key:let_NewKey,
                Name: NEWCOLUMN,
                Display:0
                }
            return [...COLUMNS,let_NEWCOLUMN]
        }
        return COLUMNS
}