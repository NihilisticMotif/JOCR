// React
import { useState , useEffect , useRef} from 'react';

// Components
import C01_Table from "./C01_Table";
import C02_Input from "./C02_Input";
import C03_Header from './C03_Header';
import {Index02_Canvas} from './index02_Canvas';
import C07_TableSetting from './C07_TableSetting'
// Type
import TS_Row from './T01_Row/An_Index';
import TS_Column from './T02_Column/An_Index'
import TS_Threshold from './T03_Threshold/An_Index';
import TS_Box from './T04_Box/An_Index';
import TS_Kernal from './T05_Kernal/An_Index';
// CSS
import './index01_Table.css';

// https://stackoverflow.com/questions/6229197/how-to-know-if-two-arrays-have-the-same-values
const Components=()=>{
//****************************************************************************
// USESTATE HOOK
//****************************************************************************
    const [SS_EditColumn,setSS_EditColumn]=useState<0|1>(0)
    const [SS_C02,setSS_C02]=useState<boolean>(true)
    //const SS_C02=true
    const [SS_OpenPanel,setSS_OpenPanel]=useState<0|1|2>(2)
    const [SS_IsNarrow,setSS_IsNarrow]=useState<boolean>(false)
    // 0 = Open only C01_Table
    // 1 = Open only C04_Canvas
    // 2 = Open C01_Table and C04_Canvas

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
    const [SS_LongString,setSS_LongString]=useState<string>(`
****************************************************************************************************************

Song: That's Enough, Let's Get You Home.
Artist: Will Wood
Lyrics:
My dream girl, those eyes, that nose
My private inside joke, sign the cast on my funny bone
Floral sheets on long-given-up ghosts
Haunt my bedroom at night and say "Let's get you home"
They say "Grow up, be a man, 'cause until then
You're nothing but a short-haired girl"
But come and Braille-palm-read and hold my hand
See my reason and "Goodbye cruel world"
And oh my God, what's wrong with me?
And the wife of Walter Keane, whose name right now's escaping me
That's right, Margaret
Dream girl, come, and sweep me off my knees
I'd rather stay asleep than never see you wake up next to me
Neon lights like heat lamps in the cold
To incubate the shadows you can't stitch back to your soles
And you seemed fine just a few days ago
But CO2 and fish tanks do enough to get you home
Well now you swear in your prayers telling time
"Promise I'll never have fun again
If you'd stop flying, " but then you start crying "Never mind, you win"
And far too late came far too soon
And the love you never made became the things you'd never do
Oh, sweet Mary
Dream girl, come, but keep your hands off me
Go on back to bed my love, I mean,
That's where dreams are supposed to be
So come on, William, grow up, be a man
'Cause until then they're gonna treat you
Like you're just a little girl
But come and Braille-palm-read, hold my hands and you'll see that
It's me who cries mercy while your fingers curl
And, oh, are you at all like me?
Do you know what I mean?
Or am I too close to see?
Someone, anyone?
Of the two things we do on our knees
Watch me fold my hands just to crack my knuckles
Well, here is the church, here is the steeple
Open the doors, see all the people
Alright, that's enough, let's get you home

****************************************************************************************************************

Song: That's Enough, Let's Get You Home.
Artist: Will Wood
Lyrics:
One time, I tried to sing
About... I don't know, but it was nothing fucking new
Yet another platitude
"Blah, blah, blah, blah, blah, blah, bla-blah blah"
Is all they heard
Oh, you thought they were listening?
Now, don't be absurd
All the rain comes down the same
But not a drop can stake its claim
Down they pour, with millions more, to the floor with no name
I'm sure you really sang your Heart out
Or I'm sure that's how it seemed
But you and I both know so well, now
That looks can be deceiving
'Cos "blah, blah, blah, blah, blah, blah, bla-blah blah"
Is so overdone
For a man cloaked in daylight, you sure hate the sun
When the tears stream down one day
Obfuscated by the rain
Can you truly say, with a straight face
That you tried your best?
Mr Mind?
Yeah?
What do you see from behind those dead, leaden eyes?
A Soul so deep, and dark, and eternally cold
And an oath, formed from us both
That it would stay whole
But I think, if I left it to you
You'd fall under its weight and kill it too
But I won't let you ruin what we could still be
We have so much left to sing
Such a plain and simple thing
Yet your silence lines this pit in which we have lain
All the rage, despair and shame
That's been caged, ensnared and flamed
Form this atom bomb of songs refused to be played
So if you insist on crying
While our host is slowly dying
Then I'll cut you loose and spare this noose the dead weight
Silent, explosive's this vile scent's corrosives
The wiles and the woes that these sibilants and plosives
Defer to inside from the earrings he hides
He's so confident his throes won't be found once he's died
But these silent explosives caused violent narcosis
This trident he forged is both weapon and motive
This world will forget you
Neglect, then regret to
Enweave the same story the backdrop is set to
The vastness of time, the unrhymable rhymes
I have heard this before but I'll never again
One time, you tried to sing
About storm and a spring
But they know how it

****************************************************************************************************************

    `)
    const [SS_Text,setSS_Text]=useState<string[]>([
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
        "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
        "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
        "deserunt mollit anim id est laborum"])
    const [SS_TextDimension,setSS_TextDimension]=useState<number>(0)
    // 0 = 1 Row
    // 1 = Multiple Rows
    // 2 = Table
    // 3 = Full Table
    
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
    // How can I check if the file is the image and 
    // if so, how can I get the width and height of this file
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

    const [SS_IsActivate,setSS_IsActivate]=useState<boolean[]>([
        false,  // C05_Convolution/SS_nDMatrix
        false,  // C05_Convolution/SS_Thresholds
        false,  // C05_Convolution/SS_Affine
        false,  // C05_Convolution/Erosion
        false,  // C05_Convolution/Dilation
    ])
    const [SS_IsShow,setSS_IsShow]=useState<boolean>(false)

    const [SS_OpenOCR,setSS_OpenOCR]=useState<string>('Image')
    // 'Image','OCR'

    const [OCR_Languages,setOCR_Languages]=useState<string[][]>([
        ['tha','Thai'],
        ['eng','English'],
  ['afr', 'Afrikaans'],
  ['amh', 'Amharic'],
  ['ara', 'Arabic'],
  ['asm', 'Assamese'],
  ['aze', 'Azerbaijani'],
  ['aze_cyrl', 'Azerbaijani (Cyrillic)'],
  ['bel', 'Belarusian'],
  ['ben', 'Bengali'],
  ['bod', 'Tibetan'],
  ['bos', 'Bosnian'],
  ['bre', 'Breton'],
  ['bul', 'Bulgarian'],
  ['cat', 'Catalan']
    ])
    const [OCR_Mode,setOCR_Mode]=useState<number>(0)
    const [OCR_OutputFile,setOCR_OutputFile]=useState<string[]>(['OutputFile','txt'])
    const [OCR_DPI,setOCR_DPI]=useState<number>(2400)
    const [OCR_IsFirstRowAsColumn,setOCR_IsFirstRowAsColumn]=useState<boolean>(false)
    const let_HeaderHeight=100
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
            {Key:0,XYWH:[0,0,500,500,4],Type:['Rectangle','#000000'],IsShow:false},
            {Key:1,XYWH:[0,0,500,500,4],Type:['Rectangle','#000000'],IsShow:true},
            {Key:2,XYWH:[0,0,500,500,4],Type:['Rectangle','#000000'],IsShow:false},
            {Key:3,XYWH:[0,0,500,500,4],Type:['Rectangle','#000000'],IsShow:false},
            {Key:4,XYWH:[0,0,500,500,4],Type:['Rectangle','#000000'],IsShow:false},
        ])
    useEffect(()=>{
        if(SS_TextDimension!==3){
            setSS_C02(false)
        }
        if(SS_TextDimension===3){
            setSS_C02(true)
        }
    },[SS_TextDimension])
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
    if(SS_C02&&(SS_OpenPanel===0 || SS_OpenPanel===2)){
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
        SS_TextDimension={SS_TextDimension}
        SS_Text={SS_Text}
        setSS_Text={setSS_Text}
        SS_LongString={SS_LongString}
        setSS_LongString={setSS_LongString}
        Header={OCR_OutputFile[0]}
        />
        JSX_C03=<C03_Header
        SS_Row={SS_Row}
        SS_Columns={SS_Columns}
        SS_C02={SS_C02}
        //setSS_C02={setSS_C02}
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
SS_OpenOCR      ={SS_OpenOCR}
setSS_OpenOCR={setSS_OpenOCR}
OCR_Languages={OCR_Languages}
setOCR_Languages={setOCR_Languages}
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
    <C07_TableSetting
    width={let_C01Width}
    OCR_OutputFile={OCR_OutputFile}
    setOCR_OutputFile={setOCR_OutputFile}
    SS_TextDimension={SS_TextDimension}
    setSS_TextDimension={setSS_TextDimension}
    />
</div>
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