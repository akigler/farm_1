import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const nav_color_style = {
    color : '#00FF7F'
};

function Navbar() {
return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item justify-content-end">
                        <Link className="nav-link" to="/projects/">Explore</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create-project/">Start A Project</Link>
                    </li>
                  
                    <li className="nav-item">
                        <Link className="navbar-brand mb-0 h1" to="/" style={nav_color_style}>PipesForGreens</Link>
                        {/*or name it pipinggreens or pipestogreens*/}
                    </li>
                    <li>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </li>
            
                    <li className="nav-item">
                        <Link className="nav-link" to="/login/">Login</Link>
                    </li>
                
                </ul>
            </div>
        </nav>
    </div>
    );
}

export default Navbar;