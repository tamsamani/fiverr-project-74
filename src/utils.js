function mapDate({ t, mu, sigma, fee, initialSum, monthlySum }) {
	// math functions
	const { exp, sqrt, floor } = Math;

	let yearlyReturn = mu - fee;
	let monthlyReturn = yearlyReturn / 12;
	let month = t * 12;

	let initialReturn = initialSum * exp(yearlyReturn * t);

	let overallReturn =
		monthlySum * exp(monthlyReturn * (month - floor(month))) * (exp(monthlyReturn * floor(month)) - 1.0);

	let median = initialReturn + overallReturn / (exp(monthlyReturn) - 1.0);

	return {
		median,
		upper95: exp(Math.log(median) + sqrt(t) * sigma * 1.645),
		lower05: exp(Math.log(median) - sqrt(t) * sigma * 1.645)
	};
}

const calculateTimeSeries = ({ years, mu, sigma, fee, initialSum, monthlySum }) => {
	const series = [];
	for (let k = 0; k <= 12 * years; k++) {
		series.push(mapDate({ t: k / 12, mu, sigma, fee, initialSum, monthlySum }));
	}

	// set each serie line.
	const allSeries = {
		median: series.map(serie => ({ y: serie.median, x: serie.x })),
		upper95: series.map(serie => ({ y: serie.upper95, x: serie.x })),
		lower05: series.map(serie => ({ y: serie.lower05, x: serie.x }))
	};

	//  We have remove a low long serial calculation by give above directly

	return allSeries;
};

export { calculateTimeSeries };
