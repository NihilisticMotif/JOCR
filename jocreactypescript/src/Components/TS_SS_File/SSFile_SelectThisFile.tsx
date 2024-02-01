import { TS_SS_File } from "./An_Index";
import { const_mode } from "./const_mode";

export function SSFile_SelectThisFile(SS_File:TS_SS_File,ThisFile:number,mode:typeof const_mode[number]):TS_SS_File{
    if(SS_File.AllFiles){
        return {
            AllFiles:SS_File.AllFiles,
            SelectThisFile:{
                index:ThisFile,
                mode:mode
            },
            FolderName:SS_File.FolderName
        }
    }
    else{
        return SS_File
    }
}