// React
import { useState , useEffect , useRef} from 'react';

// Components
import C01_Table from "./C01_Table";
import C03_Header from './C03_Header';
import {Index02_Canvas} from './index02_Canvas';
import C07_TableSetting from './C07_TableSetting'
// Type

import TS_Threshold from './T03_Threshold/An_Index';
import TS_Box from './T04_Box/An_Index';
import TS_Kernal from './T05_Kernal/An_Index';
// CSS
import './index01_Table.css';

// https://stackoverflow.com/questions/6229197/how-to-know-if-two-arrays-have-the-same-values
const Components=()=>{

//****************************************************************************
// USESTATE HOOK UI SYSTEM SETTING
//****************************************************************************
//-----------------------------------------------------------------------------
// C03_Header/index.tsx
const [SS_OpenPanel,setSS_OpenPanel]=useState<0|1|2>(2)
// 0 = Open only C01_Table (Text UI Editor)
// 1 = Open only C04_Canvas (Image UI Editor)
// 2 = Open C01_Table and C04_Canvas (Text and Image UI Editor)
//-----------------------------------------------------------------------------
// ?
const [SS_UseEffect,setSS_UseEffect]=useState<boolean>(true)
// Update somethings using both useState and useEffect
//-----------------------------------------------------------------------------
//****************************************************************************
// USESTATE HOOK IMAGE PROCESSING
//****************************************************************************
//-----------------------------------------------------------------------------
// index02_Canvas.tsx
const [SS_Image     , setSS_Image] = useState<string | null>(null);
const [SS_ImageFile,setSS_ImageFile]=useState<null|File>(null)  
//-----------------------------------------------------------------------------
// C05_Convolution/U_Threshold.tsx
const [SS_Thresholds,setSS_Thresholds]=useState<TS_Threshold[]>([
        {Key:112,PositionY:10 ,ScalePosition:0,IsDefault:false,Gray:'#000000'},
        {Key:121,PositionY:121,ScalePosition:121,IsDefault:false,Gray:'#000000'},
        {Key:211,PositionY:211,ScalePosition:211,IsDefault:false,Gray:'#000000'},
    ])
//-----------------------------------------------------------------------------
// C04_ImageEditor/Coms...
// (Not Edit Image, just Image UI Editor Setting)
const [SS_Zoom      ,setSS_Zoom] = useState<number>(1)
const [SS_WidthImage, setSS_WidthImage] = useState<number>(0);
const [SS_IsShow,setSS_IsShow]=useState<boolean>(false)
// Show the Original Image, so that it is easier to
// Comparing the orginal Image with the edited image.
//-----------------------------------------------------------------------------
// C04_ImageEditor/Coms...
//-----------------------------------------------------------------------------
const [SS_IsRGB     ,setSS_IsRGB]=useState<boolean>(true)

//-----------------------------------------------------------------------------
// C05_Convolution/U_Affine.tsx
//-----------------------------------------------------------------------------
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
//-----------------------------------------------------------------------------
// C04_ImageEditor/U_Aff.tsx
//-----------------------------------------------------------------------------
// (Simple Affine)
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
//-----------------------------------------------------------------------------
// C05_Convolution/U_Convolution.tsx
//-----------------------------------------------------------------------------
const [SS_Kernals,setSS_Kernals]=useState<TS_Kernal[]>([
    {Key:0,Name:'Convolution',
    Kernal:[
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
    ],
    Kernal_str:[
        ['0','0','0','0','0'],
        ['0','0','0','0','0'],
        ['0','0','1','0','0'],
        ['0','0','0','0','0'],
        ['0','0','0','0','0'],
    ],
    Iterations:1,
    IsActivate:false},
    {Key:1,Name:'Erosion',
    Kernal:[
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
    ],
    Kernal_str:[
        ['1','1','1','1','1'],
        ['1','1','1','1','1'],
        ['1','1','1','1','1'],
        ['1','1','1','1','1'],
        ['1','1','1','1','1'],
    ],
    Iterations:1,
    IsActivate:false},
    {Key:2,Name:'Dilation',
    Kernal:[
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
    ],
    Kernal_str:[
        ['1','1','1','1','1'],
        ['1','1','1','1','1'],
        ['1','1','1','1','1'],
        ['1','1','1','1','1'],
        ['1','1','1','1','1'],
    ],
    Iterations:1,
    IsActivate:false},
    {Key:3,Name:'Convolution',
    Kernal:[
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
    ],
    Kernal_str:[
        ['0','0','0','0','0'],
        ['0','0','0','0','0'],
        ['0','0','1','0','0'],
        ['0','0','0','0','0'],
        ['0','0','0','0','0'],
    ],
    Iterations:1,
    IsActivate:false},
    {Key:4,Name:'Open',
    Kernal:[
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
    ],
    Kernal_str:[
        ['1','1','1','1','1'],
        ['1','1','1','1','1'],
        ['1','1','1','1','1'],
        ['1','1','1','1','1'],
        ['1','1','1','1','1'],
    ],
    Iterations:1,
    IsActivate:false},
])
//-----------------------------------------------------------------------------
// index02_Canvas.tsx
//-----------------------------------------------------------------------------
const [SS_IsActivate,setSS_IsActivate]=useState<boolean[]>([
    false,  // C05_Convolution/SS_nDMatrix
    false,  // C05_Convolution/SS_Thresholds
    false,  // C05_Convolution/SS_Affine
])
const [SS_Boxes,setSS_Boxes]=useState<TS_Box[]>([
        {Key:0,XYWH:[0,0,500,500,4],Type:['Rectangle','#000000'],IsShow:false},
        {Key:1,XYWH:[0,0,500,500,4],Type:['Rectangle','#000000'],IsShow:true},
        {Key:2,XYWH:[0,0,500,500,4],Type:['Rectangle','#000000'],IsShow:false},
        {Key:3,XYWH:[0,0,500,500,4],Type:['Rectangle','#000000'],IsShow:false},
        {Key:4,XYWH:[0,0,500,500,4],Type:['Rectangle','#000000'],IsShow:false},
    ])
//****************************************************************************
// USESTATE HOOK JOCR SETTING
//****************************************************************************
const [OCR_IsOpen,setOCR_IsOpen]=useState<boolean>(false)
const [OCR_IsOCR,setOCR_IsOCR]=useState<boolean>(false)
const [OCR_Languages,setOCR_Languages]=useState<string[][]>([
        ['tha','Thai'],
        ['eng','English'],
          ])
const [OCR_PSM,setOCR_PSM]=useState<number>(3)
const [OCR_Mode,setOCR_Mode]=useState<number>(0)
const [OCR_OutputFile,setOCR_OutputFile]=useState<string[]>(['OutputFile','txt'])
const [OCR_DPI,setOCR_DPI]=useState<number>(2400)
const [OCR_IsFirstRowAsColumn,setOCR_IsFirstRowAsColumn]=useState<boolean>(false)
const [OCR_BoxColor,setOCR_BoxColor]=useState<string>('#000000')
const [OCR_IsViewBox,setOCR_IsViewBox]=useState<boolean>(false)
const [OCR_BoxLineWidth,setOCR_BoxLineWidth]=useState<number>(2)
const [OCR_PSM0,setOCR_PSM0]=useState<string[]>(['None','0','0','0','0','false'])
//****************************************************************************
// OUTPUT (TEXT)
//****************************************************************************
const [TheMainCharacter,setTheMainCharacter]=useState<string|string[]>(
        `
I'm that first-person they talk about in all the books
I'm that perspective you cannot doubt, see how I look
Control the narrative reliably, baby, it's all about me
And I wrote the book about throwing the book
At those who don't do it by it
So now I'm holding myself hostage
Stockholm lust just looks like justice
And enough lefts don't make the right but two wrongs do
Oh man, Sun Tzu would love this
Beating my dead high horse off the high road to low ground
'Cause if you shake your fist at snakes in grass
It looks like punching down
So, God forbid I'm seen just as an average human being
I mean, imagine if protagonists just died in the first scene
I'm the gap between a tragedy and comedy
Don't come at me
I'm the main character, and you have to like me
I loot plot armor from NPCs
Well, they are to me
Trite, tropes, traits, traumas, trinkets, and treats, it's all XP
Look in the sky, it's a bird, it's a plane, no, it's superego
The underdog you cheer for
Villains are everywhere, that's how I know that I'm the hero
So tie me to the train tracks, laugh, and snidely twist your mustache
Snidely Whiplash, Boris Badenov, ignoring me's bad enough
Where do you get off? Da, das vedanya, darling
Daleks in high collars monologue
And I outsmart them with a ray-gun and a tweet
So, God forbid I'm seen just as an average human being
I mean, imagine if protagonists just died in the first scene
I'm the gap between a tragedy and comedy
Don't come at me
I'm the main character, and you have to like me
Judge me by what my cover shows, author becomes beyond reproach
You don't know the prose or if the spine is still intact
Oh, like Alice fell to Wonderland, come astroturf my Overton
And embolden my demand to live by alternative facts
Her majesty says, "The Royal We demand a standard of loyalty
An agreement to be reverent, lick the emperor's new boots"
The court fool got the guillotine
The witches the stake, you the dopamine
And Siemens made the Zyklon B, but we all still get the flu
We all do what we need to to get through
(It's nothing new)
But I ain't done a fucking thing to you
So, God forbid I'm seen just as an average human being
I mean, imagine if antagonists lacked any evil scheme
I'm the gap between a tragedy and comedy
Don't come at me
I'm the main character, and you have to like me
        `
    )
//****************************************************************************
// OUTPUT (IMAGE)
//****************************************************************************


//****************************************************************************
// CONSTANT VARIABLE
//****************************************************************************
let let_Width:string='50%'
const [let_C01Width,setlet_C01Width]=useState<'50%'|'100%'>('50%')
const let_HeaderHeight=100

//****************************************************************************
// JSX: C02_Iput
//****************************************************************************
    

    useEffect(()=>{
        if(SS_OpenPanel===0){
        setlet_C01Width('100%')
        }
        else if(SS_OpenPanel===2){
        setlet_C01Width('50%')
        }},
    [SS_OpenPanel])

//****************************************************************************
// JSX: C01_Table and C03_Header
//****************************************************************************
    let JSX_C01=<></>
    let JSX_C03=<></>
    let JSX_C07=<></>
    if(SS_OpenPanel===0 || SS_OpenPanel===2){
        JSX_C01=<C01_Table 
        TheMainCharacter={TheMainCharacter}
        setTheMainCharacter={setTheMainCharacter}
        OCR_OutputFile={OCR_OutputFile}
        width={let_C01Width}
        />
        JSX_C03=<C03_Header
        //TheMainCharacter={TheMainCharacter}
        //setTheMainCharacter={setTheMainCharacter}
        SS_OpenPanel={SS_OpenPanel}
        setSS_OpenPanel={setSS_OpenPanel}
        />
        JSX_C07=<C07_TableSetting
width={let_C01Width}
OCR_OutputFile={OCR_OutputFile}
setOCR_OutputFile={setOCR_OutputFile}
TheMainCharacter={TheMainCharacter}
setTheMainCharacter={setTheMainCharacter}
/>
    }
    else{
        JSX_C01=<></>
        JSX_C03=<></>
        JSX_C07=<></>
    }

//****************************************************************************
// JSX: C04_Canvas
//****************************************************************************
    let JSX_C04=<></>
    if(SS_OpenPanel===1 || SS_OpenPanel===2){
        JSX_C04=<Index02_Canvas
        OCR_DPI={OCR_DPI}
        setOCR_DPI={setOCR_DPI}
        OCR_PSM={OCR_PSM}
        setOCR_PSM={setOCR_PSM}
        OCR_PSM0={OCR_PSM0}
        setOCR_PSM0={setOCR_PSM0}
TheMainCharacter={TheMainCharacter}
setTheMainCharacter={setTheMainCharacter}
OCR_BoxColor={OCR_BoxColor}
setOCR_BoxColor={setOCR_BoxColor}
OCR_BoxLineWidth={OCR_BoxLineWidth}
setOCR_BoxLineWidth={setOCR_BoxLineWidth}
OCR_IsViewBox={OCR_IsViewBox}
setOCR_IsViewBox={setOCR_IsViewBox}
OCR_IsOpen={OCR_IsOpen}
setOCR_IsOpen={setOCR_IsOpen}
OCR_Languages={OCR_Languages}
setOCR_Languages={setOCR_Languages}
OCR_IsOCR={OCR_IsOCR}
setOCR_IsOCR={setOCR_IsOCR}
OCR_OutputFile={OCR_OutputFile}
setOCR_OutputFile={setOCR_OutputFile}
SS_Aff           ={SS_Aff           }
SS_Boxes         ={SS_Boxes         }
SS_AffOrigin     ={SS_AffOrigin     }
SS_IsActivate    ={SS_IsActivate    }
SS_IsShow        ={SS_IsShow        }
SS_Kernals       ={SS_Kernals}
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
setSS_Kernals={setSS_Kernals}
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
<div
style={{
    height:`${let_HeaderHeight}px`,
    width:'100%',
    backgroundColor:'red'}}
>
    {JSX_C07}
</div>
<div id='I01id_HBodyLeft' 
style={{width:let_C01Width}}
//style={{width:let_Width}}
>
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