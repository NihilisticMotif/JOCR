// React
import { useState , useEffect, useRef, useInsertionEffect } from 'react';
// Components

// Type

import I_Row2D from './I_Row2D'
import I_Row1D from './I_Row1D';

//-------------------------+--------------+----------+
// CSS                     | File Name    | General  |
//-------------------------+--------------+----------+
import './index00.css'; // | index.jsx    | General  |
import './index01.css'; // | index.jsx    | Specific |
//-------------------------+--------------+----------+

const C01_Table = (
//****************************************************************************
// INPUT
//****************************************************************************
{
TheMainCharacter,
setTheMainCharacter,
OCR_OutputFile
}:{
TheMainCharacter:string[]|string
setTheMainCharacter:(S:string[]|string)=>void
OCR_OutputFile:string[]
}

) => {
    let JSX_Return=<></>
    if(typeof TheMainCharacter ==='string'){
        JSX_Return=<I_Row1D
TheMainCharacter={TheMainCharacter}
setTheMainCharacter={setTheMainCharacter}
OCR_OutputFile={OCR_OutputFile}
/>
    }
    else{
      JSX_Return=<I_Row2D
TheMainCharacter={TheMainCharacter}
setTheMainCharacter={setTheMainCharacter}
OCR_OutputFile={OCR_OutputFile}
/>  
    }

//****************************************************************************
// OUTPUT
//****************************************************************************
    return (

<>
{JSX_Return}
</>
    )
}

export default C01_Table