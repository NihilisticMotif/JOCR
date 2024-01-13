// React
import { useState } from 'react';
import { CSVLink } from "react-csv";
// https://stackoverflow.com/questions/48760815/export-to-csv-button-in-react-table

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_Row from '../T01_Row/An_Index';
import TS_Column from '../T02_Column/An_Index';
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
SS_TextDimension,
setSS_TextDimension
}:{
width:string,
OCR_OutputFile:string[]
setOCR_OutputFile:(S:string[])=>void
SS_TextDimension:number;
setSS_TextDimension:(S:number)=>void
}
) => {

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
SS_TextDimension={SS_TextDimension}
setSS_TextDimension={setSS_TextDimension} />
</div>
<div className='C06id_VerticalLine'></div>
{//<R_UtilityTable/>
}
</div>
    )
}

export default C07_TableSetting