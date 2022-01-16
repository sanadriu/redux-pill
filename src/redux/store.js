import { createStore, compose } from "redux";
import reducer from "./reducer";

const devTools = window.__REDUX__DEVTOOLS_EXTENSION__ && window.__REDUX__DEVTOOLS_EXTENSION__();
const appliedMiddleware = devTools ? compose(devTools) : compose();
const store = createStore(reducer, appliedMiddleware);

export default store;
