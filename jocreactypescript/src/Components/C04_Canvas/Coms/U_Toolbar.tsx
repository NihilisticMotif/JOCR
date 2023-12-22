import React, { useState } from 'react';

import './U_Toolbar.css'
import logo_Crop from './logo_Crop.png'
// https://stackoverflow.com/questions/43823289/how-to-import-image-svg-png-in-a-react-component
// https://www.flaticon.com/free-icon/crop_4818201?term=crop&page=1&position=4&origin=tag&related_id=4818201
import logo_Shape from './logo_Shape.png'
import logo_UpsideDown from './logo_UpsideDown.png'

const U_Toolbar = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_Zoom,
setSS_Zoom,
setSS_IsRGB,
setSS_UseEffect,
TotalWidth,
}
:{
SS_Zoom:number,
setSS_Zoom:(S:number)=>void
setSS_IsRGB:(S:boolean)=>void
setSS_UseEffect:(S:boolean)=>void
TotalWidth:number
})=>{

/*
Note
* SS_EditSetting = Edit Image Setting
Shape
* Attribute
* 1. Type 
* 2. Line Color
* 3. Line Width
* 4. Shape Color
* Type
* 1. Rectangle
* 2. Circle
* 3. Line
* 4. X Line
* 5. Y Line

Text
* Attribute
* 1. Font Name
* 2. Font Size
* 3. Color
* 4. Utility
*/

  const [SS_EditSetting,setSS_EditSetting]=useState<0|1>(0)
  // 0 = Shape
  // 1 = Text
  let JSX_Setting=<></>
  if(SS_EditSetting===0){
    JSX_Setting=<div>
    <tr> <td><h1>Type</h1><input></input><button>Ok</button><button>Reset</button></td></tr>
    <tr> <td><h1>Line Color</h1><input></input><button>Ok</button><button>Reset</button></td></tr>
    <tr> <td><h1>Line Width</h1><input></input><button>Ok</button><button>Reset</button></td></tr>
    <tr> <td><h1>Shape Color</h1><input></input><button>Ok</button><button>Reset</button></td></tr>
    </div>
  }
  else{
    JSX_Setting=<div>
    <tr> <td><h1>Font Name</h1><input></input><button>Ok</button><button>Reset</button></td></tr>
    <tr> <td><h1>Font Size</h1><input></input><button>Ok</button><button>Reset</button></td></tr>
    <tr> <td><h1>Color</h1><input></input><button>Ok</button><button>Reset</button></td></tr>
    <tr> <td><h1>Utility</h1><input></input><button>Ok</button><button>Reset</button></td></tr>
    </div>
  }


  let let_Width01=100
  let let_Width02=TotalWidth-let_Width01
  let JSX_Convolution=<></>
  if(let_Width02==0){
    JSX_Convolution=<></>
  }
  else{
    JSX_Convolution=<div id='C04id_Convolution' style={{width:`${let_Width02}px`}}>

    </div>
  }
//****************************************************************************
// FUNCTION_00: Zoom setting
//****************************************************************************
    function f_PosZoom(){
      if(SS_Zoom<10){
        let ss_Zoom=SS_Zoom 
        let let_Zoom = parseFloat((ss_Zoom+0.1).toFixed(1));
        setSS_Zoom(let_Zoom)
      }
    }
    function f_NegZoom(){
        if(SS_Zoom>0.1){
        let ss_Zoom=SS_Zoom 
        let let_Zoom = parseFloat((ss_Zoom-0.1).toFixed(1));
        setSS_Zoom(let_Zoom)
    }}
    function f_ResetZoom(){
        setSS_Zoom(1)
    }

    function f_Gray(){
      setSS_UseEffect(true)
      setSS_IsRGB(false)
    }

    function f_RGB(){
      setSS_UseEffect(true)
      setSS_IsRGB(true)
    }
//****************************************************************************
// OUTPUT
//****************************************************************************
return(
  <>
  <div className='C04id_Toolbar'
    style={{
      width:`${200}px`,
      height:`calc(100vh - ${143+20}px)`,
      }}>
    
    <div style={{display:'flex',height:'100px'}}>
    {//****************************************************************************
    // Zoom Image
    //****************************************************************************
    }
    <div style={{display:'inline-block',margin:'auto'}}>
      <h1 className='C04id_Zoom' style={{marginTop:'10px'}}>Zoom: {SS_Zoom}</h1>
      <div style={{display:'flex',marginTop:'10px'}}>
    <button onClick={f_PosZoom} className='C04id_Zoom' style={{width:'28px'}}>+</button>
    <button onClick={f_NegZoom} className='C04id_Zoom' style={{width:'28px'}}>-</button>
      </div>
    <button onClick={f_ResetZoom} className='C04id_Button' >Reset</button>
    </div>

    <div style={{borderLeft:'3px solid #ffffff',height:'110px'}}>
    </div>

    {//****************************************************************************
    // RGB or Gray
    //****************************************************************************
    }
    <div style={{display:'inline-block', backgroundColor:'#33AAAA',marginLeft:'10px',margin:'auto'}}>
    <h1 className='C04id_Zoom' style={{marginTop:'10px'}}>Color</h1>
    <button onClick={f_Gray} className='C04id_Button'>Gray</button>
    <button onClick={f_RGB}  className='C04id_Button'>RGB</button>
    </div>
    </div>

    {//****************************************************************************
    // Edit Image
    //****************************************************************************
    }
    <hr/>
    <h1 className='C04id_Zoom' style={{marginTop:'10px'}}>Edit Image</h1>
    <div className='C04id_EditImage'>
    <button onClick={f_Gray} className='C04id_Button'><img  src={logo_Crop} style={{width:'100%',height:'100%'}} alt="fireSpot"/></button>
    <button onClick={f_Gray} className='C04id_Button'><img  src={logo_Shape} style={{width:'100%',height:'100%'}} alt="fireSpot"/></button>
    <button onClick={f_Gray} className='C04id_Button'><img  src={logo_UpsideDown} style={{width:'100%',height:'100%'}} alt="fireSpot"/></button>
    <button onClick={f_Gray} className='C04id_Button'>Text</button>
    <button className='C04id_Button'>Ok</button>
    <button className='C04id_Button' style={{fontSize:'16px',paddingLeft:'0px'}}>Reset</button>
    </div>

    {//****************************************************************************
    // Edit Image Setting
    //****************************************************************************
    }
    <hr/>
    <h1 className='C04id_Zoom' style={{marginTop:'10px'}}>Edit Image Setting</h1>
    <div className='C04id_EditSetting'>
    {
    /*<input type="color" id="favcolor" name="favcolor" value="#ff0000"></input>
    <input></input>*/
    }
    <button className='C04id_Button' style={{marginLeft:'10px'}} onClick={()=>{setSS_EditSetting(0)}}>Shape</button>
    {/*
    Attribute
    1. Type 
    2. Line Color
    3. Line Width
    4. Shape Color
    Type
    1. Rectangle
    2. Circle
    3. Line
    4. X Line
    5. Y Line
    */}
    <button className='C04id_Button' style={{marginLeft:'auto'}} onClick={()=>{setSS_EditSetting(1)}}>Text</button>
    {/*
    Attribute
    1. Font Name
    2. Font Size
    3. Color
    4. Utility
    */}
    </div>
    {JSX_Setting}
    {//****************************************************************************
    // Gray Threshold
    //****************************************************************************
    }
    <hr/>
    <h1 className='C04id_Zoom' style={{marginTop:'10px'}}>Gray Threshold</h1>
    <button>add</button>
    <h1 className='C04id_Zoom'  style={{marginTop:'10px'}}>255</h1>
    <div style={{marginLeft:'20px',backgroundColor:'#33FFFF',width:'5px',height:`calc(100vh - ${143+20+100+150+100}px)`}}></div>
    <h1 className='C04id_Zoom'    style={{marginTop:'10px'}}>0</h1>

  </div>
  {JSX_Convolution}
  </>
  )
}

export default U_Toolbar