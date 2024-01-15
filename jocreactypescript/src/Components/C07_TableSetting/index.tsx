// React
import { useState } from 'react';
import { CSVLink } from "react-csv";
// https://stackoverflow.com/questions/48760815/export-to-csv-button-in-react-table

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type

import C_ExportFile from './Coms/C_ExportFile';
import R_TextDimensions from './Coms/R_TextDimensions';
import R_UtilityTable from './Coms/R_UtilityTable';
import U_Split from './Coms/U_Split';
import U_Join from './Coms/U_Join';
// CSS
import './index.css'


const C07_TableSetting = (
//****************************************************************************
// INPUT
//****************************************************************************
{
width,
OCR_OutputFile,
setOCR_OutputFile,
TheMainCharacter,
setTheMainCharacter
}:{
width:string,
OCR_OutputFile:string[]
setOCR_OutputFile:(S:string[])=>void
TheMainCharacter:string|string[]
setTheMainCharacter:(S:string|string[])=>void
}
) => {
    let JSX_JoinSplit=<></>
if(Array.isArray(TheMainCharacter)){
    JSX_JoinSplit=<U_Join
    TheMainCharacter={TheMainCharacter}
    setTheMainCharacter={setTheMainCharacter}/>
}else{
    JSX_JoinSplit=<U_Split
    TheMainCharacter={TheMainCharacter}
    setTheMainCharacter={setTheMainCharacter}/>
}

//****************************************************************************
// OUTPUT
//****************************************************************************
return(
<div className='C07id_Div' style={{width:width}}>
<C_ExportFile
OCR_OutputFile={OCR_OutputFile}
setOCR_OutputFile={setOCR_OutputFile}
TheMainCharacter={TheMainCharacter}/>
<div className='C06id_VerticalLine'></div>
<div className='C06id_DisplayBlock'>
<R_TextDimensions
IsArray={Array.isArray(TheMainCharacter)}/>
</div>
<div className='C06id_VerticalLine'></div>
<div className='C06id_DisplayBlock' style={{width:'40px'}}>
{JSX_JoinSplit}
</div>
<div className='C06id_VerticalLine' style={{marginLeft:`${40+3}px`}}></div>

</div>
    )
}

export default C07_TableSetting