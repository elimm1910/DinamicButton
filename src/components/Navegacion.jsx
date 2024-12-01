import React from 'react';
import { Link } from 'react-router-dom'


function Navegacion() {
    return (
        <nav id="menu" className="navbar transparent navbar-expand-lg navbar-dark scrolling-navbar"> 
        <div className="container">
                <Link className="navbar-brand" to="/">ProgWeb</Link> 
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
                    <span className="navbar-toggler-icon"></span> 
                </button>  
                <div className="collapse navbar-collapse" id="navbarNav"> 
                    <ul className="navbar-nav ml-auto"> 
                        <li className="nav-item"> 
                            <Link className="nav-link"  to="/blog">Blog</Link> 
                        </li> 
                        <li className="nav-item"> 
                            <Link className="nav-link"  to="/contact">Contact</Link> 
                        </li> 
                        <li className="nav-item"> 
                            <Link className="nav-link"  to="/about">About</Link> 
                        </li> 
                    </ul> 
                </div> 
        </div>
    </nav>
    );
  }


  export default Navegacion;