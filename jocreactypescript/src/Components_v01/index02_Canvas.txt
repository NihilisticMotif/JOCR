// React
import React, { ChangeEvent, useState , useEffect, useRef , useLayoutEffect} from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import C04_ImageEditor from './C04_ImageEditor/index';
import TS_Threshold from './T03_Threshold/An_Index';
import TS_Kernal from './T05_Kernal/An_Index';
import { U03_Sort } from './T03_Threshold/U03_Sort';
// CSS
import './index02_Canvas.css'
import TS_Box from './T04_Box/An_Index';

interface ServerResponse {
    text:string|string[]
    image: Blob;
    psm0:string[]
    dim:string[]
}

interface IN_02_Canvas{
  OCR_WhiteListYes:string 
  setOCR_WhiteListYes:(S:string)=>void 
  OCR_WhiteListNo:string 
  setOCR_WhiteListNo:(S:string)=>void
  OCR_PSM0:string[]
  OCR_PSM:number
  TheMainCharacter:string|string[]
  OCR_IsViewBox:boolean 
  OCR_BoxColor:string
  OCR_IsOpen:boolean
  OCR_OutputFile:string[]
  OCR_Languages:string[][]
  OCR_IsOCR:boolean
  SS_Aff:number[]
  SS_Boxes:TS_Box[]
  SS_AffOrigin:string[]
SS_IsActivate:boolean[]
SS_IsShow:boolean
SS_Kernals:TS_Kernal[]
SS_Affine       :number[][][]
SS_AffineSTR    :string[][][]
SS_AffineRGB    :string[][]
SS_AffineBOOL:boolean[][]
SS_Image:string | null
SS_Zoom      :number
SS_WidthImage:number
SS_IsRGB     :boolean
SS_ImageFile :File|null
SS_UseEffect :boolean
SS_OpenPanel:0|1|2;
SS_Thresholds:TS_Threshold[];
OCR_BoxLineWidth:number
OCR_DPI:number
OCR_WhiteListNumber:number
setOCR_PSM0:(S:string[])=>void
setOCR_PSM:(S:number)=>void
setTheMainCharacter:(S:string|string[])=>void
setOCR_IsViewBox:(S:boolean)=>void
setOCR_BoxColor:(S:string)=>void
setOCR_IsOpen:(S:boolean)=>void
setOCR_OutputFile:(S:string[])=>void
setOCR_Languages:(S:string[][])=>void
setOCR_IsOCR:(S:boolean)=>void
setSS_Aff:(S:number[])=>void
setSS_Boxes:(S:TS_Box[])=>void
setSS_AffOrigin:(S:string[])=>void
setSS_Image:(S:string | null)=>void
setSS_IsShow:(S:boolean)=>void
setSS_AffineBOOL:(S:boolean[][])=>void
setSS_AffineRGB :(S:string[][])=>void
setSS_AffineSTR :(S:string[][][])=>void
setSS_Affine    :(S:number[][][])=>void
setSS_Kernals:(S:TS_Kernal[])=>void
setSS_IsActivate:(S:boolean[])=>void
setSS_Zoom      :(S:number)=>void
setSS_WidthImage:(S:number)=>void
setSS_IsRGB     :(S:boolean)=>void
setSS_ImageFile :(S:File|null)=>void
setSS_UseEffect :(S:boolean)=>void
setSS_OpenPanel:(S:0|1|2)=>void;
setSS_Thresholds:(S:TS_Threshold[])=>void
setOCR_BoxLineWidth:(S:number)=>void
setOCR_DPI:(S:number)=>void
setOCR_WhiteListNumber:(S:number)=>void
}

