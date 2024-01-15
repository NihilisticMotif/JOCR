// React
import { useState , useEffect, useLayoutEffect} from 'react';

// Components
//import R_FilterColumn from './Coms/R_FilterColumn';

// Type
/*
import TS_Row from  '../T01_Row/An_Index';
import TS_Column from  '../T02_Column/An_Index';
import {C01_Create} from  '../T01_Row/C01_Create';
import {C02_Create} from  '../T02_Column/C02_Create'
import {U02_Edit} from  '../T02_Column/U02_Edit'
import {D02_Delete} from  '../T02_Column/D02_Delete'
import {R02_ReturnIndex} from  '../T02_Column/R02_ReturnIndex'
import {U01_CreateColumn} from  '../T01_Row/U01_CreateColumn'
import {U01_DeleteColumn} from  '../T01_Row/U01_DeleteColumn'
*/
import { C04_Create } from '../../T04_Box/C04_Create';
import { D04_Delete } from '../../T04_Box/D04_Delete';
import { R04_SelectBox } from '../../T04_Box/R04_SelectBox';

import TS_Box from '../../T04_Box/An_Index';
import { U04_UpdateNumber } from '../../T04_Box/U04_UpdateNumber';
import { U04_UpdateIsShow } from '../../T04_Box/U04_UpdateIsShow';
import { U04_UpdateColor } from '../../T04_Box/U04_UpdateColor';
import { U04_UpdateType } from '../../T04_Box/U04_UpdateType';
import { U04_SetTypeCrop } from '../../T04_Box/U04_SetTypeCrop';
// CSS
//import './U_AddBox.css'  // General
import './index00.css'
import './index01.css'
import './index02_Header.css'
import './index03_Table.css'
import './index04_Minor.css'
import './index05_Hightlight.css'

