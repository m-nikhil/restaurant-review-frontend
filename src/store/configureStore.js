import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import {appReducer} from "./appReducer";

const middlewares = [ReduxThunk];
const rootReducer = ({
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const INITIAL_STATE = {};

export const buildStore = (history) => {
    const middleware = routerMiddleware(history);
    return createStore(
        combineReducers({
            ...rootReducer,
            routing: routerReducer
        }),
        INITIAL_STATE,
        composeEnhancers(applyMiddleware(middleware, ...middlewares))
    )
};
