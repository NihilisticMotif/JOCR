import TS_Box from "./An_Index"

export function C04_Create(
        // SS_Columns
        BOXES:TS_Box[],
        TYPE:string,
        ):TS_Box[]{
            // https://stackoverflow.com/questions/43846531/check-if-dictionary-object-in-array-contains-certain-value-in-javascript

            // Generate New Key
            let let_NewKey:number = Math.random()
            while(BOXES.map(LET=>LET.Key).includes(let_NewKey)===true){
                let_NewKey = Math.random()
            }
            while(let_NewKey===0){
                let_NewKey = Math.random()
            }
            
            // https://stackoverflow.com/questions/31048953/what-are-these-three-dots-in-react-doing
            const let_NEWBOXES:TS_Box={
                Key:let_NewKey,
                XYWH:[
                    0,
                    0,
                    500,
                    500,
                    4
                ],
                Type:[
                    TYPE,
                    '#000000'
                ],
                IsShow:true
                }
            return [...BOXES,let_NEWBOXES]
}