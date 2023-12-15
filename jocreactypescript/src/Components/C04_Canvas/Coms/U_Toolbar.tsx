import './U_Toolbar.css'
const U_Toolbar = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_Zoom,
setSS_Zoom
}
:{
SS_Zoom:number,
setSS_Zoom:(S:number)=>void
})=>{
//****************************************************************************
// FUNCTION_00: Zoom setting
//****************************************************************************
    function f_PosZoom(){
        let ss_Zoom=SS_Zoom 
        let let_Zoom = parseFloat((ss_Zoom+0.1).toFixed(1));
        setSS_Zoom(let_Zoom)
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
//****************************************************************************
// OUTPUT
//****************************************************************************
return(
  <div className='C04id_Toolbar'
    style={{height:`calc(100vh - ${143+20}px)`}}>
    <h1>{SS_Zoom}</h1>
    <button onClick={f_PosZoom}>+</button>
    <button onClick={f_NegZoom}>-</button>
    <button onClick={f_ResetZoom}>Reset</button>
  </div>)
}

export default U_Toolbar