const U_AddBox = (
//****************************************************************************
// INPUT
//****************************************************************************
{   // PARAMETER
    // HOOK: setState()
    SS_ImageDimensions,
    SS_Image,
    SS_Boxes,
    setSS_Boxes,
}:
{   // TYPE
    // HOOK: setState()
    SS_ImageDimensions:number[]|null
    SS_Image:string|null
SS_Boxes:TS_Box[]
setSS_Boxes:(S:TS_Box[])=>void
}
) => {
    const let_DefaultBox:TS_Box={Key:0,XYWH:[0,1,2,3,4],Type:['Rectangle','#000000'],IsShow:false}
    const [SS_ThisBox,setSS_ThisBox]=useState<TS_Box>(let_DefaultBox)
    const [SS_ThisBoxMode,setSS_ThisBoxMode]=useState<0|1|2>(0)
    const [SS_AddBoxColor,setSS_AddBoxColor]=useState<string>('#000000')
    const [SS_AddBoxType,setSS_AddBoxType]=useState<string>('Rectangle')
    const [SS_AddBoxXYWHvalue,setSS_AddBoxXYWHvalue]=useState<number>(0)
    const [SS_AddBoxXYWHindex,setSS_AddBoxXYWHindex]=useState<number>(0)
    const [SS_UpdateMode,setSS_UpdateMode]=useState<string>('None')
    const [SS_UseEffect,setSS_UseEffect]=useState<boolean>(false)
    const C02_MarginLeft='10px'
    const let_Width='100%'

    useLayoutEffect(()=>{
        // https://react.dev/reference/react/useLayoutEffect
        
        if(SS_UseEffect===true){
        let ss_Boxes=[...SS_Boxes]
        if(SS_UpdateMode==='None'  ){}
        if(SS_ThisBox!==let_DefaultBox){
        if(SS_UpdateMode==='Color'){
            let let_UpdateBoxes=U04_UpdateColor(SS_ThisBox,ss_Boxes,SS_AddBoxColor)
            setSS_Boxes(let_UpdateBoxes)
            setSS_AddBoxColor('#000000')
            setSS_ThisBox(let_DefaultBox)
        }
        if(SS_UpdateMode==='Type'){
            let let_UpdateBoxes=U04_UpdateType(SS_ThisBox,ss_Boxes,SS_AddBoxType)
            setSS_Boxes(let_UpdateBoxes)
            setSS_AddBoxType('Rectangle')
            setSS_ThisBox(let_DefaultBox)
        }
        if(SS_UpdateMode==='XYWH'){
            let let_UpdateBoxes=U04_UpdateNumber(
                SS_ThisBox,
                ss_Boxes,
                SS_AddBoxXYWHvalue,
                SS_AddBoxXYWHindex)
            //alert(SS_AddBoxXYWHvalue)    
            //alert(SS_AddBoxXYWHindex)
            setSS_Boxes(let_UpdateBoxes)
            setSS_AddBoxXYWHvalue(0)
            setSS_AddBoxXYWHindex(0)
            setSS_ThisBox(let_DefaultBox)
        }}
        
        if(SS_UpdateMode==='Delete'){
            let let_UpdateBoxes=D04_Delete(SS_ThisBox,ss_Boxes)
            setSS_Boxes(let_UpdateBoxes)
        }
        if(SS_UpdateMode==='Create'){
            let let_Input:string=(document.getElementById('C05id_CreatingNewBox') as HTMLInputElement).value.toString();
            let ss_Boxes=[...SS_Boxes]
            let let_UpdateBoxes=C04_Create(ss_Boxes,let_Input)
            setSS_Boxes(let_UpdateBoxes)
        }
        setSS_UseEffect(false)
    }
    },[
        SS_UseEffect
    ])

    function f_OpenDefaultBox(){
        setSS_ThisBoxMode(0)
        setSS_ThisBox(let_DefaultBox)
    }

    function f_CreateBox(){
        setSS_UpdateMode('Create')
        setSS_UseEffect(true)
    }

//****************************************************************************
// JSX_00: Input
//****************************************************************************
    let ss_Boxes=[...SS_Boxes]
    let JSX_Input=ss_Boxes.map((box)=>{
        function f_IsShow(){
            let ss_Boxes=[...SS_Boxes]
            let let_IsShow=true
            if(box.IsShow===true){
                let_IsShow=false
            }
            else{
                let_IsShow=true
            }
            let let_UpdateBoxes=U04_UpdateIsShow(R04_SelectBox(box.Key,ss_Boxes),ss_Boxes,let_IsShow)
            setSS_Boxes(let_UpdateBoxes)
        }
        
        function f_OpenDeleteBox(){
        setSS_ThisBoxMode(1)
        let ss_Boxes=[...SS_Boxes]
        setSS_UpdateMode('None')
        setSS_ThisBox(R04_SelectBox(box.Key,ss_Boxes))
        }

        function f_Update(Mode:string,index?:number){
            setSS_ThisBox(R04_SelectBox(box.Key,SS_Boxes))
            setSS_UpdateMode(Mode)
            if( Mode!=='None'){
            if(Mode==='Color')  {
                let let_input=(document.getElementById('C05id_AddBox'+Mode+box.Key.toString())as HTMLInputElement).value.toString()
                setSS_AddBoxColor(let_input)
            }
            if(Mode==='Type')   {
                let let_input=(document.getElementById('C05id_AddBox'+Mode+box.Key.toString())as HTMLInputElement).value.toString()
                setSS_AddBoxType(let_input)
            }
            if(Mode==='XYWH' && typeof index==='number')   {
                let let_input=(document.getElementById('C05id_AddBox'+'XYWH'+box.Key.toString()+'_'+index.toString())as HTMLInputElement).value.toString()
                if(isNaN(parseInt(let_input))===false){
                    
                    setSS_AddBoxXYWHvalue(parseInt(let_input))
                }
                else{
                    setSS_AddBoxXYWHvalue(SS_ThisBox.XYWH[index])
                }
                setSS_AddBoxXYWHindex(index)
            }
            setSS_UseEffect(true)}
        }
        // Update
        function f_Crop(){
            let ss_Boxes=[...SS_Boxes]
            let let_UpdateBoxes=U04_SetTypeCrop(R04_SelectBox(box.Key,ss_Boxes),ss_Boxes)
            setSS_Boxes(let_UpdateBoxes)
        }

        // Update
        function f_NoCrop(){
        let ss_Boxes=[...SS_Boxes]
        let let_Input:string='Frame'
        let let_UpdateBoxes=U04_UpdateType(R04_SelectBox(box.Key,ss_Boxes),ss_Boxes,let_Input)
        setSS_Boxes(let_UpdateBoxes)
        }

        let let_IsShow='Show'
        if(box.IsShow){
            let_IsShow='Show'
        }else{let_IsShow='Hide'}
        let let_InputName:string[]=[
            'Position X',
            'Position Y',
            'Width',
            'Height',
            'Line Width',
        ]
        if(box.Type[0]==='Line'){
            let_InputName=[
                'Point1 X',
                'Point1 Y',
                'Point2 X',
                'Point2 Y',
                'Line Width',
            ]
        }
        if(box.Type[0]==='LineX'){
            // Horizontal Line
            let_InputName=[
                'Y',
                'Line Width',
            ]
        }
        if(box.Type[0]==='LineY'){
            // Vertical Line
            let_InputName=[
                'X',
                'Line Width',
            ]
        }
        let JSX_Crop=<></>
        let let_CropColor='white'
        let let_NoCropColor='white'
        if(box.Type[0]==='Crop'){
            let_CropColor='lightgreen'
            let_NoCropColor='white'
        }else{
            let_CropColor='white'
            let_NoCropColor='lightgreen'
        }
        if(box.Type[0]==='Frame' || box.Type[0]==='Crop'){
            JSX_Crop=<div className='C02id_CreateRowButton' style={{width:'275px',marginTop:'5px',marginBottom:'-20px'}}>
<h1>Crop:</h1>
<button style={{height:'25px',width:'60px',marginLeft:'auto',backgroundColor:let_CropColor}} onClick={f_Crop}>Ok</button>
<button style={{height:'25px',width:'60px',marginLeft:'7px' ,backgroundColor:let_NoCropColor}} onClick={f_NoCrop}>Cancel</button>
</div>
        }
        else{
            JSX_Crop=<></>
        }
        let JSX_NextedInput=let_InputName.map((name,index)=>
        {
        return (<div className='C02id_CreateRowButton' style={{width:'275px',marginTop:'5px',marginBottom:'-20px'}}>
<h1>{name}: {box.XYWH[index]}</h1>
<input id={'C05id_AddBox'+'XYWH'+box.Key.toString()+'_'+index.toString()} style={{
    height:'20px',marginTop:'0px',width:'100px',marginLeft:'auto',marginRight:'10px'}}></input>
<button style={{height:'25px'}} onClick={()=>f_Update('XYWH',index)}>Ok</button>
</div>)}
)
        // Delete
        if(box.Key!==0){
        if(box===SS_ThisBox && SS_ThisBoxMode===1){
            return(
            <tr className='C02id_HeightLightRow' ><td>
            <div style={{marginLeft:C02_MarginLeft,marginBottom:'-10px'}}>
                <h1 style={{marginTop:'5px'}}>Do you sure you want to</h1>
                <h1 style={{marginTop:'-20px'}}>delete this {box.Type[0]}?</h1>
            </div>
            <div className='C02id_DeleteColumn' style={{marginTop:'-10px',marginLeft:C02_MarginLeft,marginRight:'auto',marginBottom:'10px'}}>
                <button onClick={()=>f_Update('Delete')}>Ok</button>
                <button onClick={()=>f_OpenDefaultBox()}>Cancel</button>
            </div>
            </td>
            </tr>
            )
        }
        // Default State
        else
        {return(
            <tr><td>
<div className='C02id_CreateRowButton' style={{width:'275px'}}>
<button className='C02id_DeleteColumn' style={{height:'25px'}} onClick={f_OpenDeleteBox}>X</button>
<input onChange={()=>f_Update('Color')}  type='color' 
id={'C05id_AddBox'+'Color'+box.Key.toString()} 
value={box.Type[1]}
style={{height:'25px',marginTop:'0px',marginLeft:'5px',marginRight:'10px'}}></input>

<select onChange={()=>f_Update('Type')}
style={{fontSize:'15px',height:'25px'}} 
value={box.Type[0]} id={'C05id_AddBox'+'Type'+box.Key.toString()}>
  <option value="Rectangle">Rectangle</option>
  <option value="Frame">Frame</option>
  <option value="Line">Line</option>
  <option value="LineX">Horizontal Line</option>
  <option value="LineY">Vertical Line</option>
  <option value="Crop" style={{display:'none'}}>Crop</option>
</select>
{
// onChange does not automately update value as expected.
}
<button style={{height:'25px',width:'50px',marginLeft:'10px'}} onClick={f_IsShow}>{let_IsShow}</button>
</div>
{JSX_NextedInput}
{JSX_Crop}
            </td>
            </tr>
        )}}
        else{return <></>}
    })

//****************************************************************************
// OUTPUT
//****************************************************************************
return(
<div id='C02id_Div' style={{marginTop:'auto',width:let_Width,height:'calc(100vh - 100px)'}}>
<div id='C02id_Header' style={{height:'75px'}}>
<h1 id='C02id_DivHeader'>Create New Object</h1>
<div className='C02id_CreateColumnDiv'>
<div style={{display:'inline-flex'}}>
{
    //<input id='C02id_CreateColumnInput' style={{height:'20px',marginLeft:'15px'}}></input>
}
<select style={{fontSize:'15px',marginLeft:'10px',marginTop:'-20px',marginBottom:'20px',width:let_Width}}
id='C05id_CreatingNewBox'
>
  <option value="Rectangle">Rectangle</option>
  <option value="Frame">Frame</option>
  <option value="Line">Line</option>
  <option value="LineX">Horizontal Line</option>
  <option value="LineY">Vertical Line</option>
</select>
<button onClick={()=>f_CreateBox()} style={{marginLeft:'5px',marginTop:'-20px',marginBottom:'20px',width:let_Width}}>
Add New Object</button>
</div>
</div>

</div>
<h1>
    Image Size: [{SS_ImageDimensions? SS_ImageDimensions[0]:''},{SS_ImageDimensions? SS_ImageDimensions[1]:''}]
    </h1>
<table style={{height:`calc(100vh - 255px - ${40-20}px )`,width:let_Width
}}>
{JSX_Input}
</table>

<tr><td>
</td></tr>

</div>
    )
}

export default U_AddBox