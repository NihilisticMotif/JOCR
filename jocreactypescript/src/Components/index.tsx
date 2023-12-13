// React
import { useState , useEffect} from 'react';

// Components
import C01_Table from "./C01_Table";
import C02_Input from "./C02_Input";
import C03_Header from './C03_Header';
import C04_Header from './C04_Header';
// Type
import TS_Row from '././T01_Row/An_Index';
import TS_Column from '././T02_Column/An_Index'
// CSS
import './index.css';

// https://stackoverflow.com/questions/6229197/how-to-know-if-two-arrays-have-the-same-values
const Components=()=>{
//****************************************************************************
// HOOK
//****************************************************************************
    const [SS_EditColumn,setSS_EditColumn]=useState<0|1>(0)
    const [SS_C02,setSS_C02]=useState<boolean>(true)
//****************************************************************************
// DEFAULT INPUT
//****************************************************************************
    
    const [SS_Columns, setSS_Columns]=useState<TS_Column[]>([
        {Key:0,Name:'Name'},
        {Key:1,Name:'Price'},
        {Key:2,Name:'Amount'},
        ])
    
    const [SS_Row,setSS_Row]=useState<TS_Row[]>([
        {Key:0 ,Next:1  , Array:['Xedni Wor'            ,'Aaa','000'],Display:4},
        {Key:1 ,Next:2  , Array:['Xedni Wor'            ,'Aaa','000']},
        {Key:2 ,Next:3  , Array:['Weezer'               ,'Bbb','001']},
        {Key:3 ,Next:4  , Array:['Tally Hall'           ,'Ccc','002']},
        {Key:4 ,Next:5  , Array:['Que, The Human Editor','Ddd','010']},
        {Key:5 ,Next:6  , Array:['Human Centipede'      ,'Eee','011']},
        ])
//****************************************************************************
// JSX: C02_Iput
//****************************************************************************
    let JSX_C02=<></>
    let let_Width:string='50%'
    if(SS_C02==true){
        JSX_C02=<C02_Input
            SS_Row={SS_Row}
            setSS_Row={setSS_Row}
            SS_Columns={SS_Columns}
            setSS_Columns={setSS_Columns}
            SS_EditColumn={SS_EditColumn}
            setSS_EditColumn={setSS_EditColumn}
            />
        let_Width='calc(50% - 300px)'
    }
    else{
        JSX_C02=<></>
        let_Width='50%'
    }
//****************************************************************************
// OUTPUT
//****************************************************************************

    return(
<div id='Ego'>
{
//****************************************************************************
//****************************************************************************
//****************************************************************************
}
<div id='Header'>
{
//****************************************************************************
// Header Left = Import/Export Files
//****************************************************************************
}
<div id='HeaderLeft'>
<C03_Header
SS_Row={SS_Row}
SS_Columns={SS_Columns}
SS_C02={SS_C02}
setSS_C02={setSS_C02}
/>
</div>

{
//****************************************************************************
// Header Right = Image Processing and/or Tesseract Model
//****************************************************************************
}
<div id='HeaderRight'>
<C04_Header
SS_C02={SS_C02}
setSS_C02={setSS_C02}
/>
</div>

</div>
{
//****************************************************************************
//****************************************************************************
//****************************************************************************
}
<div id='Body' >
{
//****************************************************************************
// Body Left = CSV Table
//****************************************************************************
}
{JSX_C02}
<div id='BodyLeft' style={{width:let_Width}}>
<C01_Table 
SS_Row={SS_Row}
setSS_Row={setSS_Row}
SS_Columns={SS_Columns}
setSS_Columns={setSS_Columns}
SS_EditColumn={SS_EditColumn}
setSS_EditColumn={setSS_EditColumn}
SS_C02={SS_C02}
setSS_C02={setSS_C02}
/>
</div>

{
//****************************************************************************
// Body Right = Image Canvas
//****************************************************************************
}
<div id='HeaderRight'>

</div>
{
//****************************************************************************
//****************************************************************************
//****************************************************************************
}
</div>
</div>
    )
};

export default Components