// React
import React, { ChangeEvent, useState , useEffect, useRef , useLayoutEffect} from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_Row from '../T01_Row/An_Index';
import U_CommandLine from './Coms/U_CommandLine';
import U_Toolbar from './Coms/U_Toolbar';

// CSS
import './index00.css'
import './index01.css'

interface IN_C04{
SS_OpenPanel:0|1|2;
setSS_OpenPanel:(S:0|1|2)=>void;
setSS_C02:(S:boolean)=>void
}

const C04_Canvas: React.FC<IN_C04> = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_OpenPanel,
setSS_OpenPanel,
}
:{
SS_OpenPanel:0|1|2,
setSS_OpenPanel:(S:0|1|2)=>void
}) => {
  
//****************************************************************************
// HOOK
//****************************************************************************
  const [SS_Image, setSS_Image] = useState<string | null>(null);
  const [SS_Zoom,setSS_Zoom] = useState<number>(1)
  const [SS_WidthImage, setSS_WidthImage] = useState<number>(0);
  const [SS_IsRGB,setSS_IsRGB]=useState<boolean>(true)
  const [SS_ImageFile,setSS_ImageFile]=useState<null|File>(null)
  const [SS_UseEffect,setSS_UseEffect]=useState<boolean>(true)
  const let_fetchImage = async () => {
    // https://stackoverflow.com/questions/73678855/fetch-and-display-image-from-api-react
        if (SS_ImageFile && SS_UseEffect===true) {
          const formData = new FormData();
          formData.append('file', SS_ImageFile);
          fetch('/def_OpenCV&'+SS_IsRGB.toString(), {
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
          });
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
    alt="Uploaded" 
    style={{
      height:`calc( ${SS_Zoom} * 100%)`
  }}
  />
  }
  </div>
  </div>


<U_Toolbar
SS_Zoom={SS_Zoom}
setSS_Zoom={setSS_Zoom}
setSS_IsRGB={setSS_IsRGB}
TotalWidth={let_RightToolW}
setSS_UseEffect={setSS_UseEffect}
SS_OpenPanel={SS_OpenPanel}
/>
  </div>
    
    </div>
  );
};

export default C04_Canvas;