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
        <button className='btn btn-primary' onClick={()=>abc(-1)}>Back</button>&nbsp;
        <button className='btn btn-secondary' onClick={()=>abc(1)}>Next</button>

    </div>
  )
}

export default Navbar