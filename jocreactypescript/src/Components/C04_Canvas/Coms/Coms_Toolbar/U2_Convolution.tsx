import './U2_Convolution.css'

const U2_Convolution = (
//****************************************************************************
// INPUT
//****************************************************************************
{

}
:{

})=>{
  let JSX_Con=[]
  let JSX_Kernals=[]
  let JSX_Kernal=()=>{
    return (
      <td>
        <h1>sss</h1>
        <input></input>
      </td>
    )
  }
  const let_Width='250px'

  let let_TotalSize=5
  for(let i=0;i<let_TotalSize;i++){
    JSX_Kernals=[]
    for(let j=0;j<let_TotalSize;j++){
      JSX_Kernals.push(JSX_Kernal)
    }
    JSX_Con.push(JSX_Kernals.map((c)=>(JSX_Kernal)))
  }
  let JSX_Convolution=JSX_Con.map((i)=>(<tr>{i.map((j)=>(<td><input></input></td>))}</tr>))

//****************************************************************************
// OUTPUT
//****************************************************************************
return(
<div style={{height:`calc(100vh - 40px - ${(143+20)}px )`,width:let_Width,backgroundColor:'lightblue'}}>
  <div style={{display:'flex',marginTop:'10px'}}>
    <h1 className='C04id_Zoom' style={{marginTop:'10px',marginLeft:'10px'}}>Convolution</h1>
  </div>
  
<div className='C04id_Convolution' style={{marginLeft:'10px'}}>
<div style={{marginTop:'20px'}}></div>
{JSX_Convolution}
    <button style={{marginTop:'10px',marginRight:'10px',marginLeft:'-140px'}}>Ok</button>
    <button style={{marginTop:'10px',marginRight:'5px'}}>Reset</button>
</div>
<hr/>
</div>
  )
}

export default U2_Convolution