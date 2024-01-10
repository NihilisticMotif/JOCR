// React
import React, { ChangeEvent, useState , useEffect, useRef , useLayoutEffect} from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import C06_CommandLine from './C06_CommandLine/index';
import C04_ImageEditor from './C04_ImageEditor/index';
import TS_Row from './T01_Row/An_Index';
import TS_Threshold from './T03_Threshold/An_Index';
import { U03_Sort } from './T03_Threshold/U03_Sort';
// CSS
import './index02_Canvas.css'

interface IN_02_Canvas{
SS_IsActivate:boolean[]
SS_IsShow:boolean
SS_nDMatrix   :number[][]
SS_nDTable    :string[][]
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
setSS_Image:(S:string | null)=>void
setSS_IsShow:(S:boolean)=>void
setSS_AffineBOOL:(S:boolean[][])=>void
setSS_AffineRGB :(S:string[][])=>void
setSS_AffineSTR :(S:string[][][])=>void
setSS_Affine    :(S:number[][][])=>void
setSS_nDTable :(S:string[][])=>void
setSS_nDMatrix:(S:number[][])=>void
setSS_IsActivate:(S:boolean[])=>void
setSS_Zoom      :(S:number)=>void
setSS_WidthImage:(S:number)=>void
setSS_IsRGB     :(S:boolean)=>void
setSS_ImageFile :(S:File|null)=>void
setSS_UseEffect :(S:boolean)=>void
setSS_OpenPanel:(S:0|1|2)=>void;
setSS_Thresholds:(S:TS_Threshold[])=>void
}

