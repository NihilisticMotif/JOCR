// React
import { useState , useEffect, useRef, useInsertionEffect } from 'react';
import Row_2D from './Coms/Row_2D'

const I_Row2D = (
//****************************************************************************
// INPUT
//****************************************************************************
{
// PARAMETER
// PERPERTY
// HOOK
TheMainCharacter,
setTheMainCharacter,
OCR_OutputFile
}:{
// TYPE
// PERPERTY
// HOOK
TheMainCharacter:string|string[]
setTheMainCharacter:(S:string|string[])=>void
OCR_OutputFile:string[]
}
) => {
//****************************************************************************
// VARIABLE
//****************************************************************************
const let_HeaderHeight=100
const [SS_EditRow,setSS_EditRow]=useState<[number,'None'|'Edit'|'Delete']>([0,'None'])
//****************************************************************************
// JSX_00:
//****************************************************************************
    let JSX_Rows:JSX.Element|JSX.Element[]=<></>
    if(typeof TheMainCharacter!=='string'){
    const let_Rows:string[] = [...TheMainCharacter]
    JSX_Rows = let_Rows.map((value: string, index: number, array: string[]) =>{
        return (
            <>
            <Row_2D
            INDEX={index}
            TheMainCharacter={TheMainCharacter}
            setTheMainCharacter={setTheMainCharacter}
            SS_EditRow={SS_EditRow}
            setSS_EditRow={setSS_EditRow}
            />
            </>)
    })}
    else{
        JSX_Rows=<h1>There is error with TheMainCharacter</h1>
    }

//****************************************************************************
// OUTPUT
//****************************************************************************
    return (

<div id='C01id_H'
>

<div id='C01id_InnerTable' style={{overflowX:'hidden'}}>
<table id='C01id_Table' style={{width:'1000px'}}>

<tbody id='C02id_Height' style={{
    height:`calc(100vh - ${0}px - ${105+let_HeaderHeight-30-15}px)`,
    }}>
<tr>
    <th className='C01id_Left'>
        Index
    </th>
    <th>
        <div style={{width:`100vh`}}>
            {OCR_OutputFile[0]+'.'+OCR_OutputFile[1]}
        </div>
    </th>
    <th className='C01id_RightRow'>
        <div className='C01id_EditRowButton'>Button</div>
    </th>
</tr>
{/*
+----------+----------------------------------+----------------------+
|C01id_Left| CSS                              | C01id_RightRow       |
+----------+----------------------------------+----------------------+
|index     | {OCR_OutputFile}                 | Button               |
+----------+----------------------------------+----------------------+
|  0       | Row 0                            | Edit, Insert, Delete |
+----------+----------------------------------+----------------------+
|  1       | Row 1                            | Edit, Insert, Delete |
+----------+----------------------------------+----------------------+
|  2       | Row 2                            | Edit, Insert, Delete |
+----------+----------------------------------+----------------------+
*/}
{JSX_Rows}
</tbody>
</table>


</div>

</div>
    )
}

export default I_Row2D