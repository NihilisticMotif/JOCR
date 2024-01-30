import TS_File from "./An_Index"

export function File_Delete(
        THISFILE:number,
        FILES:TS_File[],
        ):TS_File[]{
    FILES.splice(THISFILE,1);
    for(let i=THISFILE;i<FILES.length;i++){
        FILES[i].Key=i
    }
    return FILES
}