import { useState , useEffect} from 'react';

import './U_Toolbar.css'
import U1_ShapeTextSetting from './Coms_Toolbar/U1_ShapeTextSetting'
import U1_EditImage from './Coms_Toolbar/U1_EditImage'
import U1_Zoom from './Coms_Toolbar/U1_Zoom';
import U1_IsRGB from './Coms_Toolbar/U1_IsRGB';
import U1_2DMatrix from './Coms_Toolbar/U2_Affine'
import U2_Threshold from './Coms_Toolbar/U2_Threshold';
import U2_Convolution from './Coms_Toolbar/U2_Convolution';
import TS_Threshold from '../../T03_Threshold/An_Index';
import U1_UpdateImage from './Coms_Toolbar/U1_UpdateImage';
import U1_Affine from './Coms_Toolbar/U1_Affine';
const U_Toolbar = (
//****************************************************************************
// INPUT
//****************************************************************************
{
  SS_IsActivate,
  setSS_IsActivate,
SS_nDMatrix   ,
setSS_nDMatrix,
SS_nDTable    ,
setSS_nDTable ,
SS_Affine,
setSS_Affine,
SS_AffineSTR,
setSS_AffineSTR,
SS_AffineRGB,
setSS_AffineRGB,
SS_AffineBOOL,
setSS_AffineBOOL,
SS_Zoom,
setSS_Zoom,
SS_IsRGB,
setSS_IsRGB,
setSS_UseEffect,
SS_OpenPanel,
TotalWidth,
SS_Thresholds,
setSS_Thresholds,
}
:{
  SS_IsActivate:boolean[]
  setSS_IsActivate:(S:boolean[])=>void
SS_nDMatrix   :number[][]
setSS_nDMatrix:(S:number[][])=>void
SS_nDTable    :string[][]
setSS_nDTable :(S:string[][])=>void
SS_Affine       :number[][][]
setSS_Affine    :(S:number[][][])=>void
SS_AffineSTR    :string[][][]
setSS_AffineSTR :(S:string[][][])=>void
SS_AffineRGB    :string[][]
setSS_AffineRGB :(S:string[][])=>void
SS_AffineBOOL:boolean[][]
setSS_AffineBOOL:(S:boolean[][])=>void
SS_Zoom:number,
setSS_Zoom:(S:number)=>void
SS_IsRGB:boolean
setSS_IsRGB:(S:boolean)=>void
setSS_UseEffect:(S:boolean)=>void
SS_OpenPanel:0|1|2
TotalWidth:number
SS_Thresholds:TS_Threshold[]
setSS_Thresholds:(S:TS_Threshold[])=>void
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
    JSX_ImageProcessing=<U2_Threshold
    SS_IsActivate={SS_IsActivate}
    setSS_IsActivate={setSS_IsActivate}
        SS_Thresholds={SS_Thresholds}
        setSS_Thresholds={setSS_Thresholds}/>
  }
  else{
    JSX_ImageProcessing=<U2_Convolution
SS_IsActivate={SS_IsActivate}
setSS_IsActivate={setSS_IsActivate}
SS_Affine={SS_Affine}
setSS_Affine={setSS_Affine}
SS_AffineSTR={SS_AffineSTR}
setSS_AffineSTR={setSS_AffineSTR}
SS_AffineRGB={SS_AffineRGB}
setSS_AffineRGB={setSS_AffineRGB}
SS_AffineBOOL={SS_AffineBOOL}
setSS_AffineBOOL={setSS_AffineBOOL}
SS_nDMatrix   ={SS_nDMatrix   }
setSS_nDMatrix={setSS_nDMatrix}
SS_nDTable    ={SS_nDTable    }
setSS_nDTable ={setSS_nDTable }/>
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
    SS_IsRGB={SS_IsRGB}
    setSS_UseEffect={setSS_UseEffect}
    setSS_IsRGB={setSS_IsRGB}/>

    </div>

    {//****************************************************************************
    // Edit Image
    //****************************************************************************
    }
    <hr/>
    <U1_UpdateImage
    SS_IsActivate={SS_IsActivate}
    setSS_IsActivate={setSS_IsActivate}
    setSS_UseEffect={setSS_UseEffect}
    />
    <hr/>
    <U1_Affine
    SS_IsActivate={SS_IsActivate}
    setSS_IsActivate={setSS_IsActivate}
    setSS_UseEffect={setSS_UseEffect}
    />
{/*    <U1_EditImage/>

    //****************************************************************************
    // Edit Image Setting
    //****************************************************************************
  }
  <U1_ShapeTextSetting
  SS_IsShapeSetting={SS_IsShapeSetting}
  setSS_IsShapeSetting={setSS_IsShapeSetting}
/>*/}
  
  {/*
  <hr style={{marginTop:'20px'}}/>
  <U1_2DMatrix
  SS_3DMatrix ={SS_3DMatrix   }  
setSS_3DMatrix={setSS_3DMatrix}
SS_3DTable    ={SS_3DTable    }
setSS_3DTable ={setSS_3DTable }/>*/}
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