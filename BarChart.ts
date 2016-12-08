import m = require('Scripts/MindFusion.Charting');

var Charting = m.MindFusion.Charting;
var Controls = m.MindFusion.Charting.Controls;
var Collections = m.MindFusion.Charting.Collections;
var Drawing = m.MindFusion.Charting.Drawing;

let chartEl = <HTMLCanvasElement>document.getElementById('chart');
chartEl.width = chartEl.offsetParent.clientWidth;
chartEl.height = chartEl.offsetParent.clientHeight;

let chart = new Controls.BarChart(chartEl, Charting.BarLayout.SideBySide);
chart.titleMargin = new Charting.Margins(0, 0, 0, 0);
chart.barSpacingRatio = 2;
chart.legendMargin = new Charting.Margins(10, 10, 10, 10);
chart.legendTitle = "Legend"
chart.showLegend = true;
chart.subtitleMargin = new Charting.Margins(0, 0, 0, 0);

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
chart.series = series;

chart.xAxis.interval = 1;

// assign one brush per series
chart.plot.seriesStyle = new Charting.PerSeriesStyle(new Collections.List<m.MindFusion.Charting.Drawing.Brush>([firstBrush, secondBrush, thirdBrush]));

chart.draw();

// handlers

(document.getElementById('chbHorizontalBars') as HTMLInputElement).onchange = () =>
{
	chart.horizontalBars = !chart.horizontalBars;
	firstBrush.angle += (angle * 90);
	secondBrush.angle += (angle * 90);
	angle *= -1;
}

let chbShowDataLabels = document.getElementById('chbShowDataLabels') as HTMLInputElement;
chbShowDataLabels.onchange = () =>
{
	chart.showDataLabels = chbShowDataLabels.checked ? Charting.LabelKinds.All : Charting.LabelKinds.None;
	chart.invalidate();
}

(document.getElementById('chbShowXTicks') as HTMLInputElement).onchange = () =>
{
	chart.showXTicks = !chart.showXTicks;
}

(document.getElementById('chbShowYTicks') as HTMLInputElement).onchange = () =>
{
	chart.showYTicks = !chart.showYTicks;
}

(document.getElementById('chbShowXCoords') as HTMLInputElement).onchange = () =>
{
	chart.showXCoordinates = !chart.showXCoordinates;
}

(document.getElementById('chbShowYCoords') as HTMLInputElement).onchange = () =>
{
	chart.showYCoordinates = !chart.showYCoordinates;
}

(document.getElementById('chbShowZoomWidgets') as HTMLInputElement).onchange = () =>
{
	chart.showZoomWidgets = !chart.showZoomWidgets;
}

let cbxBarLayout = document.getElementById('cbxBarLayout') as HTMLSelectElement;
cbxBarLayout.onchange = () =>
{
	chart.barLayout = cbxBarLayout.selectedIndex;
}

let tbRatio = document.getElementById('tbRatio') as HTMLInputElement;
tbRatio.onchange = () =>
{
	chart.barSpacingRatio = parseInt(tbRatio.value);
}

let cbxGridType = document.getElementById('cbxGridType') as HTMLSelectElement;
cbxGridType.onchange = () =>
{
	chart.gridType = cbxGridType.selectedIndex;
}

let tbXAxisMax = document.getElementById('tbXAxisMax') as HTMLInputElement;
let tbXAxisMin = document.getElementById('tbXAxisMin') as HTMLInputElement;
tbXAxisMax.onchange = () =>
{
	chart.xAxis.maxValue = Math.max(parseInt(tbXAxisMin.value) + 1, parseInt(tbXAxisMax.value));
}
tbXAxisMin.onchange = () =>
{
	chart.xAxis.minValue = Math.min(parseInt(tbXAxisMin.value), parseInt(tbXAxisMax.value) - 1);
}

let tbYAxisMax = document.getElementById('tbYAxisMax') as HTMLInputElement;
let tbYAxisMin = document.getElementById('tbYAxisMin') as HTMLInputElement;
tbYAxisMax.onchange = () =>
{
	chart.yAxis.maxValue = Math.max(parseInt(tbYAxisMin.value) + 1, parseInt(tbYAxisMax.value));
}
tbYAxisMin.onchange = () =>
{
	chart.yAxis.minValue = Math.min(parseInt(tbYAxisMin.value), parseInt(tbYAxisMax.value) - 1);
}

(document.getElementById('chbShowLegend') as HTMLInputElement).onchange = () =>
{
	chart.showLegend = !chart.showLegend;
}
