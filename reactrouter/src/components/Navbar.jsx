import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const naviget = useNavigate();
  return (
    <div>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contect">Contact</Link>
        </li>
        <li>
            <Link to="/blog">Blog</Link>
        </li>
      </ul>
      <button onClick={()=>naviget(-1)}>Back</button>
      <button onClick={()=>naviget(1)}>Next</button>
    </div>
  )
}

export default Navbar
