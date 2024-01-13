const M_OCRorImage = (
//****************************************************************************
// INPUT
//****************************************************************************
{
setSS_UseEffect,
SS_OpenOCR,
setSS_OpenOCR
}
:{
setSS_UseEffect:(S:boolean)=>void
SS_OpenOCR:string
setSS_OpenOCR:(S:string)=>void
})=>{

    
    function f_setOCR(){
      setSS_UseEffect(true)
      setSS_OpenOCR('OCR')
    }
    function f_setImage(){
      setSS_UseEffect(true)
    setSS_OpenOCR('Image')
    }
    return (
        <>
    <div style={{display:'flex',marginLeft:'10px',marginBottom:'0px'}}>
    <button onClick={f_setImage} style={{ backgroundColor: SS_OpenOCR === 'Image' ? 'lightgreen' : 'white' }} className='C04id_Button'>Image Editor</button>
    <button onClick={f_setOCR}  style={{ backgroundColor: SS_OpenOCR === 'OCR' ? 'lightgreen' : 'white' }} className='C04id_Button'>Tesseract OCR</button>
    </div>
    </>
    )}

export default M_OCRorImage