import { useState , useEffect} from 'react';

import './U_Toolbar.css'
import U1_ShapeTextSetting from './Coms_Toolbar/U1_ShapeTextSetting'
import U1_EditImage from './Coms_Toolbar/U1_EditImage'
import U1_Zoom from './Coms_Toolbar/U1_Zoom';
import U1_IsRGB from './Coms_Toolbar/U1_IsRGB';
import U1_2DMatrix from './Coms_Toolbar/U1_2DMatrix'
import U2_Threshold from './Coms_Toolbar/U2_Threshold';
import U2_Convolution from './Coms_Toolbar/U2_Convolution';
const U_Toolbar = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_Zoom,
setSS_Zoom,
setSS_IsRGB,
setSS_UseEffect,
SS_OpenPanel,
TotalWidth,
}
:{
SS_Zoom:number,
setSS_Zoom:(S:number)=>void
setSS_IsRGB:(S:boolean)=>void
setSS_UseEffect:(S:boolean)=>void
SS_OpenPanel:0|1|2
TotalWidth:number
})=>{

  const [SS_IsShapeSetting,setSS_IsShapeSetting]=useState<boolean>(true)
  const [SS_ImageProcessing,setSS_ImageProcessing]=useState<0|1>(0)
  // 0 Threshold
  // 1 Convolution
  // 2 FFT
  // 3 2D Linear Transformation
  // 4 ...

  let JSX_ImageProcessing=<></>
  if(SS_ImageProcessing===0){
    JSX_ImageProcessing=<U2_Threshold/>
  }
  else{
    JSX_ImageProcessing=<U2_Convolution/>
  }

  let JSX_ImageProcessingDIV=<></>
  if(SS_OpenPanel===1){
    JSX_ImageProcessingDIV=<div style={{display:'grid'}}>
      <div style={{display:'flex',height:'40px'}}>
        <button onClick={()=>{setSS_ImageProcessing(0)}}>Threshold</button>
        <button onClick={()=>{setSS_ImageProcessing(1)}}>Convolution</button>
      </div>
      {JSX_ImageProcessing}
  </div>
  }else{
    JSX_ImageProcessingDIV=<></>
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
      
      <U1_Zoom
      SS_Zoom={SS_Zoom}
      setSS_Zoom={setSS_Zoom}/>
    {//****************************************************************************
    // RGB or Gray
    //****************************************************************************
    }
    <U1_IsRGB
    setSS_UseEffect={setSS_UseEffect}
    setSS_IsRGB={setSS_IsRGB}/>

    </div>

    {//****************************************************************************
    // Edit Image
    //****************************************************************************
    }
    <hr/>
    <U1_EditImage/>

    {//****************************************************************************
    // Edit Image Setting
    //****************************************************************************
  }
  <U1_ShapeTextSetting
  SS_IsShapeSetting={SS_IsShapeSetting}
  setSS_IsShapeSetting={setSS_IsShapeSetting}
  />
  <hr style={{marginTop:'20px'}}/>
  <U1_2DMatrix/>
  </div>
  {//****************************************************************************
    // Convolution or Threshold
    //****************************************************************************
  }
  {JSX_ImageProcessingDIV}
  </>
  )
}

export default U_Toolbar