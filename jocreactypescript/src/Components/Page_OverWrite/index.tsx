import './index.css';
import React, { FC, ReactNode } from 'react';
import P_OverWrite_EditedImg from '../P_OverWrite_EditedImg';
import P_OverWrite_OCR       from '../P_OverWrite_OCR';   
import P_OverWrite_Open     from '../P_OverWrite_Open'; 
import P_OverWrite_ReadOCR   from '../P_OverWrite_ReadOCR';
import UI_DisplayFlex from '../UI_DisplayFlex';
import { useContext } from 'react';
import { Context_Main } from '../Context_Main';
const Page_OverWrite = (
{
}
:{
})=>{
const{SS_File}=useContext(Context_Main)
const{setSS_File}=useContext(Context_Main)
let JSX_Body=<></>
if(
    SS_File.AllFiles
    &&SS_File.AllFiles[SS_File.SelectThisFile.index]
){
if(SS_File.AllFiles[SS_File.SelectThisFile.index].OpenSS){
JSX_Body=<UI_DisplayFlex
JSX={[
<P_OverWrite_Open     
This_File={SS_File.AllFiles[SS_File.SelectThisFile.index]}
SelectKey={SS_File.SelectThisFile.index}
/>,
<P_OverWrite_EditedImg
This_File={SS_File.AllFiles[SS_File.SelectThisFile.index]}
SelectKey={SS_File.SelectThisFile.index}
/>,
<P_OverWrite_OCR      
This_File={SS_File.AllFiles[SS_File.SelectThisFile.index]}
SelectKey={SS_File.SelectThisFile.index}
/>,
<P_OverWrite_ReadOCR  
This_File={SS_File.AllFiles[SS_File.SelectThisFile.index]}
SelectKey={SS_File.SelectThisFile.index}
/>,]}
Color='#FFFFFF'
/>}
else{
JSX_Body=<P_OverWrite_Open     
This_File={SS_File.AllFiles[SS_File.SelectThisFile.index]}
SelectKey={SS_File.SelectThisFile.index}
/>
}
}
    return JSX_Body}

export default Page_OverWrite

/*

<UI_DisplayFlex
JSX={[<P_OverWrite_Open     />,
<P_OverWrite_EditedImg/>,
<P_OverWrite_OCR      />,
<P_OverWrite_ReadOCR  />,]}
Color='#FFFFFF'
/>
*/