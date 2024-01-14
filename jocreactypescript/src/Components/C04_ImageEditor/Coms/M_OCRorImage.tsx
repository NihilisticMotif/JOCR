const M_OCRorImage = (
//****************************************************************************
// INPUT
//****************************************************************************
{
setSS_UseEffect,
OCR_IsOpen,
setOCR_IsOpen
}
:{
setSS_UseEffect:(S:boolean)=>void
OCR_IsOpen:boolean
setOCR_IsOpen:(S:boolean)=>void
})=>{

    
    function f_setOCR(){
      setSS_UseEffect(true)
      setOCR_IsOpen(true)
    }
    function f_setImage(){
      setSS_UseEffect(true)
    setOCR_IsOpen(false)
    }
    return (
        <>
    <div style={{display:'flex',marginLeft:'10px',marginBottom:'0px'}}>
    <button onClick={f_setImage} style={{ backgroundColor: OCR_IsOpen === false ? 'lightgreen' : 'white' }} className='C04id_Button'>Image Editor</button>
    <button onClick={f_setOCR}  style={{ backgroundColor: OCR_IsOpen === true ? 'lightgreen' : 'white' }} className='C04id_Button'>Tesseract OCR</button>
    </div>
    </>
    )}

export default M_OCRorImage