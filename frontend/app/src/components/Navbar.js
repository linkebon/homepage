import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => (
    <nav className="navbar-nav navbarPadding bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
            <Link className="navbar-brand dropdown-toggle" data-toggle="dropdown" to="#" role="button"
                  aria-haspopup="true"
                  aria-expanded="false">Apps</Link>
            <div className="dropdown-menu bg-light" aria-labelledby="Preview">
                <Link className="dropdown-item text-dark" to="/todoapp">Todo app</Link>
                <Link className="dropdown-item text-dark" to="/twitterapp">Twitter app</Link>
                <Link className="dropdown-item text-dark" to="/counterapp">Counter app</Link>
                <Link className="dropdown-item text-dark" to="/buyhousecalculator">Buy house calculator</Link>
            </div>
            <Link className="navbar-brand float-right" to="https://www.linkedin.com/in/staffan-holmgren-0b39aa44/" target="_blank">Linkedin</Link>
            <Link className="navbar-brand float-right" to="https://twitter.com/linkebon" target="_blank">Twitter</Link>
            <Link className="navbar-brand float-right" to="https://github.com/linkebon" target="_blank">Github</Link>
        </div>
    </nav>
);

export default Navbar