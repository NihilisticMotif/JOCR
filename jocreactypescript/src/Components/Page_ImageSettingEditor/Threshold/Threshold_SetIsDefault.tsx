import TS_Threshold from "./An_Index"

export function Threshold_SetIsDefault(
        THISTHRESHOLD:TS_Threshold,
        THRESHOLDS:TS_Threshold[],
    ):TS_Threshold[]{
    for(let i:number=0;i<THRESHOLDS.length;i++){
        if(THRESHOLDS[i].Key===THISTHRESHOLD.Key){
            if(THISTHRESHOLD.IsDefault===true){
                THISTHRESHOLD.IsDefault=false
            }
            else if(THISTHRESHOLD.IsDefault===false){
                THISTHRESHOLD.IsDefault=true
            }
            break
        }
    }
    return THRESHOLDS
}