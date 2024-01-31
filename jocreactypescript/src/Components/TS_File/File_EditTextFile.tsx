import TS_File from "./An_Index"

export function File_EditTextFile(
        THISFILE:TS_File,
        FILES:TS_File[],
        TEXT:string
        ):TS_File[]{
            let let_B:boolean=false
            for(let i=0;i<FILES.length;i++){
                if(THISFILE.Key===FILES[i].Key){
                    FILES[i].Text.File=TEXT
                }
            }
            return FILES
}