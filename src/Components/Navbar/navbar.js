import React from 'react';
import './navbar.css';

const NavBar = () => {
    return ( 
        <nav>
          <div>logo</div>
          <div className="right-items">
            <div>Home</div>
            <div>Students</div>
            <div>Emails</div>
          </div>
        </nav>
     );
}
 
export default NavBar;