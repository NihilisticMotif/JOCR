import { File_Create } from "../TS_File/File_Create";
import { TS_SS_File } from "./An_Index";
export function SSFile_Create(
    SS_File:TS_SS_File
):TS_SS_File{
    let let_Output:TS_SS_File=SS_File
    if(SS_File.AllFiles){
        let cSS_File=SS_File.AllFiles
        cSS_File=[...cSS_File]
        let let_Update=File_Create(cSS_File)
        let_Output={
            AllFiles:let_Update,
            SelectThisFile:{
                index:let_Update.length-1,
                mode:'Default'
            },
            FolderName:SS_File.FolderName
        }
    }
    else{
        let_Output={
            AllFiles:[{
                Key:0,
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
                }],
            SelectThisFile:{
                index:0,
                mode:'Default'
            },
            FolderName:SS_File.FolderName
        }
    }
    return let_Output
}

/**
    if(SS_File.AllFiles){
        let cSS_File=SS_File.AllFiles
        cSS_File=[...cSS_File]
        let let_Update=File_Create(cSS_File)
        setSS_File({
            AllFiles:let_Update,
            SelectThisFile:{
                index:let_Update.length-1,
                mode:'Default'
            },
            ImageFolderName:SS_File.ImageFolderName,
            TextFolderName:SS_File.TextFolderName
        })
    }
    else{
        setSS_File({
            AllFiles:[{
                Key: 0,
                ImageName: null,
                OriginalImageFile: null,
                ImageFile: null,
                TextFiles:null,
                TextName:null
            }],
            SelectThisFile:{
                index:0,
                mode:'Default'
            },
            ImageFolderName:SS_File.ImageFolderName,
            TextFolderName:SS_File.TextFolderName
        })
    }
 */