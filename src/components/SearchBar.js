import React from "react";
import "../styles/SearchBar.css";

const SearchBar = (props) => (
    <section className="search-box">
        <i className="fas fa-search search-box__icon"></i>
        <input className="search-box__input" type="text" onFocus={props.handleClearSearch} onInput={props.handleFilter} placeholder="Search" />
    </section>
);

export default SearchBar;