import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import React, { useState, useRef } from 'react';
import './U_Editor.css'


const U_Editor = (
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
// OUTPUT
//****************************************************************************
return(
  <div className='C04id_Editor'>
      <div className='C04id_EditCrop'>
      <h1>Left X</h1>
      <input id='C04id_CropImageX1'></input>
      <h1>Right X</h1>
      <input id='C04id_CropImageX2'></input>
      </div>
      <div className='C04id_EditCrop'>
      <h1>Up Y</h1>
      <input id='C04id_CropImageY1'></input>
      <h1>Down Y</h1>
      <input id='C04id_CropImageY2'></input>
      </div>
      <div className='C04id_EditCrop'>
      {JSX_Crop}
      </div>
      
      {/*<button>Word</button>
      <button>Marker</button>
      <button>Line-Width</button>
      <button>Line-Color</button>
      <button>Rectangle</button>
      <button>Circle</button>
      <button>Elaser</button>
      <button>Reset</button>
*/}
    </div>)
}

export default U_Editor