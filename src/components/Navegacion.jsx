import React from 'react';
import { Link } from 'react-router-dom'


function Navegacion() {
    return (
        <nav id="menu" className="navbar transparent navbar-expand-lg navbar-dark scrolling-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">ProgWeb</Link>
            </div>
        </nav>
    );
}


export default Navegacion;