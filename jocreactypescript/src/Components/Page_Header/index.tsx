import './index.css';
import UI_DisplayFlex from '../UI_DisplayFlex';
import UI_Button from '../UI_Button';
import UI_Options from '../UI_Options';
import UI_Factory from '../UI_Factory';
import UI_Activate from '../UI_Activate';
import UI_ResettingInput from '../UI_ResettingInput';
// u = utility
import { uSETFAKE } from '../utility/uSETFAKE';
// SS = Set State
import { SS_File } from '../Contect_File';
import { SS_UI } from '../Contect_UI/contect_Page';
import { SS_Img } from '../Contect_Img/contect_Img';
import { SS_OCR } from '../Contect_OCR/contect_OCR';
const Page_Header = (
{
Name,
Function
}
:{
Name:string
Function:(S:void)=>void
})=>{

    return (
        <div>
<UI_DisplayFlex 
// 1. File: Import Image Folders
JSX={[
<UI_Button 
    Name={"Import Image Folder"}
    Function={()=>alert('01')}
/>,
// 2. File: Export Text Folder
<UI_Button 
    Name={"Export TxT Files"}
    Function={()=>alert('01')}
/>,
// 3. File: Name Export Text Folder
<UI_ResettingInput
Name={"Export txt folder name"}
SS_Value={"uSETFAKE"}
setSS_Value={()=>{uSETFAKE("")}}
SS_DefaultValue={null}
/>,
// 4. File: Export Edited Image Folder
<UI_Button 
    Name={"Export Edited Image Folder"}
    Function={()=>alert('01')}
/>,
// 5. File: Name Export Image Folder
<UI_ResettingInput
Name={"Name Export Image Folder"}
SS_Value={"uSETFAKE"}
setSS_Value={()=>{uSETFAKE("")}}
SS_DefaultValue={null}
/>,
// 6. Img_: Rotation
<UI_ResettingInput
Name={"Rotation"}
SS_Value={"uSETFAKE"}
setSS_Value={()=>{uSETFAKE("")}}
SS_DefaultValue={null}
/>,
// 7. Img_: Color
// 8. OCR_: Language
// 9. OCR_: PSM
//10. OCR_: Operate OCR
//11. Img_: JSON Image Setting (Last)
//12. Img_: JSON OCR Setting (Last)
]}/>,
{//<UI_Options
//    Name={'Set Color'}
//    Options={['Color','Gray','ReverseGray']}
///>
}
    </div>
    )}

export default Page_Header