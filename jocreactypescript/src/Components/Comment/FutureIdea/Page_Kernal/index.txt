import './index.css';

const UI_Button = (
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
    <button onClick={()=>Function()}>{Name}</button>
    </>
    )}

export default UI_Button