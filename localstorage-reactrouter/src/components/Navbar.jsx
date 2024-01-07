import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const abc = useNavigate();
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/form">Form</Link>
            </li>
            <li>
                <Link to='/table'>Table</Link>
            </li>
        </ul>
        <button onClick={()=>abc(-1)}>Back</button>
        <button onClick={()=>abc(1)}>Next</button>

    </div>
  )
}

export default Navbar