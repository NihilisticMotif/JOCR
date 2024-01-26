
import { useState } from "react"
import './language.css'
import {languageList} from './languageList'
const U_Language = (
//****************************************************************************
// INPUT
//****************************************************************************
{
    OCR_Languages,
    setOCR_Languages
}
:{
    OCR_Languages:string[][]
    setOCR_Languages:(S:string[][])=>void
})=>{
    const [searchTerm, setSearchTerm] = useState<string>('');
  const filteredLanguages = languageList.filter(([code, name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function f_Create(){
    let let_Input:string[]=(document.getElementById("C06id_AddLanguage") as HTMLInputElement).value.toString().split(',');
    let ocr_Language=[...OCR_Languages]
    let let_UpdateOCRLanguage=[let_Input,...ocr_Language]
    setOCR_Languages(let_UpdateOCRLanguage)
  }

//****************************************************************************
// JSX 00: Selected Languages
//****************************************************************************
    let JSX_SelectedLanguages=OCR_Languages.map((language,index)=>{
        function f_Delete(){
    let ocr_Language=[...OCR_Languages]
    let let_UpdateOCRLanguage=ocr_Language.filter((_, i) => i !== index);
    setOCR_Languages(let_UpdateOCRLanguage)

        }
        return(<><div style={{width:'175px'}}>
    <tr style={{width:'100%'}}>
    <td></td>
    <td><button onClick={f_Delete}>X</button></td>
    <td>{language[1]} ({language[0]})</td>
    </tr>
        </div>
        <hr style={{marginTop:'3px'}} />
        </>)
    })
//****************************************************************************
// OUTPUT
//****************************************************************************

    const let_WidthTr='50px'
    return (
        <>
<div className='C06id_LanguageDIV'>
    <div className='C06id_languageHeader'>
<tr>
    <td><h1 style={{marginTop:'2px',marginBottom:'2px',fontSize:'15px'}}>Languages</h1></td>
</tr>
<tr>
<div style={{display:'block'}}>
<input
        type="text"
        placeholder="Search for a language"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{fontSize:'15px',width:'150px'}}
      />
      <div style={{display:'flex'}}>
      <select id="C06id_AddLanguage" style={{ width: '120px' }}>
        {filteredLanguages.map(([code, name], index) => (
          <option key={index} value={[code,name]}
          >
            {code} ({name})
          </option>
        ))}
      </select>
      <button style={{height:'20px',marginTop:'10px'}} onClick={f_Create}>Add</button>
      </div>
</div>
</tr>
</div>
<div className='C06id_LanguageList'>
{JSX_SelectedLanguages}
</div>
</div>
</>
    )}

export default U_Language