import { combineReducers } from "redux";

import filterReducer from "./filter/reducer";
import propertiesReducer from "./properties/reducer";
import authReducer from "./auth/reducer";

const reducer = combineReducers({
	filter: filterReducer,
	properties: propertiesReducer,
	auth: authReducer,
});

export default reducer;
