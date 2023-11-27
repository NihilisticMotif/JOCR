// React
import { useState , useEffect} from 'react';

// Components
import C01_Table from "./C01_Table";

// Type
import TS_Row from '././T01_Row/An_Index';

// CSS
import './index.css';

// https://stackoverflow.com/questions/6229197/how-to-know-if-two-arrays-have-the-same-values
const Components=()=>{
    // Reset Column List after Update Column List (Create, Rename, Delete, Filter and Sort)
    // https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs
    // const [SS_Reset,setSS_Reset]=useState<number>(0)
    
    const [SS_Row,setSS_Row]=useState<TS_Row[]>([
        {Key: 0, Name: 'Xedni Wor'            ,Price:1.7,Amount:11.7},
        {Key: 1, Name: 'Weezer'               ,Price:2.0,Amount:12.0},
        {Key: 2, Name: 'Tally Hall'           ,Price:3.2,Amount:33.2},
        {Key: 3, Name: 'Que, The Human Editor',Price:5.1,Amount:15.1},
        {Key: 4, Name: 'Human Centipede'      ,Price:4.5,Amount:34.5},
        ]);

//****************************************************************************
// OUTPUT
//****************************************************************************

    return(
<div id='Body' >
<C01_Table 
SS_Row={SS_Row}
setSS_Row={setSS_Row}
/>
</div>
    )
}

export default Components