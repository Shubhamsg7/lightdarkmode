import React, { useEffect, useState } from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";

function App() {

  const getMode = () =>{
    const initialMode = localStorage.getItem("mode")
      if(initialMode == null){
        if(window.matchMedia("(prefers-color-scheme:dark)").matches){
          return true
        }else{
          return false
        }  
      }else{
        return JSON.parse(localStorage.getItem("mode"))
      }
  }

  const [dark,setMode]=useState(getMode())
  useEffect(()=>{
    localStorage.setItem("mode",JSON.stringify(dark))
  },[dark])

  return (
    <>
      <div className={dark ? "App dark-mode":"App"}>
        <nav>
          <div className="nav-wrapper">
            <div className="switch">
              <label className="label">
                Off
                <input type="checkbox" checked={dark} onChange={()=>setMode(!dark)} />
                <span className="lever"></span>
                On
              </label>
            </div>
          </div>
        </nav>
        <div className="content">
          <h1>{dark?"Dark Mode is On" : "Light Mode is On"}</h1>
          <p>want to see sime magic? press toggle button</p>
        </div>
      </div>
    </>
  )
}

export default App;
