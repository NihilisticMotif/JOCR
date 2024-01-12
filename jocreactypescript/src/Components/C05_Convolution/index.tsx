import U_Threshold from "./Coms/U_Threshold";
import U_Convolution from "./Coms/U_Convolution";
import U_AddBox from "./Coms/U_AddBox";
import U_Canny from "./Coms/U_Canny";
import U_Affine from "./Coms/U_Affine";
import TS_Threshold from '../T03_Threshold/An_Index'
import TS_Box from "../T04_Box/An_Index";
import TS_Kernal from "../T05_Kernal/An_Index";
const C05_Convolution = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_ImageProcessing,
SS_Image,
SS_IsActivate,
SS_Boxes,
setSS_Boxes,
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
SS_Kernals,
setSS_Kernals,
SS_ImageDimensions
}
:{
  SS_ImageDimensions:number[]|null
  SS_Image:string|null
SS_ImageProcessing:number;
  SS_IsActivate:boolean[];
  setSS_IsActivate:(S:boolean[])=>void
  SS_Boxes:TS_Box[]
  setSS_Boxes:(S:TS_Box[])=>void
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
SS_Kernals:TS_Kernal[]
setSS_Kernals:(S:TS_Kernal[])=>void
})=>{
  let JSX_ImageProcessing=<></>
  if(SS_ImageProcessing===0){
    JSX_ImageProcessing=<U_Threshold
    SS_IsActivate={SS_IsActivate}
    setSS_IsActivate={setSS_IsActivate}
        SS_Thresholds={SS_Thresholds}
        setSS_Thresholds={setSS_Thresholds}/>
  }
  else if(SS_ImageProcessing===1){
    JSX_ImageProcessing=<U_Convolution
SS_Kernals={SS_Kernals}
setSS_Kernals={setSS_Kernals}
/>
  }
  else if(SS_ImageProcessing===2){
    JSX_ImageProcessing=<U_AddBox
    SS_ImageDimensions={SS_ImageDimensions}
    SS_Image={SS_Image}
    SS_Boxes={SS_Boxes}
    setSS_Boxes={setSS_Boxes}
    />
  }
    else{
    JSX_ImageProcessing=<U_Affine
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
/>
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