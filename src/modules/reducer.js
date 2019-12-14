// reducers/authReducer

export const initialState = {
	// Here we set initial state
	cones: null,
	loaded: false,
	riskLevel: 10, // defaul risk level
	initialIvestement: 10000, // initial sum
	monthlySum: 200,
	fee: 0.01,
	years: 10,
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
		case "CHANGE_INITSUM":
			return {
				...state,
				initialIvestement: action.payload.initialIvestement
			};
		case "CHANGE_MONTHSUM":
			return {
				...state,
				monthlySum: action.payload.monthlySum
			};
		case "CHANGE_FEE":
			return {
				...state,
				fee: action.payload.fee
			};
		case "CHANGE_YEARS":
			return {
				...state,
				years: action.payload.years
			};
		default:
			return state;
	}
}
