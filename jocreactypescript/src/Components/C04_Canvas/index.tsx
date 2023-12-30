// React
import React, { ChangeEvent, useState , useEffect, useRef , useLayoutEffect} from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_Row from '../T01_Row/An_Index';
import U_CommandLine from './Coms/U_CommandLine';
import U_Toolbar from './Coms/U_Toolbar';
import TS_Threshold from '../T03_Threshold/An_Index';
import { U03_Sort } from '../T03_Threshold/U03_Sort';
// CSS
import './index00.css'
import './index01.css'

interface IN_C04{
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
SS_Image:string | null
setSS_Image:(S:string | null)=>void
SS_Zoom      :number
SS_WidthImage:number
SS_IsRGB     :boolean
SS_ImageFile :File|null
SS_UseEffect :boolean
setSS_Zoom      :(S:number)=>void
setSS_WidthImage:(S:number)=>void
setSS_IsRGB     :(S:boolean)=>void
setSS_ImageFile :(S:File|null)=>void
setSS_UseEffect :(S:boolean)=>void
SS_OpenPanel:0|1|2;
setSS_OpenPanel:(S:0|1|2)=>void;
setSS_C02:(S:boolean)=>void
SS_Thresholds:TS_Threshold[];
setSS_Thresholds:(S:TS_Threshold[])=>void
}

