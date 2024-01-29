import { createContext, useContext } from "react"
// https://dev.to/madv/usecontext-with-typescript-23ln
import TS_Page from '../TS_Page/An_Index';

export type TS_contect_Page = {
SSUI_AllPages:TS_Page[]|null 
setSSUI_AllPages:(S:TS_Page[]|null)=>void 
SSUI_ThisPage:TS_Page|null 
setSSUI_ThisPage:(S:TS_Page|null )=>void
}
export const contect_Page = createContext<TS_contect_Page>({
SSUI_AllPages:null,
setSSUI_AllPages:()=>{},
SSUI_ThisPage:null,
setSSUI_ThisPage:()=>{},
})
export const useGlobalContext = () => useContext(contect_Page)