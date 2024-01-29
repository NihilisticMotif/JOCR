import { createContext, useContext } from "react"
// https://dev.to/madv/usecontext-with-typescript-23ln

export type TS_contect_Img = {
// 1. ssImg = Editing Image
SSImg_Color: "Color"|"Gray"|"ReverseGray"
setSSImg_Color:(S:"Color"|"Gray"|"ReverseGray") => void
SSImg_Rotate:number
setSSImg_Rotate:(S:number)=>void
// 2. SSShowImg = Display Image
SSShowImg_Zoom:number
setSSShowImg_Zoom:(S:number)=>void
SSShowImg_OriginalImage:"Original"|"Edited"|"Original_Gray"|"Original_Reverse_Gray"
setSSShowImg_OriginalImage:(S:"Original"|"Edited"|"Original_Gray"|"Original_Reverse_Gray")=>void
SSShowImg_Dimension:[number,number]
setSSShowImg_Dimension:(S:[number,number])=>void
}

export const contect_Img = createContext<TS_contect_Img>({
// 1. SSImg = Editing Image
SSImg_Color: "Color", // set a default value
setSSImg_Color: () => {},
SSImg_Rotate:0,
setSSImg_Rotate:()=>{},
// 2. SSShowImg = Display Image
SSShowImg_Zoom:1,
setSSShowImg_Zoom:()=>{},
SSShowImg_OriginalImage:"Original",
setSSShowImg_OriginalImage:()=>{},
SSShowImg_Dimension:[0,0],
setSSShowImg_Dimension:()=>{},
})

export const useGlobalContext = () => useContext(contect_Img)