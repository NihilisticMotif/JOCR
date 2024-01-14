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
const [SS_IsCharacterArray,setSS_IsCharacterArray]=useState<boolean>(Array.isArray(TheMainCharacter))
//****************************************************************************
// OUTPUT
//****************************************************************************
return(
<div className='C07id_Div' style={{width:width}}>
<C_ExportFile
OCR_OutputFile={OCR_OutputFile}
setOCR_OutputFile={setOCR_OutputFile}/>
<div className='C06id_VerticalLine'></div>
<div className='C06id_DisplayBlock'>
<R_TextDimensions
SS_IsCharacterArray={SS_IsCharacterArray}
setSS_IsCharacterArray={setSS_IsCharacterArray} />
</div>
<div className='C06id_VerticalLine'></div>
{//<R_UtilityTable/>
}
</div>
    )
}

export default C07_TableSetting