import { createContext, useContext } from "react"
// https://dev.to/madv/usecontext-with-typescript-23ln
import { uLANGUAGE } from "../utility/uLANGUAGE"
import { uPSM } from "../utility/uPSM"
import TS_File from '../TS_File/An_Index';

import { TS_SS_OCR } from "../TS_SS_OCR/An_Index";
import { TS_SS_ShowImg } from "../TS_SS_ShowImg/An_Index";
import { TS_SS_EditImg } from "../TS_SS_EditImg/An_Index";
// import { TS_SS_ImageProcessing } from "../TS_UseState/TS_SS_ImageProcessing";
import { TS_SS_File } from "../TS_SS_File/An_Index";

export type TS_Context_Main={
    SS_File:          TS_SS_File,
    setSS_File:       (S:TS_SS_File)=>void,
    SS_OCR:         TS_SS_OCR,
    setSS_OCR:     (S:TS_SS_OCR)=>void,
    SS_ShowImg:     TS_SS_ShowImg,
    setSS_ShowImg: (S:TS_SS_ShowImg)=>void,
    SS_EditImg:     TS_SS_EditImg,
    setSS_EditImg: (S:TS_SS_EditImg)=>void,
    SS_ThisOCR:         TS_SS_OCR[]|null,
    setSS_ThisOCR:     (S:TS_SS_OCR[]|null)=>void,
    SS_ThisEditImg:     TS_SS_EditImg[]|null,
    setSS_ThisEditImg: (S:TS_SS_EditImg[]|null)=>void,
}
export const Context_Main=createContext<TS_Context_Main>({
    SS_File:          {
        AllFiles:null,
        SelectThisFile:{
            index:0,
            mode:'Default'
        },
        FolderName:{
            Img:'',
            Text:''
        }
    },
    setSS_File:()=>{},
    SS_OCR:{
        Operate:   false,
        Languages: null,
        PSM:       uPSM[0],
    },
    setSS_OCR:     ()=>{},
    SS_ShowImg:{
        Zoom:1,
        OriginalImage:"EditedImage",
    },
    setSS_ShowImg:()=>{},
    SS_EditImg:{
        Operate:false,
        Color:"Gray",
        Rotate:0
    },
    setSS_EditImg:()=>{},
    SS_ThisOCR:null,
    setSS_ThisOCR:()=>{},
    SS_ThisEditImg:null,
    setSS_ThisEditImg:()=>{}
})