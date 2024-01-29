import { createContext, useContext } from "react"
// https://dev.to/madv/usecontext-with-typescript-23ln
import { LANGUAGE } from "./const/LANGUAGE"
import { PSM } from "./const/PSM"
export type TS_contect_OCR = {
// 1. SSOCR = Tesseract OCR Command
SSOCR_Operate:boolean
setSSOCR_Operate:(S:boolean)=>void
// https://stackoverflow.com/questions/54070785/how-to-convert-array-of-strings-to-typescript-types
SSOCR_Languages:typeof LANGUAGE[number][]|null
setSSOCR_Languages:(S:typeof LANGUAGE[number][]|null)=>void
const_LANGUAGE:string[]
SSOCR_PSM:typeof PSM[number] 
setSSOCR_PSM:(S:typeof PSM[number])=>void
const_PSM:string[]
// 2. SSShowOCR = Display Tesseract OCR Original Output
// SSShowOCR_:boolean
// setSSShowOCR_:(S:boolean)=>void
}
export const contect_OCR = createContext<TS_contect_OCR>({
// 1. SSOCR = Tesseract OCR Command
SSOCR_Operate:false,
setSSOCR_Operate:()=>{},
SSOCR_Languages:null,
setSSOCR_Languages:()=>{},
const_LANGUAGE:LANGUAGE,
SSOCR_PSM:'Text (Default Option, PSM-3)',
setSSOCR_PSM:()=>{},
const_PSM:PSM,
// 2. SSShowOCR = Display Tesseract OCR Original Output
// SSShowOCR_:false,
// setSSShowOCR_:()=>{},
})
export const useGlobalContext = () => useContext(contect_OCR)