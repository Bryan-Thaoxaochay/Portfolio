import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="navbar-brand side-link" href="/" style={{color: "white"}}>Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="navbar-brand side-link" href="/aboutme" style={{color: "white"}}>About Me</a>
                </li>
                <li className="nav-item">
                    <a className="navbar-brand side-link" href="/contact" style={{color: "white"}}>Contact</a>
                </li>
            </ul>
            </div>
        </div>
      </nav>
    )
}

export default Nav;