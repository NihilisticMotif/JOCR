import TS_Kernal from "./An_Index"

export function U05_UpdateAllKernals(
    KERNALS:TS_Kernal[],
    THISKERNALS:TS_Kernal,
    INDEX:number
    ):TS_Kernal[]{
    KERNALS[INDEX]=THISKERNALS
    return KERNALS
}