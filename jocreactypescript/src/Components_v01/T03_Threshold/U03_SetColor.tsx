import TS_Threshold from "./An_Index"

export function U03_SetColor(
        THISTHRESHOLD:TS_Threshold,
        THRESHOLDS:TS_Threshold[],
        COLOR:string
    ):TS_Threshold[]{
    for(let i:number=0;i<THRESHOLDS.length;i++){
        if(THRESHOLDS[i].Key===THISTHRESHOLD.Key){
            THRESHOLDS[i].Gray=COLOR
            break
        }
    }
    return THRESHOLDS
}