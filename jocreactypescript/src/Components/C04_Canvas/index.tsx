// React
import React, { ChangeEvent, useState , useEffect, useRef } from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
import TS_Row from '../T01_Row/An_Index';

// CSS
import './index00.css'
import './index01.css'

interface IN_C04{
SS_OpenPanel:0|1|2;
setSS_OpenPanel:(S:0|1|2)=>void;
SS_IsNarrow:boolean;
setSS_IsNarrow:(S:boolean)=>void;
setSS_C02:(S:boolean)=>void
}

const C04_Canvas: React.FC<IN_C04> = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_OpenPanel,
setSS_OpenPanel,
SS_IsNarrow,
setSS_IsNarrow,
setSS_C02
}
:{
SS_OpenPanel:0|1|2,
setSS_OpenPanel:(S:0|1|2)=>void
SS_IsNarrow:boolean;
setSS_IsNarrow:(S:boolean)=>void;
setSS_C02:(S:boolean)=>void
}) => {

//****************************************************************************
// HOOK
//****************************************************************************
  const [SS_Image, setSS_Image] = useState<string | null>(null);
    
  const Ref_C04 = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
      const let_CurrentC04 = Ref_C04.current;
      if (let_CurrentC04) {
      const let_ResizeObs = new ResizeObserver(() => {
          let let_C04Width=(document.getElementById('C04id_Canvas')as HTMLElement)!.offsetWidth
          if(let_C04Width<500){
              setSS_IsNarrow(true)
              setSS_C02(false)
          }
          else{
              setSS_IsNarrow(false)
          }
      });
      let_ResizeObs.observe(let_CurrentC04);
      return () => {
          let_ResizeObs.disconnect();
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
    <div id='C04id_Canvas' style={{display: 'grid'}} ref={Ref_C04}>
    <div className='C04id_DivHeader'>
        {JSX_OpenC01}
        <td><button className='C04id_Header'>Export Image</button></td>
        <td>
        <input type="file" accept="image/*" className='C04id_Header' onChange={f_ImageChange} />
        </td>
        {//<td><button className='C04id_Header' >Export Image</button></td>
        }
    </div>
    <div className='C04id_Editor'>
      <h1>RGB2Black&White</h1>
      <h1>Crop</h1>
      <h1>Gray2Black</h1>
      <h1>Marker</h1>
      <h1>Convolution</h1>
    </div>

<div className='C04id_Body' 
style={SS_OpenPanel === 2 ? { width:'50%' } : {width:'100%'}}>

  <div className='C04id_Image' 
    style={{height:`calc(100vh - ${143+20}px)`}}
  >
  {
    SS_Image && <img src={SS_Image} alt="Uploaded" />
  }
  </div>

  <div className='C04id_RightToolbar'
    style={{height:`calc(100vh - ${143+20}px)`}}>
    <button>Hello</button>
    <h1>Hello There</h1>
  </div>
  </div>

    
    </div>
  );
};

export default C04_Canvas;