const C04_Canvas: React.FC<IN_C04> = (
//****************************************************************************
// INPUT
//****************************************************************************
{
  SS_nDMatrix ,  
setSS_nDMatrix,
SS_nDTable    ,
setSS_nDTable ,
SS_Affine ,  
setSS_Affine,
SS_AffineSTR    ,
setSS_AffineSTR ,
SS_AffineRGB,
setSS_AffineRGB,
SS_AffineBOOL,
setSS_AffineBOOL,
SS_Image,
setSS_Image,
SS_Zoom      ,
SS_WidthImage,
SS_IsRGB     ,
SS_ImageFile,
SS_UseEffect,
setSS_Zoom      ,
setSS_WidthImage,
setSS_IsRGB     ,
setSS_ImageFile ,
setSS_UseEffect ,
SS_OpenPanel,
setSS_OpenPanel,
SS_Thresholds,
setSS_Thresholds,
}
:{
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
SS_Image:string | null
setSS_Image:(S:string | null)=>void
SS_Zoom      :number
SS_WidthImage:number
SS_IsRGB     :boolean
SS_ImageFile :File|null
SS_UseEffect :boolean
setSS_Zoom      :(S:number)=>void
setSS_WidthImage:(S:number)=>void
setSS_IsRGB     :(S:boolean)=>void
setSS_ImageFile :(S:File|null)=>void
setSS_UseEffect :(S:boolean)=>void
SS_OpenPanel:0|1|2,
setSS_OpenPanel:(S:0|1|2)=>void
SS_Thresholds:TS_Threshold[];
setSS_Thresholds:(S:TS_Threshold[])=>void
}) => {
  
//****************************************************************************
// HOOK
//****************************************************************************
  const let_fetchImage = async () => {
    // https://stackoverflow.com/questions/72023176/how-to-send-post-request-from-react-to-flask-without-submit-button
    // https://stackoverflow.com/questions/73678855/fetch-and-display-image-from-api-react
        if (SS_ImageFile && SS_UseEffect===true) {
          
          //formData.append('IsRGB', SS_IsRGB);

          //fetch('/def_OpenCV')
          //.then(())

          /*
          // Print Hello World
          // https://www.geeksforgeeks.org/how-to-connect-reactjs-with-flask-api/
          fetch('/def_OpenCV')
          .then((res)=>
          res.json().then((data)=>alert(JSON.stringify(data)))
          )
          */

          /* Basic Post Request
          // https://stackoverflow.com/questions/72023176/how-to-send-post-request-from-react-to-flask-without-submit-button
          fetch("/Square", {
            method: "POST",
            body: JSON.stringify({IsRGB:SS_IsRGB.toString()}),
            headers: { "content-type": "application/json" },
          })
            .then((res) => {
              if (!res.ok) return Promise.reject(res);
              return res.json();
            })
            .then((data) => {
              alert(JSON.stringify(data))
              // do something with data ¯\_(ツ)_/¯
            })
            .catch(console.error);*/
          let ss_Thresholds=[...SS_Thresholds]
          let let_UpdateThresholds=U03_Sort(ss_Thresholds)
          setSS_Thresholds(let_UpdateThresholds)
          const formData = new FormData();
          formData.append('file', SS_ImageFile);
          formData.append('IsRGB', SS_IsRGB.toString())
          formData.append('SS_Affine',SS_Affine.toString())
          formData.append('SS_AffineRGB',SS_AffineRGB.toString())
          formData.append('SS_AffineBOOL',SS_AffineBOOL.toString())
          formData.append('Convolution',SS_nDMatrix.toString())
          formData.append('Thresholds',JSON.stringify(SS_Thresholds).toString())
          // https://stackoverflow.com/questions/41431322/how-to-convert-formdata-html5-object-to-json
          let let_ImageJson = JSON.stringify(Object.fromEntries(formData));
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
          /*
          .catch((error) => {
              console.error('Error uploading file:', error);
          });*/
          
         /*
          let canvas = document.getElementById("C04id_Midjourney");
          let image_file = canvas.toDataURL()
          let body = {
            "content": image_file,
          }

          fetch('/def_OpenCV', {
            body: JSON.stringify(body),
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          }).then(response => {
            console.log(response);
          }).catch(exception => {
            // fetch API problem: in case of CORS the server must send header "Access-Control-Allow-Origin":"*"
            console.log(exception);
          });*/

          setSS_UseEffect(false)

       }
  };

  const Ref_C04 = useRef<HTMLDivElement | null>(null);
  let let_RightToolW=100
  useEffect(() => {
//****************************************************************************
      let_fetchImage()
//****************************************************************************
      const let_CurrentWidthC04 = Ref_C04.current;
      let let_WidthC04=(document.getElementById('C04id_Canvas')as HTMLElement)

      if (let_CurrentWidthC04) {
      const let_ObsImageWidth = new ResizeObserver(() => { 
        setSS_WidthImage(let_WidthC04!.offsetWidth-1)
      })

      let_ObsImageWidth.observe(let_CurrentWidthC04);
      return () => {
          let_ObsImageWidth.disconnect();
      };
      }

      
  }, [SS_Image,SS_ImageFile,SS_IsRGB]);


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
        /*
        const formData = new FormData();
        formData.append('file', file);

        fetch('/def_OpenCV', {
            method: 'POST',
            body: formData,
        })
        .then((response) => {
            return response.blob();
        })
        .then((data) => {
            const imageURL = URL.createObjectURL(data);
            setSS_Image(imageURL);
        })
        .catch((error) => {
            console.error('Error uploading file:', error);
        });*/
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
    let JSX_OpenC01=<td><button className='C04id_Header' onClick={f_OpenC01}>+</button></td>
    if(SS_OpenPanel===2){
        JSX_OpenC01=<td><button className='C04id_Header' onClick={f_CloseC04}>X</button></td>
    }
    else if(SS_OpenPanel===0){
        JSX_OpenC01=<td><button className='C04id_Header' onClick={f_OpenC01}>+</button></td>
    }
//****************************************************************************
// OUTPUT
//****************************************************************************
  return (
    <div id='C04id_Canvas' ref={Ref_C04}>
      
    <div id='C04id_DivHeader' style={{paddingTop:'3px',paddingBottom:'3px'}}>
        {JSX_OpenC01}
        
        <td><button className='C04id_Header'>{let_undo}</button></td>
        <td><button className='C04id_Header'>{let_cando}</button></td>
        <td><button className='C04id_Header' style={{whiteSpace:'nowrap'}}>Export Image</button></td>
        <td>
        <input type="file" accept="image/*" className='C04id_Header' onChange={f_ImageChange} />
        </td>
        {//<td><button className='C04id_Header' >Export Image</button></td>
        }
    </div>
<U_CommandLine/>
    

<div id='C04id_Body' 
style={{width:(SS_WidthImage).toString()+'px'}}
>

  <div className='C04id_Image' 
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
    id="C04id_Midjourney"
    alt="Uploaded" 
    style={{
      height:`calc( ${SS_Zoom} * 100%)`
  }}
  />
  }
  </div>
  </div>


<U_Toolbar
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

export default C04_Canvas;