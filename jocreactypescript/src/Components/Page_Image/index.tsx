import './index.css';
import React, { FC, ReactNode } from 'react';
import P_Image from '../P_Image';
import UI_DisplayFlex from '../UI_DisplayFlex';
import { useContext } from 'react';
import { Context_Main } from '../Context_Main';
const Page_Image = (
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
    JSX_Body=<P_Image
This_File={SS_File.AllFiles[SS_File.SelectThisFile.index]}
SelectKey={SS_File.SelectThisFile.index}
/>
}
return JSX_Body
}

export default Page_Image