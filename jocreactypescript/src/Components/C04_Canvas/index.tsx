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
  const [SS_HelloPy,setSS_HelloPy]=useState<string>('')
  //const [SS_CropImage,setSS_CropImage]=useState<number[]>([
  //  100,  // W
  //  150,  // H
  //  100,  // X
  //  150,  // Y
  //])

  const Ref_C04 = useRef<HTMLDivElement | null>(null);
  let let_RightToolW=100
  // Dynamic CSS Setting for Image Width
  useEffect(() => {
      const let_CurrentWidthC04 = Ref_C04.current;
      let let_WidthC04=(document.getElementById('C04id_Canvas')as HTMLElement)
      
      //fetch("/cnn").then((res) =>
      //      res.json().then((data) => {
      //          setSS_HelloPy(data);
      //      })
      //  )
        
    try {
    fetch("/cnn")
        .then((res) => res.json())
        .then((data) => {
            //alert(JSON.stringify(data));
            setSS_HelloPy(data.py);
        });
} catch (error) {
    console.error("Error fetching data:", error);
}
    
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

  //let JSX_HelloPy=SS_HelloPy!.map(name=><h1>{name}</h1>)

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

    function f_ReverseRelu(x:number):number{
      if(x>1){
        return x
      }
      else{
        return 1
      }
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
<U_Editor/>
    

<div id='C04id_Body' 
style={{width:(SS_WidthImage).toString()+'px'}}
//style={SS_WidthImage>0 ? {width:SS_WidthImage.toString()+'px'} : {width:'100%'}}
>

  <div className='C04id_Image' 
    style={{
      width:`calc(100% - ${let_RightToolW}px)`,
      height:`calc(100vh - ${143+20}px)`,
      overflowX:'hidden'
    }}
  >
  <div style={{
      marginTop:`calc( ${0.5*f_ReverseRelu(SS_Zoom)}*100vh - ${0.5*(143+20)*f_ReverseRelu(SS_Zoom)}px - ${0.5*SS_Zoom} * 100vh + ${SS_Zoom*0.5*(143+40)}px )`,
      height:`calc(${SS_Zoom} * 100vh - ${SS_Zoom*(143+40)}px)`,
      backgroundColor:'greenyellow',
      overflowY:'hidden',
      overflowX:'scroll'
    }}>
      
  {/*
    SS_Image && <img 
    src={SS_Image} 
    alt="Uploaded" 
    style={{height:'100%'}
    
    //{
    //  // W
    //  width: `calc( ${SS_Zoom} * ${SS_CropImage[0]}%)`,
    //  // H
    //  height:`${SS_CropImage[1]}%`,
    //  // X
    //  objectPosition:`${SS_CropImage[2]}% 0%`,
    //  // Y
    //  marginTop:`calc( ${SS_Zoom} * 100 - ${SS_Zoom} * ${SS_CropImage[3]}% )`,
    //  // Utility
    //  objectFit: 'cover',
    //}
    
  }/>
  */}
  </div>
  </div>


<U_Toolbar
SS_Zoom={SS_Zoom}
setSS_Zoom={setSS_Zoom}
TotalWidth={let_RightToolW}
/>
  </div>
    
    </div>
  );
};

export default C04_Canvas;