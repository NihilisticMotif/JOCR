import { createContext, useContext } from "react"
// https://dev.to/madv/usecontext-with-typescript-23ln

export type TS_contect_Text = {
// This Text File
SSFiles_ThisTextFiles:string|null,
setSSFiles_ThisTextFiles:(S:string|null)=>void,
SSFiles_ThisTextNames:string|null,
setSSFiles_ThisTextNames:(S:string|null)=>void,
}
export const contect_Text = createContext<TS_contect_Text>({
// This Text File
SSFiles_ThisTextFiles: null,
setSSFiles_ThisTextFiles: () => {},
SSFiles_ThisTextNames: null,
setSSFiles_ThisTextNames: () => {}
})
export const useGlobalContext = () => useContext(contect_Text)

