import TS_Row from "./An_Index"

export function U01_CreateColumn(
    ROWS:TS_Row[]):TS_Row[]{
    for(let i=0;i<ROWS.length;i++){
        ROWS[i].Array.push('-')
    }
    return ROWS
}