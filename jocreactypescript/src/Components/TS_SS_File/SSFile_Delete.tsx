import { File_Delete } from "../TS_File/File_Delete";
import { TS_SS_File } from "./An_Index";

export function SSFile_Delete(SS_File:TS_SS_File,ThisFile:number):TS_SS_File{
    if(SS_File.AllFiles){
        let cSS_File=SS_File.AllFiles
        cSS_File=[...cSS_File]

        let let_Update=File_Delete(ThisFile,cSS_File)
        let let_UpdateIndex=ThisFile
        if(ThisFile===let_Update.length){
            let_UpdateIndex=let_UpdateIndex-1
        }

        return {
            AllFiles:let_Update,
            SelectThisFile:{
                index:let_UpdateIndex,
                mode:'Default'
            },
            FolderName:SS_File.FolderName
        }
    }
    else{
        return SS_File
    }
}