import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UpcomingLaunchesPage from "../components/UpcomingLaunchesPage";
import PreviousLaunchesPage from "../components/PreviousLaunchesPage";
import HomePage from "../components/HomePage";
import LaunchSitePage from "../components/LaunchSitePage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = ()=> (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/previous-launches" component={PreviousLaunchesPage} />
            <Route path="/upcoming-launches" component={UpcomingLaunchesPage} />
            <Route path="/launch-sites" component={LaunchSitePage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter; 