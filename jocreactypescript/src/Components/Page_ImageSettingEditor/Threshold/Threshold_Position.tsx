import TS_Threshold from "./An_Index"

export function Threshold_Position(
        THISTHRESHOLD:TS_Threshold,
        THRESHOLDS:TS_Threshold[],
        POSITION:number,
        SCALEPOSITION:number
    ):TS_Threshold[]{
    for(let i:number=0;i<THRESHOLDS.length;i++){
        if(THRESHOLDS[i].Key===THISTHRESHOLD.Key){
            THISTHRESHOLD.PositionY=POSITION
            THISTHRESHOLD.ScalePosition=SCALEPOSITION
            break
        }
    }
    return THRESHOLDS
}