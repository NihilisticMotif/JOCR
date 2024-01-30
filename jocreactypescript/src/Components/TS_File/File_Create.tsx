import TS_File from "./An_Index"

export function File_Create(
        FILES:TS_File[],
        ):TS_File[]{
            const let_NEWELEMENT:TS_File={
                Key:FILES.length,
                ImageName:null,
                OriginalImageFile:null,
                ImageFile:null,
                TextFiles:null,
                TextName:null
                }
            return [...FILES,let_NEWELEMENT]
}