import { createContext, useContext } from "react"
// https://dev.to/madv/usecontext-with-typescript-23ln

export type TS_contect_ImageToolBar = {
SSUI_IsOpenImageToolbar:boolean 
setSSUI_IsOpenImageToolbar:(S:boolean)=>void
SSUI_IsOpenImageJSONfolder:boolean
setSSUI_IsOpenImageJSONfolder:(S:boolean)=>void
}
export const contect_ImageToolBar = createContext<TS_contect_ImageToolBar>({
SSUI_IsOpenImageToolbar:false,
setSSUI_IsOpenImageToolbar:()=>{},
SSUI_IsOpenImageJSONfolder:false,
setSSUI_IsOpenImageJSONfolder:()=>{},
})
export const useGlobalContext = () => useContext(contect_ImageToolBar)