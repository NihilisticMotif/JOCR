import TS_File from '../TS_File/An_Index';

export type TS_SS_File={
    AllFiles:TS_File[]|null,
    SelectThisFile:{
        index:number,
        mode:'Default'|'DeleteWarning'
    },
    ImageFolderName:string|null,
    TextFolderName:string|null
}
