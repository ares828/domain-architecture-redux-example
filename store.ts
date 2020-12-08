import {applyMiddleware, compose, createStore as _createStore} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import {ActionType} from "static/enums";
import {rootReducer} from './reducers';
import {rootEpics} from "./epics";

const epicMiddleware = createEpicMiddleware<ActionType>();

export const createStore = () => {
    const middlewares = [
        epicMiddleware,
    ];

    // @ts-ignore
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [middlewareEnhancer];

    const store = _createStore(rootReducer, {}, composeEnhancers(...enhancers));
    epicMiddleware.run(rootEpics);

    return store;
};
