

const U1_ShapeTextSetting = (
//****************************************************************************
// INPUT
//****************************************************************************
{
SS_IsShapeSetting,
setSS_IsShapeSetting,
}
:{
SS_IsShapeSetting:boolean,
setSS_IsShapeSetting:(S:boolean)=>void
})=>{

/*
Note
* SS_IsShapeSetting = Edit Image Setting
Shape
* Attribute
* 1. Type 
* 2. Line Color
* 3. Line Width
* 4. Shape Color
* Type
* 1. Rectangle
* 2. Circle
* 3. Line
* 4. X Line
* 5. Y Line

Text
* Attribute
* 1. Font Name
* 2. Font Size
* 3. Color
* 4. Utility
*/

  let JSX_Setting=<></>
  if(SS_IsShapeSetting===true){
    JSX_Setting=<div className='C04id_EditBody'>
      <hr className='C04id_EditSetting'/>
    <div className='C04id_EditSettingRow'>
      <h1>Type        </h1>
      <select id="cars" name="cars" className='C04id_EditOkSet'>
        <option value="volvo">Rectangle</option>
        <option value="volvo">Rectangle frame</option>
        <option value="saab">Circle</option>
        <option value="volvo">Circle frame</option>
        <option value="mercedes">Arrow</option>
        <option value="mercedes">2 Ways Arrow</option>
        <option value="audi">Line</option>
        <option value="audi">LineX</option>
        <option value="audi">LineY</option>
      </select>
    </div>
    <hr className='C04id_EditSetting'/>
    <div className='C04id_EditSettingRow'>
      <h1>Line Color  </h1>
      <input type="color" id="favcolor" name="favcolor" value="#ff0000" className='C04id_EditOkSet'></input>
    </div>
    <hr className='C04id_EditSetting'/>
    <div className='C04id_EditSettingRow'>
      <h1>Line Width  </h1>
      <input className='C04id_EditOkSet'></input>
    </div>
    <hr className='C04id_EditSetting'/>
    <div className='C04id_EditSettingRow'>
      <h1>Shape Color </h1>
      <input type="color" id="favcolor" name="favcolor" value="#ff0000" className='C04id_EditOkSet'></input>
    </div>
    <hr className='C04id_EditSetting'/>
    </div>
  }
  else{
    JSX_Setting=<div className='C04id_EditBody'>
      <hr className='C04id_EditSetting'/>
    <div className='C04id_EditSettingRow'> 
      <h1>Font Name</h1>
      <select id="cars" name="cars" className='C04id_EditOkSet'>
        <option value="volvo">Arial</option>
      </select>
    </div>
    <hr className='C04id_EditSetting'/>
    <div className='C04id_EditSettingRow'>
      <h1>Font Size</h1>
      <input className='C04id_EditOkSet'></input>
    </div>
    <hr className='C04id_EditSetting'/>
    <div className='C04id_EditSettingRow'> 
      <h1>Color</h1>
      <input type="color" id="favcolor" name="favcolor" value="#ff0000" className='C04id_EditOkSet'></input>
    </div>
    <hr className='C04id_EditSetting'/>
    <div className='C04id_EditSettingRow'>
      <h1>Utility</h1>
      <select id="cars" name="cars" className='C04id_EditOkSet'>
        <option value="volvo">B</option>
        <option value="saab">I</option>
        <option value="mercedes">None</option>
        <option value="mercedes">Line</option>
      </select>
    </div>
    <hr className='C04id_EditSetting'/>
    </div>
  }

//****************************************************************************
// OUTPUT
//****************************************************************************
return(
  <>
  <div className='C04id_Toolbar'
    style={{
      width:`${200}px`,
      height:`calc(100vh - ${143+520}px)`,
      }}>

    {//****************************************************************************
    // Edit Image Setting
    //****************************************************************************
    }
    <hr/>
    <h1 className='C04id_Zoom' style={{marginTop:'10px'}}>Edit Image Setting</h1>
    <div className='C04id_EditSetting'>
    <button className='C04id_Button' style={{marginLeft:'15px'}} onClick={()=>{setSS_IsShapeSetting(true)}}>Shape</button>
    <button className='C04id_Button' style={{marginLeft:'20px'}} onClick={()=>{setSS_IsShapeSetting(false)}}>Text</button>
    </div>
    {JSX_Setting}
  </div>
  </>
  )
}

export default U1_ShapeTextSetting