export const Index02_Canvas: React.FC<IN_02_Canvas> = (
//****************************************************************************
// INPUT
//****************************************************************************
{
  OCR_WhiteListNumber, 
  setOCR_WhiteListNumber,
  OCR_DPI,
  setOCR_DPI,
  OCR_PSM,
  setOCR_PSM,
  OCR_PSM0,
  setOCR_PSM0,
  OCR_IsOpen,
  setOCR_IsOpen,
  OCR_OutputFile,
  setOCR_OutputFile,
  OCR_Languages,
  setOCR_Languages,
  OCR_IsOCR,
  setOCR_IsOCR,
  SS_Aff          ,
  setSS_Aff       ,
  SS_Boxes,
  setSS_Boxes,
  SS_AffOrigin,
  setSS_AffOrigin,
SS_IsActivate     ,
SS_IsShow         ,
setSS_IsShow      ,
setSS_IsActivate  ,
SS_Kernals,
setSS_Kernals,
SS_Affine         ,  
setSS_Affine      ,
SS_AffineSTR      ,
setSS_AffineSTR   ,
SS_AffineRGB      ,
setSS_AffineRGB   ,
SS_AffineBOOL     ,
setSS_AffineBOOL  ,
SS_Image          ,
setSS_Image       ,
SS_Zoom           ,
SS_WidthImage     ,
SS_IsRGB          ,
SS_ImageFile      ,
SS_UseEffect      ,
setSS_Zoom        ,
setSS_WidthImage  ,
setSS_IsRGB       ,
setSS_ImageFile   ,
setSS_UseEffect   ,
SS_OpenPanel      ,
setSS_OpenPanel   ,
SS_Thresholds     ,
setSS_Thresholds  ,
OCR_BoxColor,
setOCR_BoxColor,
OCR_IsViewBox,
setOCR_IsViewBox,
OCR_BoxLineWidth,
setOCR_BoxLineWidth,
OCR_WhiteListYes,
OCR_WhiteListNo,
setOCR_WhiteListYes, 
setOCR_WhiteListNo,
TheMainCharacter,
setTheMainCharacter,
}) => {
  const Base64Image='data:image/png;base64,'
//****************************************************************************
// HOOK
//****************************************************************************
  const [OCR_Langs,setOCR_Langs]=useState<string>(
    OCR_Languages.map((i)=>{
      return i[0]
    }).join('+')
  )
  const [SS_ImageDimensions, setSS_ImageDimensions] = useState<number[] | null>(null);
  const [SS_ImageFileName,setSS_ImageFileName]=useState<string>('')
  const [SS_ImageFileFormat,setSS_ImageFileFormat]=useState<string>('png')
  const let_fetchImage = async () => {
    // https://stackoverflow.com/questions/72023176/how-to-send-post-request-from-react-to-flask-without-submit-button
    // https://stackoverflow.com/questions/73678855/fetch-and-display-image-from-api-react
        if (SS_ImageFile && SS_UseEffect===true) {
          let ss_Thresholds=[...SS_Thresholds]
          let let_UpdateThresholds=U03_Sort(ss_Thresholds)
          setSS_Thresholds(let_UpdateThresholds)
          setOCR_Langs((
            OCR_Languages.map((i)=>{
              return i[0]
            }).join('+')
          ))
          const formData = new FormData();
          formData.append('file', SS_ImageFile);
          formData.append('SS_Aff',SS_Aff.toString())
          formData.append('SS_AffOrigin',SS_AffOrigin.toString())
          formData.append('SS_IsActivate',SS_IsActivate.toString())
          formData.append('SS_IsRGB', SS_IsRGB.toString())
          formData.append('SS_Affine',SS_Affine.toString())
          formData.append('SS_AffineRGB',SS_AffineRGB.toString())
          formData.append('SS_AffineBOOL',SS_AffineBOOL.toString())
          formData.append('SS_Kernals',JSON.stringify(SS_Kernals).toString())
          formData.append('SS_Thresholds',JSON.stringify(SS_Thresholds).toString())
          formData.append('SS_IsShow',SS_IsShow.toString())
          formData.append('SS_Boxes',JSON.stringify(SS_Boxes).toString())
          formData.append('OCR_BoxColor',OCR_BoxColor)
          formData.append('OCR_IsViewBox',OCR_IsViewBox.toString())
          formData.append('OCR_BoxLineWidth',OCR_BoxLineWidth.toString())
          formData.append('OCR_Langs',OCR_Langs.toString())
          formData.append('OCR_IsOCR',OCR_IsOCR.toString())
          formData.append('OCR_PSM0',OCR_PSM0.toString())
          formData.append('OCR_PSM',OCR_PSM.toString())
          formData.append('OCR_DPI',OCR_DPI.toString())
          formData.append('OCR_WhiteListYes',OCR_WhiteListYes.toString())
          formData.append('OCR_WhiteListNo',OCR_WhiteListNo.toString())
          formData.append('OCR_WhiteListNumber',OCR_WhiteListNumber.toString())
          // https://stackoverflow.com/questions/41431322/how-to-convert-formdata-html5-object-to-json
          fetch('/def_OpenCV', {
              method: 'POST',
              body: formData
          })
          .then((response) => response.json() as Promise<ServerResponse>)
          .then((data) => {
    const img = new Image();
// https://stackoverflow.com/questions/43965034/reactjs-how-to-render-images-from-a-json-blob
let binaryData = []; 
binaryData.push(data.image); 
const blob=new Blob(binaryData, {type: 'image/png'})
img.src = URL.createObjectURL(blob)
img.onload = () => {
  setSS_Image(img.src)
};
if(data.image){
setSS_Image(data.image.toString())
setSS_ImageDimensions([parseInt(data.dim[0]),parseInt(data.dim[1])])
}
if (OCR_IsOCR === true) {
    setTheMainCharacter(data.text);
}
if(OCR_PSM0[-1]==='true'){
  setOCR_PSM0(data.psm0)
}
});
  setSS_UseEffect(false)
}
};

  const Ref_C04 = useRef<HTMLDivElement | null>(null);
  let let_RightToolW=100

  useEffect(() => {
    console.log('image:', Base64Image);
      setSS_UseEffect(true)
      let_fetchImage()
      const let_CurrentWidthC04 = Ref_C04.current;
      let let_WidthC04=(document.getElementById('I02id_Canvas')as HTMLElement)

      if (let_CurrentWidthC04) {
      const let_ObsImageWidth = new ResizeObserver(() => { 
        setSS_WidthImage(let_WidthC04!.offsetWidth-1)
      })

      let_ObsImageWidth.observe(let_CurrentWidthC04);
      return () => {
          let_ObsImageWidth.disconnect();
      };
      }

  }, [
    SS_Image,
    SS_ImageFile,
    SS_IsRGB,
    SS_IsShow,
    SS_IsActivate,
    SS_AffineBOOL,
    SS_AffOrigin,
    SS_Kernals,
    SS_Affine,
    SS_Aff,
    SS_Boxes,
    OCR_BoxColor,
    OCR_IsViewBox,
    OCR_PSM0,
    OCR_PSM
  ]);
  useEffect(()=>{
    const calculateDynamicWidth = () => {
      if (Ref_C04.current) {
      if(SS_OpenPanel==2){
        const windowWidth = window.innerWidth;
        const dynamicWidth = windowWidth/2
        setSS_WidthImage(dynamicWidth)
        Ref_C04.current.style.width = dynamicWidth + 'px';}
      else{        
        const windowWidth = window.innerWidth;
        const dynamicWidth = windowWidth
        setSS_WidthImage(dynamicWidth)
        Ref_C04.current.style.width = dynamicWidth + 'px';}
      }
    };
    calculateDynamicWidth();
    window.addEventListener('resize', calculateDynamicWidth);
    return () => {
      window.removeEventListener('resize', calculateDynamicWidth);
    };
  }
  ,[SS_OpenPanel])


  if(SS_OpenPanel==1){
  let_RightToolW=400
}
else{
  let_RightToolW=100
}

  let let_MarginTop='0px'
  if(SS_Zoom<1){
    let_MarginTop=`calc(${SS_Zoom*0.1} * 100vh - ${SS_Zoom*0.1*(143+40)}px)`
  }
  else{
    let_MarginTop='0px'
  }

//****************************************************************************
// Function 00: Import Image
//****************************************************************************
  const f_ImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    // By ChatGPT
    setSS_UseEffect(true)
    const file = event.target.files?.[0];
        if (file) {
        setSS_ImageFile(file)
        }
  }

