// reducers/authReducer

export const initialState = {
	// Here we set initial state
	cones: null,
	loaded: false,
	riskLevel: 10, // defaul risk level
	error: null
};

export function storeReducer(state, action) {
	switch (action.type) {
		case "LOAD_CONES":
			return {
				...state,
				loaded: true, // set loaded data
				cones: action.payload.cones
			};
		case "UPDATE_CONES":
			return {
				...state,
				cones: action.payload.cones
			};
		case "LOAD_ERROR":
			return {
				...state,
				error: action.payload.error // set error message
			};
		case "CHANGE_RISK_LEVEL":
			return {
				...state,
				riskLevel: action.payload.riskLevel
			};
		default:
			return state;
	}
}
