import './U2_Convolution.css'
import { useState, useEffect } from 'react'
import U1_2DMatrix from './U2_2DMatrix'
const U2_Convolution = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_3DMatrix   ,
setSS_3DMatrix,
SS_3DTable    ,
setSS_3DTable ,
SS_nDMatrix   ,
setSS_nDMatrix,
SS_nDTable    ,
setSS_nDTable 
}
:{
SS_3DMatrix:number[][]
setSS_3DMatrix:(S:number[][])=>void
SS_3DTable:string[][]
setSS_3DTable:(S:string[][])=>void
SS_nDMatrix   :number[][]
setSS_nDMatrix:(S:number[][])=>void
SS_nDTable    :string[][]
setSS_nDTable :(S:string[][])=>void
})=>{
  let let_TotalSize=5

  let JSX_Con=[]
  const let_Width='250px'
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
    id={'C04id_Kernal'+(j[0]*10+j[1]).toString()}></input></td>))}</tr>))

//****************************************************************************
// FUNCTION_00: On Change
//****************************************************************************
    function f_OnChange(id0:number,id1:number){
        let let_input=(document.getElementById('C04id_Kernal'+(id0*10+id1).toString()) as HTMLInputElement).value.toString();
        let ss_nDTable=[...SS_nDTable]
        ss_nDTable[id0][id1]=let_input
        setSS_nDTable(ss_nDTable);
        (document.getElementById('C04id_Kernal'+(id0*10+id1).toString()) as HTMLInputElement).value = let_input;
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
      }

//****************************************************************************
// FUNCTION_01: Update Matrix
//****************************************************************************
        function f_Update(){
          let ss_nDMatrix=[...SS_nDMatrix]
          let ss_nDTable=[... SS_nDTable]
          for(let i=0;i<let_TotalSize;i++){
          for(let j=0;j<let_TotalSize;j++){
            if(isNaN(parseFloat(SS_nDTable[i][j]))===false){
              //alert(SS_nDTable[i])
              ss_nDMatrix[i][j]=parseFloat(ss_nDTable[i][j])
            }
            else{
              ss_nDMatrix[i][j]=0
            }}
          }
          setSS_nDMatrix(ss_nDMatrix)

          for(let i=0;i<let_TotalSize;i++){
          for(let j=0;j<let_TotalSize;j++){
            if(isNaN(parseFloat(SS_nDTable[i][j]))){
              SS_nDTable[i][j]='1'//let_2DMatrix[i].toString()
            }
          }
          setSS_nDTable(SS_nDTable)
        }
        }

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
    <button style={{marginTop:'10px',marginRight:'10px',marginLeft:'-140px'}} onClick={f_Update}>Ok</button>
    <button style={{marginTop:'10px',marginRight:'5px'}} onClick={f_Reset}>Reset</button>
</div>
<hr/>
  <U1_2DMatrix
SS_3DMatrix ={SS_3DMatrix   }  
setSS_3DMatrix={setSS_3DMatrix}
SS_3DTable    ={SS_3DTable    }
setSS_3DTable ={setSS_3DTable }/>
</div>
  )
}

export default U2_Convolution