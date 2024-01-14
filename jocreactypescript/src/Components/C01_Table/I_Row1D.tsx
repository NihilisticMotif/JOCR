import './I_Row1D.css'
const I_Row1D = (
//****************************************************************************
// INPUT
//****************************************************************************
{
TheMainCharacter,
setTheMainCharacter,
OCR_OutputFile
}
:{
TheMainCharacter:string|string[]
setTheMainCharacter:(S:string|string[])=>void
OCR_OutputFile:string[]
})=>{
const let_HeaderHeight=100

//****************************************************************************
// OUTPUT
//****************************************************************************
    return (
<div className='C01id_Box' style={{height:`calc(100vh - ${0}px - ${105+let_HeaderHeight-30-15}px)`}}>
<th>{OCR_OutputFile}</th>
{TheMainCharacter}
</div>
    )}

export default I_Row1D