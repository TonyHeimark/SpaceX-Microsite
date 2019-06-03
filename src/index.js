import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import LoadingScreen from "./components/LoadingScreen";
import AppRouter from './routes/AppRoutes';
import Fade from "react-reveal/Fade";


ReactDOM.render(<LoadingScreen />, document.getElementById('root'));

setTimeout(() =>{
    ReactDOM.render(<Fade><AppRouter /></Fade>, document.getElementById('root'));
}, 4000)


