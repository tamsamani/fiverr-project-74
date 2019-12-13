import React, { useRef, useContext, useState, useEffect } from "react";
import { Chart as ChartJs } from "chart.js";
import { calculateTimeSeries } from "../modules/utils";

import storeContext from "../modules/store";

function initChartData(riskLevel, cones) {
	const { mu, sigma } = cones.filter(cone => cone.riskLevel == riskLevel)[0];
	const fee = 0.01;

	const timeSeries = calculateTimeSeries({ mu, sigma, years: 10, initialSum: 10000, monthlySum: 200, fee });

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

	const data = initChartData(riskLevel, cones);

	const options = {
		responsive: false,
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

const Chart = () => {
	const [state, dispatch] = useContext(storeContext);
	const canvasRef = useRef(null);
	const [chart, setChart] = useState(null);

	useEffect(() => {
		const initChart = drawChart(canvasRef, state, dispatch);
		setChart(initChart);
	}, []);

	return (
		<div>
			<canvas ref={canvasRef} width={600} height={400} />
		</div>
	);
};

export default Chart;
