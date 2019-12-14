import React, { useRef, useContext, useEffect } from "react";
import { Chart as ChartJs } from "chart.js";
import { calculateTimeSeries } from "../modules/utils";

import storeContext from "../modules/store";

function initChartData(state) {
	const { riskLevel, initialIvestement, fee, years, monthlySum, cones } = state;
	const { mu, sigma } = cones.filter(cone => cone.riskLevel == riskLevel)[0];

	const timeSeries = calculateTimeSeries({
		mu,
		sigma,
		years,
		initialSum: initialIvestement,
		monthlySum,
		fee
	});

	const labels = timeSeries.median.map((v, idx) => (idx % 12 == 0 ? idx / 12 : ""));
	const dataMedian = timeSeries.median.map(v => v.y);
	const dataGood = timeSeries.upper95.map(v => v.y);
	const dataBad = timeSeries.lower05.map(v => v.y);

	const data = {
		datasets: [
			{
				data: dataGood,
				label: "Good performance",
				borderColor: "rgba(100, 255, 100, 0.2)",
				fill: false,
				pointRadius: 0
			},
			{
				data: dataMedian,
				label: "Median performance",
				borderColor: "rgba(100, 100, 100, 0.2)",
				fill: false,
				pointRadius: 0
			},
			{
				data: dataBad,
				label: "Bad performance",
				borderColor: "rgba(255, 100, 100, 0.2)",
				fill: false,
				pointRadius: 0
			}
		],
		labels
	};
	return data;
}

function drawChart(canvasRef, state, dispatch) {
	const { riskLevel, cones } = state;

	const data = initChartData(state);

	const options = {
		responsive: false,
		maintainAspectRatio: false,
		scales: {
			xAxes: [
				{
					display: true,
					scaleLabel: { display: true, labelString: "Years" },
					gridLines: { drawOnChartArea: false }
				}
			],
			yAxes: [
				{
					display: true,
					scaleLabel: { display: true, labelString: "Valuation (EUR)" }
				}
			]
		}
	};

	const config = {
		type: "line",
		data,
		options
	};

	const canvas = canvasRef.current;

	if (!canvas) return null;

	const context = canvas.getContext("2d");
	return new ChartJs(context, config);
}

// this is more pereformanced but isn't use now
// FIXME find a way to update chat witout rendring a whole component
const updateChart = (chart, state) => {
	// console.log(chart, riskLevel, state.cones);
	if (chart) {
		let data = initChartData(state);
		console.log(chart);
		chart.data.datasets.forEach((dataset, i) => {
			dataset.data = data.datasets[i].data;
		});
		chart.update();
		console.log(data);
	}
};

const Chart = () => {
	console.log("Chart rendered");
	const [state, dispatch] = useContext(storeContext);
	const canvasRef = useRef(null);

	useEffect(() => {
		console.log("init");
		drawChart(canvasRef, state, dispatch);
	}, []);

	return (
		<div>
			<canvas ref={canvasRef} width={600} height={400} />
		</div>
	);
};

export default Chart;
