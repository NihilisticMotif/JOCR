
import { useState, useEffect } from 'react';
import './U_CommandLine.css'

const U_CommandLine = (
//****************************************************************************
// INPUT
//****************************************************************************
{

}
:{

})=>{

//****************************************************************************
// HOOK
//****************************************************************************
  const [SS_IsCrop,setSS_IsCrop]=useState<boolean>(false)
  const [SS_HelloPy,setSS_HelloPy]=useState<number>(55)

useEffect(() => {        
    try {
    fetch("/"+SS_HelloPy.toString())
        .then((res) => res.json())
        .then((data) => {
            //alert(JSON.stringify(data));
            setSS_HelloPy(data.py);
        });
    } catch (error) {
    console.error("Error fetching data:", error);
    }
  },[])

//****************************************************************************
// JSX 00
//****************************************************************************
  let JSX_Crop=<></>
  if(SS_IsCrop){
    JSX_Crop=<>
    <button onClick={f_CloseCrop} style={{marginLeft:'2px'}}>Yes</button>
    <button onClick={f_CloseCrop} style={{marginLeft:'2px'}}>No</button>
    <h1 style={{width:'250px'}}>Do you want to crop the image?</h1>
    </>
  }
  else{
    JSX_Crop=<>
    <button style={{marginLeft:'2px'}} onClick={f_OpenCrop}>Crop</button>
    <button style={{marginLeft:'2px'}}>Reset</button>
    </>
  }
  
//****************************************************************************
// FUNCTION 00: Open Crop
//****************************************************************************
  function f_OpenCrop(){
    setSS_IsCrop(true)
  }

  function f_CloseCrop(){
    setSS_IsCrop(false)
  }

//****************************************************************************
// FUNCTION 01: Compute
//****************************************************************************
  function f_ComputeSquare(){
    let let_input = (document.getElementById('C04id_CropImageX1') as HTMLInputElement).value.toString();
    //alert(let_input)
    if(isNaN(parseFloat(let_input))){
      alert('This is not a number!')
    }
    else{
      // https://rapidapi.com/guides/fetch-api-react
      fetch("/def_Ysquare/"+let_input.toString())
        .then((res) => res.json())
        .then((data) => {
            //alert(JSON.stringify(data));
            setSS_HelloPy(data.py);
        });
    }
    }

  function f_ComputeCube(){
    let let_input = (document.getElementById('C04id_CropImageX1') as HTMLInputElement).value.toString();
    //alert(let_input)
    if(isNaN(parseFloat(let_input))){
      alert('This is not a number!')
    }
    else{
      // https://rapidapi.com/guides/fetch-api-react
      fetch("/def_Ycube/"+let_input.toString())
        .then((res) => res.json())
        .then((data) => {
            //alert(JSON.stringify(data));
            setSS_HelloPy(data.py);
        });
    }
    }
//****************************************************************************
// OUTPUT
//****************************************************************************
return(
  <div className='C04id_Editor'>
    <input id='C04id_CropImageX1'></input>
    {
      /*<button onClick={f_ComputeSquare} style={{marginLeft:'2px'}}>Compute</button>
    <button onClick={f_ComputeCube} style={{marginLeft:'2px'}}>Compute3</button>
    <h1>{SS_HelloPy}</h1>*/}
    </div>)
}

export default U_CommandLine