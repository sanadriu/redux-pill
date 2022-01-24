import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const storeEnhancer = devTools ? compose(applyMiddleware(thunk), devTools) : compose(applyMiddleware(thunk));

const store = createStore(reducer, storeEnhancer);

export default store;
