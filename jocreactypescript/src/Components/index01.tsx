
// Filename - Example01.js
 
// Importing modules
import React, { useState, useEffect } from "react";
//import axios from "axios";

function Example01() {
    const[SS_Hello,setSS_Hello]=useState<string>('Error')
 
    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/cnn").then((res) =>
            res.json().then((data) => {setSS_Hello(data.py)
            })
        );
    }, []);
 
    return (
        <div className="Example01">
            <header className="Example01-header">
                <h1>React and flask</h1>
                <p>{SS_Hello}</p>
            </header>
        </div>
    );
}
 
export default Example01;