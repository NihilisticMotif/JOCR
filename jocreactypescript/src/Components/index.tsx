// React
import { useState , useEffect , useRef} from 'react';

// Components
import C01_Table from "./C01_Table";
import C02_Input from "./C02_Input";
import C03_Header from './C03_Header';
import C04_Canvas from './C04_Canvas';
// Type
import TS_Row from '././T01_Row/An_Index';
import TS_Column from '././T02_Column/An_Index'
import TS_Threshold from './T03_Threshold/An_Index';
// CSS
import './index.css';

// https://stackoverflow.com/questions/6229197/how-to-know-if-two-arrays-have-the-same-values
const Components=()=>{
//****************************************************************************
// USESTATE HOOK
//****************************************************************************
    const [SS_EditColumn,setSS_EditColumn]=useState<0|1>(0)
    const [SS_C02,setSS_C02]=useState<boolean>(true)
    const [SS_OpenPanel,setSS_OpenPanel]=useState<0|1|2>(2)
    const [SS_IsNarrow,setSS_IsNarrow]=useState<boolean>(false)
    // 0 = Open only C01_Table
    // 1 = Open only C04_Canvas
    // 2 = Open C01_Table and C04_Canvas

    //useEffect(() => {
    //    alert(SS_IsNarrow)
    //},[SS_IsNarrow])
    let let_C02Width=275
//****************************************************************************
// DEFAULT INPUT
//****************************************************************************
    
    // C01, C02 and C03
    const [SS_Columns, setSS_Columns]=useState<TS_Column[]>([
        {Key:0,Name:'Artist'},
        {Key:1,Name:'Album'},
        {Key:2,Name:'Music'},
        {Key:3,Name:'Genre'},
        {Key:4,Name:'Key'},
        ])
    
    const [SS_Row,setSS_Row]=useState<TS_Row[]>([
        {Key:0 ,Next:1  , Array:['y','y','y','y'],Display:4},
        {Key:1 ,Next:2  , Array:['Tally Hall',"Marvin's Marvelous Mechanical Museum",'The Ruler of Everything','Indie Rock','01']},
        {Key:2 ,Next:3  , Array:['RadioHead','In Rainbows','Weird Fishes/Arpeggi','Alternative Rock','02']},
        {Key:3 ,Next:4  , Array:['Weezer','Blue Album',"Buddy Holly",'Pop Punk','03']},
        {Key:4 ,Next:5  , Array:['Gorillaz','Demon Days',"Feel Good Inc.",'Hip Hop','04']},
        {Key:5 ,Next:6  , Array:['Mother Mother','O My Heart',"Hayloft",'Indie Rock','05']},
        ])
    
    // C04
    const [SS_Image     , setSS_Image] = useState<string | null>(null);  

    const [SS_Thresholds,setSS_Thresholds]=useState<TS_Threshold[]>([
        {Key:112,PositionY:10 ,IsDefault:false,Gray:'#000000'},
        {Key:121,PositionY:121,IsDefault:false,Gray:'#000000'},
        {Key:211,PositionY:211,IsDefault:false,Gray:'#000000'},
    ])
    const [SS_Zoom      ,setSS_Zoom] = useState<number>(1)
    const [SS_WidthImage, setSS_WidthImage] = useState<number>(0);
    const [SS_IsRGB     ,setSS_IsRGB]=useState<boolean>(true)
    const [SS_ImageFile,setSS_ImageFile]=useState<null|File>(null)
    const [SS_UseEffect,setSS_UseEffect]=useState<boolean>(true)

    // shape = (2,3,2)
    const [SS_Affine,setSS_Affine]=useState<number[][][]>([
        // Selected Point
        [
            [0,0],
            [0,1],
            [1,0],
        ],
        // Transformed Point
        [
            [0,0],
            [0,1],
            [1,0],
        ]
    ])
    
    const [SS_AffineSTR,setSS_AffineSTR]=useState<string[][][]>([
        // Selected Point
        [
            ['0','0'],
            ['0','1'],
            ['1','0'],
        ],
        // Transformed Point
        [
            ['0','0'],
            ['0','1'],
            ['1','0'],
        ]
    ])
    const [SS_AffineRGB,setSS_AffineRGB]=useState<string[][]>([
        ['#000000',
        '#000000',
        '#000000',],
        ['#000000',
        '#000000',
        '#000000',]
    ])

    const [SS_AffineBOOL,setSS_AffineBOOL]=useState<boolean[][]>(
        [
            [false,false,false],
            [false,false,false]
        ]
    )
    const [SS_nDMatrix,setSS_nDMatrix]=useState<number[][]>(
       [[0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0]]
    )
    const [SS_nDTable,setSS_nDTable]=useState<string[][]>(
       [['0','0','0','0','0'],
        ['0','0','0','0','0'],
        ['0','0','1','0','0'],
        ['0','0','0','0','0'],
        ['0','0','0','0','0']]
    )

    const [SS_IsActivate,setSS_IsActivate]=useState<boolean[]>([
        false,  // SS_nDMatrix
        false,  // SS_Thresholds
        false,  // SS_Affine
    ])
  
//****************************************************************************
// JSX: C02_Iput
//****************************************************************************
    let JSX_C02=<></>
    let let_Width:string='50%'
    let let_C01Width:string='100%'
    let let_C01MinWidth='300px'
    if(SS_OpenPanel===0){
        let_C01Width='100%'
    }
    else if(SS_OpenPanel===2){
        let_C01Width='50%'
    }
    if(SS_C02==true && (SS_OpenPanel===0 || SS_OpenPanel===2)){
        JSX_C02=<C02_Input
            SS_Row={SS_Row}
            setSS_Row={setSS_Row}
            SS_Columns={SS_Columns}
            setSS_Columns={setSS_Columns}
            SS_EditColumn={SS_EditColumn}
            setSS_EditColumn={setSS_EditColumn}
            />
        let_Width='calc('+let_C01Width+' - '+let_C02Width.toString()+'px)'
    }
    else{
        JSX_C02=<></>
        let_Width=let_C01Width
    }

//****************************************************************************
// JSX: C01_Table and C03_Header
//****************************************************************************
    let JSX_C01=<></>
    let JSX_C03=<></>
    if(SS_OpenPanel===0 || SS_OpenPanel===2){
        JSX_C01=<C01_Table 
        SS_Row={SS_Row}
        setSS_Row={setSS_Row}
        SS_Columns={SS_Columns}
        setSS_Columns={setSS_Columns}
        SS_EditColumn={SS_EditColumn}
        setSS_EditColumn={setSS_EditColumn}
        SS_C02={SS_C02}
        setSS_OpenPanel={setSS_OpenPanel}
        setSS_C02={setSS_C02}
        />
        JSX_C03=<C03_Header
        SS_Row={SS_Row}
        SS_Columns={SS_Columns}
        SS_C02={SS_C02}
        setSS_C02={setSS_C02}
        SS_OpenPanel={SS_OpenPanel}
        setSS_OpenPanel={setSS_OpenPanel}
        />
    }
    else{
        JSX_C01=<></>
        JSX_C03=<></>
    }

//****************************************************************************
// JSX: C04_Canvas
//****************************************************************************
    let JSX_C04=<></>
    if(SS_OpenPanel===1 || SS_OpenPanel===2){
        JSX_C04=<C04_Canvas
        SS_IsActivate={SS_IsActivate}
        setSS_IsActivate={setSS_IsActivate}
        SS_Affine   ={SS_Affine   }
        setSS_Affine={setSS_Affine}
        SS_AffineSTR    ={SS_AffineSTR    }
        setSS_AffineSTR ={setSS_AffineSTR }
        SS_AffineRGB={SS_AffineRGB}
        setSS_AffineRGB={setSS_AffineRGB}
        SS_AffineBOOL={SS_AffineBOOL}
        setSS_AffineBOOL={setSS_AffineBOOL}
        SS_nDMatrix   ={SS_nDMatrix   }
        setSS_nDMatrix={setSS_nDMatrix}
        SS_nDTable    ={SS_nDTable    }
        setSS_nDTable ={setSS_nDTable }
        SS_Image={SS_Image}
        setSS_Image={setSS_Image}
        SS_Zoom      ={SS_Zoom      }
        SS_WidthImage={SS_WidthImage}
        SS_IsRGB     ={SS_IsRGB     }
        SS_ImageFile ={SS_ImageFile }
        SS_UseEffect ={SS_UseEffect }
        setSS_Zoom      ={setSS_Zoom      }
        setSS_WidthImage={setSS_WidthImage}
        setSS_IsRGB     ={setSS_IsRGB     }
        setSS_ImageFile ={setSS_ImageFile }
        setSS_UseEffect ={setSS_UseEffect }
        SS_OpenPanel={SS_OpenPanel}
        setSS_OpenPanel={setSS_OpenPanel}
        setSS_C02={setSS_C02}
        SS_Thresholds={SS_Thresholds}
        setSS_Thresholds={setSS_Thresholds}
        />
    }
    else{
        JSX_C04=<></>
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
<div id='Header' 
style={SS_OpenPanel === 2 ? { gridTemplateColumns: 'repeat(2, 1fr)' } : {}
}
>
{
//****************************************************************************
// Header Left = Import/Export Files
//****************************************************************************
}
<div id='HeaderLeft' 
//style={SS_IsNarrow===true ? {width:let_C01MinWidth} : {}}
>
{JSX_C03}
</div>

{
//****************************************************************************
// Header Right = Image Processing and/or Tesseract Model
//****************************************************************************
}
<div>
{JSX_C04}
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

<div id='BodyLeft' 
style={SS_IsNarrow===true ? {width:let_C01MinWidth} : {width:let_Width}}
//style={{width:let_Width}}
>
{JSX_C02}
{JSX_C01}
</div>

{
//****************************************************************************
// Body Right = Image Canvas
//****************************************************************************
}
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