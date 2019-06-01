import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UpcomingLaunchesPage from "../pages/UpcomingLaunchesPage";
import PreviousLaunchesPage from "../pages/PreviousLaunchesPage";
import HomePage from "../pages/HomePage";
import LaunchSitePage from "../pages/LaunchSitePage";
import NotFoundPage from "../pages/NotFoundPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/App.css";

const AppRouter = ()=> (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/previous-launches" component={PreviousLaunchesPage} />
                <Route path="/upcoming-launches" component={UpcomingLaunchesPage} />
                <Route path="/launch-sites" component={LaunchSitePage} />
                <Route path="/" component={NotFoundPage} exact={false} />
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default AppRouter; 
