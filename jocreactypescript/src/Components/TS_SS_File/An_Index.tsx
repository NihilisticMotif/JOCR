import TS_File from '../TS_File/An_Index';
import { const_mode } from './const_mode';
export type TS_SS_File={
    AllFiles:TS_File[]|null,
    SelectThisFile:{
        index:number,
        mode:typeof const_mode[number]
    },
    FolderName:{
        Img:string,
        Text:string
    }
}
