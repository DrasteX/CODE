import React from 'react'
import logo_code from './logo_code.png'
import { useNavigate } from 'react-router-dom'
export default function NavigationBar() {
  let navigate = useNavigate()
  return (
    <nav>
        <div className="nav_left" onClick={()=>{navigate("/")}}>
            <img src={logo_code} alt="page_logo"></img>
            <span>CODE</span>
        </div>
        <div className='nav_right'>
            <button>Community</button>
            <button>Resources</button>
        </div>
    </nav>
  )
}
