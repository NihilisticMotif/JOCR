import './index.css';
import React, { FC, ReactNode } from 'react';
import { Context_Main } from '../Context_Main';
import { useState,useEffect,useContext } from 'react';

import { SSFile_NameFolder } from '../TS_SS_File/SSFile_NameFolder';
import UI_SearchOption from '../UI_SearchOption';
import UI_DisplayFlex from '../UI_DisplayFlex';
import UI_Button from '../UI_Button';
import UI_ResettingInput from '../UI_ResettingInput';
import UI_Title from '../UI_Title';
import { const_color } from '../TS_SS_EditImg/const_color';
import { uPSM } from '../utility/uPSM';
import { uLANGUAGE } from '../utility/uLANGUAGE';
import { const_ShowColor } from '../TS_SS_ShowImg/const_showcolor';
const  P_Head_File = (
{
}
:{
})=>{

const{SS_File}=useContext(Context_Main)
const{setSS_File}=useContext(Context_Main)

const[SS_ImgFolderName,setSS_ImgFolderName]=useState<string>(SS_File.FolderName.Img)
const[SS_TextFolderName,setSS_TextFolderName]=useState<string>(SS_File.FolderName.Text)

useEffect(()=>{
    setSS_File({
    AllFiles:SS_File.AllFiles,
    SelectThisFile:{
        index:SS_File.SelectThisFile.index,
        mode:SS_File.SelectThisFile.mode
    },
    FolderName:{
        Img:SS_ImgFolderName,
        Text:SS_TextFolderName,
    }
    })
},[
    SS_ImgFolderName,
    SS_TextFolderName,
])

function f_Fake(){
    alert('This is Fake Function')
}

    return (
<UI_DisplayFlex
JSX={[
<UI_Button
Name="Import Folder"
Function={()=>{f_Fake()}}
/>,
<UI_ResettingInput<string>
Name={'Image Folder:'+SS_ImgFolderName}
setSS_Value={setSS_ImgFolderName}
SS_Value={SS_ImgFolderName}
SS_DefaultValue={null}
/>,
<UI_Button
Name="Export Img Folder"
Function={()=>{f_Fake()}}
/>,
<UI_ResettingInput<string>
Name={'Text Folder:'+SS_TextFolderName}
setSS_Value={setSS_TextFolderName}
SS_Value={SS_TextFolderName}
SS_DefaultValue={null}
/>,
<UI_Button
Name="Export Text Folder"
Function={()=>{f_Fake()}}
/>,
<UI_Title
Name={'Number of all page: '+(SS_File.AllFiles?SS_File.AllFiles.length.toString():'0')}
/>
]}
Color='#FFFFFF'
/>
    )}

export default  P_Head_File