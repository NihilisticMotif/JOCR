import './U1_Affine.css'
const U1_Affine = (
//****************************************************************************
// INPUT
//****************************************************************************
{
setSS_UseEffect,
SS_IsActivate,
setSS_IsActivate,
}
:{
setSS_UseEffect:(S:boolean)=>void
SS_IsActivate:boolean[]
setSS_IsActivate:(S:boolean[])=>void,
})=>{
    //****************************************************************************
// FUNCTION_00: Zoom setting
//****************************************************************************
    const let_WidthTr='60px'
    function f_Gray(){
      setSS_UseEffect(true)
    }

    function f_RGB(){
      setSS_UseEffect(true)
    }
    return (
        <>
        <div className='C04id_Scalar' style={{display:'inline-block',marginLeft:'10px',margin:'auto'}}>
<h1>Edit Image</h1>
<tr>
    <td style={{width:let_WidthTr}} >Scale</td>
    <td><input></input></td>
    <td><button>Ok</button></td>
</tr>
<hr style={{visibility:'hidden',height:'2px',marginBottom:'-2px'}}/>
<tr>
    <td style={{width:let_WidthTr}} >Scale X</td>
    <td><input></input></td>
    <td><button>Ok</button></td>
</tr>
<hr style={{visibility:'hidden',height:'2px',marginBottom:'-2px'}}/>
<tr>
    <td style={{width:let_WidthTr}} >Scale Y</td>
    <td><input></input></td>
    <td><button>Ok</button></td>
</tr>
<hr style={{visibility:'hidden',height:'2px',marginBottom:'-2px'}}/>
<tr>
    <td style={{width:let_WidthTr}} >Rotate</td>
    <td><input></input></td>
    <td><button>Ok</button></td>
</tr>
<hr style={{visibility:'hidden',height:'2px',marginBottom:'-2px'}}/>
<tr>
    <td style={{width:let_WidthTr}} >Crop XL</td>
    <td><input></input></td>
    <td><button>Ok</button></td>
</tr>
<hr style={{visibility:'hidden',height:'2px',marginBottom:'-2px'}}/>
<tr>
    <td style={{width:let_WidthTr}} >Crop XR</td>
    <td><input></input></td>
    <td><button>Ok</button></td>
</tr>
<hr style={{visibility:'hidden',height:'2px',marginBottom:'-2px'}}/>
<tr>
    <td style={{width:let_WidthTr}} >Crop YU</td>
    <td><input></input></td>
    <td><button>Ok</button></td>
</tr>
<hr style={{visibility:'hidden',height:'2px',marginBottom:'-2px'}}/>
<tr>
    <td style={{width:let_WidthTr}} >Crop YD</td>
    <td><input></input></td>
    <td><button>Ok</button></td>
</tr>
{/*
<tr>
    <td>Scale X</td>
    <td><input></input></td>
</tr>
<tr>
    <td><button>Ok</button></td>
    <td><button>Reset</button></td>
</tr>
<tr>
    <td>Scale Y</td>
    <td><input></input></td>
</tr>
<tr>
    <td><button>Ok</button></td>
    <td><button>Reset</button></td>
</tr>
<tr>
    <td>Rotate</td>
    <td><input></input></td>
</tr>
<tr>
    <td><button>Ok</button></td>
    <td><button>Reset</button></td>
</tr>
<tr>
    <td>Crop X 1</td>
    <td><input></input></td>
</tr>
<tr>
    <td><button>Ok</button></td>
    <td><button>Reset</button></td>
</tr>
<tr>
    <td>Crop X 2</td>
    <td><input></input></td>
</tr>
<tr>
    <td><button>Ok</button></td>
    <td><button>Reset</button></td>
</tr>
<tr>
    <td>Crop Y 1</td>
    <td><input></input></td>
</tr>
<tr>
    <td><button>Ok</button></td>
    <td><button>Reset</button></td>
</tr>
<tr>
    <td>Crop Y 2</td>
    <td><input></input></td>
</tr>
<tr>
    <td><button>Ok</button></td>
    <td><button>Reset</button></td>
    </tr>*/}
    </div>
    </>
    )}

export default U1_Affine