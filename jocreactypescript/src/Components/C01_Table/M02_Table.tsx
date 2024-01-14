// React
import { useState , useEffect, useRef, useInsertionEffect } from 'react';
// Components
import C_ColumnButton from './Coms02_Table/C_ColumnButton';
import C_Row from './Coms02_Table/C_Row'
// Type
import TS_Row from '../T01_Row/An_Index';
import TS_Column from '../T02_Column/An_Index';

//-------------------------+--------------+----------+
// CSS                     | File Name    | General  |
//-------------------------+--------------+----------+
import './index00.css'; // | index.jsx    | General  |
import './index01.css'; // | index.jsx    | Specific |
//-------------------------+--------------+----------+

const M02_Table = (
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
}
) => {
//****************************************************************************
// Function 00: Automately close C02 when the width is too narrow.
//****************************************************************************
const let_HeaderHeight=100
const [SS_SelectRow,setSS_SelectRow]=useState<number>(0)
    // By ChatGPT
    
    const Ref_C01 = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const let_CurrentC01 = Ref_C01.current;
        if (let_CurrentC01) {
        // Close C02_Input when the width of C01_Table is less than 175
        const let_ObsResize = new ResizeObserver(() => {
            let let_C01Width=(document.getElementById('C01id_H')as HTMLElement)!.offsetWidth
            if(let_C01Width<175){
                setSS_C02(false)
            }
        });
        let_ObsResize.observe(let_CurrentC01);
        return () => {
            let_ObsResize.disconnect();
        };
    }
    }, []);

//****************************************************************************
// JSX_00: Filter SS_Column.Name by IsVisible=true
//****************************************************************************
    const let_Rows:TS_Row[] = [...SS_Row]
    const JSX_TH_Rows:JSX.Element[] = let_Rows.map((Row,index) => {
        return (
            <>
            <C_Row
            INDEX={index}
            THISROW={Row}
            SS_Row={SS_Row}
            setSS_Row={setSS_Row}
            SS_SelectRow={SS_SelectRow}
            setSS_SelectRow={setSS_SelectRow}
            />
            </>)
    })
    const ss_Columns=[...SS_Columns]
    const JSX_ColumnsName=ss_Columns.map((Column)=>{
        return (
            <th>{Column.Name}</th>
        )
    })
//****************************************************************************
// OUTPUT
//****************************************************************************
    return (

<div id='C01id_H' //ref={Ref_C01}
>
<div id='C01id_DivTable'>
<div id='C01id_InnerTable'>
<table id='C01id_Table'>
<thead id='C01id_TH'>
<tr>
    <th className='C01id_Left'>Index </th>
    {JSX_ColumnsName}
    <th className='C01id_Right'>Edit  </th>
</tr>
{
// Button under each column.
// 1. rename column
// 2. delete column
// 3. sort data
// 4. change data type
}
<C_ColumnButton
SS_Row={SS_Row}
setSS_Row={setSS_Row}
SS_Columns={SS_Columns}
setSS_Columns={setSS_Columns}
SS_EditColumn={SS_EditColumn}
setSS_EditColumn={setSS_EditColumn}
/>
</thead>
<tbody id='C02id_Height' style={{
    height:`calc(100vh - ${55}px - ${105+20+let_HeaderHeight}px)`,
    }}>
{
// Data
JSX_TH_Rows}
</tbody>
</table>
</div>

</div>

</div>
    )
}

export default M02_Table