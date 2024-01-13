import { useState , useEffect } from 'react';
import TS_Threshold from '../../T03_Threshold/An_Index'
import {C03_Create} from '../../T03_Threshold/C03_Create'
import {D03_Delete} from '../../T03_Threshold/D03_Delete'
import {U03_Position} from '../../T03_Threshold/U03_Position';
import { U03_SetIsDefault } from '../../T03_Threshold/U03_SetIsDefault';
import {U03_Sort} from '../../T03_Threshold/U03_Sort'
import { U03_SetColor } from '../../T03_Threshold/U03_SetColor';
import './CSS_Utility.css'

//import {U03_Click} from '../../../T03_Threshold/U03_Click'
//import {U03_ThisThreshold} from '../../../T03_Threshold/U03_ThisThreshold'

/*
To Do Now
1. Fix SS_SuperActivate
2. Create boundary for JSX_Threshold
3. gray
4. 0-255 indicator
5. Post Request
*/


const U_Threshold = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_IsActivate,
setSS_IsActivate,
SS_Thresholds,
setSS_Thresholds
}
:{
SS_IsActivate:boolean[]
setSS_IsActivate:(S:boolean[])=>void
SS_Thresholds:TS_Threshold[]
setSS_Thresholds:(S:TS_Threshold[])=>void
})=>{
//****************************************************************************
// HOOK
//****************************************************************************
  const let_DefaultThreshold:TS_Threshold={Key:0,PositionY:0,ScalePosition:0,IsDefault:false,Gray:'#000000'}
  const [SS_ThisThreshold,setSS_ThisThreshold]=useState<TS_Threshold>(let_DefaultThreshold)


 // SS_Delta = P01id_Right.width - P01id_Resize.width
 // SS_DeltaMemory == false : Forget SS_Delta
 // SS_DeltaMemory == true  : Remember SS_Delta
 // We do this because we do not want to update SS_Delta during mouse moving event.
 const [SS_DeltaMemory,setSS_DeltaMemory]=useState<boolean>(false)
 // SS_InnerDown = Is Mouse Click down in let_Resize
 // SS_OuterDown = Is Mouse Click down in this components
 // SS_InnerMemory = Is Mouse Click start at let_Resize
 //const [SS_InnerDown,   setSS_InnerDown] = useState<boolean>(false);
 //const [SS_OuterDown,   setSS_OuterDown] = useState<boolean>(false);
 const [SS_MouseActivate,setSS_MouseActivate]=useState<boolean>(false)
 const [SS_SuperActivate,setSS_SuperActivate]=useState<boolean>(false)

 const [SS_MaxHeight,setSS_MaxHeight]=useState<number>(0)
//****************************************************************************
// USEEFFECT
//****************************************************************************
 useEffect(()=>{


//****************************************************************************

   let let_Mouse=0
   let let_Delta=0
   let let_MaxY=document.getElementById('C05id_Gradient')?.offsetHeight
   setSS_MaxHeight(let_MaxY?let_MaxY:0)
   
   const f_MouseMove = (event: MouseEvent) => {
    let let_MousePosition = 0
    let_MousePosition = event.clientY;
    let ss_ThisThreshold=SS_ThisThreshold
    let ss_Thresholds=[...SS_Thresholds]
    let let_UpdateThresholds = ss_Thresholds
    if(let_MaxY){
    if(let_Delta+let_MousePosition-let_Mouse>10 &&let_Delta+let_MousePosition-let_Mouse<let_MaxY){
    let let_InputGrayScale=Math.round(255*(255*((SS_MaxHeight) - ss_ThisThreshold.PositionY)/(SS_MaxHeight))/250)
    let_UpdateThresholds = U03_Position(
      ss_ThisThreshold, 
      ss_Thresholds, 
      let_Delta+let_MousePosition-let_Mouse,
      let_InputGrayScale
      );
      // If the user move mouse too fast, SS_MousePosition will not be updated.
      // How can I fix this issue?
    }}
    setSS_Thresholds(let_UpdateThresholds)/**/
   };


//****************************************************************************
   if(SS_SuperActivate===false){setSS_MouseActivate(false)}

   if(SS_MouseActivate===true){
     document.onmousedown = (event) => {
       let let_MousePosition = 0
       let_MousePosition = event.clientY;
       if(SS_ThisThreshold.Key!==0){
         let_Mouse=let_MousePosition
       }
     }

     if(SS_DeltaMemory===false){
       setSS_DeltaMemory(true)
       let_Delta=SS_ThisThreshold.PositionY-let_Mouse
     }

     let let_Target=document.getElementById('C05id_B'+SS_ThisThreshold.Key.toString())
     let let_div=document.getElementById('C05id_ThresholdBody')
     if(SS_MouseActivate===true){
       let_Target?.addEventListener('mousemove',f_MouseMove)
       let_div?.addEventListener('mousemove',   f_MouseMove)
     }

     return ()=>{
       setSS_DeltaMemory(false)
       setSS_MouseActivate(false)
       setSS_MouseActivate(false)
       let_Target?.removeEventListener('mousemove',f_MouseMove)
       let_div?.removeEventListener('mousemove',f_MouseMove)
     }
 }
  
 },[SS_ThisThreshold,SS_MouseActivate])

let let_Status='Error'
  if(SS_IsActivate[1]===true){
    let_Status='(Active)'
  }
  else{
    let_Status='(Inactive)'
  }




//****************************************************************************
// FUNCTION_04: On Mouse Down
//****************************************************************************
   function f_OnMouseDown(ThisThreshold:TS_Threshold){
     setSS_ThisThreshold(ThisThreshold)
     setSS_MouseActivate(true)
     setSS_SuperActivate(true)
   }


   function f_OnMouseUp(){
     setSS_ThisThreshold(let_DefaultThreshold)
     setSS_MouseActivate(false)
     setSS_SuperActivate(false)
     f_UpdateThresholds()
   }


   function f_OnMouseLeave(){
     if(SS_SuperActivate===false){
     setSS_ThisThreshold(let_DefaultThreshold)
     setSS_MouseActivate(false)
     f_UpdateThresholds()
     }
   }


//****************************************************************************
// FUNCTION_05: Create Threshold
//****************************************************************************
   function f_CreateThreshold(){
     let ss_Thresholds = [...SS_Thresholds]
     let let_UpdateThresholds = C03_Create(ss_Thresholds)
     setSS_Thresholds(let_UpdateThresholds)
   }


//****************************************************************************
// FUNCTION_06: Deactive
//****************************************************************************
   function f_Deactivate(){
     setSS_MouseActivate(false)
     setSS_SuperActivate(false)
     setSS_ThisThreshold(let_DefaultThreshold)
     f_UpdateThresholds()
   }

   function f_UpdateThresholds(){
    let ss_Thresholds=[...SS_Thresholds]
    let let_UpdateThresholds=U03_Sort(ss_Thresholds)
    setSS_Thresholds(let_UpdateThresholds)
   }
//****************************************************************************
// JSX_00: Threshold
//****************************************************************************
 const let_Width='100%'
 function JSX_Threshold(Threshold:TS_Threshold){
  
    //let let_DefaultColor='#000000'
    let let_InputGrayScale=Math.round(255*(255*((SS_MaxHeight) - Threshold.PositionY)/(SS_MaxHeight))/250)
    if(let_InputGrayScale>255){
      let_InputGrayScale=255
    }
    let let_InputGrayHex=let_InputGrayScale.toString(16)
    let_InputGrayHex=let_InputGrayHex+let_InputGrayHex+let_InputGrayHex
    function f_DeleteThreshold(ThisThreshold:TS_Threshold){
      let ss_Thresholds = [...SS_Thresholds]
      let let_UpdateThresholds = D03_Delete(ThisThreshold,ss_Thresholds)
      setSS_Thresholds(let_UpdateThresholds)
    }

    function f_setIsDefault(){
      let ss_Thresholds=[...SS_Thresholds]
      let let_UpdateThresholds =U03_SetIsDefault(Threshold,ss_Thresholds)
      setSS_Thresholds(let_UpdateThresholds)
    }

    function f_setColor(){
      //alert(JSON.stringify(SS_Thresholds))
      let let_target=(document.getElementById('C05id_Color'+Threshold.Key.toString())as HTMLInputElement)
      let let_input=let_target?.value
      let_input=let_input[0]+let_input[1]+let_input[2]+let_input[1]+let_input[2]+let_input[1]+let_input[2]

      let let_Show=(document.getElementById('C05id_Show'+Threshold.Key.toString())as HTMLInputElement)
      let_Show!.style.backgroundColor=let_input

      let ss_Thresholds=[...SS_Thresholds]
      let let_UpdateThresholds=U03_SetColor(Threshold,ss_Thresholds,let_input)
      setSS_Thresholds(let_UpdateThresholds)
    }

    let let_Color='darkred'
    let let_IsShow='visible'
    if(Threshold.IsDefault===true){
     let_IsShow='visible'
    }
    else if(Threshold.IsDefault===false){
     let_IsShow='hidden'
    }
    if(Threshold.Key===SS_ThisThreshold.Key){let_Color='red'}
    return (
    <><div
      id={'C05id_Threshold'+Threshold.Key.toString()}
      style={{
        position:'absolute',
        marginLeft:'40px',
        backgroundColor:let_Color,marginTop:Threshold.PositionY.toString()+'px',width:'190px',height:'3px'}}>
      <div style={{display:'flex'}}>
        <h1 style={{fontSize:'13px',marginRight:'-20px',marginTop:'-10px',marginLeft:'-25px',width:'20px'}}>
          {
          //Threshold.Key
          }
          {let_InputGrayScale}
        </h1>
      <button style={{width:'25px',height:'25px',marginLeft:'115px',backgroundColor:'white'}}
      id={'C05id_B'+Threshold.Key.toString()}
        onMouseDown={()=>{f_OnMouseDown(Threshold)}}
        onMouseUp   ={()=>{f_OnMouseUp()}}
        onMouseLeave={()=>{f_OnMouseLeave()}}
    >.</button>
     {
       // Why is U03_SetIsDefault(Threshold,ss_Thresholds) works so slowly?
     }
      <button style={{width:'25px',height:'25px'}} onClick={f_setIsDefault}>/</button>
      <input  
          style={{width:'25px',height:'25px'}} 
          onChange={f_setColor} 
          type="color" 
          // only accept white, gray and black as the input
          value={Threshold.Gray}
          id={'C05id_Color'+Threshold.Key.toString()} 
          ></input>
      <button style={{width:'25px',height:'25px'}} onClick={()=>{f_DeleteThreshold(Threshold)}}>X</button>
      </div>
    </div>
    <div 
    id={'C05id_Show'+Threshold.Key.toString()}
    style={{
      //visibility: Threshold.IsDefault?'visible':'hidden',
      backgroundColor:Threshold.IsDefault?Threshold.Gray:'',
      backgroundImage:Threshold.IsDefault?'':`linear-gradient(to bottom, #${let_InputGrayHex} 0%, #000000 100%)`,
      //height:`calc(100vh - ${143+20+40}px)`,
      //opacity: "0.1",
      height:`calc(100vh - ${ (143+20-5+200+Threshold.PositionY)}px )`,
      width:'50px',
      position:'absolute',
      marginLeft:'83px',
      //mixBlendMode: Threshold.IsDefault?'normal':'overlay',
      marginTop:(Threshold.PositionY+3).toString()+'px'
      }}>

    </div>
    
    </>)}
  
  let ss_Thresholds=[...SS_Thresholds]
  const JSX_Thresholds=ss_Thresholds.map(Thresholds=>JSX_Threshold(Thresholds))
  
//****************************************************************************
// FUNCTION: Activate or Deactivate SS_Thresholds
//****************************************************************************
      function f_SetActivate(){
        let ss_IsActivate=[...SS_IsActivate]
        ss_IsActivate[1]=true
        setSS_IsActivate(ss_IsActivate)
      }

      function f_SetDeActivate(){
        let ss_IsActivate=[...SS_IsActivate]
        ss_IsActivate[1]=false
        setSS_IsActivate(ss_IsActivate)
      }


//****************************************************************************
// OUTPUT
//****************************************************************************
return(
<div
onMouseUp={()=>{f_Deactivate()}}
onMouseLeave={()=>{f_Deactivate()}}
id='C05id_ThresholdBody'
 style={{height:`calc( 100% + 100px )`,marginTop:'-100px',width:let_Width,backgroundColor:'lightblue'}}>
  <h1 className='C05id_Zoom' style={{marginTop:'10px',fontSize:'14px'}}>Gray Threshold {let_Status}</h1>
  <div style={{display:'flex',marginTop:'10px'}}>
   <button style={{marginTop:'10px',marginLeft:'10px',backgroundColor:SS_IsActivate[1]? 'lightgreen':'white'}} onClick={f_SetActivate}>Activate</button>
   <button style={{marginTop:'10px',marginLeft:'10px',backgroundColor:SS_IsActivate[1]? 'white':'lightgreen'}} onClick={f_SetDeActivate}>Deactivate</button>
 </div>
 <hr/>
 <div style={{display:'flex'}}>
   <h1 className='C05id_Zoom' style={{display:'flex',marginLeft:'20px',marginTop:'10px'}}>255</h1>
   <button style={{marginTop:'0px',marginRight:'15px'}}
   onClick={f_CreateThreshold}>Add Threshold</button>
 </div>
 <div
 style={{
 display:'flex'
 }}
 >
{// Original Gray Scale Indicator 
}
   <div
   id='C05id_Gradient'
   style={{
   backgroundImage: 'linear-gradient(white, black)',
   marginTop:'10px',
   marginLeft:'40px',
   width:'40px',
   height:`calc(100vh - ${ (143+20+200)}px )`
   }}>
   </div>
   <div
   style={{
   backgroundColor:'green',
   marginTop:'10px',
   width:'3px',
   height:`calc(100vh - ${ (143+20+200)}px )`
   }}>
   </div>
   <div
   style={{
   backgroundImage: 'linear-gradient(white, black)',
   //visibility:'hidden',
   marginTop:'10px',
   marginLeft:'0px',
   width:'50px',
   height:`calc(100vh - ${ (143+20+200)}px )`
   }}>
   </div>

{// Gray Scale Setting
}


   {JSX_Thresholds  }
 </div> 
 <h1 className='C05id_Zoom' style={{marginTop:'10px',display:'flex',marginLeft:'40px'}}>0</h1>
</div>
 )
}


export default U_Threshold
