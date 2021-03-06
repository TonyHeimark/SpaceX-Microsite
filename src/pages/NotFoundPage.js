import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFoundPage.css";

const NotFoundPage = () => (
    <section className="notfoundpage_container">
        <h1>Ooops.. Page Not Found</h1>
        <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
        <Link to="/"><button type="button" className="button">Go back to home page</button></Link>
    </section>
);

export default NotFoundPage;