
import TS_Threshold from "./An_Index"

export function Threshold_Delete(
    // Renamed Column
    THISTHRESHOLDS:TS_Threshold,
    // All THRESHOLDS
    THRESHOLDS:TS_Threshold[]):TS_Threshold[]{
    // Delete the column with selected key
    for(let i:number=0;i<THRESHOLDS.length;i++){
        if(THRESHOLDS[i].Key===THISTHRESHOLDS.Key){
            THRESHOLDS.splice(i, 1);
            //alert(THRESHOLDS[i].Name)
            break
        }
    }
    return THRESHOLDS
}