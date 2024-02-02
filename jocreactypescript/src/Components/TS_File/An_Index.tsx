import { TS_SS_OCR } from "../TS_SS_OCR/An_Index"
import { TS_SS_EditImg } from "../TS_SS_EditImg/An_Index"
import { TS_SS_ShowImg } from "../TS_SS_ShowImg/An_Index"
import { TS_SS_ReadOCR } from "../TS_SS_ReadOCR/An_Index"
type TS_File={
    Key:number,
    Img:{
        Name:string|null,
        EditedFile:File|null,
        OriginFile:File|null,
        Shape:[number,number]
    }
    Text:{
        Name:string|null,
        File:string
    }
    OpenSS:boolean,
    SS_OCR:TS_SS_OCR|null,
    SS_ReadOCR:TS_SS_ReadOCR|null,
    SS_EditImg:TS_SS_EditImg|null,
}

export default TS_File