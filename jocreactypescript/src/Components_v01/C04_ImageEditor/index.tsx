import { useState , useEffect} from 'react';

import './index.css'

import C05_Convolution from '../C05_Convolution/index';
import C06_OCREditor from '../C06_OCREditor/index';
import U_Zoom from './Coms/U_Zoom';
import U_IsRGB from './Coms/U_IsRGB';
import U_UpdateImage from './Coms/U_UpdateImage';
import U_Aff from './Coms/U_Aff'
import M_OCRorImage from './Coms/M_OCRorImage'
import TS_Threshold from '../T03_Threshold/An_Index';
import TS_Box from '../T04_Box/An_Index';
import TS_Kernal from '../T05_Kernal/An_Index';
import OCR_WhiteList from './Coms/OCR_WhiteList'
//import U1_EditImage from './Coms_Toolbar/U1_EditImage'
//import U1_2DMatrix from './Coms_Toolbar/U2_Affine'

//import U2_Convolution from './Coms_Toolbar/U2_Convolution';

//import U1_Affine from './Coms_Toolbar/U1_Affine';
const C04_ImageEditor = (
//****************************************************************************
// INPUT
//****************************************************************************
{
  OCR_PSM0,
  OCR_BoxColor,
  setOCR_BoxColor,
  OCR_BoxLineWidth,
  setOCR_BoxLineWidth,
  OCR_IsViewBox,
  setOCR_IsViewBox,
  OCR_OutputFile,
  setOCR_OutputFile,
  OCR_Languages,
  setOCR_Languages,
  OCR_IsOpen,
  setOCR_IsOpen,
  SS_ImageDimensions,
  SS_Image,
  SS_Aff,
  setSS_Aff,
  SS_Boxes,
  setSS_Boxes,
  SS_AffOrigin,
  setSS_AffOrigin,
  SS_IsActivate,
  setSS_IsActivate,
  setSS_IsShow,
SS_Kernals,
setSS_Kernals,
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
SS_IsShow,
OCR_IsOCR,
setOCR_IsOCR,
setOCR_PSM0,
OCR_PSM,
setOCR_PSM,
OCR_DPI,
setOCR_DPI,
OCR_WhiteListYes,
OCR_WhiteListNo,
setOCR_WhiteListYes,
setOCR_WhiteListNo,
OCR_WhiteListNumber,
setOCR_WhiteListNumber
}
:{
  OCR_DPI:number;
  setOCR_DPI:(S:number)=>void
  OCR_PSM0:string[]  
  setOCR_PSM0:(S:string[])=>void
  OCR_BoxColor:string 
  setOCR_BoxColor:(S:string)=>void
  OCR_BoxLineWidth:number;
  setOCR_BoxLineWidth:(S:number)=>void
  OCR_IsViewBox:boolean 
  setOCR_IsViewBox:(S:boolean)=>void
  OCR_OutputFile:string[]
  setOCR_OutputFile:(S:string[])=>void
  OCR_Languages:string[][]
  setOCR_Languages:(S:string[][])=>void
  OCR_IsOpen:boolean,
  setOCR_IsOpen:(S:boolean)=>void
  SS_ImageDimensions:number[]|null
  SS_Image:string|null
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
SS_Kernals:TS_Kernal[]
setSS_Kernals:(S:TS_Kernal[])=>void
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
OCR_IsOCR:boolean 
setOCR_IsOCR:(S:boolean)=>void
OCR_PSM:number 
setOCR_PSM:(S:number)=>void
OCR_WhiteListYes:string 
OCR_WhiteListNo:string 
setOCR_WhiteListYes:(S:string)=>void 
setOCR_WhiteListNo:(S:string)=>void
OCR_WhiteListNumber:number 
setOCR_WhiteListNumber:(S:number)=>void
})=>{
  function OnlyText(inputStr: string): string {
    return inputStr.replace(/[^a-zA-Z]/g, '');
}
function OnlyNumber(inputStr: string): string {
    return inputStr.replace(/\D/g, ''); // \D matches non-digits
}

function isEmptyOrWhitespace(inputStr: string): boolean {
    return inputStr.trim() === '';
}

  function f_OnLyText(){
    if(isEmptyOrWhitespace(OCR_WhiteListYes)&& isEmptyOrWhitespace(OCR_WhiteListNo)){
      setOCR_WhiteListNo('0123456789')
    }
    else{
    let let_UpdateWhiteList=OnlyText(OCR_WhiteListYes)
    setOCR_WhiteListNo(OCR_WhiteListNo+'0123456789')
    setOCR_WhiteListYes(let_UpdateWhiteList)
    }
  }

  function f_OnLyNumber(){
    if(isEmptyOrWhitespace(OCR_WhiteListYes) && isEmptyOrWhitespace(OCR_WhiteListNo)){
      setOCR_WhiteListNo('abcdefghijklmnopqrstuvwxyz')
      setOCR_WhiteListYes('0123456789')
    }
    else{
    let let_UpdateWhiteList=OnlyNumber(OCR_WhiteListYes)
    let let_UpdateBlackList=OnlyText(OCR_WhiteListNo)
    setOCR_WhiteListNo(let_UpdateBlackList)
    setOCR_WhiteListYes(let_UpdateWhiteList)
    }
  }

  function f_Reset(){
    setOCR_WhiteListNo('')
    setOCR_WhiteListYes('')
  }
  const [SS_IsShapeSetting,setSS_IsShapeSetting]=useState<boolean>(true)
  const [SS_ImageProcessing,setSS_ImageProcessing]=useState<0|1|2|3>(0)
  // 0 Threshold
  // 1 Convolution
  // 2 FFT
  // 3 2D Linear Transformation
  // 4 ...

  let JSX_ImageProcessingDIV=<></>
  if(SS_OpenPanel===1 
  ){
    JSX_ImageProcessingDIV=<div style={{display:'grid'}}>
      <div style={{display:'flex',height:'40px'}}>
        <button onClick={()=>{setSS_ImageProcessing(0)}}>Threshold</button>
        <button onClick={()=>{setSS_ImageProcessing(1)}}>Convolution</button>
        <button onClick={()=>{setSS_ImageProcessing(2)}}>Create Box</button>
        <button onClick={()=>{setSS_ImageProcessing(3)}}>Utility</button>
      </div>
      <C05_Convolution
      SS_ImageDimensions={SS_ImageDimensions}
      SS_Image={SS_Image}
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
SS_Kernals={SS_Kernals}
setSS_Kernals={setSS_Kernals}
    />
  </div>
  }
  //if(SS_OpenPanel===1 && OCR_IsOpen==='OCR'){
  //  //
  //}

  {//****************************************************************************
    // Image Editor
    //****************************************************************************
  }
  let JSX_Body=<></>
  if(OCR_IsOpen===false){
    JSX_Body=<>
    <div style={{display:'flex',height:'100px'}}>
      <U_Zoom
      SS_Zoom={SS_Zoom}
      setSS_Zoom={setSS_Zoom}/>
    <U_IsRGB
    SS_IsRGB={SS_IsRGB}
    setSS_UseEffect={setSS_UseEffect}
    setSS_IsRGB={setSS_IsRGB}/>
    </div>
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
    DefaultOrientation={parseInt(OCR_PSM0[3])}
    />
    <hr/>
    </>
  }
  else{
    JSX_Body=<C06_OCREditor
    OCR_PSM={OCR_PSM}
    setOCR_PSM={setOCR_PSM}
    OCR_OutputFile={OCR_OutputFile}
    setOCR_OutputFile={setOCR_OutputFile}
    OCR_Languages={OCR_Languages}
    setOCR_Languages={setOCR_Languages}
    OCR_BoxColor={OCR_BoxColor}
    setOCR_BoxColor={setOCR_BoxColor}
    OCR_IsViewBox={OCR_IsViewBox}
    setOCR_IsViewBox={setOCR_IsViewBox}
    OCR_BoxLineWidth={OCR_BoxLineWidth}
    setOCR_BoxLineWidth={setOCR_BoxLineWidth}
    OCR_IsOCR={OCR_IsOCR}
    setOCR_IsOCR={setOCR_IsOCR}
    OCR_PSM0={OCR_PSM0}
    setOCR_PSM0={setOCR_PSM0}
    OCR_DPI={OCR_DPI}
    setOCR_DPI={setOCR_DPI}
    OCR_WhiteListNumber={OCR_WhiteListNumber}
    setOCR_WhiteListNumber={setOCR_WhiteListNumber}
    />
  }

//****************************************************************************
// OUTPUT
//****************************************************************************
return(
  <>
  <div className='C04id_Toolbar'
    style={{
      width:`${200}px`,
      height:`calc(100vh - ${60}px)`,
      }}>
    {//****************************************************************************
    // Tesseract OCR or Image Editor
    //****************************************************************************
    }
    <M_OCRorImage
    setSS_UseEffect={setSS_UseEffect}
    OCR_IsOpen={OCR_IsOpen}
    setOCR_IsOpen={setOCR_IsOpen}
    />
    <hr/>
    {JSX_Body}
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