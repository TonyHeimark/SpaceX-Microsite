import React from "react";
import "../styles/Header.css"
import { NavLink } from "react-router-dom";

const Header = () => (
    <header className="header">
        <div className="header_inner">
            <img className="logo" src={require("../images/spacex_logo_white.png")} />
        <nav className="nav">
            <NavLink to="/" className="nav_link" activeClassName="is-active" exact={true}>Home</NavLink>
            <NavLink to="/previous-launches" className="nav_link" activeClassName="is-active">Previous Launches</NavLink>
            <NavLink to="/upcoming-launches" className="nav_link" activeClassName="is-active">Upcoming Launches</NavLink>
            <NavLink to="/launch-sites" className="nav_link" activeClassName="is-active">Launch Sites</NavLink>
        </nav>
        </div>
    </header>
);

export default Header;