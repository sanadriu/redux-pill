import { combineReducers } from "redux";

import filterReducer from "./filter/reducer";
import propertiesReducer from "./properties/reducer";

const reducer = combineReducers({
	filter: filterReducer,
	properties: propertiesReducer,
});

export default reducer;
