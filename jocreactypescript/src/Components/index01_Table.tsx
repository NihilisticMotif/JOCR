// React
import { useState , useEffect , useRef} from 'react';

// Components
import C01_Table from "./C01_Table";
import C02_Input from "./C02_Input";
import C03_Header from './C03_Header';
import {Index02_Canvas} from './index02_Canvas';
// Type
import TS_Row from './T01_Row/An_Index';
import TS_Column from './T02_Column/An_Index'
import TS_Threshold from './T03_Threshold/An_Index';
import TS_Box from './T04_Box/An_Index';
// CSS
import './index01_Table.css';

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
        {Key:112,PositionY:10 ,ScalePosition:0,IsDefault:false,Gray:'#000000'},
        {Key:121,PositionY:121,ScalePosition:121,IsDefault:false,Gray:'#000000'},
        {Key:211,PositionY:211,ScalePosition:211,IsDefault:false,Gray:'#000000'},
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
            [0,100],
            [100,0],
        ],
        // Transformed Point
        [
            [0,0],
            [0,100],
            [100,0],
        ]
    ])
    
    const [SS_AffineSTR,setSS_AffineSTR]=useState<string[][][]>([
        // Selected Point
        [
            ['0','0'],
            ['0','100'],
            ['100','0'],
        ],
        // Transformed Point
        [
            ['0','0'],
            ['0','100'],
            ['100','0'],
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

    // C04_ImageEditor/U_Aff.tsx
    // Aff = Simple Affine
    const [SS_Aff,setSS_Aff]=useState<number[]>([
        1,  // Scale X
        1,  // Scale Y
        0,  // Pos X
        0,  // Pos Y
        0   // Rotation
    ])
    const [SS_AffOrigin,setSS_AffOrigin]=useState<string[]>([
        'NoOrigin',
        '#000000'
    ])

    // C05_Convolution/U_Convolution.tsx
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
        false,  // C05_Convolution/SS_nDMatrix
        false,  // C05_Convolution/SS_Thresholds
        false,  // C05_Convolution/SS_Affine
    ])
    const [SS_IsShow,setSS_IsShow]=useState<boolean>(false)

/*

+--------------+--------+-----------+--------+--------+--------+--------+--------+
| type (string)| id     | LineWidth | Color  | X      | Y      | W      | H      |
+--------------+--------+-----------+--------+--------+--------+--------+--------+
| Rectangle    | number | number    | string | number | number | number | number |
| Frame        | number | number    | string | number | number | number | number |
| Line         | number | number    | string | number | number | number | number |
| XLine        | number | number    | string | number | 0      | number | 0      |
| YLine        | number | number    | string | 0      | number | 0      | number |
+--------------+--------+-----------+--------+--------+--------+--------+--------+
*/
    const [SS_Boxes,setSS_Boxes]=useState<TS_Box[]>([
            {Key:0,XYWH:[0,1,2,3,4],Type:['Rectangle','#000000'],IsShow:false},
            {Key:1,XYWH:[0,1,2,3,4],Type:['Rectangle','#000000'],IsShow:true},
            {Key:2,XYWH:[0,1,2,3,4],Type:['Rectangle','#000000'],IsShow:true},
            {Key:3,XYWH:[0,1,2,3,4],Type:['Rectangle','#000000'],IsShow:true},
            {Key:4,XYWH:[0,1,2,3,4],Type:['Rectangle','#000000'],IsShow:true},
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
        JSX_C04=<Index02_Canvas
SS_Aff           ={SS_Aff           }
SS_Boxes         ={SS_Boxes         }
SS_AffOrigin     ={SS_AffOrigin     }
SS_IsActivate    ={SS_IsActivate    }
SS_IsShow        ={SS_IsShow        }
SS_nDMatrix      ={SS_nDMatrix      }
SS_nDTable       ={SS_nDTable       }
SS_Affine        ={SS_Affine        }
SS_AffineSTR     ={SS_AffineSTR     }
SS_AffineRGB     ={SS_AffineRGB     }
SS_AffineBOOL    ={SS_AffineBOOL    }
SS_Image         ={SS_Image         }
SS_Zoom          ={SS_Zoom          }
SS_WidthImage    ={SS_WidthImage    }
SS_IsRGB         ={SS_IsRGB         }
SS_ImageFile     ={SS_ImageFile     }
SS_UseEffect     ={SS_UseEffect     }
SS_OpenPanel     ={SS_OpenPanel     }
SS_Thresholds    ={SS_Thresholds    }
setSS_Aff        ={setSS_Aff        }
setSS_Boxes      ={setSS_Boxes      }
setSS_AffOrigin  ={setSS_AffOrigin  }
setSS_IsActivate ={setSS_IsActivate }
setSS_IsShow     ={setSS_IsShow     }
setSS_nDMatrix   ={setSS_nDMatrix   }
setSS_nDTable    ={setSS_nDTable    }
setSS_Affine     ={setSS_Affine     }
setSS_AffineSTR  ={setSS_AffineSTR  }
setSS_AffineRGB  ={setSS_AffineRGB  }
setSS_AffineBOOL ={setSS_AffineBOOL }
setSS_Image      ={setSS_Image      }
setSS_Zoom       ={setSS_Zoom       }
setSS_WidthImage ={setSS_WidthImage }
setSS_IsRGB      ={setSS_IsRGB      }
setSS_ImageFile  ={setSS_ImageFile  }
setSS_UseEffect  ={setSS_UseEffect  }
setSS_OpenPanel  ={setSS_OpenPanel  }
setSS_Thresholds ={setSS_Thresholds }
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
<div id='I01id_Header' 
style={SS_OpenPanel === 2 ? { gridTemplateColumns: 'repeat(2, 1fr)' } : {}
}
>
{
//****************************************************************************
// Header Left = Import/Export Files
//****************************************************************************
}
<div id='I01id_HeaderLeft' 
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
{
JSX_C04
}
</div>

</div>
{
//****************************************************************************
//****************************************************************************
//****************************************************************************
}
<div id='I01id_HBody' >
{
//****************************************************************************
// Body Left = CSV Table
//****************************************************************************
}

<div id='I01id_HBodyLeft' 
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