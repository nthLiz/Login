import React from 'react'
import {Link} from 'react-router-dom';
function Layout() {
  return (
    <header>
        <div>React Login</div>
        <nav>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/login'>New Login</Link>
            </li>
          
        </nav>
    </header>
  )
}

export default Layout