import m = require('Scripts/MindFusion.Charting');

var Charting = m.MindFusion.Charting;
var Controls = m.MindFusion.Charting.Controls;
var Collections = m.MindFusion.Charting.Collections;
var Drawing = m.MindFusion.Charting.Drawing;

let areaChartEl = <HTMLCanvasElement>document.getElementById('areaChart');
areaChartEl.width = areaChartEl.offsetParent.clientWidth;
areaChartEl.height = areaChartEl.offsetParent.clientHeight;

// create the chart
let areaChart = new Controls.AreaChart(areaChartEl);
areaChart.areaOpacity = 0.5;

// create bar brushes
let firstBrush = new Drawing.LinearGradientBrush("LightGreen", "LightBlue");
let secondBrush = new Drawing.LinearGradientBrush("Yellow", "Red");
let thirdBrush = new Drawing.Brush("Khaki");

const labels = new Collections.List<string>([
	"one", "two", "three", "four", "five", "six",
	"seven", "eight", "nine", "ten", "eleven", "twelve"
]);

var angle: number = 1;

// create sample data series
let series = new Collections.ObservableCollection<m.MindFusion.Charting.Series>(
	new Array<m.MindFusion.Charting.BarSeries>(
		new Charting.BarSeries(new Collections.List<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), labels),
		new Charting.BarSeries(new Collections.List<number>([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]), labels),
		new Charting.BarSeries(new Collections.List<number>([2, 8, 13, 15, 13, 8, 2, 8, 13, 15, 13, 8]), labels)
	));
series.item(0).title = "Series 1";
series.item(1).title = "Series 2";
series.item(2).title = "Series 3";
areaChart.series = series;

areaChart.xAxis.interval = 1;

// assign one brush per series
areaChart.plot.seriesStyle = new Charting.PerSeriesStyle(new Collections.List<m.MindFusion.Charting.Drawing.Brush>([firstBrush, secondBrush, thirdBrush]));

areaChart.draw();

// handlers

let lineType = document.getElementById('lineType') as HTMLSelectElement;
lineType.selectedIndex = areaChart.gridType;
lineType.onchange = () => {
	areaChart.lineType = lineType.selectedIndex;
	areaChart.draw();
};

let areaOpacity = document.getElementById('areaOpacity') as HTMLInputElement;
areaOpacity.valueAsNumber = areaChart.areaOpacity * 100;
areaOpacity.onchange = () => {
	areaChart.areaOpacity = areaOpacity.valueAsNumber / 100;
	areaChart.draw();
};

let showDataLabels = document.getElementById('showDataLabels') as HTMLInputElement;
showDataLabels.checked = areaChart.showDataLabels == Charting.LabelKinds.All;
showDataLabels.onchange = () => {
	if (showDataLabels.checked)
		areaChart.showDataLabels = Charting.LabelKinds.All;
	else
		areaChart.showDataLabels = Charting.LabelKinds.None;
	areaChart.draw();
};



