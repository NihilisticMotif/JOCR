import { createContext, useContext } from "react"
// https://dev.to/madv/usecontext-with-typescript-23ln
export type TS_contect_OCRAI = {
// 3. SSOCRAI = Edit Additional Tesseract OCR Command
SSOCRAI_:null
setSSOCRAI_:(S:null)=>void
// 4. SSJSONOCR = Tesseract OCR Setting JSON files
SSJSONOCR_:null 
setSSJSONOCR_:(S:null)=>void
}
export const contect_OCRAI = createContext<TS_contect_OCRAI>({
// 3. SSOCRAI = Edit Additional Tesseract OCR Command
SSOCRAI_:null,
setSSOCRAI_:()=>{},
// 4. SSJSONOCR = Tesseract OCR Setting JSON files
SSJSONOCR_:null,
setSSJSONOCR_:()=>{}
})
export const useGlobalContext = () => useContext(contect_OCRAI)