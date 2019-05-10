import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <h1>SpaceX</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/previous-launches" activeClassName="is-active">Previous Launches</NavLink>
        <NavLink to="/upcoming-launches" activeClassName="is-active">Upcoming Launches</NavLink>
        <NavLink to="/launch-sites" activeClassName="is-active">Launch Sites</NavLink>
    </header>
);

export default Header;