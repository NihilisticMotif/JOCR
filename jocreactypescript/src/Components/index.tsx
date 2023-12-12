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
        {Key:0, Array:['Xedni Wor'            ,'Aaa','000']},
        {Key:1, Array:['Weezer'               ,'Bbb','001']},
        {Key:2, Array:['Tally Hall'           ,'Ccc','002']},
        {Key:3, Array:['Que, The Human Editor','Ddd','010']},
        {Key:4, Array:['Human Centipede'      ,'Eee','011']},
        {Key:5, Array:['Xedni Wor'            ,'Aaa','000']},
        {Key:6, Array:['Weezer'               ,'Bbb','001']},
        {Key:7, Array:['Tally Hall'           ,'Ccc','002']},
        {Key:8, Array:['Que, The Human Editor','Ddd','010']},
        {Key:9, Array:['Human Centipede'      ,'Eee','011']},
        {Key:10, Array:['Xedni Wor'            ,'Aaa','000']},
        {Key:11, Array:['Weezer'               ,'Bbb','001']},
        {Key:12, Array:['Tally Hall'           ,'Ccc','002']},
        {Key:13, Array:['Que, The Human Editor','Ddd','010']},
        {Key:14, Array:['Human Centipede'      ,'Eee','011']},
        {Key:15, Array:['Xedni Wor'            ,'Aaa','000']},
        {Key:16, Array:['Weezer'               ,'Bbb','001']},
        {Key:17, Array:['Tally Hall'           ,'Ccc','002']},
        {Key:18, Array:['Que, The Human Editor','Ddd','010']},
        {Key:19, Array:['Human Centipede'      ,'Eee','011']},
        {Key:20, Array:['Xedni Wor'            ,'Aaa','000']},
        {Key:21, Array:['Weezer'               ,'Bbb','001']},
        {Key:22, Array:['Tally Hall'           ,'Ccc','002']},
        {Key:23, Array:['Que, The Human Editor','Ddd','010']},
        {Key:24, Array:['Human Centipede'      ,'Eee','011']},
        {Key:25, Array:['Xedni Wor'            ,'Aaa','000']},
        {Key:26, Array:['Weezer'               ,'Bbb','001']},
        {Key:27, Array:['Tally Hall'           ,'Ccc','002']},
        {Key:28, Array:['Que, The Human Editor','Ddd','010']},
        {Key:29, Array:['Human Centipede'      ,'Eee','011']},
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