import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => (
    <nav className="navbar-nav navbarPadding bg-dark" >
        <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
            <Link className="navbar-brand" to="/apps">Apps</Link>
            <Link className="navbar-brand float-right" to="https://twitter.com/linkebon" target="_blank">Twitter</Link>
            <Link className="navbar-brand float-right" to="https://se.linkedin.com/" target="_blank">Linkedin</Link>
        </div>
    </nav>
);

export default Navbar