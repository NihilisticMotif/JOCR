import './U1_2DMatrix.css'
import { useState, useEffect} from 'react';

const U1_2DMatrix = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_3DMatrix   ,
setSS_3DMatrix,
SS_3DTable    ,
setSS_3DTable ,
}
:{
SS_3DMatrix:number[][]
setSS_3DMatrix:(S:number[][])=>void
SS_3DTable:string[][]
setSS_3DTable:(S:string[][])=>void
})=>{
  let let_TotalSize=3
//****************************************************************************
// FUNCTION_00: On Change
//****************************************************************************
    function f_OnChange(id0:number,id1:number){
        let let_input=(document.getElementById('C04id_Kernal'+(id0*10+id1).toString()) as HTMLInputElement).value.toString();
        let ss_3DTable=[...SS_3DTable]
        ss_3DTable[id0][id1]=let_input
        setSS_3DTable(ss_3DTable);
        (document.getElementById('C04id_Kernal'+(id0*10+id1).toString()) as HTMLInputElement).value = let_input;
      }

//****************************************************************************
// FUNCTION_01: Reset
//****************************************************************************
      function f_Reset(){
        setSS_3DMatrix(
        [[1,0,0],
         [0,1,0],
         [0,0,1]])
        setSS_3DTable(
        [['1','0','0'],
         ['0','1','0'],
         ['0','0','1']])
      }

//****************************************************************************
// FUNCTION_01: Update Matrix
//****************************************************************************
        function f_Update(){
          let ss_3DMatrix=[...SS_3DMatrix]
          let ss_3DTable=[... SS_3DTable]
          for(let i=0;i<let_TotalSize;i++){
          for(let j=0;j<let_TotalSize;j++){
            if(isNaN(parseFloat(ss_3DTable[i][j]))===false){
              //alert(SS_3DTable[i])
              ss_3DMatrix[i][j]=parseFloat(SS_3DTable[i][j])
            }
            else{
              ss_3DMatrix[i][j]=0
            }}
          }
          setSS_3DMatrix(SS_3DMatrix)

          for(let i=0;i<let_TotalSize;i++){
          for(let j=0;j<let_TotalSize;j++){
            if(isNaN(parseFloat(SS_3DTable[i][j]))){
              SS_3DTable[i][j]='1'//let_2DMatrix[i].toString()
            }
          }
          setSS_3DTable(SS_3DTable)
        }
        }

//****************************************************************************
// OUTPUT
//****************************************************************************
    return (
        <>
<h1 style={{fontSize:'14px'}}>Linear Map</h1>
<div className='C04id_2DMatrix'>
  <table>
    <tr>
      <td><input value={SS_3DTable[0][0]} id='C04id_2DMatrix0' onChange={()=>{f_OnChange(0,0)}}></input></td>
      <td><input value={SS_3DTable[0][1]} id='C04id_2DMatrix1' onChange={()=>{f_OnChange(1,0)}}></input></td>
      <td><input value={SS_3DTable[0][2]} id='C04id_2DMatrix1' onChange={()=>{f_OnChange(2,0)}}></input></td>
    </tr>
    <tr>
      <td><input value={SS_3DTable[1][0]} id='C04id_2DMatrix2' onChange={()=>{f_OnChange(0,1)}}></input></td>
      <td><input value={SS_3DTable[1][1]} id='C04id_2DMatrix3' onChange={()=>{f_OnChange(1,1)}}></input></td>
      <td><input value={SS_3DTable[1][2]} id='C04id_2DMatrix3' onChange={()=>{f_OnChange(2,1)}}></input></td>
    </tr>
    <tr>
      <td><input value={SS_3DTable[2][0]} id='C04id_2DMatrix2' onChange={()=>{f_OnChange(0,2)}}></input></td>
      <td><input value={SS_3DTable[2][1]} id='C04id_2DMatrix3' onChange={()=>{f_OnChange(1,2)}}></input></td>
      <td><input value={SS_3DTable[2][2]} id='C04id_2DMatrix3' onChange={()=>{f_OnChange(2,2)}}></input></td>
    </tr>
  </table>
  </div>
  <div className='C04id_2DMatrixB' style={{display:'flex'}}>
    <button onClick={f_Update}>Ok</button>
    <button onClick={f_Reset}>Reset</button>
  </div>
    </>
    )}

export default U1_2DMatrix