//****************************************************************************
// FUNCTION_01: Open C01_Table
//****************************************************************************
    function f_OpenC01(){
        setSS_OpenPanel(2)
    }
//****************************************************************************
// FUNCTION_02: Close C04_Canvas
//****************************************************************************
    function f_CloseC04(){
        // 0 = have only C01
        setSS_OpenPanel(0)
    }
  
//****************************************************************************
// JSX_00: Open C01_Table or Close C04_Canvas
//****************************************************************************
    let JSX_OpenC01=<td><button className='I02id_Header' onClick={f_OpenC01}>Open Text Editor</button></td>
    if(SS_OpenPanel===2){
        JSX_OpenC01=<td><button className='I02id_Header' onClick={f_CloseC04}>X</button></td>
    }
    else if(SS_OpenPanel===0){
        JSX_OpenC01=<td><button className='I02id_Header' onClick={f_OpenC01}>+</button></td>
    }
//****************************************************************************
// FUNCTION_03: Update Export Image File Name
//****************************************************************************
function f_ImageFileName(){
    let let_Input:string=(document.getElementById("I02id_SaveImageFileName") as HTMLInputElement).value.toString()
    setSS_ImageFileName(let_Input)
}

function f_ImageFileFormat(){
    let let_Input:string=(document.getElementById("I02id_SaveImageFileFormat") as HTMLInputElement).value.toString()
    setSS_ImageFileFormat(let_Input)
}

  const f_SaveImage = () => {
    if (SS_Image && SS_ImageFileName!=='') {
      const link = document.createElement('a');
      link.href = Base64Image+SS_Image;
      link.download = SS_ImageFileName+'.'+SS_ImageFileFormat
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
//****************************************************************************
// OUTPUT
//****************************************************************************
  return (
    <div id='I02id_Canvas' ref={Ref_C04}>
      
    <div id='I02id_DivHeader' style={{paddingTop:'3px',paddingBottom:'3px'}}>
        {JSX_OpenC01}
        <td><input id='I02id_SaveImageFileName' value={SS_ImageFileName} onChange={f_ImageFileName} placeholder='Image File Name' style={{width:'125px',fontSize:'16px'}}></input></td>
        <td>
<select onChange={f_ImageFileFormat}
style={{fontSize:'15px',height:'25px'}} 
value={SS_ImageFileFormat} id={'I02id_SaveImageFileFormat'}>
  <option value="png" >png</option>
  <option value="jpeg">jpeg</option>
  <option value="pdf" >pdf</option>
</select>
        </td>
        <td><button className='I02id_Header' style={{whiteSpace:'nowrap'}} onClick={f_SaveImage}>Export Image</button></td>
        <td>
        <input type="file" accept="image/*" className='I02id_Header' onChange={f_ImageChange} />
        </td>
    </div>
    
<div id='I02id_Body' 
style={{width:(SS_WidthImage).toString()+'px'}}
>

  <div className='I02id_Image' 
    style={{
      width:`calc(100% - ${let_RightToolW}px)`,
      height:`calc(100vh - ${60}px)`,
      overflowX:'hidden',
      overflowY:'hidden',
    }}
  >
  <div style={{
      marginTop:`calc( ${(1/SS_Zoom)}*100vh - ${(1/SS_Zoom)*(143+20)}px - ${(1/SS_Zoom)} * 100vh + ${(1/SS_Zoom)*(143+40)}px -10 )`,
      height:`calc(100vh - ${60}px)`,
      backgroundColor:'greenyellow',
      overflowY:'scroll',
      overflowX:'scroll'
    }}>
      
  {
    SS_Image && 
    <img 
    src={Base64Image+SS_Image} 
    id="I02id_Midjourney"
    alt="Uploaded" 
    style={{
      height:`calc( ${SS_Zoom} * 100%)`
  }}
  />
  }
  </div>
  </div>
{/*
<div
style={{display:'block'}}
>
<div
style={{backgroundColor:'red',height:'30px',width:'100%',display:'flex'}}
>
{
  //<h1 style={{fontSize:'14px'}}>Edit Mode</h1>
  }
<button>Image Editor</button>
<button>OCR Command</button>
</div>
<div
style={{display:'flex'}}
>*/}
<C04_ImageEditor
OCR_WhiteListNumber={OCR_WhiteListNumber}
setOCR_WhiteListNumber={setOCR_WhiteListNumber}
OCR_WhiteListYes={OCR_WhiteListYes} 
OCR_WhiteListNo={OCR_WhiteListNo}
setOCR_WhiteListYes={setOCR_WhiteListYes}
setOCR_WhiteListNo={setOCR_WhiteListNo}
OCR_DPI={OCR_DPI}
setOCR_DPI={setOCR_DPI}
OCR_PSM={OCR_PSM}
setOCR_PSM={setOCR_PSM}
setOCR_PSM0={setOCR_PSM0}
OCR_PSM0={OCR_PSM0}
OCR_BoxColor={OCR_BoxColor}
setOCR_BoxColor={setOCR_BoxColor}
OCR_BoxLineWidth={OCR_BoxLineWidth}
setOCR_BoxLineWidth={setOCR_BoxLineWidth}
OCR_IsViewBox={OCR_IsViewBox}
setOCR_IsViewBox={setOCR_IsViewBox}
OCR_IsOpen={OCR_IsOpen}
setOCR_IsOpen={setOCR_IsOpen}
OCR_OutputFile={OCR_OutputFile}
setOCR_OutputFile={setOCR_OutputFile}
OCR_Languages={OCR_Languages}
setOCR_Languages={setOCR_Languages}
OCR_IsOCR={OCR_IsOCR}
setOCR_IsOCR={setOCR_IsOCR}
SS_Boxes={SS_Boxes}
setSS_Boxes={setSS_Boxes}
SS_IsShow={SS_IsShow}
SS_Aff={SS_Aff}
setSS_Aff={setSS_Aff}
SS_AffOrigin={SS_AffOrigin}
setSS_AffOrigin={setSS_AffOrigin}
setSS_IsShow={setSS_IsShow}
SS_IsActivate={SS_IsActivate}
setSS_IsActivate={setSS_IsActivate}
SS_Kernals={SS_Kernals}
setSS_Kernals={setSS_Kernals}
SS_Affine={SS_Affine}
setSS_Affine={setSS_Affine}
SS_AffineSTR={SS_AffineSTR}
setSS_AffineSTR={setSS_AffineSTR}
SS_AffineRGB={SS_AffineRGB}
setSS_AffineRGB={setSS_AffineRGB}
SS_AffineBOOL={SS_AffineBOOL}
setSS_AffineBOOL={setSS_AffineBOOL}
SS_Zoom={SS_Zoom}
setSS_Zoom={setSS_Zoom}
SS_IsRGB={SS_IsRGB}
setSS_IsRGB={setSS_IsRGB}
TotalWidth={let_RightToolW}
setSS_UseEffect={setSS_UseEffect}
SS_OpenPanel={SS_OpenPanel}
SS_Thresholds={SS_Thresholds}
setSS_Thresholds={setSS_Thresholds}
SS_ImageDimensions={SS_ImageDimensions}
SS_Image={SS_Image}
/>
</div>
  </div>

  );
};