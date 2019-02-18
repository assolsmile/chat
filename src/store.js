import {applyMiddleware, compose, createStore} from "redux";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import sagas from './sagas/chat';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const setUpStore = () => {
  return createStore(
    reducer,
    composeEnhancer(
      applyMiddleware(
        sagaMiddleware
      ),
    ),
  );
};

const store = setUpStore();

sagaMiddleware.run(sagas);

export default store;
