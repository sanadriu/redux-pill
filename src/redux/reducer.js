import { combineReducers } from "redux";

import filterReducer from "./filter/reducer";
import requestReducer from "./request/reducer";

const reducer = combineReducers({
	filter: filterReducer,
	properties: requestReducer,
});

export default reducer;
