import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from "../saga/rootWatcher";
import { reducer } from "./reducer";

const sagaMiddleware = createSagaMiddleware();

export const store  = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)
