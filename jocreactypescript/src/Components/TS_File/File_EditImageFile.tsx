import TS_File from "./An_Index"

export function File_RenameTextFile(
        THISFILE:TS_File,
        FILES:TS_File[],
        TEXT:string
        ):TS_File[]{
            for(let i=0;i<FILES.length;i++){
                if(THISFILE.Key===FILES[i].Key){
                    FILES[i].TextFiles=TEXT
                }
            }
            return FILES
}