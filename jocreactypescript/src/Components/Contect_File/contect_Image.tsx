import { createContext, useContext } from "react"
// https://dev.to/madv/usecontext-with-typescript-23ln

export type TS_contect_Image = {
// This Input Image File
SSFiles_ThisOriginalImagesFiles:File|null,
setSSFiles_ThisOriginalImagesFiles:(S:File|null)=>void,
SSFiles_ThisEditedImagesFiles:File|null,
setSSFiles_ThisEditedImagesFiles:(S:File|null)=>void,
SSFiles_ThisImagesNames:string|null
setSSFiles_ThisImagesNames:(S:string|null)=>void
}
export const contect_Image = createContext<TS_contect_Image>({
// This Input Image File
SSFiles_ThisOriginalImagesFiles: null,
setSSFiles_ThisOriginalImagesFiles: () => {},
SSFiles_ThisEditedImagesFiles: null,
setSSFiles_ThisEditedImagesFiles: () => {},
SSFiles_ThisImagesNames: null,
setSSFiles_ThisImagesNames: () => {},
})
export const useGlobalContext = () => useContext(contect_Image)

