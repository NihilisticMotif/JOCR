// React
import { useState , useEffect, useRef, useInsertionEffect } from 'react';
// Components
import C_ColumnButton from './Coms/C_ColumnButton';
import C_Row from './Coms/C_Row'
// Type
import TS_Row from '../T01_Row/An_Index';
import TS_Column from '../T02_Column/An_Index';
//import M01_Text from './M01_Text';

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
setSS_Text
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
}

) => {
    let JSX_C01=<></>
    /*
    if(SS_TextDimension===1){
        JSX_C01=<M01_Text
SS_Text={SS_Text}
setSS_Text={setSS_Text}
SS_EditColumn={SS_EditColumn}
setSS_EditColumn={setSS_EditColumn}
SS_C02={SS_C02}
setSS_C02={setSS_C02}
setSS_OpenPanel={setSS_OpenPanel}
    />}*/

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