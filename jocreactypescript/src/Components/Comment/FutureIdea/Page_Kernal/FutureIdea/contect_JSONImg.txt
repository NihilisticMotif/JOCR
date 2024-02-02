import { createContext, useContext } from "react"
// https://dev.to/madv/usecontext-with-typescript-23ln
import TS_ImageJSON from "../TS_ImageJSON/An_Index"

export type TS_contect_JSONImg = {
// 4. SSJSONImg = Image Setting JSON files 
SSJSONImg_ThisFile:TS_ImageJSON|null
setSSJSONImg_ThisFile:(S:TS_ImageJSON|null)=>void 
SSJSONImg_AllFiles:TS_ImageJSON[]|null 
setSSJSONImg_AllFiles:(S:TS_ImageJSON[]|null)=>void
}

export const contect_JSONImg = createContext<TS_contect_JSONImg>({
// 4. SSJSONImg = Image Setting JSON files 
SSJSONImg_ThisFile:null,
setSSJSONImg_ThisFile:()=>{},
SSJSONImg_AllFiles:null,
setSSJSONImg_AllFiles:()=>{}
})

export const useGlobalContext = () => useContext(contect_JSONImg)