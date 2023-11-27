// React
import { useState } from 'react';
// Components

// Type
import TS_Row from '../../T01_Row/An_Index';
import {U_RenameColumnName} from '../../T01_Row/U_EditRow'
import {D_DeleteColumnName} from '../../T01_Row/D_Delete'
import {U_UpdateDisplay} from '../../T01_Row/U_UpdateDisplay'

// CSS

//****************************************************************************

// Define what is Column
const C_DefineRow = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    // PARAMETER
    // PROPERTY
    INDEX,
    THISROW,
    // HOOK: setState()
    SS_Row,         // Used for f_Rename, f_Delete, f_UnSelect | List of All Column that IsVisible !== undefined
    setSS_Row,      // Used for f_Rename, f_Delete, f_UnSelect | Update SS_Column
}:{
    // TYPE
    // PROPERTY
    INDEX:number,
    THISROW:TS_Row,

    // HOOK: setState()
    SS_Row:TS_Row[],
    setSS_Row:(S:TS_Row[])=>void,
}) => 
{

//****************************************************************************
// HOOK
//****************************************************************************

    //const [SS_Display,setSS_Display]=useState<0|1|2|3>((typeof THISROW.Display ==='undefined') ? 0 : THISROW.Display)
    // Set Mode of this component for Rename and/or Delete itself
    //      0|  // Default JSX Column | f_Cancel       => let_DefaultDisplay(0) => Open Default JSX Column
    //      1|  // Rename JSX Column  | f_OpenRename   => let_DefaultDisplay(1) => Open Rename JSX Column 
    //      2|  // Delete JSX Column  | f_OpenDelete   => let_DefaultDisplay(2) => Open Delete JSX Column 

//****************************************************************************
// FUNCTION_01: Back
//****************************************************************************
    function f_Cancel():void{
        let ss_Row=[...SS_Row]
        let let_UpdateRows=U_UpdateDisplay(THISROW,ss_Row,0)
        setSS_Row(let_UpdateRows)
    }
//****************************************************************************
// FUNCTION_01: Rename Column
//****************************************************************************

    function f_OpenRename():void{
        let ss_Row=[...SS_Row]
        let let_UpdateRows=U_UpdateDisplay(THISROW,ss_Row,1)
        setSS_Row(let_UpdateRows)
    }

//****************************************************************************
// FUNCTION_01: Delete Column
//****************************************************************************

    function f_OpenDelete():void{
        let ss_Row=[...SS_Row]
        let let_UpdateRows=U_UpdateDisplay(THISROW,ss_Row,2)
        setSS_Row(let_UpdateRows)
    }
    /*
    function f_Rename():void{
        let let_NewName:string= (document.getElementById(C01id_Rename)as HTMLInputElement).value 
        let ss_Row:TS_Row[]=[...SS_Row]
        let let_UpdateColumns:TS_Row[]=U_RenameColumnName(THISROW,ss_Row,let_NewName)
        setSS_Row(let_UpdateColumns);
        // https://stackoverflow.com/questions/11688692/how-to-create-a-list-of-unique-items-in-javascript
    }

//****************************************************************************
// FUNCTION_02: Delete Column
//****************************************************************************
    function f_OpenDelete():void{
        f_Display(2)
    }
    function f_Delete():void{
        // https://youtu.be/XtS14dXwvwE?si=rYQOe_tJbxmSnDWE
        let ss_IndexColumns:number[] = SS_IndexColumns
        for(let i:number=0;i<ss_IndexColumns.length;i++){
            if(ss_IndexColumns[i]===THISROW.Key){
                ss_IndexColumns.splice(i, 1);
            }
        }

        let ss_Row:TS_Row[] = [...SS_Row];
        let let_UpdateColumns:TS_Row[]=D_DeleteColumnName(THISROW,ss_Row)
        setSS_Row(let_UpdateColumns);
        setSS_IndexColumns(ss_IndexColumns);
    }
*/
//****************************************************************************
// JSX_00: JSX_Column (Button)
//****************************************************************************
    // JSX = representing in JSX
    // Default Column JSX
    let JSX_Column:JSX.Element=<h1></h1>
    // Default Column JSX
    if (THISROW.Display===0 || typeof THISROW.Display==='undefined'){
    JSX_Column=
<tr>
    <td>{INDEX}</td>
    <td>{THISROW.Name}</td>
    <td>{THISROW.Price}</td>
    <td>{THISROW.Amount}</td>
    <td><div className='C01id_EditRowButton'><button onClick={f_OpenRename}>Edit</button><button onClick={f_OpenDelete}>X</button></div></td>
</tr>
    }else if (THISROW.Display===1){
        JSX_Column=
<>
<tr className='C01id_HeightLightRow'>
    <td>Original</td>
    <td>{THISROW.Name}</td>
    <td>{THISROW.Price}</td>
    <td>{THISROW.Amount}</td>
    <td></td>
</tr>
<tr className='C01id_HeightLightRow'>
    <td>Edited</td>
    <td>{THISROW.Name}</td>
    <td>{THISROW.Price}</td>
    <td>{THISROW.Amount}</td>
    <td><div className='C01id_EditRowButton'><button onClick={f_OpenRename}>Ok</button></div></td>
</tr>
<tr className='C01id_HeightLightRow'>
    <td></td>
    <td><div className='C01id_EditRowButton'><input id='C01id_EditName'></input><button>Ok</button></div></td>
    <td><div className='C01id_EditRowButton'><input id='C01id_EditPrice'></input><button>Ok</button></div></td>
    <td><div className='C01id_EditRowButton'><input id='C01id_Edit'></input><button>Ok</button></div></td>
    <td><div className='C01id_EditRowButton'><button onClick={f_Cancel}>Cancel</button></div></td>
</tr>
</>
    // Delete Column JSX
    }else if (THISROW.Display===2){
        JSX_Column=
<>
<tr className='C01id_HeightLightRow'>
    <td>{INDEX}</td>
    <td>{THISROW.Name}</td>
    <td>{THISROW.Price}</td>
    <td>{THISROW.Amount}</td>
    <td></td>
</tr>
<tr className='C01id_HeightLightRow'>
    {// https://stackoverflow.com/questions/38302507/react-colspan-not-working
    }
    <td colSpan={3}>Do you sure you want to delete this row?</td>
    <td><div className='C01id_EditRowButton'><button onClick={f_Cancel}>Ok</button></div></td>
    <td><div className='C01id_EditRowButton'><button onClick={f_Cancel}>Cancel</button></div></td>
</tr>
</>
    // Unselect Column JSX
    }

//****************************************************************************
// OUTPUT
//****************************************************************************
return (
<>
{JSX_Column}
</>
)
}
//****************************************************************************
export default C_DefineRow