// React
import { useState , useEffect} from 'react';

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
// CSS
//import './U_AddBox.css'  // General

const U_AddBox = (
//****************************************************************************
// INPUT
//****************************************************************************
{   // PARAMETER
    // HOOK: setState()
    SS_Boxes,
    setSS_Boxes
}:
{   // TYPE
    // HOOK: setState()
SS_Boxes:TS_Box[]
setSS_Boxes:(S:TS_Box[])=>void
}
) => {
    const let_DefaultBox:TS_Box={Key:0,XYWH:[0,1,2,3,4],Type:['Rectangle','#000000'],IsShow:false}
    const [SS_ThisBox,setSS_ThisBox]=useState<TS_Box>(let_DefaultBox)
    const [SS_ThisBoxMode,setSS_ThisBoxMode]=useState<0|1|2>(0)
    const [SS_ThisBoxType,setSS_ThisBoxType]=useState<string>('Rectangle')
    const [SS_ThisBoxColor,setSS_ThisBoxColor]=useState<string>('#000000')
    const C02_MarginLeft='10px'
    const let_Width='100%'

    useEffect(()=>{
    let let_UpdateBoxes=U04_UpdateType(SS_ThisBox,ss_Boxes,SS_ThisBoxType)
    let_UpdateBoxes=U04_UpdateColor(SS_ThisBox,ss_Boxes,SS_ThisBoxColor)
    setSS_Boxes(let_UpdateBoxes)
    },[SS_ThisBox,SS_ThisBoxType])

//****************************************************************************
// FUNCTION 00: CREATE NEWBOX
//****************************************************************************

//****************************************************************************
// FUNCTION 01: EDIT BOX NUMBER
//****************************************************************************
    function f_UpdateNumber(key:number,index:number){
        let ss_Boxes=[...SS_Boxes]
        setSS_ThisBox(R04_SelectBox(key,ss_Boxes))
        let let_UpdateBoxes=ss_Boxes
        let let_Input:string=(document.getElementById('C05id_AddBoxNumber'+key.toString()+'_'+index.toString()) as HTMLInputElement).value.toString();
        if(isNaN(parseInt(let_Input))===false){
            let_UpdateBoxes=U04_UpdateNumber(SS_ThisBox,ss_Boxes,parseInt(let_Input),index)
        }else{
            let_UpdateBoxes=let_UpdateBoxes
        }
        setSS_Boxes(let_UpdateBoxes)
    }

//****************************************************************************
// FUNCTION 02: EDIT BOX TYPE
//****************************************************************************
    function f_UpdateType(key:number){
        let ss_Boxes=[...SS_Boxes]
        setSS_ThisBox(R04_SelectBox(key,ss_Boxes))
        let let_Input:string=(document.getElementById('C05id_AddBoxType'+key.toString()) as HTMLInputElement).value.toString();
        setSS_ThisBoxType(let_Input)
    }

//****************************************************************************
// FUNCTION 02: DELETE BOX
//****************************************************************************
    function f_OpenDeleteBox(key:number){
        setSS_ThisBoxMode(1)
        let ss_Boxes=[...SS_Boxes]
        setSS_ThisBox(R04_SelectBox(key,ss_Boxes))
    }
    function f_OpenDefaultBox(){
        setSS_ThisBoxMode(0)
        setSS_ThisBox(let_DefaultBox)
    }
    function f_Delete(key:number){
        let ss_Boxes=[...SS_Boxes]
        let let_UpdateBoxes=D04_Delete(R04_SelectBox(key,ss_Boxes),ss_Boxes)
        setSS_Boxes(let_UpdateBoxes)
    }

    function f_CreateBox(){
        let let_Input:string=(document.getElementById('C05id_CreatingNewBox') as HTMLInputElement).value.toString();
        let ss_Boxes=[...SS_Boxes]
        let let_UpdateBoxes=C04_Create(ss_Boxes,let_Input)
        setSS_Boxes(let_UpdateBoxes)
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
        function f_setColor(){
            let let_Input=(document.getElementById('C05id_AddBoxColor'+box.Key.toString())as HTMLInputElement).value.toString()
            let ss_Boxes=[...SS_Boxes]
            setSS_ThisBox(R04_SelectBox(box.Key,ss_Boxes))
            setSS_ThisBoxColor(let_Input)
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
        let JSX_NextedInput=let_InputName.map((name,index)=>
        {
        return (<div className='C02id_CreateRowButton' style={{width:'275px',marginTop:'5px',marginBottom:'-20px'}}>
<h1>{name}: {box.XYWH[index]}</h1>
<input id={'C05id_AddBoxNumber'+box.Key.toString()+'_'+index.toString()} style={{height:'20px',marginTop:'0px',width:'100px',marginLeft:'auto',marginRight:'10px'}}></input>
<button style={{height:'25px'}} onClick={()=>f_UpdateNumber(box.Key,index)}>Ok</button>
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
                <button onClick={()=>f_Delete(box.Key)}>Ok</button>
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
<button className='C02id_DeleteColumn' style={{height:'25px'}} onClick={()=>f_OpenDeleteBox(box.Key)}>X</button>
<input onChange={f_setColor}  type='color' 
id={'C05id_AddBoxColor'+box.Key.toString()} 
value={box.Type[1]}
style={{height:'25px',marginTop:'0px',marginLeft:'5px',marginRight:'10px'}}></input>

<select onChange={()=>f_UpdateType(box.Key)}
style={{fontSize:'15px',height:'25px'}} 
value={box.Type[0]} id={'C05id_AddBoxType'+box.Key.toString()}>
  <option value="Rectangle">Rectangle</option>
  <option value="Frame">Frame</option>
  <option value="Line">Line</option>
</select>
{
// onChange does not automately update value as expected.
}
<button style={{height:'25px',width:'50px',marginLeft:'10px'}} onClick={f_IsShow}>{let_IsShow}</button>
</div>
{JSX_NextedInput}
            </td>
            </tr>
        )}}
        else{return <></>}
    })

//****************************************************************************
// OUTPUT
//****************************************************************************
return(
<div id='C02id_Div' style={{marginTop:'auto',width:let_Width,height:'calc(100vh - 40px - 100px - 40px - 2px)'}}>
<div id='C02id_Header' style={{height:'75px'}}>
<h1 id='C02id_DivHeader'>Create New Object</h1>
<div className='C02id_CreateColumnDiv'>
<div style={{display:'inline-flex'}}>
{
    //<input id='C02id_CreateColumnInput' style={{height:'20px',marginLeft:'15px'}}></input>
}
<select style={{fontSize:'15px',marginLeft:'10px',marginTop:'-20px',marginBottom:'20px'}}
id='C05id_CreatingNewBox'
>
  <option value="Rectangle">Rectangle</option>
  <option value="Frame">Frame</option>
  <option value="Line">Line</option>
</select>
<button onClick={()=>f_CreateBox()} style={{marginLeft:'5px',marginTop:'-20px',marginBottom:'20px'}}>
Add New Object</button>
</div>
</div>

</div>
<h1 id='C02id_DivHeader' >Object List</h1>
<table style={{height:`calc(100vh - 255px - ${100+40}px )`
}}>
{JSX_Input}
</table>

<tr><td>
<div id='C02id_DivButton'>
<button onClick={()=>alert('f_CreateRow ')}>Ok</button>
<button onClick={()=>alert('f_ResetInput')}id='C02id_B2133' >Reset Input</button>
</div>
</td></tr>

</div>
    )
}

export default U_AddBox