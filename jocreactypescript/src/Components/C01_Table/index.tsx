// React
import { useState , useEffect, useRef, useInsertionEffect } from 'react';
// Components
import C_ColumnButton from './Coms02_Table/C_ColumnButton';
import C_Row from './Coms02_Table/C_Row'
// Type
import TS_Row from '../T01_Row/An_Index';
import TS_Column from '../T02_Column/An_Index';
import M02_Table from './M02_Table';
import M01_Text from './M01_Text'
//import M00_Row from './M00_Row';
import M00_Row from './box';

//-------------------------+--------------+----------+
// CSS                     | File Name    | General  |
//-------------------------+--------------+----------+
import './index00.css'; // | index.jsx    | General  |
import './index01.css'; // | index.jsx    | Specific |
//-------------------------+--------------+----------+

const C01_Table = (
//****************************************************************************
// INPUT
//****************************************************************************
{
// PARAMETER
// PERPERTY
// HOOK
SS_Row,
setSS_Row,
SS_Columns,
setSS_Columns,
SS_EditColumn,
setSS_EditColumn,
SS_C02,
setSS_C02,
setSS_OpenPanel,
SS_TextDimension,
SS_Text,
setSS_Text,
SS_LongString,
setSS_LongString,
Header
}:{
// TYPE
// PERPERTY
// HOOK
SS_Row:TS_Row[],
setSS_Row:(S:TS_Row[])=>void,
SS_Columns:TS_Column[],
setSS_Columns:(S:TS_Column[])=>void,
SS_EditColumn:0|1,
setSS_EditColumn:(S:0|1)=>void,
SS_C02:boolean,
setSS_C02:(S:boolean)=>void,
setSS_OpenPanel:(S:0|1|2)=>void
SS_TextDimension:number
SS_Text:string[]
setSS_Text:(S:string[])=>void
SS_LongString:string
setSS_LongString:(S:string)=>void
Header:string
}

) => {
    let JSX_C01=<></>
    if(SS_TextDimension===0){
        JSX_C01=<M00_Row
//SS_Row={SS_LongString}
//setSS_Row={setSS_LongString}
//setSS_OpenPanel={setSS_OpenPanel}
//Header={Header}
SS_LongString={SS_LongString}
/>
    }
    if(SS_TextDimension===1){
        JSX_C01=<M01_Text
SS_Text={SS_Text}
setSS_Text={setSS_Text}
setSS_OpenPanel={setSS_OpenPanel}
Header={Header}
/>
    }
    if(SS_TextDimension===2||SS_TextDimension===3){
        JSX_C01=<M02_Table
SS_Row={SS_Row}
setSS_Row={setSS_Row}
SS_Columns={SS_Columns}
setSS_Columns={setSS_Columns}
SS_EditColumn={SS_EditColumn}
setSS_EditColumn={setSS_EditColumn}
SS_C02={SS_C02}
setSS_C02={setSS_C02}
setSS_OpenPanel={setSS_OpenPanel}
    />}

//****************************************************************************
// OUTPUT
//****************************************************************************
    return (

<>
{JSX_C01}
</>
    )
}

export default C01_Table