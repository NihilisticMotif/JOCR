import './CSS_Convolution.css'
import { useState, useEffect, useLayoutEffect } from 'react'
//import U_Affine from './U_Affine'
import './CSS_Utility.css'
import TS_Kernal from '../../T05_Kernal/An_Index'
import { U05_UpdateAllKernals } from '../../T05_Kernal/U05_UpdateAllKernals'
//import { U05_UpdateIndex } from '../../T05_Kernal/U05_UpdateIndex'
const U_Kernal = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_Kernals,
setSS_Kernals,
SS_ThisKernal,
Index
}
:{
SS_Kernals:TS_Kernal[]
setSS_Kernals:(S:TS_Kernal[])=>void
SS_ThisKernal:TS_Kernal
Index:number
})=>{
    let ss_ThisKernal=SS_ThisKernal
    const [SS_nDMatrix,setSS_nDMatrix]=useState<number[][]>(ss_ThisKernal.Kernal)
    const [SS_nDTable,setSS_nDTable]=useState<string[][]>(ss_ThisKernal.Kernal_str)
    const [SS_IsActivate,setSS_IsActivate]=useState<boolean>(ss_ThisKernal.IsActivate)
    const [SS_Iterations,setSS_Iterations]=useState<number>(ss_ThisKernal.Iterations)

    //useEffect(()=>{
    //    setSS_nDTable(ss_nDMatrix.map(row => row.map(cell => cell.toString())))
    //}
    //,[SS_Kernals])
    const let_Index=Index
    useEffect(()=>{
        let ss_Kernals=[...SS_Kernals]
        let SS_UpdateKernals=U05_UpdateAllKernals(ss_Kernals,
            {
            Key:SS_ThisKernal.Key,
            Name:SS_ThisKernal.Name,
            Kernal:SS_nDMatrix,
            Kernal_str:SS_nDTable,
            Iterations:SS_Iterations,
            IsActivate:SS_IsActivate
            },Index
            )
        setSS_Kernals(SS_UpdateKernals)
    },
    [SS_nDMatrix,SS_nDTable,SS_IsActivate,let_Index,SS_Iterations])

    let let_Name=SS_ThisKernal.Name
    let let_TotalSize=5
  let let_Status='Error'
  if(SS_IsActivate===true){
    let_Status='(Active)'
  }
  else{
    let_Status='(Inactive)'
  }
  let JSX_Con:number[][][]=[]

  for(let i=0;i<let_TotalSize;i++){
    let JSX_Kernals=[]
    for(let j=0;j<let_TotalSize;j++){
      JSX_Kernals.push([i,j])
    }
    JSX_Con.push(JSX_Kernals)
  }

  let JSX_Convolution=JSX_Con.map((i)=>(<tr>{i.map((j)=>(<td><input 
    onChange={()=>f_OnChange(j[0],j[1])}
    value={(SS_nDTable[j[0]][j[1]]).toString()} 
    id={'C04id_Kernal'+ss_ThisKernal.Key+'_'+(j[0]*10+j[1]).toString()}></input></td>))}</tr>))

    if(SS_ThisKernal.Name==='Canny'){
      JSX_Convolution=[<tr>
        <td>
<input 
    onChange={()=>f_OnChange(JSX_Con[0][0][0],JSX_Con[0][0][1])}
    value={(SS_nDTable[JSX_Con[0][0][0]][JSX_Con[0][0][1]]).toString()} 
    id={'C04id_Kernal'+ss_ThisKernal.Key+'_'+(JSX_Con[0][0][0]*10+JSX_Con[0][0][1]).toString()}></input>
      </td>

<td>
<input 
    onChange={()=>f_OnChange(JSX_Con[0][1][0],JSX_Con[0][1][1])}
    value={(SS_nDTable[JSX_Con[0][1][0]][JSX_Con[0][1][1]]).toString()} 
    id={'C04id_Kernal'+ss_ThisKernal.Key+'_'+(JSX_Con[0][1][0]*10+JSX_Con[0][1][1]).toString()}></input>
      </td>
      
      </tr>]
    }
//  if(SS_ThisKernal.Name==='Canny'){
//    JSX_Convolution=[<tr>
//<td><input 
//    onChange={()=>f_OnChange(j[0],j[1])}
//    value={(SS_nDTable[j[0]][j[1]]).toString()} 
//    id={'C04id_Kernal'+ss_ThisKernal.Key+'_'+(j[0]*10+j[1]).toString()}></input>
//</td>
//<td><input 
//    onChange={()=>f_OnChange(j[0],j[1])}
//    value={(SS_nDTable[j[0]][j[1]]).toString()} 
//    id={'C04id_Kernal'+ss_ThisKernal.Key+'_'+(j[0]*10+j[1]).toString()}></input>
//</td>
//</tr>]
//  }

//****************************************************************************
// FUNCTION_00: On Change
//****************************************************************************
    function f_OnChange(id0:number,id1:number){
        let let_input=(document.getElementById('C04id_Kernal'+ss_ThisKernal.Key+'_'+(id0*10+id1).toString()) as HTMLInputElement).value.toString();
        let ss_nDTable=[...SS_nDTable]
        ss_nDTable[id0][id1]=let_input
        setSS_nDTable(ss_nDTable);
        (document.getElementById('C04id_Kernal'+ss_ThisKernal.Key+'_'+(id0*10+id1).toString()) as HTMLInputElement).value = let_input;
      }

//****************************************************************************
// FUNCTION_01: Reset
//****************************************************************************
      function f_Reset(){
        setSS_nDMatrix(
        [[0,0,0,0,0],
         [0,0,0,0,0],
         [0,0,1,0,0],
         [0,0,0,0,0],
         [0,0,0,0,0]])
        setSS_nDTable(
        [['0','0','0','0','0'],
         ['0','0','0','0','0'],
         ['0','0','1','0','0'],
         ['0','0','0','0','0'],
         ['0','0','0','0','0']])
        setSS_IsActivate(true)
      }

      function f_OnePunchMan(){
        setSS_nDMatrix(
        [[1,1,1,1,1],
         [1,1,1,1,1],
         [1,1,1,1,1],
         [1,1,1,1,1],
         [1,1,1,1,1]])
        setSS_nDTable(
        [['1','1','1','1','1'],
         ['1','1','1','1','1'],
         ['1','1','1','1','1'],
         ['1','1','1','1','1'],
         ['1','1','1','1','1']])
        setSS_IsActivate(true)
      }

//****************************************************************************
// FUNCTION_01: Update Matrix
//****************************************************************************
        function f_Update(){
          let ss_nDMatrix=[...SS_nDMatrix]
          let ss_nDTable=[... SS_nDTable]
          for(let i=0;i<let_TotalSize;i++){
          for(let j=0;j<let_TotalSize;j++){
            if(isNaN(parseInt(SS_nDTable[i][j]))===false){
              //alert(SS_nDTable[i])
              ss_nDMatrix[i][j]=parseInt(ss_nDTable[i][j])
            }
            else{
              ss_nDMatrix[i][j]=0
            }}
          }
          setSS_nDMatrix(ss_nDMatrix)

        for(let i=0;i<let_TotalSize;i++){
          for(let j=0;j<let_TotalSize;j++){
            //if(isNaN(parseInt(ss_nDTable[i][j]))){
            //  ss_nDTable[i][j]='1'//let_2DMatrix[i].toString()
            //}
            if(ss_nDTable[i][j]!==ss_nDMatrix[i][j].toString()){
              ss_nDTable[i][j]=ss_nDMatrix[i][j].toString()
            }
          }
        }
        setSS_nDTable(ss_nDTable)
        setSS_IsActivate(true)
        }
//****************************************************************************
// FUNCTION_02: Activate or Deactivate SS_nDMatrix
//****************************************************************************

      function f_SetDeActivate(){
        setSS_IsActivate(false)
      }

      function f_UpdateIterations(){
        let let_input=(document.getElementById('C05id_KernalIteration'+ss_ThisKernal.Key.toString()) as HTMLInputElement).value.toString();
        if(isNaN(parseInt(let_input))===false){
            setSS_Iterations(parseInt(let_input))
        }else{
            setSS_Iterations(ss_ThisKernal.Iterations)
        }
      }

      function f_UpdateMode(){
        let let_input=(document.getElementById('C05id_KernalName'+SS_ThisKernal.Key.toString()) as HTMLInputElement).value.toString();
        let ss_Kernals=[...SS_Kernals]
        ss_Kernals[Index].Name=let_input
        setSS_Kernals(ss_Kernals)
      }
//****************************************************************************
// OUTPUT
//****************************************************************************
return(
<>
  <div style={{display:'flex',marginTop:'10px'}}>
    <h1 className='C05id_Zoom' style={{marginTop:'10px',marginLeft:'10px'}}>{let_Index}. {let_Name} {let_Status}</h1>
  </div>
<div className='C05id_Convolution' style={{marginLeft:'10px'}}>
<div style={{marginTop:'20px'}}></div>
{JSX_Convolution}
<div style={{display:'grid',marginLeft:'-10px'}}>
<div style={{display:'flex',marginTop:'10px'}}>
<h1 style={{fontSize:'14px',marginTop:'3px'}}>Iterations: {ss_ThisKernal.Iterations}</h1>
<input style={{width:'70px',marginLeft:'10px'}} id={'C05id_KernalIteration'+ss_ThisKernal.Key.toString()}></input>
<button onClick={f_UpdateIterations}>Ok</button>
</div>

<div style={{display:'flex'}}>
<h1>Mode</h1>
<select onChange={f_UpdateMode}
style={{marginLeft:'10px',marginTop:'5px',fontSize:'15px',height:'25px'}} 
value={SS_ThisKernal.Name} id={'C05id_KernalName'+SS_ThisKernal.Key.toString()}>
  <option value="Convolution">Convolution</option>
  <option value="Erosion">Erosion</option>
  <option value="Dilation">Dilation</option>
  <option value="Open">Open</option>
  <option value="Canny">Canny</option>
</select>
</div>


<div style={{display:'flex',marginTop:'5px'}}>
    <button style={{width:'75px',backgroundColor:SS_IsActivate? 'lightgreen':'white'}} onClick={f_Update}>Activate</button>
    <button style={{width:'75px',backgroundColor:SS_IsActivate? 'white':'lightgreen'}} onClick={f_SetDeActivate}>Deactivate</button>
</div>
<div style={{display:'flex',marginTop:'5px'}}>
    <button style={{width:'75px',}} onClick={f_Reset}>Reset</button>
    <button style={{width:'75px',}} onClick={f_OnePunchMan}>Matrix 1</button>
</div>
</div>
</div>
<hr/>
</>
  )
}

export default U_Kernal