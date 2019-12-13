// reducers/authReducer

export const initialState = {
	// Here we set initial state
	cones: null,
	loaded: false,
	riskLevel: 10, // defaul risk level
	maxRiskLevel: 0,
	minRiskLevel: 0,
	error: null
};

export function storeReducer(state, action) {
	let cones;
	switch (action.type) {
		case "LOAD_CONES":
			cones = action.payload.cones;
			return {
				...state,
				loaded: true, // set loaded data
				cones,
				maxRiskLevel: (cones && Math.max(...cones.map(c => c.riskLevel))) || 0,
				minRiskLevel: (cones && Math.min(...cones.map(c => c.riskLevel))) || 0
			};
		case "UPDATE_CONES":
			cones = action.payload.cones;

			return {
				...state,
				cones,
				maxRiskLevel: (cones && Math.max(...cones.map(c => c.riskLevel))) || 0,
				minRiskLevel: (cones && Math.min(...cones.map(c => c.riskLevel))) || 0
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
