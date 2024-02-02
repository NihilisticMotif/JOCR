import { createContext, useContext } from "react"
// https://dev.to/madv/usecontext-with-typescript-23ln
import TS_Box from "../TS_Box/An_Index"
import TS_Kernal from "../TS_Kernal/An_Index"
import TS_Threshold from "../TS_Threshold/An_Index"
import TS_ImageJSON from "../TS_ImageJSON/An_Index"

export type TS_contect_Kernal = {
// 3. SSImage = Edit Additional Image (Kernal, Convolution and Threshold)
SSImage_ThisKernal:number|null
setSSImage_ThisKernal:(S:number|null)=>void
SSImage_Kernals:TS_Kernal[]|null
setSSImage_Kernals:(S:TS_Kernal[]|null)=>void
SSImage_ThisThreshold:number|null
setSSImage_ThisThreshold:(S:number|null)=>void
SSImage_Thresholds:TS_Threshold[]|null
setSSImage_Thresholds:(S:TS_Threshold[]|null)=>void
SSImage_ThisBox:number|null
setSSImage_ThisBox:(S:number|null)=>void
SSImage_Boxes:TS_Box[]|null
setSSImage_Boxes:(S:TS_Box[]|null)=>void
}

export const contect_Kernal = createContext<TS_contect_Kernal>({
// 3. SSImage = Edit Additional Image (Kernal, Convolution and Threshold)
SSImage_ThisKernal:null,
setSSImage_ThisKernal:()=>{},
SSImage_Kernals:null, 
setSSImage_Kernals:()=>{},
SSImage_ThisThreshold:null,
setSSImage_ThisThreshold:()=>{},
SSImage_Thresholds:null, 
setSSImage_Thresholds:()=>{},
SSImage_ThisBox:null,
setSSImage_ThisBox:()=>{},
SSImage_Boxes:null,
setSSImage_Boxes:()=>{},
})

export const useGlobalContext = () => useContext(contect_Kernal)