export const Index02_Canvas: React.FC<IN_02_Canvas> = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_IsActivate     ,
SS_IsShow         ,
setSS_IsShow      ,
setSS_IsActivate  ,
SS_nDMatrix       ,  
setSS_nDMatrix    ,
SS_nDTable        ,
setSS_nDTable     ,
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
}
:{
SS_IsActivate:boolean[]
SS_IsShow:boolean
SS_nDMatrix   :number[][]
SS_nDTable    :string[][]
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
setSS_Image:(S:string | null)=>void
setSS_IsShow:(S:boolean)=>void
setSS_AffineBOOL:(S:boolean[][])=>void
setSS_AffineRGB :(S:string[][])=>void
setSS_AffineSTR :(S:string[][][])=>void
setSS_Affine    :(S:number[][][])=>void
setSS_nDTable :(S:string[][])=>void
setSS_nDMatrix:(S:number[][])=>void
setSS_IsActivate:(S:boolean[])=>void
setSS_Zoom      :(S:number)=>void
setSS_WidthImage:(S:number)=>void
setSS_IsRGB     :(S:boolean)=>void
setSS_ImageFile :(S:File|null)=>void
setSS_UseEffect :(S:boolean)=>void
setSS_OpenPanel:(S:0|1|2)=>void;
setSS_Thresholds:(S:TS_Threshold[])=>void
}) => {
  
//****************************************************************************
// HOOK
//****************************************************************************
  const let_fetchImage = async () => {
    // https://stackoverflow.com/questions/72023176/how-to-send-post-request-from-react-to-flask-without-submit-button
    // https://stackoverflow.com/questions/73678855/fetch-and-display-image-from-api-react
        if (SS_ImageFile && SS_UseEffect===true) {
          let ss_Thresholds=[...SS_Thresholds]
          let let_UpdateThresholds=U03_Sort(ss_Thresholds)
          setSS_Thresholds(let_UpdateThresholds)
          //alert(SS_AffineRGB)
          //alert(SS_Affine)
          const formData = new FormData();
          formData.append('file', SS_ImageFile);
          formData.append('SS_IsActivate',SS_IsActivate.toString())
          formData.append('SS_IsRGB', SS_IsRGB.toString())
          formData.append('SS_Affine',SS_Affine.toString())
          formData.append('SS_AffineRGB',SS_AffineRGB.toString())
          formData.append('SS_AffineBOOL',SS_AffineBOOL.toString())
          formData.append('SS_nDMatrix',SS_nDMatrix.toString())
          formData.append('SS_Thresholds',JSON.stringify(SS_Thresholds).toString())
          formData.append('SS_IsShow',SS_IsShow.toString())
          // https://stackoverflow.com/questions/41431322/how-to-convert-formdata-html5-object-to-json
          //let let_ImageJson = JSON.stringify(Object.fromEntries(formData));
          fetch('/def_OpenCV', {
              method: 'POST',
              //body:formData,
              body: formData// JSON.stringify({IsRGB:SS_IsRGB.toString(),file:let_ImageJson}),
              //headers: { "content-type": "application/json" }
          })
          .then((response) => {
            //return response.json();
            return response.blob();
            //alert(JSON.stringify(response))
          })
          .then((data) => {
              //alert(JSON.stringify(data));
              // Change Image
              const imageURL = URL.createObjectURL(data);
              setSS_Image(imageURL);
          })
          setSS_UseEffect(false)
       }
  };

  const Ref_C04 = useRef<HTMLDivElement | null>(null);
  let let_RightToolW=100
  useEffect(() => {
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

  }, [SS_Image,SS_ImageFile,SS_IsRGB,SS_IsShow,SS_IsActivate,SS_AffineBOOL]);


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

  let let_undo='<='
  let let_cando='=>'
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
    let JSX_OpenC01=<td><button className='I02id_Header' onClick={f_OpenC01}>+</button></td>
    if(SS_OpenPanel===2){
        JSX_OpenC01=<td><button className='I02id_Header' onClick={f_CloseC04}>X</button></td>
    }
    else if(SS_OpenPanel===0){
        JSX_OpenC01=<td><button className='I02id_Header' onClick={f_OpenC01}>+</button></td>
    }
//****************************************************************************
// OUTPUT
//****************************************************************************
  return (
    <div id='I02id_Canvas' ref={Ref_C04}>
      
    <div id='I02id_DivHeader' style={{paddingTop:'3px',paddingBottom:'3px'}}>
        {JSX_OpenC01}
        
        <td><button className='I02id_Header'>{let_undo}</button></td>
        <td><button className='I02id_Header'>{let_cando}</button></td>
        <td><button className='I02id_Header' style={{whiteSpace:'nowrap'}}>Export Image</button></td>
        <td>
        <input type="file" accept="image/*" className='I02id_Header' onChange={f_ImageChange} />
        </td>
        {//<td><button className='I02id_Header' >Export Image</button></td>
        }
    </div>
<C06_CommandLine/>
    
<div id='I02id_Body' 
style={{width:(SS_WidthImage).toString()+'px'}}
>

  <div className='I02id_Image' 
    style={{
      width:`calc(100% - ${let_RightToolW}px)`,
      height:`calc(100vh - ${143+20}px)`,
      overflowX:'hidden',
      overflowY:'hidden',
    }}
  >
  <div style={{
      marginTop:`calc( ${(1/SS_Zoom)}*100vh - ${(1/SS_Zoom)*(143+20)}px - ${(1/SS_Zoom)} * 100vh + ${(1/SS_Zoom)*(143+40)}px -10 )`,
      height:`calc(100vh - ${143+20}px)`,
      backgroundColor:'greenyellow',
      overflowY:'scroll',
      overflowX:'scroll'
    }}>
      
  {
    SS_Image && <img 
    src={SS_Image} 
    id="I02id_Midjourney"
    alt="Uploaded" 
    style={{
      height:`calc( ${SS_Zoom} * 100%)`
  }}
  />
  }
  </div>
  </div>


<C04_ImageEditor
setSS_IsShow={setSS_IsShow}
SS_IsActivate={SS_IsActivate}
setSS_IsActivate={setSS_IsActivate}
SS_nDMatrix   ={SS_nDMatrix   }
setSS_nDMatrix={setSS_nDMatrix}
SS_nDTable    ={SS_nDTable    }
setSS_nDTable ={setSS_nDTable }
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
/>
  </div>
    
    </div>
  );
};