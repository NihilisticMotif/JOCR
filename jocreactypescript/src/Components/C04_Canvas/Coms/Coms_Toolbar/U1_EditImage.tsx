import logo_Crop from './logo_Crop.png'
// https://stackoverflow.com/questions/43823289/how-to-import-image-svg-png-in-a-react-component
// https://www.flaticon.com/free-icon/crop_4818201?term=crop&page=1&position=4&origin=tag&related_id=4818201
import logo_Shape from './logo_Shape.png'
import logo_UpsideDown from './logo_UpsideDown.png'

const U1_EditImage=(
{}:{}
)=>{

    return (
        <>
        <h1 className='C04id_Zoom' style={{marginTop:'10px'}}>Edit Image</h1>
    <div className='C04id_EditImage'>
    <button className='C04id_Button'><img  src={logo_Crop} style={{width:'100%',height:'100%'}} alt="fireSpot"/></button>
    <button className='C04id_Button'><img  src={logo_Shape} style={{width:'100%',height:'100%'}} alt="fireSpot"/></button>
    <button className='C04id_Button'><img  src={logo_UpsideDown} style={{width:'100%',height:'100%'}} alt="fireSpot"/></button>
    <button className='C04id_Button'>Text</button>
    <button className='C04id_Button'>Ok</button>
    <button className='C04id_Button' style={{fontSize:'16px',paddingLeft:'0px'}}>Reset</button>
    </div>
        </>
    )
}

export default U1_EditImage