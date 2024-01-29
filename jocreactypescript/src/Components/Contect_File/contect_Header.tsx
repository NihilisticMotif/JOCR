import { createContext, useContext } from "react"
// https://dev.to/madv/usecontext-with-typescript-23ln

export type TS_contect_Header = {
// All Input Image Files
SSFiles_AllOriginalImagesFiles:File[]|null,
setSSFiles_AllOriginalImagesFiles:(S:File[]|null)=>void,
SSFiles_AllEditedImagesFiles:File[]|null,
setSSFiles_AllEditedImagesFiles:(S:File[]|null)=>void,
SSFiles_AllImagesNames:string[]|null
setSSFiles_AllImagesNames:(S:string[]|null)=>void

// All Output Text Files
SSFiles_AllTextFiles:string[]|null,
setSSFiles_AllTextFiles:(S:string[]|null)=>void,
SSFiles_AllTextNames:string[]|null,
setSSFiles_AllTextNames:(S:string[]|null)=>void,
}
export const contect_Header = createContext<TS_contect_Header>({
// All Input Image Files
SSFiles_AllOriginalImagesFiles: null,
setSSFiles_AllOriginalImagesFiles: () => {},
SSFiles_AllEditedImagesFiles: null,
setSSFiles_AllEditedImagesFiles: () => {},
SSFiles_AllImagesNames: null,
setSSFiles_AllImagesNames: () => {},
// All Output Text Files
SSFiles_AllTextFiles: null,
setSSFiles_AllTextFiles: () => {},
SSFiles_AllTextNames: null,
setSSFiles_AllTextNames: () => {},
})
export const useGlobalContext = () => useContext(contect_Header)

