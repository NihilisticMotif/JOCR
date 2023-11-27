// React

// Components

// Type
import TS_Row from '../../T01_Row/An_Index';
import {U_RenameColumnName} from '../../T01_Row/U_EditRow'
import {D_DeleteColumnName} from '../../T01_Row/D_Delete'
import {U_UpdateDisplay} from '../../T01_Row/U_UpdateDisplay'

// CSS

//****************************************************************************

// Define what is Column
const C_DefineColumnButton = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    // PARAMETER
    // PROPERTY
    THISROW,
    // HOOK: setState()
    // https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs
    SS_IndexColumns,    // Only used in f_Delete
    setSS_IndexColumns,
    SS_Row,         // Used for f_Rename, f_Delete, f_UnSelect | List of All Column that IsVisible !== undefined
    setSS_Row,      // Used for f_Rename, f_Delete, f_UnSelect | Update SS_Column
}:{
    // TYPE
    // PROPERTY
    THISROW:TS_Row,

    // HOOK: setState()
    SS_IndexColumns:number[],
    setSS_IndexColumns:(S:number[])=>void,
    SS_Row:TS_Row[],
    setSS_Row:(S:TS_Row[])=>void,
}) => 
{

//****************************************************************************
// HOOK
//****************************************************************************

    // Set Mode of this component for Rename and/or Delete itself
    //      0|  // Default JSX Column | f_Cancel       => let_DefaultDisplay(0) => Open Default JSX Column
    //      1|  // Rename JSX Column  | f_OpenRename   => let_DefaultDisplay(1) => Open Rename JSX Column 
    //      2|  // Delete JSX Column  | f_OpenDelete   => let_DefaultDisplay(2) => Open Delete JSX Column 

    let let_DefaultDisplay:0|1|2
    if(THISROW.Display===undefined || THISROW.Display===3){
        let_DefaultDisplay=0
    }else{
        let_DefaultDisplay=THISROW.Display
    }

//****************************************************************************
// FUNCTION_00: Change Mode of C_DefineColumn Components for Rename and Delete 
//****************************************************************************

    function f_Display(D:0|1|2|3){
        let ss_Row:TS_Row[]=[...SS_Row]
        let let_UpdateColumns:TS_Row[]=U_UpdateDisplay(THISROW,ss_Row,D)
        setSS_Row(let_UpdateColumns)   
    }

    function f_Cancel():void{
        f_Display(0)
    }

//****************************************************************************
// FUNCTION_01: Rename Column
//****************************************************************************
    const C01id_Rename:string='C01id_Rename'+THISROW.Key.toString()
    function f_OpenRename():void{
        f_Display(1)
    }
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

//****************************************************************************
// JSX_00: JSX_Column (Button)
//****************************************************************************
    // JSX = representing in JSX
    // Default Column JSX
    let JSX_Column:JSX.Element=<h1></h1>
    // Default Column JSX
    if (let_DefaultDisplay===0){
    JSX_Column=
<>
<button className={'C01id'} onClick={f_OpenDelete}>X</button>
<button className={'C01id'} onClick={f_OpenRename}>Edit</button>
</>
    }else if (let_DefaultDisplay===1){
        JSX_Column=
<>
<button className={'C01id'} onClick={f_Rename}>OK</button>
<button className={'C01id'} onClick={f_Cancel}>Cancel</button>
</>
    // Delete Column JSX
    }else if (let_DefaultDisplay===2){
        JSX_Column=
<>
<button className={'C01id'} onClick={f_Delete}>OK</button>
<button className={'C01id'} onClick={f_Cancel}>Cancel</button>
</>
    // Unselect Column JSX
    }

//****************************************************************************
// OUTPUT
//****************************************************************************
return (
<div 
    className={'C01id'} 
    key={THISROW.Key} 
>
{JSX_Column}
</div>
)
}
//****************************************************************************
export default C_DefineColumnButton