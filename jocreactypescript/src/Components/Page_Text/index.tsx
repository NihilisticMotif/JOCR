import './index.css';
import React, { FC, ReactNode } from 'react';
import P_Text_File from '../P_Text_File';
import P_Text_Message from '../P_Text_Message';
import { useContext } from 'react';
import { Context_Main } from '../Context_Main';
const Page_Text = (
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
JSX_Body=<>
<P_Text_File    
This_File={SS_File.AllFiles[SS_File.SelectThisFile.index]}
SelectKey={SS_File.SelectThisFile.index}
/>
<P_Text_Message 
This_File={SS_File.AllFiles[SS_File.SelectThisFile.index]}
SelectKey={SS_File.SelectThisFile.index}
/>
    </>
}
    return JSX_Body}

export default Page_Text