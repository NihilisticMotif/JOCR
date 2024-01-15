// React
import { useState , useEffect, useRef, useInsertionEffect } from 'react';
import Row_2D from './Coms/Row_2D'
import C_CreateRow from './Coms/C_CreateRow';
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
OCR_OutputFile,
width
}:{
// TYPE
// PERPERTY
// HOOK
TheMainCharacter:string|string[]
setTheMainCharacter:(S:string|string[])=>void
OCR_OutputFile:string[]
width:string
}
) => {
//****************************************************************************
// VARIABLE
//****************************************************************************
const let_HeaderHeight=100
const [SS_EditRow,setSS_EditRow]=useState<[number,'None'|'Edit'|'Delete'|'Insert']>([0,'None'])
const dynamicWidthDivRef = useRef<HTMLDivElement>(null);
const [inputWidth,setinputWidth]=useState<number>(0)
const [SS_Index,setSS_Index]=useState<number[]|null>(
    typeof TheMainCharacter!=='string'? TheMainCharacter.map((value: string, index: number, array: string[]) =>{
        return index}
        ):null)
useEffect(() => {
    const calculateDynamicWidth = () => {
      if (dynamicWidthDivRef.current) {
        let windowWidth:number=0
        if(width==='50%'){
            // The scroll bar is not appear.
            // I think it is because the scroll bar
            // is on the rightest side.
            // How can I margin right auto scroll bar?
            windowWidth = window.innerWidth/2
        }else{
            windowWidth = window.innerWidth
        }

        const leftThWidth = document.querySelector('.C01id_Left')?.clientWidth || 0;
        const rightRowThWidth = document.querySelector('.C01id_RightRow')?.clientWidth || 0;

        const dynamicWidth = windowWidth - leftThWidth - rightRowThWidth -35;
        setinputWidth(dynamicWidth)
        dynamicWidthDivRef.current.style.width = dynamicWidth + 'px';

        //const dynamicWidth = windowWidth/2 - leftThWidth - rightRowThWidth -35;
      }
    };
    calculateDynamicWidth();
    window.addEventListener('resize', calculateDynamicWidth);
    return () => {
      window.removeEventListener('resize', calculateDynamicWidth);
    };
  }, [width]);
useEffect(()=>{
setSS_Index(
    typeof TheMainCharacter!=='string'? TheMainCharacter.map((value: string, index: number, array: string[]) =>{
        return index}
        ):null)
},[TheMainCharacter,SS_EditRow])

//****************************************************************************
// JSX_00:
//****************************************************************************
    let JSX_Rows:JSX.Element|JSX.Element[]=<></>
    if(typeof TheMainCharacter!=='string'&&SS_Index){
const let_Rows:string[] = [...TheMainCharacter]
// update JSX_Rows every time when
JSX_Rows = let_Rows.map((value: string, index: number, array: string[]) =>{
    return (
        <>
        <Row_2D
        INDEX={index}
        TheMainCharacter={TheMainCharacter}
        setTheMainCharacter={setTheMainCharacter}
        SS_EditRow={SS_EditRow}
        setSS_EditRow={setSS_EditRow}
        inputwidth={inputWidth}
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
<table id='C01id_Table' style={{width:'100%'}}>

<tbody id='C02id_Height' style={{
    height:`calc(100vh - ${0}px - ${105+let_HeaderHeight-30-15}px)`,
    width:'100%',
    overflowY:'auto'
    }}>
<tr>
    <th className='C01id_Left'>
        Index
    </th>
    <th>
        <div ref={dynamicWidthDivRef}
        >
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
<C_CreateRow
TheMainCharacter={TheMainCharacter}
setTheMainCharacter={setTheMainCharacter}
inputwidth={inputWidth}
/>
{JSX_Rows}
</tbody>
</table>


</div>

</div>
    )
}

export default I_Row2D