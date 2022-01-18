import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const devToolsMiddleware = devTools ? compose(devTools) : compose();

const thunkMiddleware = applyMiddleware(thunk);

const store = createStore(reducer, thunkMiddleware);

export default store;
