import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRoutes';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

