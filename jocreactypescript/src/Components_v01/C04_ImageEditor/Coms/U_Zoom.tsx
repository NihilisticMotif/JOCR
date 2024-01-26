const U_Zoom = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_Zoom,
setSS_Zoom,
}
:{
SS_Zoom:number,
setSS_Zoom:(S:number)=>void
})=>{
    //****************************************************************************
// FUNCTION_00: Zoom setting
//****************************************************************************
    function f_PosZoom(){
      if(SS_Zoom<10){
        let ss_Zoom=SS_Zoom 
        let let_Zoom = parseFloat((ss_Zoom+0.1).toFixed(1));
        setSS_Zoom(let_Zoom)
      }
    }
    function f_NegZoom(){
        if(SS_Zoom>0.1){
        let ss_Zoom=SS_Zoom 
        let let_Zoom = parseFloat((ss_Zoom-0.1).toFixed(1));
        setSS_Zoom(let_Zoom)
    }}
    function f_ResetZoom(){
        setSS_Zoom(1)
    }
    return (
        <>
        <div style={{display:'inline-block',margin:'auto'}}>
      <h1 className='C04id_Zoom' style={{marginTop:'0px'}}>Zoom: {SS_Zoom}</h1>
      <div style={{display:'flex',marginTop:'0px'}}>
    <button onClick={f_PosZoom} className='C04id_Zoom' style={{width:'28px'}}>+</button>
    <button onClick={f_NegZoom} className='C04id_Zoom' style={{width:'28px'}}>-</button>
      </div>
    <button onClick={f_ResetZoom} className='C04id_Button' >Reset</button>
    </div>

    <div style={{borderLeft:'3px solid #ffffff',height:'110px'}}>
    </div>
    </>
    )}

export default U_Zoom