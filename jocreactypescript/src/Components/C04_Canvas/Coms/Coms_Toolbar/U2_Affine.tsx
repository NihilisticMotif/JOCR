import './U1_2DMatrix.css'
import { useState, useEffect} from 'react';
import './U2_Convolution.css'

const U2_Affine = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_Affine,
setSS_Affine,
SS_AffineSTR,
setSS_AffineSTR,
SS_AffineRGB,
setSS_AffineRGB,
SS_AffineBOOL,
setSS_AffineBOOL
}
:{
SS_Affine       :number[][][]
setSS_Affine    :(S:number[][][])=>void
SS_AffineSTR    :string[][][]
setSS_AffineSTR :(S:string[][][])=>void
SS_AffineRGB    :string[][]
setSS_AffineRGB :(S:string[][])=>void
SS_AffineBOOL:boolean[][]
setSS_AffineBOOL:(S:boolean[][])=>void
})=>{

//****************************************************************************
// FUNCTION 00: Text onChange
//****************************************************************************
  function f_OnChange(){}

//****************************************************************************
// FUNCTION 01: Update Matrix
//****************************************************************************

//****************************************************************************
// FUNCTION 02: Reset Matrix
//****************************************************************************

//****************************************************************************
// FUNCTION 03: Show Point
//****************************************************************************


//****************************************************************************
// JSX 00: Input DOM Element
//****************************************************************************

  const let_Width='250px'
  let ss_Affine=[...SS_Affine]
  let ss_AffineSTR=[...SS_AffineSTR]
  let ss_AffineRGB=[...SS_AffineRGB]
  let ss_AffineBOOL=[...SS_AffineBOOL]
  let let_SelectedPoint=[]
  let let_TransformedPoint=[]
  for(let i=0;i<ss_Affine.length;i++){
  let let_Points=[]
  for(let j=0;j<ss_Affine[i].length;j++){
  let let_Vector=[]
  for(let k=0;k<ss_Affine[i][j].length;k++){
  let_Vector.push(ss_Affine[i][j][k])
  }
  let_Points.push({
    Vector:let_Vector,
    RGB:ss_AffineRGB[i][j],
    BOOL:ss_AffineBOOL[i][j],
  })
  }
  if(i===0){
    let_SelectedPoint.push(let_Points)
  }
  else{
    let_TransformedPoint.push(let_Points)
  }
  }
  let JSX_SelectedPoint=let_SelectedPoint[0].map((point,index)=>{
    return(
<tr>
<h1 style={{marginRight:'10px'}}>Point {index+1}</h1>
<td><input value={point.Vector[0]} id={'C04id_Affine'+(0).toString()+(index*10+point.Vector[0]).toString()} ></input></td>
<td><input value={point.Vector[1]} id={'C04id_Affine'+(0).toString()+(index*10+point.Vector[1]).toString()} ></input></td>
<td><input type='color' value={point.RGB}></input></td>
<td><button>Show</button></td>
</tr>
    )
  })
  let JSX_TransformedPoint=let_TransformedPoint[0].map((point,index)=>{
  return(
<tr>
<h1 style={{marginRight:'10px'}}>Point {index+1}</h1>
<td><input value={point.Vector[0]} id={'C04id_Affine'+(1).toString()+(index*10+point.Vector[0]).toString()}></input></td>
<td><input value={point.Vector[1]} id={'C04id_Affine'+(1).toString()+(index*10+point.Vector[1]).toString()}></input></td>
<td><input type='color' value={point.RGB}></input></td>
<td><button>Show</button></td>
</tr>
    )
  })

  let JSX_Header=<div style={{marginTop:'-5px'}}><tr >
<th><h1>Point</h1></th>
<th style={{paddingLeft:'15px'}} ><h1>X</h1></th>
<th style={{paddingLeft:'35px'}} ><h1>Y</h1></th>
<th style={{paddingLeft:'30px'}} ><h1>RGB</h1></th>
<th style={{paddingLeft:'10px'}} ><h1>Show</h1></th>
</tr></div>

//****************************************************************************
// OUTPUT
//****************************************************************************
return(
<div style={{width:let_Width,backgroundColor:'#33AAFF'}}>
  <div style={{display:'flex',marginTop:'0px'}}>
    <h1 
    // https://youtu.be/Ad9e5eoHm9U?si=WsJg_lv_-2O3DBMa
    className='C04id_Zoom' style={{marginTop:'-3px',marginLeft:'10px'}}>Affine transformation</h1>
  </div>
<div className='C04id_Convolution' style={{marginLeft:'10px'}}>
<div style={{marginTop:'20px'}}></div>
<hr style={{width:'95%',marginTop:'-10px'}}/>
<h1 style={{fontSize:'16px',marginTop:'-2px'}}>Selected Point</h1>
{JSX_Header}
{JSX_SelectedPoint}
<hr style={{width:'95%'}}/>
<h1 style={{fontSize:'16px',marginTop:'-2px'}}>Transformed Point</h1>
{JSX_Header}
{JSX_TransformedPoint}

{/*<button style={{marginTop:'10px',marginRight:'10px',marginLeft:'-140px'}}>Ok</button>
<button style={{marginTop:'10px',marginRight:'5px'}}>Reset</button>*/}
<hr style={{width:'95%'}}/>
<select id="cars" name="cars" className='C04id_Convolution' style={{marginRight:'5px'}} >
  <option value="volvo">Scale</option>
  <option value="volvo">Scale X</option>
  <option value="saab">Scale Y</option>
</select>
<input style={{marginRight:'5px'}} ></input>
<button style={{marginTop:'0px',marginRight:'5px'}}>Set</button>
<button style={{marginTop:'0px',marginRight:'5px'}}>Set 1</button>
<hr style={{width:'95%'}}/>
<div style={{marginTop:'-10px'}}>
<button style={{marginTop:'10px',marginBottom:'0px',marginRight:'10px'}}>Ok</button>
<button style={{marginTop:'10px',marginBottom:'0px',marginRight:'130px'}}>Reset</button>
</div>

</div>
</div>
  )
}

export default U2_Affine