//import './U1_Affine.css'
const U_Matrix = (
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
    const let_WidthTr='50px'
  let let_Status='Error'
  if(SS_IsActivate[2]===true){
    let_Status='(Active)'
  }
  else{
    let_Status='(Inactive)'
  }
    return (
        <>
        <div className='C04id_Scalar' style={{display:'inline-block',marginLeft:'10px',margin:'auto'}}>
<h1>Linear Map</h1>
<h1 style={{fontSize:'14px',marginTop:'-10px'}}>{let_Status}</h1>
<div style={{display:'flex'}}>
<button style={{marginTop:'0px',marginBottom:'6px',marginRight:'3px'}} onClick= {()=>alert('Rain')/*f_Update          */}>Activate</button>
<button style={{marginTop:'0px',marginBottom:'6px',marginRight:'0px'}} onClick= {()=>alert('Rain')/*f_SetDeActivate   */}>Deactivate</button>

</div>
<tr>
    <td style={{width:let_WidthTr}} >Scale</td>
    <td><input></input></td>
    <td><button>Ok</button></td>
    <td><button className='C04id_ShortReset'>Reset</button></td>
</tr>
<hr style={{visibility:'hidden',height:'2px',marginBottom:'-2px'}}/>
<tr>
    <td style={{width:let_WidthTr}} >Scale X</td>
    <td><input></input></td>
    <td><button>Ok</button></td>
    <td><button className='C04id_ShortReset'>Reset</button></td>
</tr>
<hr style={{visibility:'hidden',height:'2px',marginBottom:'-2px'}}/>
<tr>
    <td style={{width:let_WidthTr}} >Scale Y</td>
    <td><input ></input></td>
    <td><button className='C04id_ShortOk'>Ok</button></td>
    <td><button className='C04id_ShortReset'>Reset</button></td>
</tr>
<hr style={{visibility:'hidden',height:'2px',marginBottom:'-2px'}}/>

<hr style={{visibility:'hidden',height:'2px',marginBottom:'-2px'}}/>
{/*<tr>
    <td style={{width:let_WidthTr}} >Crop XL</td>
    <td><input></input></td>
    <td><button>Ok</button></td>
</tr>
<hr style={{visibility:'hidden',height:'2px',marginBottom:'-2px'}}/>
<tr>
    <td style={{width:let_WidthTr}} >Crop XR</td>
    <td><input></input></td>
    <td><button>Ok</button></td>
</tr>
<hr style={{visibility:'hidden',height:'2px',marginBottom:'-2px'}}/>
<tr>
    <td style={{width:let_WidthTr}} >Crop YU</td>
    <td><input></input></td>
    <td><button>Ok</button></td>
</tr>
<hr style={{visibility:'hidden',height:'2px',marginBottom:'-2px'}}/>
<tr>
    <td style={{width:let_WidthTr}} >Crop YD</td>
    <td><input></input></td>
    <td><button>Ok</button></td>
    </tr>*/}

    </div>
    </>
    )}

export default U_Matrix