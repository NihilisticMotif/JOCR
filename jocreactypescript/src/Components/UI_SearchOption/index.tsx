import './index.css';
import React, { FC, ReactNode } from 'react';
import { uID } from '../utility/uID';
import { useState,useEffect } from "react"
import UI_Title from '../UI_Title';
const UI_SearchOption = (
{
Name,
List,
SS_Option,
setSS_Option,
IsSearch
}
:{
Name:string
List:string[]
SS_Option:typeof List[number],
setSS_Option:(S:typeof List[number])=>void
IsSearch:boolean
})=>{

const[SS_SearchTerm,setSS_SearchTerm]=useState<string>('')

useEffect(()=>{
    setSS_Option(SS_Option)
},[SS_Option])

useEffect(()=>{
    setSS_Option(let_FilterList[0])
},[SS_SearchTerm])

const ID="deuidheihie"+uID(Name)+uID(Math.random().toString())
const let_FilterList=List.filter((word)=>
    word.toLowerCase().includes(SS_SearchTerm.toLowerCase())
)

function f_OnChange(){
let let_Input:string=(document.getElementById(ID) as HTMLInputElement).value.toString();
setSS_Option(let_Input)
}

let JSX_Title=<></>
if(Name!==''){
    JSX_Title=<UI_Title Name={Name}/>
}

let JSX_SearchInput=<></>
if(IsSearch){
    JSX_SearchInput=<input
    onChange={(e) => setSS_SearchTerm(e.target.value)}
    >
    </input>
}

    return (
<div>
    {JSX_Title}
    {JSX_SearchInput}
    <select
    id={ID}
    value={SS_Option}
    onChange={f_OnChange}
    >
        {let_FilterList.map((word,index)=>(
            <option key={index} value={word}>
                {word}
            </option>
        ))}
    </select>
</div>
    )}

export default UI_SearchOption