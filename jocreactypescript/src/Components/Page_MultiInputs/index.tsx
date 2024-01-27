import './index.css';
import UI_DisplayFlex from '../UI_DisplayFlex';
import UI_Button from '../UI_Button';
import UI_Options from '../UI_Options';
import UI_Factory from '../UI_Factory';
import { uLANGUAGE } from '../utility/uLANGUAGE';
/*
Function
1. Import Image Folder
2. Export TxT Folder
3. Open Image Main Setting
4. Operate OCR
5. Language
6. Color/(Default Gray)
7. Rotation (Default = 0)
*/

const Page_MultiInputs = (
{
Name,
Function
}
:{
Name:string
Function:(S:void)=>void
})=>{

    return (
        <>
<UI_DisplayFlex 
JSX={[
<UI_Button 
    Name={"Import Image Folder"}
    Function={()=>alert('01')}
/>,
<UI_Button 
    Name={"Import TxT Files"}
    Function={()=>alert('01')}
/>,
// Open Image Main Setting
// UI_Options
<UI_Button 
    Name={"Operate OCR"}
    Function={()=>alert('01')}
/>,
<UI_Factory
    Name={'Language'}
    Create={()=>alert('01')}
    Options={uLANGUAGE}
    InputName={null}/>
]}/>,
{//<UI_Options
//    Name={'Set Color'}
//    Options={['Color','Gray','ReverseGray']}
///>
}
    </>
    )}

export default Page_MultiInputs