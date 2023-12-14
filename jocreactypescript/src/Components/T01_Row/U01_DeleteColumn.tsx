import TS_Row from "./An_Index"

export function U01_DeleteColumn(
    ROWS:TS_Row[],
    COLUMNINDEX:number):TS_Row[]{
    //alert(JSON.stringify(ROWS))
    //alert(COLUMNINDEX)
    for(let i=0;i< ROWS.length;i++){
        if(ROWS[i].Display!==4){
        ROWS[i].Display=0
        }
        //alert(ROWS[i].Array[COLUMNINDEX])
        ROWS[i].Array.splice(COLUMNINDEX,1)
    }
    return ROWS
}