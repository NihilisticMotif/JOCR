import './index.css';
import UI_DisplayFlex from '../UI_DisplayFlex';
import UI_Button from '../UI_Button';
import UI_Activate from '../UI_Activate';
import UI_ResettingInput from '../UI_ResettingInput';
import UI_Title from '../UI_Title';
import React, { FC, ReactNode } from 'react';
import { Context_Main } from '../Context_Main';
import { SSFile_Create } from '../TS_SS_File/SSFile_Create';
import { SSFile_Delete } from '../TS_SS_File/SSFile_Delete';
import { SSFile_SelectThisFile } from '../TS_SS_File/SSFile_SelectThisFile';
import { File_Delete } from '../TS_File/File_Delete';
import TS_File from '../TS_File/An_Index';
import { TS_SS_File } from '../TS_SS_File/An_Index';
import { useState,useEffect,useContext } from 'react';
import UI_DeleteWarning from '../UI_DeleteWarning';
import { const_mode } from '../TS_SS_File/const_mode';
// File
// 1. Import Image          [Import]
// 2. Export Image Folder   [Export [... ][Ok]]
// 3. Export Text  Folder   [Export [... ][Ok]]
// 4. SS_EditImg            [Operate] [Option: Color] [Rotate [...] [Ok] [Reset]]
// 5. SS_File               [Page1] [Page2] [+]

const Page_Tab = (
{
}
:{
})=>{
//***************************************************************************************************************************************
// HOOK
//***************************************************************************************************************************************

const{SS_File}=useContext(Context_Main)
const{setSS_File}=useContext(Context_Main)

// SS = SetState
// e = useEffect
// c = copy
const[eSS_File,seteSS_File]=useState<TS_SS_File>(SS_File)

useEffect(()=>{
    seteSS_File({
        AllFiles:eSS_File.AllFiles,
        SelectThisFile:eSS_File.SelectThisFile,
        FolderName:SS_File.FolderName
    })
    setSS_File({
        AllFiles:eSS_File.AllFiles,
        SelectThisFile:eSS_File.SelectThisFile,
        FolderName:SS_File.FolderName
    })
    setSS_Title(()=>{
    if (eSS_File.AllFiles) {
        return eSS_File.AllFiles.map((i, index) => {
            if (eSS_File.AllFiles![index].Img.Name !== null && eSS_File.AllFiles![index].Img.Name !== undefined) {
                return eSS_File.AllFiles![index].Img.Name!;
            } else if (eSS_File.FolderName.Img!=='') {
                return eSS_File.FolderName.Img+i.Key.toString();
            } else {
                return 'UntitledImg' + i.Key.toString();
            }
        });
    }
    return [''];
    })
},[eSS_File])

const[SS_Title,setSS_Title]=useState<string[]>(()=>{
    if (SS_File.AllFiles) {
        return SS_File.AllFiles.map((i, index) => {
            if (SS_File.AllFiles![index].Img.Name !== null && SS_File.AllFiles![index].Img.Name !== undefined) {
                return SS_File.AllFiles![index].Img.Name!;
            } else if (SS_File.FolderName.Img!=='') {
                return SS_File.FolderName.Img + i.Key.toString();
            } else {
                return 'UntitledImg' + i.Key.toString();
            }
        });
    }
    return [''];
})

//***************************************************************************************************************************************
// FUNCTION
//***************************************************************************************************************************************

function f_CreateNewFile(){
    let let_Update = SSFile_Create(eSS_File)
    seteSS_File(let_Update)
}

function f_DeleteThisFile(ThisFile:number){
    let let_Update = SSFile_Delete(eSS_File,ThisFile)
    seteSS_File(let_Update)
}

function f_SelectFile(ThisFile:number,mode:typeof const_mode[number]){
    let let_Update=SSFile_SelectThisFile(eSS_File,ThisFile,mode)
    seteSS_File(let_Update)
}

//***************************************************************************************************************************************
// JSX
//***************************************************************************************************************************************

let JSX_Pages=[<UI_Button Name={'+'} Function={f_CreateNewFile}/>]
if(SS_File.AllFiles){
    JSX_Pages=SS_File.AllFiles.map(
        (ThisFile)=>{
        let let_ImageTitle:string='NotWorking'
        if(SS_Title[ThisFile.Key]){
            let_ImageTitle=SS_Title[ThisFile.Key]
        }
        else{
            let_ImageTitle="Invalid SS_Title[ThisFile.Key]"
        }
        let JSX_Header=[
            <div onClick={()=>{f_SelectFile(ThisFile.Key,"Default")}}>
            <UI_Title Name={"Image: "+let_ImageTitle}/>
            </div>,
            <UI_Button Name={'x'} Function={()=>{f_SelectFile(ThisFile.Key,"DeleteWarning")}}/>
        ]
        let JSX_Color='Page_Tab Error'
        if(SS_File.SelectThisFile.index===ThisFile.Key && SS_File.SelectThisFile.mode==='Default'){
            JSX_Color='red'
        }
        else if (SS_File.SelectThisFile.index===ThisFile.Key && SS_File.SelectThisFile.mode==='DeleteWarning'){
            JSX_Color='red'
            JSX_Header=[
            <UI_DeleteWarning
            Name={let_ImageTitle}
            Delete={()=>{f_DeleteThisFile(ThisFile.Key)}}
            Cancel={()=>{f_SelectFile(ThisFile.Key,"Default")}}
            />
            ]
        }
        else{
            JSX_Color='#CCCCCC'
        }
        return (
        <UI_DisplayFlex
        JSX={JSX_Header}
        Color={JSX_Color}
        />)
    })
    JSX_Pages.push(<UI_Button Name={'+'} Function={f_CreateNewFile}/>)
}

    return (
<div>
<UI_DisplayFlex
JSX={JSX_Pages}
Color={'#AAAAAA'}
/>
</div>
    )}

export default Page_Tab