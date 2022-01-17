import { createStore, compose } from "redux";
import reducer from "./reducer";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const appliedMiddleware = devTools ? compose(devTools) : compose();
const store = createStore(reducer, appliedMiddleware);

export default store;
