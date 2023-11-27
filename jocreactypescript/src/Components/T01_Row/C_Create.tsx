import TS_Row from "./An_Index"

export function C_Create(
        // SS_Columns
        ROWS:TS_Row[],
        // New Column Name
        NEWROW:TS_Row
        ):TS_Row[]{
    // Check duplicate Column Name
    if(NEWROW.toString().length>0 
            && NEWROW.toString().length<30 
            && ROWS.map(ROW=>ROW.Name).includes(NEWROW.Name)===false){
            // https://stackoverflow.com/questions/43846531/check-if-dictionary-object-in-array-contains-certain-value-in-javascript

            // Generate New Key
            let let_NewKey:number = Math.random()
            while(ROWS.map(ROW=>ROW.Key).includes(let_NewKey)===true){
                let_NewKey = Math.random()
            }
            
            // Add New Column in List of All Columns
            // https://stackoverflow.com/questions/31048953/what-are-these-three-dots-in-react-doing
            const let_NewROW:TS_Row={
                Key: let_NewKey,    
                Name: NEWROW.Name,
                Price: NEWROW.Price,
                Amount:NEWROW.Amount
                }
            return [let_NewROW,...ROWS]
        }
        return ROWS
}
