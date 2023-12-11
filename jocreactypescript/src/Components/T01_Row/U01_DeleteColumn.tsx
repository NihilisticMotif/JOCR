import TS_Row from "./An_Index"

export function U01_DeleteColumn(
    ROWS:TS_Row[],
    COLUMNINDEX:number):TS_Row[]{
    for(let i=0;i< ROWS.length;i++){
        ROWS[i].Display=0
        ROWS[i].Array.splice(COLUMNINDEX,1)
    }
    return ROWS
}