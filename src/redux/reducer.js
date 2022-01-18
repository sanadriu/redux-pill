import { combineReducers } from "redux";

import filterReducer from "./filter/reducer";

const reducer = combineReducers({
	filter: filterReducer,
});

export default reducer;
