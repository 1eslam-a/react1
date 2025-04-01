import React, { Component } from 'react';

const NavBar = props => {
    return (   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">NavBar</a>
        <span className="badge bg-primary">{props.productsCount}</span>              
          </nav>);
}
 
export default NavBar;

