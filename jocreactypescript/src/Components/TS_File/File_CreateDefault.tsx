import TS_File from "./An_Index"

export function File_CreateDefault(
        KEY:number,
        ):TS_File{
            const let_NEWELEMENT:TS_File={
                Key:KEY,
                Img:{
                    Name:null,
                    EditedFile:null,
                    OriginFile:null,
                    Shape:[0,0]
                },
                Text:{
                    Name:null,
                    File:null
                },
                OpenSS:false,
                SS_OCR:null,
                SS_ReadOCR:null,
                SS_EditImg:null,
                }
            return let_NEWELEMENT
}