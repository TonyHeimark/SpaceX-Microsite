import React from "react";
import "../styles/Header.css"
import { NavLink } from "react-router-dom";

export default class App extends React.Component{

    constructor(props){
        super(props)

        this.state={
            navStyle: "nav nav-hide"
        }
    }

    handleHamburger = () => {
        if (this.state.navStyle === "nav nav-show"){
          setTimeout(() => {
            this.setState(() => ({
              navStyle: "nav nav-fade"
              }))
          }, 50)
          setTimeout(() => {
            this.setState(() => ({
              navStyle: "nav nav-hide"
            }))
          }, 400);
        } else {
          this.setState(() => ({
            navStyle: "nav nav-show"
          }))
        }
    }
        
    render(){ 
        return(
            <header className="header">
                <div className="header_inner">
                    <a href="/"><img className="logo" src={require("../images/spacex_logo_white.png")} alt="SpaceX logo" /></a>
                <div onClick={this.handleHamburger} className={ this.state.navStyle === "nav nav-show" ? "change hamburger" : "hamburger"}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <nav className={this.state.navStyle} onClick={window.innerWidth < 1024 ? this.handleHamburger : undefined}>
                    <NavLink to="/" className="nav_link" activeClassName="is-active" exact={true}>Home</NavLink>
                    <NavLink to="/upcoming-launches" className="nav_link" activeClassName="is-active">Upcoming Launches</NavLink>
                    <NavLink to="/previous-launches" className="nav_link" activeClassName="is-active">Previous Launches</NavLink>
                    <NavLink to="/launch-sites" className="nav_link" activeClassName="is-active">Launch Sites</NavLink>
                </nav>
                </div>
            </header>
        );
    }
}