import './index.css';
import React, { FC, ReactNode } from 'react';
import P_Img_File   from '../P_Img_File';
import P_Img_ShowImg from '../P_Img_ShowImg';
import UI_DisplayFlex from '../UI_DisplayFlex';
import { useContext } from 'react';
import { Context_Main } from '../Context_Main';
const Page_Img = (
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
    JSX_Body=<UI_DisplayFlex 
JSX={[<P_Img_File 
This_File={SS_File.AllFiles[SS_File.SelectThisFile.index]}
SelectKey={SS_File.SelectThisFile.index}
/>,
<P_Img_ShowImg
This_File={SS_File.AllFiles[SS_File.SelectThisFile.index]}
SelectKey={SS_File.SelectThisFile.index}
/>,]}
Color="#FFFFFF"
/>
}
return JSX_Body
}

export default Page_Img
