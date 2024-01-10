import U_Threshold from "./Coms/U_Threshold";
import U_Convolution from "./Coms/U_Convolution";
import TS_Threshold from '../T03_Threshold/An_Index'

const C05_Convolution = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_ImageProcessing,
SS_IsActivate,
setSS_IsActivate,
SS_Thresholds,
setSS_Thresholds,
SS_Affine ,  
setSS_Affine,
SS_AffineSTR    ,
setSS_AffineSTR ,
SS_AffineRGB,
setSS_AffineRGB,
SS_AffineBOOL,
setSS_AffineBOOL,
SS_nDMatrix   ,
setSS_nDMatrix,
SS_nDTable    ,
setSS_nDTable ,
}
:{
SS_ImageProcessing:number;
  SS_IsActivate:boolean[];
  setSS_IsActivate:(S:boolean[])=>void
SS_Thresholds:TS_Threshold[]
setSS_Thresholds:(S:TS_Threshold[])=>void
SS_Affine       :number[][][]
setSS_Affine    :(S:number[][][])=>void
SS_AffineSTR    :string[][][]
setSS_AffineSTR :(S:string[][][])=>void
SS_AffineRGB    :string[][]
setSS_AffineRGB :(S:string[][])=>void
SS_AffineBOOL:boolean[][]
setSS_AffineBOOL:(S:boolean[][])=>void
SS_nDMatrix   :number[][]
setSS_nDMatrix:(S:number[][])=>void
SS_nDTable    :string[][]
setSS_nDTable :(S:string[][])=>void
})=>{
  let JSX_ImageProcessing=<></>
  if(SS_ImageProcessing===0){
    JSX_ImageProcessing=<U_Threshold
    SS_IsActivate={SS_IsActivate}
    setSS_IsActivate={setSS_IsActivate}
        SS_Thresholds={SS_Thresholds}
        setSS_Thresholds={setSS_Thresholds}/>
  }
  else{
    JSX_ImageProcessing=<U_Convolution
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

//****************************************************************************
// OUTPUT
//****************************************************************************
return(
  <>
  {JSX_ImageProcessing}
  </>
  )
}

export default C05_Convolution