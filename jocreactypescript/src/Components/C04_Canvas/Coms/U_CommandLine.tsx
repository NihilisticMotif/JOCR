
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
/*
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
  },[])*/

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
<div style={{width:'300px'}} >
<button>Add Language</button>
<select id="cars" name="cars" className='C04id_EditOkSet'>
  <option value="volvo">Thai</option>
  <option value="volvo">English</option>
</select>
<button>X</button>
<select id="cars" name="cars" className='C04id_EditOkSet'>
  <option value="volvo">Thai</option>
  <option value="volvo">English</option>
</select>
<button>X</button>
</div>
{/*
<div style={{marginTop:'-100px'}} >
<h1>Operate Tesseract</h1>
<button>Ok</button>
</div>*/}


<div>
<button>Help</button>
<button>About us</button>
</div>
    </div>)
}

export default U_CommandLine