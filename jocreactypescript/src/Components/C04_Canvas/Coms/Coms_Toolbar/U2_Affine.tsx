import './U1_2DMatrix.css'
import { useState, useEffect} from 'react';
import './U2_Convolution.css'

const U2_Affine = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_IsActivate,
setSS_IsActivate,
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
  SS_IsActivate:boolean[]
  setSS_IsActivate:(S:boolean[])=>void
SS_Affine       :number[][][];
setSS_Affine    :(S:number[][][])=>void;
SS_AffineSTR    :string[][][];
setSS_AffineSTR :(S:string[][][])=>void;
SS_AffineRGB    :string[][];
setSS_AffineRGB :(S:string[][])=>void;
SS_AffineBOOL:boolean[][];
setSS_AffineBOOL:(S:boolean[][])=>void;
})=>{

//****************************************************************************
// FUNCTION 00: Text onChange
//****************************************************************************
  function f_OnChange(id0:number,id1:number,id2:number){
    let let_input=(document.getElementById('C04id_Affine'+(id0).toString()+(id1).toString()+(id2).toString()) as HTMLInputElement).value.toString();
    let ss_AffineSTR=[...SS_AffineSTR]
    ss_AffineSTR[id0][id1][id2]=let_input
    setSS_AffineSTR(ss_AffineSTR);
    (document.getElementById('C04id_Affine'+(id0).toString()+(id1).toString()+(id2).toString()) as HTMLInputElement).value = let_input;
    //alert('hihihi')
  }

//****************************************************************************
// FUNCTION 01: Update Matrix
//****************************************************************************
  function f_Update(){
    let ss_Affine=[...SS_Affine]
    let ss_AffineSTR=[...SS_AffineSTR]
    for(let i=0;i<2;i++){
      for(let j=0;j<3;j++){
        for(let k=0;k<2;k++){
          if(isNaN(parseFloat(ss_AffineSTR[i][j][k]))===false){
            //alert(SS_nDTable[i])
            ss_Affine[i][j][k]=parseFloat(ss_AffineSTR[i][j][k])
          }
          else{
              ss_Affine[i][j][k]=0
          }
        }
      }
    }
    setSS_Affine(ss_Affine)
    for(let i=0;i<2;i++){
      for(let j=0;j<3;j++){
        for(let k=0;k<2;k++){
          //if(isNaN(parseFloat(ss_AffineSTR[i][j][k]))){
          //  ss_AffineSTR[i][j][k]='1'//let_2DMatrix[i].toString()
          //}
          if(ss_AffineSTR[i][j][k]!==ss_Affine[i][j][k].toString()){
            ss_AffineSTR[i][j][k]=ss_Affine[i][j][k].toString()
          }
        }
      }
    }
    setSS_AffineSTR(ss_AffineSTR)
    let ss_IsActivate=[...SS_IsActivate]
    ss_IsActivate[2]=true
    setSS_IsActivate(ss_IsActivate)
  }
//****************************************************************************
// FUNCTION 02: Reset Matrix
//****************************************************************************
  function f_Reset(){
    setSS_Affine([
      [
        [0,0],
        [0,1],
        [1,0],
      ],
      [
        [0,0],
        [0,1],
        [1,0],
      ]])
    setSS_AffineSTR([
      [
        ['0','0'],
        ['0','1'],
        ['1','0'],
      ],
      [
        ['0','0'],
        ['0','1'],
        ['1','0'],
      ]])
  }
//****************************************************************************
// FUNCTION 03: Show Point
//****************************************************************************
  function f_ShowPoint(id0:number,id1:number){
    let ss_AffineBOOL=[...SS_AffineBOOL]
    if(ss_AffineBOOL[id0][id1]){
      ss_AffineBOOL[id0][id1]=false 
    }
    else{
      ss_AffineBOOL[id0][id1]=true 
    }
    setSS_AffineBOOL(ss_AffineBOOL)
  }

//****************************************************************************
// FUNCTION_04: Activate or Deactivate SS_nDMatrix
//****************************************************************************
      function f_SetDeActivate(){
        let ss_IsActivate=[...SS_IsActivate]
        ss_IsActivate[2]=false
        setSS_IsActivate(ss_IsActivate)
      }

//****************************************************************************
// FUNCTION_05: Onchange Color
//****************************************************************************
      function f_OnChangeColor(id0:number,id1:number){
      //alert(JSON.stringify(SS_Thresholds))
      let let_target=(document.getElementById('C04id_AffineColor'+id0.toString()+id1.toString())as HTMLInputElement)
      let let_input=let_target?.value
      let_input=let_input

      let ss_AffineRGB=[...SS_AffineRGB]
      ss_AffineRGB[id0][id1]=let_input
      setSS_AffineRGB(ss_AffineRGB)
    }
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
  for(let i=0;i<ss_AffineSTR.length;i++){
  let let_Points=[]
  for(let j=0;j<ss_AffineSTR[i].length;j++){
  let let_Vector=[]
  for(let k=0;k<ss_AffineSTR[i][j].length;k++){
  let_Vector.push(ss_AffineSTR[i][j][k])
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
    let let_State='Show'
    if(SS_AffineBOOL[0][index]===true){let_State='Show'}
    else{let_State='Hide'}
    return(
<tr>
<h1 style={{marginRight:'10px'}}>Point {index+1}</h1>
<td><input value={point.Vector[0]} onChange={()=>{f_OnChange(0,index,0)}} id={'C04id_Affine'+'0'+(index).toString()+'0'} ></input></td>
<td><input value={point.Vector[1]} onChange={()=>{f_OnChange(0,index,1)}} id={'C04id_Affine'+'0'+(index).toString()+'1'} ></input></td>
<td><input type='color' onChange={()=>{f_OnChangeColor(0,index)}} value={point.RGB} id={'C04id_AffineColor'+(0).toString()+index.toString()}></input></td>
<td><button style={{width:'50px'}} onClick={()=>{f_ShowPoint(0,index)}}>{let_State}</button></td>
</tr>
    )
  })

  let JSX_TransformedPoint=let_TransformedPoint[0].map((point,index)=>{
    let let_State='Show'
    if(SS_AffineBOOL[1][index]===true){let_State='Show'}
    else{let_State='Hide'}
  return(
<tr>
<h1 style={{marginRight:'10px'}}>Point {index+1}</h1>
<td><input value={point.Vector[0]} onChange={()=>{f_OnChange(1,index,0)}} id={'C04id_Affine'+'1'+(index).toString()+'0'}></input></td>
<td><input value={point.Vector[1]} onChange={()=>{f_OnChange(1,index,1)}} id={'C04id_Affine'+'1'+(index).toString()+'1'}></input></td>
<td><input type='color' onChange={()=>{f_OnChangeColor(1,index)}} value={point.RGB} id={'C04id_AffineColor'+(1).toString()+index.toString()}></input></td>
<td><button style={{width:'50px'}} onClick={()=>{f_ShowPoint(1,index)}}>{let_State}</button></td>
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
<h1 style={{fontSize:'16px',marginTop:'0px'}}>Selected Point</h1>
{JSX_Header}
{JSX_SelectedPoint}
<hr style={{width:'95%'}}/>
<h1 style={{fontSize:'16px',marginTop:'0px'}}>Transformed Point</h1>
{JSX_Header}
{JSX_TransformedPoint}

{/*<button style={{marginTop:'10px',marginRight:'10px',marginLeft:'-140px'}}>Ok</button>
<button style={{marginTop:'10px',marginRight:'5px'}}>Reset</button>*/}
{/*<hr style={{width:'95%'}}/>
<select id="cars" name="cars" className='C04id_Convolution' style={{marginRight:'5px'}} >
  <option value="volvo">Scale</option>
  <option value="volvo">Scale X</option>
  <option value="saab">Scale Y</option>
</select>
<input style={{marginRight:'5px'}} ></input>
<button style={{marginTop:'0px',marginRight:'5px'}}>Set</button>
<button style={{marginTop:'0px',marginRight:'5px'}}>Set 1</button>*/}
<hr style={{width:'95%'}}/>
<div style={{marginTop:'0px'}}>
<button style={{marginTop:'15px',marginBottom:'0px',marginRight:'10px'}} onClick={f_Update}>Activate</button>
<button style={{marginTop:'15px',marginBottom:'0px',marginRight:'10px'}} onClick={f_SetDeActivate}>Deactivate</button>
<button style={{marginTop:'15px',marginBottom:'0px',marginRight:'0px'}} onClick={f_Reset}>Reset</button>
</div>

</div>
</div>
  )
}

export default U2_Affine