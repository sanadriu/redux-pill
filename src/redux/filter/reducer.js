import { TOGGLE_PROPERTY, SET_PROPERTY } from "./types";
import initialState from "./state";

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_PROPERTY: {
			const { property, value } = action.payload;

			const index = state[property].indexOf(value);

			if (index === -1) {
				state[property].push(value);
			} else {
				state[property].splice(index, 1);
			}

			return { ...state };
		}
		case SET_PROPERTY: {
			const { property, value } = action.payload;

			state[property] = value;

			return { ...state };
		}
		default: {
			return state;
		}
	}
}

// if (index === -1) {
// 	return {
// 		...state,
// 		[property]: [...state[property], value],
// 	};
// } else {
// 	return {
// 		...state,
// 		[property]: state[property].filter((item) => item !== value),
// 	};
// }
