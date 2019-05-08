import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Moment from 'react-moment';

Moment.startPooledTimer();

ReactDOM.render(<App />, document.getElementById('root'));

