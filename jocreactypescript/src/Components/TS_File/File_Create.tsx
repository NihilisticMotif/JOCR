import TS_File from "./An_Index"

export function File_Create(
        FILES:TS_File[],
        ):TS_File[]{
            const let_NEWELEMENT:TS_File={
                Key:FILES.length,
                Img:{
                    Name:null,
                    EditedFile:null,
                    OriginFile:null
                },
                Text:{
                    Name:null,
                    File:null
                },
                OpenSS:false,
                SS_OCR:null,
                SS_ReadOCR:null,
                SS_EditImg:null,
                SS_ShowImg:null
                }
            return [...FILES,let_NEWELEMENT]
}