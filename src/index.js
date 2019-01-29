import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {buildStore} from './store/configureStore'; 
import {Provider as ReduxProvider} from 'react-redux'



const history = createHistory();
const store = buildStore(history);

const AppBundle = (
    <ReduxProvider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </ReduxProvider>
);

ReactDOM.render(AppBundle, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
