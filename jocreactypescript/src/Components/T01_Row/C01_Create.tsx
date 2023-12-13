
import TS_Row from "./An_Index"

export function C01_Create(
        // SS_Columns
        ROWS:TS_Row[],
        // New Column Name
        NEWROW:string[]
        ):TS_Row[]{
    // Generate New Key
    let let_NewKey:number = Math.random()
    while(ROWS.map(ROW=>ROW.Key).includes(let_NewKey)===true){
        let_NewKey = Math.random()
    }
    // Add New Column in List of All Columns
    // https://stackoverflow.com/questions/31048953/what-are-these-three-dots-in-react-doing
    const let_NewROW:TS_Row={
        Key: ROWS[ROWS.length-1].Next,     
        Next: let_NewKey,   
        Array: NEWROW,       
        }
    return [...ROWS,let_NewROW]
}
