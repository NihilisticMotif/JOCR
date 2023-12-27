import { useState , useEffect } from 'react';
import TS_Threshold from '../../../T03_Threshold/An_Index'
import {C03_Create} from '../../../T03_Threshold/C03_Create'
import {D03_Delete} from '../../../T03_Threshold/D03_Delete'
import {U03_Position} from '../../../T03_Threshold/U03_Position';
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

const U2_Threshold = (
//****************************************************************************
// INPUT
//****************************************************************************
{

}
:{

})=>{
//****************************************************************************
// HOOK
//****************************************************************************
  const [SS_Thresholds,setSS_Thresholds]=useState<TS_Threshold[]>([
    {Key:112,PositionY:300,IsDefault:false,Gray:112},
    {Key:121,PositionY:121,IsDefault:false,Gray:121},
    {Key:211,PositionY:211,IsDefault:false,Gray:211},
  ])
  const [SS_ThisThreshold,setSS_ThisThreshold]=useState<TS_Threshold>({Key:0,PositionY:0,IsDefault:false,Gray:0})

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

//****************************************************************************
// USEEFFECT
//****************************************************************************
  useEffect(()=>{
    let let_Mouse=0
    let let_Delta=0
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

    const f_MouseMove = (event: MouseEvent) => {
      let let_MousePosition = 0
      let_MousePosition = event.clientY;

      let ss_ThisThreshold=SS_ThisThreshold
      let ss_Thresholds=[...SS_Thresholds]
      let let_UpdateThresholds = U03_Position(ss_ThisThreshold, ss_Thresholds, let_Delta+let_MousePosition-let_Mouse);
      setSS_Thresholds(let_UpdateThresholds)
    };

    let let_Target=(document.getElementById('C04id_B'+SS_ThisThreshold.Key.toString()))
    if(SS_MouseActivate===true){
      let_Target?.addEventListener('mousemove',f_MouseMove)
    }

    return ()=>{
      setSS_DeltaMemory(false)
      let_Target?.removeEventListener('mousemove',f_MouseMove)
    }
  }
    
  },[SS_ThisThreshold,SS_MouseActivate])



//****************************************************************************
// FUNCTION_04: On Mouse Down
//****************************************************************************
    function f_OnMouseDown(ThisThreshold:TS_Threshold){
      setSS_ThisThreshold(ThisThreshold)
      setSS_MouseActivate(true)
    }

    function f_OnMouseUp(){
      setSS_ThisThreshold({Key:0,PositionY:0,IsDefault:false,Gray:0})
      setSS_MouseActivate(false)
      setSS_SuperActivate(false)
    }

    function f_OnMouseLeave(){
      setSS_ThisThreshold({Key:0,PositionY:0,IsDefault:false,Gray:0})
      setSS_MouseActivate(false)
      setSS_SuperActivate(false)
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
// FUNCTION_06: Delete Threshold
//****************************************************************************
    function f_DeleteThreshold(ThisThreshold:TS_Threshold){
      let ss_Thresholds = [...SS_Thresholds]
      let let_UpdateThresholds = D03_Delete(ThisThreshold,ss_Thresholds)
      setSS_Thresholds(let_UpdateThresholds)
    }

//****************************************************************************
// JSX_00: Threshold
//****************************************************************************

  const let_Width='250px'
//****************************************************************************
  function JSX_Threshold(Threshold:TS_Threshold){
    let let_Color='darkred'
    if(Threshold.Key===SS_ThisThreshold.Key){let_Color='red'}
    return (<div 
      id={'C04id_Threshold'+Threshold.Key.toString()}
      style={{
        position:'absolute',
        marginLeft:'40px',
        backgroundColor:let_Color,marginTop:Threshold.PositionY.toString()+'px',width:'190px',height:'3px'}}>
      <div style={{display:'flex'}}>
        <h1 style={{fontSize:'13px',marginRight:'-20px',marginTop:'-10px',marginLeft:'-25px'}}>
          {Threshold.Key
          }
          {
          //Threshold.PositionY
          }
        </h1>
      <button style={{width:'25px',height:'25px',marginLeft:'115px',backgroundColor:'white'}} 
      id={'C04id_B'+Threshold.Key.toString()}
        onMouseDown={()=>{f_OnMouseDown(Threshold)}}
        onMouseUp   ={()=>{f_OnMouseUp()}}
        onMouseLeave={()=>{f_OnMouseLeave()}}
    >.</button>
      <button style={{width:'25px',height:'25px'}} >/</button>
      <input  style={{width:'25px',height:'25px'}} type="color" id="favcolor" name="favcolor" value="#ff0000"></input>
      <button style={{width:'25px',height:'25px'}} onClick={()=>{f_DeleteThreshold(Threshold)}}>X</button>
      </div>
    </div>)}
  const JSX_Thresholds=SS_Thresholds.map(Thresholds=>JSX_Threshold(Thresholds))

//****************************************************************************
// OUTPUT
//****************************************************************************
return(
<div 
onClick={()=>setSS_SuperActivate(true)}
onMouseLeave={()=>setSS_SuperActivate(false)}
onMouseUp={()=>setSS_SuperActivate(false)}

  style={{height:`calc(100vh - 40px - ${(143+20)}px )`,width:let_Width,backgroundColor:'lightblue',marginTop:'0px'}}>
  
  <div style={{display:'flex',marginTop:'10px'}}>
    <h1 className='C04id_Zoom' style={{marginTop:'10px'}}>Gray Threshold</h1>
    <button style={{marginTop:'10px',marginRight:'15px'}}>Ok</button>
    <button style={{marginTop:'10px',marginRight:'15px'}}>Reset</button>
  </div>
  <hr/>
  <div style={{display:'flex'}}>
    <h1 className='C04id_Zoom' style={{display:'flex',marginLeft:'20px',marginTop:'10px'}}>255</h1>
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
  <h1 className='C04id_Zoom' style={{marginTop:'10px',display:'flex',marginLeft:'40px'}}>0</h1>
</div>
  )
}

export default U2_Threshold