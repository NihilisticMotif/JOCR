import TS_Threshold from "./An_Index"

export function C03_Create(
        // SS_Columns
        THRESHOLDS:TS_Threshold[],
        ):TS_Threshold[]{
            // https://stackoverflow.com/questions/43846531/check-if-dictionary-object-in-array-contains-certain-value-in-javascript

            // Generate New Key
            let let_NewKey:number = Math.random()
            while(THRESHOLDS.map(LET=>LET.Key).includes(let_NewKey)===true){
                let_NewKey = Math.random()
            }
            while(let_NewKey===0){
                let_NewKey = Math.random()
            }
            
            // Add New Column in List of All THRESHOLDS
            // https://stackoverflow.com/questions/31048953/what-are-these-three-dots-in-react-doing
            const let_NEWCOLUMN:TS_Threshold={
                Key:let_NewKey,
                PositionY:10+5,
                IsDefault:false,
                Gray:'#000000'
                }
            return [...THRESHOLDS,let_NEWCOLUMN]
}