import React, { Component, createFactory } from "react";

//Stateless Functional Component
//const Navbar = () =>
function NavBar (props) {

   //this.props not wroking functional components, remove this
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
     
        </a>
      </nav>
    );
  
}


export default NavBar;
