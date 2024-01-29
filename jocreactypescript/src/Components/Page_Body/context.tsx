import { createContext, useContext } from "react"
// https://dev.to/madv/usecontext-with-typescript-23ln
import { uLANGUAGE } from "../utility/uLANGUAGE"
import { uPSM } from "../utility/uPSM"
import TS_Page from '../TS_Page/An_Index';

export type TS_context_Body = {
//-----------------------------------------------------------------------
// File
//-----------------------------------------------------------------------
// This Input Image File
SSFiles_ThisOriginalImagesFiles:File|null,
setSSFiles_ThisOriginalImagesFiles:(S:File|null)=>void,
SSFiles_ThisEditedImagesFiles:File|null,
setSSFiles_ThisEditedImagesFiles:(S:File|null)=>void,
SSFiles_ThisImagesNames:string|null
setSSFiles_ThisImagesNames:(S:string|null)=>void
// This Text File
SSFiles_ThisTextFiles:string|null,
setSSFiles_ThisTextFiles:(S:string|null)=>void,
SSFiles_ThisTextNames:string|null,
setSSFiles_ThisTextNames:(S:string|null)=>void,
//-----------------------------------------------------------------------
// Img
//-----------------------------------------------------------------------
// 1. SSImg = Editing Image
SSImg_Operate:'This'|'All'|'None'
setSSImg_Operate:(S:'This'|'All'|'None')=>void
SSImg_Color: "Color"|"Gray"|"ReverseGray"
setSSImg_Color:(S:"Color"|"Gray"|"ReverseGray") => void
SSImg_Rotate:number
setSSImg_Rotate:(S:number)=>void
// 2. SSShowImg = Display Image
SSShowImg_Zoom:number
setSSShowImg_Zoom:(S:number)=>void
SSShowImg_OriginalImage:"Original"|"Edited"|"Original_Gray"|"Original_Reverse_Gray"
setSSShowImg_OriginalImage:(S:"Original"|"Edited"|"Original_Gray"|"Original_Reverse")=>void
SSShowImg_Dimension:[number,number]
setSSShowImg_Dimension:(S:[number,number])=>void
//-----------------------------------------------------------------------
// OCR
//-----------------------------------------------------------------------
// 1. SSOCR = Tesseract OCR Command
SSOCR_Operate:'This'|'All'|'None'
setSSOCR_Operate:(S:'This'|'All'|'None')=>void
// https://stackoverflow.com/questions/54070785/how-to-convert-array-of-strings-to-typescript-types
SSOCR_Languages:typeof uLANGUAGE[number][]|null
setSSOCR_Languages:(S:typeof uLANGUAGE[number][]|null)=>void
const_LANGUAGE:string[]
SSOCR_PSM:typeof uPSM[number] 
setSSOCR_PSM:(S:typeof uPSM[number])=>void
const_PSM:string[]
//-----------------------------------------------------------------------
// UI
//-----------------------------------------------------------------------
SSUI_AllPages:TS_Page[]|null 
setSSUI_AllPages:(S:TS_Page[]|null)=>void 
SSUI_ThisPage:TS_Page|null 
setSSUI_ThisPage:(S:TS_Page|null )=>void
}
export const context_Body = createContext<TS_context_Body>({
//-----------------------------------------------------------------------
// File
//-----------------------------------------------------------------------
// This Input Image File
SSFiles_ThisOriginalImagesFiles: null,
setSSFiles_ThisOriginalImagesFiles: () => {},
SSFiles_ThisEditedImagesFiles: null,
setSSFiles_ThisEditedImagesFiles: () => {},
SSFiles_ThisImagesNames: null,
setSSFiles_ThisImagesNames: () => {},
// This Text File
SSFiles_ThisTextFiles: null,
setSSFiles_ThisTextFiles: () => {},
SSFiles_ThisTextNames: null,
setSSFiles_ThisTextNames: () => {},
//-----------------------------------------------------------------------
// Img
//-----------------------------------------------------------------------
// 1. SSImg = Editing Image
SSImg_Operate:"None",
setSSImg_Operate:()=>{},
SSImg_Color:'Gray',
setSSImg_Color:()=>{},
SSImg_Rotate:0,
setSSImg_Rotate:()=>{},
// 2. SSShowImg = Display Image
SSShowImg_Dimension:[0,0],
setSSShowImg_Dimension:()=>{},
SSShowImg_OriginalImage:'Edited',
setSSShowImg_OriginalImage:()=>{},
SSShowImg_Zoom:1,
setSSShowImg_Zoom:()=>{},
//-----------------------------------------------------------------------
// OCR
//-----------------------------------------------------------------------
// 1. SSOCR = Tesseract OCR Command
SSOCR_Operate:"None",
setSSOCR_Operate:()=>{},
// https://stackoverflow.com/questions/54070785/how-to-convert-array-of-strings-to-typescript-types
SSOCR_Languages:null,
setSSOCR_Languages:()=>{},
const_LANGUAGE:uLANGUAGE,
SSOCR_PSM:'Text (Default Option, PSM-3)',
setSSOCR_PSM:()=>{},
const_PSM:uPSM,
//-----------------------------------------------------------------------
// UI
//-----------------------------------------------------------------------
SSUI_AllPages:null,
setSSUI_AllPages:()=>{},
SSUI_ThisPage:null,
setSSUI_ThisPage:()=>{},
})
export const useGlobalContext = () => useContext(context_Body)