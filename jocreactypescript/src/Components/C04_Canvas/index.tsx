// React
import React, { ChangeEvent, useState , useEffect, useRef , useLayoutEffect} from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_Row from '../T01_Row/An_Index';
import U_Editor from './Coms/U_Editor';
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
  const Ref_C04 = useRef<HTMLDivElement | null>(null);

  // Dynamic CSS Setting for Image Width
  useEffect(() => {
      const let_CurrentWidthC04 = Ref_C04.current;
      let let_WidthC04=(document.getElementById('C04id_Canvas')as HTMLElement)
      //'C04id_Image'
      if (let_CurrentWidthC04) {
      const let_ObsImageWidth = new ResizeObserver(() => { 
        setSS_WidthImage(let_WidthC04!.offsetWidth-1)
      })

      let_ObsImageWidth.observe(let_CurrentWidthC04);
      return () => {
          let_ObsImageWidth.disconnect();
      };
      }
  }, []);


//****************************************************************************
// Function 00: Import Image
//****************************************************************************
  const f_ImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    // by ChatGPT
    const file = event.target.files?.[0];

    if (file) {
      const let_ImageURL = URL.createObjectURL(file);
      setSS_Image(let_ImageURL);
    }
  };
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
        <td><button className='C04id_Header' style={{whiteSpace:'nowrap'}}>Export Image</button></td>
        <td>
        <input type="file" accept="image/*" className='C04id_Header' onChange={f_ImageChange} />
        </td>
        {//<td><button className='C04id_Header' >Export Image</button></td>
        }
    </div>
<U_Editor/>
    

<div id='C04id_Body' 
style={{width:(SS_WidthImage).toString()+'px'}}
//style={SS_WidthImage>0 ? {width:SS_WidthImage.toString()+'px'} : {width:'100%'}}
>

  <div className='C04id_Image' 
    style={{
      height:`calc(100vh - ${143+20}px)`,
    }}
  >
  {
    SS_Image && <img 
    src={SS_Image} 
    alt="Uploaded" 
    style={{
      //width:SS_Zoom.toString()+'px',
      height:`calc(${SS_Zoom} * 100vh - ${SS_Zoom*(143+40)}px)`,
    }}/>
  }
  </div>


<U_Toolbar
SS_Zoom={SS_Zoom}
setSS_Zoom={setSS_Zoom}
/>
  </div>
    
    </div>
  );
};

export default C04_Canvas;