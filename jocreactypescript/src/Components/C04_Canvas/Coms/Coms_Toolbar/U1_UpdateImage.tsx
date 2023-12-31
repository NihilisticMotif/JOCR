const U1_UpdateImage = (
//****************************************************************************
// INPUT
//****************************************************************************
{
setSS_UseEffect,
SS_IsActivate,
setSS_IsActivate,
}
:{
setSS_UseEffect:(S:boolean)=>void
SS_IsActivate:boolean[]
setSS_IsActivate:(S:boolean[])=>void,
})=>{
    //****************************************************************************
// FUNCTION_00: Zoom setting
//****************************************************************************
    function f_Gray(){
      setSS_UseEffect(true)
    }

    function f_RGB(){
      setSS_UseEffect(true)
    }
    return (
        <>
        <div style={{display:'inline-block',marginLeft:'10px',margin:'auto'}}>
    <h1 className='C04id_Zoom' style={{marginTop:'10px'}}>Show Image</h1>
    <button onClick={f_Gray} className='C04id_Button'>Original Image</button>
    <button onClick={f_RGB}  className='C04id_Button'>Edited Image</button>
    <button onClick={f_RGB}  className='C04id_Button'>Original BW Image</button>
    </div>
    </>
    )}

export default U1_UpdateImage