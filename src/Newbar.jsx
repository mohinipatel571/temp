import React from 'react'
import { NavLink } from "react-router-dom";
const Newbar=()=>
{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink 
       className="nav-link mx-4 px-4"
         to="/home"
         activeClassName ="welcome-active"
        >Home </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink 
         to="/About"className="nav-link mx-4 px-4" 
        activeClassName="welcome-active"
        >About</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink
         to="/contact" className="nav-link mx-4 px-4"
          activeClassName="welcome-active"
      
       >Contact </NavLink>
      </li>
      
    </ul>
  </div>
</nav>
        </>
    );

}
export default Newbar;
