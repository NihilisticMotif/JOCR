export type TS_SS_ReadOCR={
    Operate:boolean,
    // Script
    Script:string|null,
    SAccurate:number|null,
    // Rotation
    Rotation:number|null,
    Detected:number|null,
    Adjustment:number|null,
    RAccurate:number|null,
    // (Higher accuracy is better.)
}