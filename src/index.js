import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import promise from 'redux-promise';

import Homepage from './components/Homepage.jsx'
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Homepage} />
            </Switch>
        </div>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
