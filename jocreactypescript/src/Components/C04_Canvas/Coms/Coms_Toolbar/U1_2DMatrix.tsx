import './U1_2DMatrix.css'
import { useState, useEffect} from 'react';

const U1_2DMatrix = (
//****************************************************************************
// INPUT
//****************************************************************************
{

}
:{

})=>{
    const [SS_2DMatrix,setSS_2DMatrix]=useState<number[]>([1,0,0,1])
    const [SS_2DTable,setSS_2DTable]=useState<string[]>(['1','0','0','1'])

    useEffect(()=>{
      //alert(SS_2DMatrix)
    },[SS_2DMatrix])
//****************************************************************************
// FUNCTION_00: On Change
//****************************************************************************
    function f_OnChange(id:number){
        let let_input=(document.getElementById('C04id_2DMatrix'+id.toString()) as HTMLInputElement).value.toString();
        let ss_2DTable=[...SS_2DTable]
        ss_2DTable[id]=let_input
        setSS_2DTable(ss_2DTable);
        (document.getElementById('C04id_2DMatrix'+id.toString()) as HTMLInputElement).value = let_input;
      }

//****************************************************************************
// FUNCTION_01: Reset
//****************************************************************************
      function f_Reset(){
        setSS_2DMatrix([1,0,0,1])
        setSS_2DTable(['1','0','0','1'])
      }

//****************************************************************************
// FUNCTION_01: Update Matrix
//****************************************************************************
        function f_Update(){
          let ss_2DMatrix=[...SS_2DMatrix]
          let ss_2DTable=[...SS_2DTable]
          for(let i=0;i<4;i++){
            if(isNaN(parseFloat(ss_2DTable[i]))===false){
              //alert(ss_2DTable[i])
              ss_2DMatrix[i]=parseFloat(ss_2DTable[i])
            }
            else{
              ss_2DMatrix[i]=1
            }
          }
          setSS_2DMatrix(ss_2DMatrix)

          let let_2DMatrix=[...SS_2DMatrix]
          for(let i=0;i<4;i++){
            if(isNaN(parseFloat(ss_2DTable[i]))){
              ss_2DTable[i]='1'//let_2DMatrix[i].toString()
            }
          }
          setSS_2DTable(ss_2DTable)
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
      <td><input value={SS_2DTable[0]} id='C04id_2DMatrix0' onChange={()=>{f_OnChange(0)}}></input></td>
      <td><input value={SS_2DTable[1]} id='C04id_2DMatrix1' onChange={()=>{f_OnChange(1)}}></input></td>
    </tr>
    <tr>
      <td><input value={SS_2DTable[2]} id='C04id_2DMatrix2' onChange={()=>{f_OnChange(2)}}></input></td>
      <td><input value={SS_2DTable[3]} id='C04id_2DMatrix3' onChange={()=>{f_OnChange(3)}}></input></td>
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