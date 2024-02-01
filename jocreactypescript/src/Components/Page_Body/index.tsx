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
import { TS_SS_OCR } from '../TS_SS_OCR/An_Index';
import { TS_SS_ReadOCR } from '../TS_SS_ReadOCR/An_Index';
import { TS_SS_EditImg } from '../TS_SS_EditImg/An_Index';
import { TS_SS_ShowImg } from '../TS_SS_ShowImg/An_Index';
import UI_Activate from '../UI_Activate';
import Page_OverWrite from '../Page_OverWrite';
import { Default_SS_EditImg } from '../TS_SS_EditImg/default';
import { Default_SS_OCR } from '../TS_SS_OCR/default';
import { Default_SS_ReadOCR } from '../TS_SS_ReadOCR/default';

const Page_Header = (
{
}
:{
})=>{
/*
1. Page_Image 
1.1 Import Image
1.2 Name and Export Image
1.3 Zoom and Show Origin
2. Page_Text
2.1 Export and Name Text File
2.2 Operate OCR
2.3 TextArea
3. Page_OverWrite
3.0 OpenSS
3.1 SS_EditImg
3.2 SS_OCR
3.3 SS_ReadOCR
4. Page_Kernal
4.1 Kernal
4.2 Threshold
4.3 Boxes
4.4 JSON Kernal Setting
*/
    return (
<div>
<Page_OverWrite/>
</div>
    )}

export default Page_Header