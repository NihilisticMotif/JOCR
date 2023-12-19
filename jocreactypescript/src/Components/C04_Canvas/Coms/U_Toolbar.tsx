import './U_Toolbar.css'

const U_Toolbar = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_Zoom,
setSS_Zoom,
TotalWidth
}
:{
SS_Zoom:number,
setSS_Zoom:(S:number)=>void
TotalWidth:number
})=>{
  let let_Width01=100
  let let_Width02=TotalWidth-let_Width01
  let JSX_Convolution=<></>
  if(let_Width02==0){
    JSX_Convolution=<></>
  }
  else{
    JSX_Convolution=<div id='C04id_Convolution' style={{width:`${let_Width02}px`}}>

    </div>
  }
//****************************************************************************
// FUNCTION_00: Zoom setting
//****************************************************************************
    function f_PosZoom(){
      if(SS_Zoom<20){
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
//****************************************************************************
// OUTPUT
//****************************************************************************
return(
  <>
  <div className='C04id_Toolbar'
    style={{
      width:`${100}px`,
      height:`calc(100vh - ${143+20}px)`
      }}>
    <h1>{SS_Zoom}</h1>
    <div style={{display:'inline-block'}}>
      <div style={{display:'flex'}}>
    <button onClick={f_PosZoom} className='C04id_Zoom' style={{marginRight:'2px'}}>+</button>
    <button onClick={f_NegZoom} className='C04id_Zoom' style={{marginLeft:'2px'}}>-</button>
      </div>
    <button onClick={f_ResetZoom} style={{width:'70px',marginTop:'5px'}}>Reset</button>
    </div>
  </div>
  {JSX_Convolution}
  </>
  )
}

export default U_Toolbar