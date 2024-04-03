import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <div>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/github'>Github</Link></li>
        </div>
    </div>
  )
}

export default Header