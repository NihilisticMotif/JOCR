import { useState , useEffect} from 'react';

import './index.css'

import C05_Convolution from '../C05_Convolution/index';
import U_Zoom from './Coms/U_Zoom';
import U_IsRGB from './Coms/U_IsRGB';
import U_UpdateImage from './Coms/U_UpdateImage';
import U_Aff from './Coms/U_Aff'

import TS_Threshold from '../T03_Threshold/An_Index';
import TS_Box from '../T04_Box/An_Index';
//import U1_EditImage from './Coms_Toolbar/U1_EditImage'
//import U1_2DMatrix from './Coms_Toolbar/U2_Affine'

//import U2_Convolution from './Coms_Toolbar/U2_Convolution';

//import U1_Affine from './Coms_Toolbar/U1_Affine';
const C04_ImageEditor = (
//****************************************************************************
// INPUT
//****************************************************************************
{
  SS_Aff,
  setSS_Aff,
  SS_Boxes,
  setSS_Boxes,
  SS_AffOrigin,
  setSS_AffOrigin,
  SS_IsActivate,
  setSS_IsActivate,
  setSS_IsShow,
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
SS_Thresholds,
setSS_Thresholds,
SS_IsShow
}
:{
  SS_IsShow:boolean
  SS_Aff:number[]
  setSS_Aff:(S:number[])=>void
  SS_Boxes:TS_Box[]
  setSS_Boxes:(S:TS_Box[])=>void
  SS_AffOrigin:string[]
  setSS_AffOrigin:(S:string[])=>void
  SS_IsActivate:boolean[]
  setSS_IsActivate:(S:boolean[])=>void
  setSS_IsShow:(S:boolean)=>void
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
  const [SS_ImageProcessing,setSS_ImageProcessing]=useState<0|1|2>(0)
  // 0 Threshold
  // 1 Convolution
  // 2 FFT
  // 3 2D Linear Transformation
  // 4 ...

  let JSX_ImageProcessingDIV=<></>
  if(SS_OpenPanel===1){
    JSX_ImageProcessingDIV=<div style={{display:'grid'}}>
      <div style={{display:'flex',height:'40px',overflowX: 'clip'}}>
        <button onClick={()=>{setSS_ImageProcessing(0)}}>Threshold</button>
        <button onClick={()=>{setSS_ImageProcessing(1)}}>Convolution</button>
        <button onClick={()=>{setSS_ImageProcessing(2)}}>Create Box</button>
        <button onClick={()=>{setSS_ImageProcessing(2)}}>Utility</button>
      </div>
      {
        // Scroll horizontal line
      }
      <C05_Convolution
      SS_Boxes={SS_Boxes}
      setSS_Boxes={setSS_Boxes}
    SS_IsActivate={SS_IsActivate}
    setSS_IsActivate={setSS_IsActivate}
    SS_ImageProcessing={SS_ImageProcessing}
    SS_Thresholds={SS_Thresholds}
    setSS_Thresholds={setSS_Thresholds}
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
    setSS_nDTable ={setSS_nDTable }
    />
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
      
      <U_Zoom
      SS_Zoom={SS_Zoom}
      setSS_Zoom={setSS_Zoom}/>
    {//****************************************************************************
    // RGB or Gray
    //****************************************************************************
    }
    <U_IsRGB
    SS_IsRGB={SS_IsRGB}
    setSS_UseEffect={setSS_UseEffect}
    setSS_IsRGB={setSS_IsRGB}/>

    </div>

    {//****************************************************************************
    // Edit Image
    //****************************************************************************
    }
    <hr/>
    <U_UpdateImage
    setSS_IsShow={setSS_IsShow}
    setSS_UseEffect={setSS_UseEffect}
    setSS_IsRGB={setSS_IsRGB}
    SS_IsRGB={SS_IsRGB}
    SS_IsShow={SS_IsShow}
    />
    <hr/>
    <U_Aff
    SS_Aff={SS_Aff}
    setSS_Aff={setSS_Aff}
    SS_AffOrigin={SS_AffOrigin}
    setSS_AffOrigin={setSS_AffOrigin}
    SS_IsActivate={SS_IsActivate}
    setSS_IsActivate={setSS_IsActivate}
    setSS_UseEffect={setSS_UseEffect}
    />
    <hr/>

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

export default C04_ImageEditor