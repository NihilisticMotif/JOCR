import TS_Kernal from "./An_Index"

export function Kernal_UpdateAll(
    KERNALS:TS_Kernal[],
    THISKERNALS:TS_Kernal,
    INDEX:number
    ):TS_Kernal[]{
    KERNALS[INDEX]=THISKERNALS
    return KERNALS
}