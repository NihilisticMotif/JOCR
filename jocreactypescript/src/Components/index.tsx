// React
import { useState , useEffect} from 'react';

// Components
import C01_Table from "./C01_Table";

// Type
import TS_Row from '././T01_Row/An_Index';
import TS_Column from '././T02_Column/An_Index'
// CSS
import './index.css';

// https://stackoverflow.com/questions/6229197/how-to-know-if-two-arrays-have-the-same-values
const Components=()=>{
    // Reset Column List after Update Column List (Create, Rename, Delete, Filter and Sort)
    // https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs
    // const [SS_Reset,setSS_Reset]=useState<number>(0)
    
    const [SS_Columns, setSS_Columns]=useState<TS_Column[]>([
        {Name:'Name'},
        {Name:'Price'},
        {Name:'Amount'},
        ])
    
    const [SS_Row,setSS_Row]=useState<TS_Row[]>([
        {Key:10, Array:['Xedni Wor'            ,'Aaa','000']},
        {Key:11, Array:['Weezer'               ,'Bbb','001']},
        {Key:12, Array:['Tally Hall'           ,'Ccc','002']},
        {Key:13, Array:['Que, The Human Editor','Ddd','010']},
        {Key:14, Array:['Human Centipede'      ,'Eee','011']},
        {Key:20, Array:['Aaa','Xedni Wor'            ,'000']},
        {Key:21, Array:['Bbb','Weezer'               ,'001']},
        {Key:22, Array:['Ccc','Tally Hall'           ,'002']},
        {Key:23, Array:['Ddd','Que, The Human Editor','010']},
        {Key:24, Array:['Eee','Human Centipede'      ,'011']},
        {Key:30, Array:['Xedni Wor'            ,'Aaa','000']},
        {Key:31, Array:['Weezer'               ,'Bbb','001']},
        {Key:32, Array:['Tally Hall'           ,'Ccc','002']},
        {Key:33, Array:['Que, The Human Editor','Ddd','010']},
        {Key:34, Array:['Human Centipede'      ,'Eee','011']},
        {Key:40, Array:['Xedni Wor'            ,'Aaa','000']},
        {Key:41, Array:['Weezer'               ,'Bbb','001']},
        {Key:42, Array:['Tally Hall'           ,'Ccc','002']},
        {Key:43, Array:['Que, The Human Editor','Ddd','010']},
        {Key:44, Array:['Human Centipede'      ,'Eee','011']},
        {Key:50, Array:['Xedni Wor'            ,'Aaa','000']},
        {Key:51, Array:['Weezer'               ,'Bbb','001']},
        {Key:52, Array:['Tally Hall'           ,'Ccc','002']},
        {Key:53, Array:['Que, The Human Editor','Ddd','010']},
        {Key:54, Array:['Human Centipede'      ,'Eee','011']},
        ]);
    
//****************************************************************************
// OUTPUT
//****************************************************************************

    return(
<div id='Body' >
<C01_Table 
SS_Row={SS_Row}
setSS_Row={setSS_Row}
SS_Columns={SS_Columns}
setSS_Columns={setSS_Columns}
/>
</div>
    )
}

export default Components