import React from 'react'
import python_logo from '../python_logo.svg'
import js_logo from '../javascript_logo.png'
import cpp_logo from '../cpp_logo.png'

import { useNavigate } from 'react-router-dom'

export default function HomePage() {
    let navigate = useNavigate();
  return (
    <main>
        <div className='home_title'>
            <span id="home_title_heading">
                LEARN TO CODE
            </span>
            <span id="home_title_subheading">
                FOR FREE
            </span>
        </div>
        <div className='home_courselinks'>
            <button onClick={()=>{navigate("/python")}}>
                <img src={python_logo} alt="Python"></img>
                <span>Python</span>
            </button>
            <button onClick={()=>{navigate("/javascript")}}>
                <img src={js_logo} alt="Javascript"></img>
                <span>Javascript</span>
            </button>
            <button onClick={()=>{navigate("/c++")}}>
                <img src={cpp_logo} alt="C++"></img>
                <span>C++</span>
            </button>
        </div>
    </main>
  )
}
