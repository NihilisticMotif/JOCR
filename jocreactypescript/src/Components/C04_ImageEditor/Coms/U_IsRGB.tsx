const U_IsRGB = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_IsRGB,
setSS_UseEffect,
setSS_IsRGB
}
:{
SS_IsRGB:boolean
setSS_UseEffect:(S:boolean)=>void
setSS_IsRGB:(S:boolean)=>void
})=>{
    //****************************************************************************
// FUNCTION_00: Zoom setting
//****************************************************************************
    function f_Gray(){
      setSS_UseEffect(true)
      setSS_IsRGB(false)
    }

    function f_RGB(){
      setSS_UseEffect(true)
      setSS_IsRGB(true)
    }
    let let_State='Color'
    if(SS_IsRGB===true){let_State='Color'}
    else{let_State='Gray'}
    return (
        <>
        <div style={{display:'inline-block',marginLeft:'10px',margin:'auto'}}>
    <h1 className='C04id_Zoom' style={{marginTop:'10px'}}>{let_State}</h1>
    <button onClick={f_Gray} className='C04id_Button'>Gray</button>
    <button onClick={f_RGB}  className='C04id_Button'>RGB</button>
    </div>
    </>
    )}

export default U_IsRGB