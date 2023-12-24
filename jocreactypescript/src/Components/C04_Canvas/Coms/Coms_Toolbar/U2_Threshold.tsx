

const U2_Threshold = (
//****************************************************************************
// INPUT
//****************************************************************************
{

}
:{

})=>{
  const let_Width='250px'
  let JSX_Threshold=<div style={{position:'absolute',marginLeft:'40px',backgroundColor:'darkred',marginTop:'200px',width:'190px',height:'3px'}}>
      <div style={{display:'flex'}}>
        <h1 style={{fontSize:'13px',marginRight:'-20px',marginTop:'-10px',marginLeft:'-25px'}}>112</h1>
      <button style={{width:'25px',height:'25px',marginLeft:'115px'}} >.</button>
      <button style={{width:'25px',height:'25px'}} >/</button>
      <input  style={{width:'25px',height:'25px'}} type="color" id="favcolor" name="favcolor" value="#ff0000"></input>
      <button style={{width:'25px',height:'25px'}}>X</button>
      </div>
    </div>

//****************************************************************************
// OUTPUT
//****************************************************************************
return(
<div style={{height:`calc(100vh - 40px - ${(143+20)}px )`,width:let_Width,backgroundColor:'lightblue',marginTop:'0px'}}>
  <div style={{display:'flex',marginTop:'10px'}}>
    <h1 className='C04id_Zoom' style={{marginTop:'10px'}}>Gray Threshold</h1>
    <button style={{marginTop:'10px',marginRight:'15px'}}>Save</button>
    <button style={{marginTop:'10px',marginRight:'15px'}}>Reset</button>
  </div>
  <hr/>
  <div style={{display:'flex'}}>
    <h1 className='C04id_Zoom' style={{display:'flex',marginLeft:'20px',marginTop:'10px'}}>255</h1>
    <button style={{marginTop:'0px',marginRight:'15px'}}>Add Threshold</button>
  </div>
  <div
  style={{
  display:'flex'
  }}
  >
{// Original Gray Scale Indicator  
}
    <div 
    style={{
    backgroundImage: 'linear-gradient(white, black)',
    marginTop:'10px',
    marginLeft:'40px',
    width:'40px',
    height:`calc(100vh - ${ (143+20+200)}px )`
    }}>
    </div>
    <div 
    style={{
    backgroundColor:'green',
    marginTop:'10px',
    width:'3px',
    height:`calc(100vh - ${ (143+20+200)}px )`
    }}>
    </div>
    <div 
    style={{
    backgroundImage: 'linear-gradient(white, black)',
    marginTop:'10px',
    marginLeft:'0px',
    width:'50px',
    height:`calc(100vh - ${ (143+20+200)}px )`
    }}>
    </div>
{// Gray Scale Setting
}
    {JSX_Threshold}    
  </div>  
  <h1 className='C04id_Zoom' style={{marginTop:'10px',display:'flex',marginLeft:'40px'}}>0</h1>
</div>
  )
}

export default U2_Threshold