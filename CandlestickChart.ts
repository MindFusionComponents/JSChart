import m = require('Scripts/MindFusion.Charting');

var Charting = m.MindFusion.Charting;
var Controls = m.MindFusion.Charting.Controls;
var Collections = m.MindFusion.Charting.Collections;
var Drawing = m.MindFusion.Charting.Drawing;

let chartEl = <HTMLCanvasElement>document.getElementById('chart');
chartEl.width = chartEl.offsetParent.clientWidth;
chartEl.height = chartEl.offsetParent.clientHeight;
let chart = new Controls.CandlestickChart(chartEl);

// create sample data
let dataList = new Collections.List<m.MindFusion.Charting.StockPrice>();
for (let i = 0; i < 30; i++)
{
	let open = Math.round(Math.random() * 100);
	let close = Math.round(Math.random() * 100);
	let low = open > close ? close - Math.round(Math.random() * 10) : open - Math.round(Math.random() * 10);
	let high = open < close ? close + Math.round(Math.random() * 10) : open + Math.round(Math.random() * 10);
	let date = new Date(new Date().getFullYear(), new Date().getMonth());
	let dataItem = new Charting.StockPrice(open, close, low, high, new Date(date.setDate(1 + i)));
	dataList.add(dataItem);
}

let series = new Charting.StockPriceSeries(dataList);
series.customDateTimeFormat = '{"day":"2-digit"}';

var data = new Collections.ObservableCollection<m.MindFusion.Charting.Series>();
data.add(series)

chart.series = data;

chart.title = "Deutsche Bank AG, Germany";
chart.titleBrush = new Drawing.Brush("white");
chart.titleFontStyle = Drawing.FontStyle.Italic | Drawing.FontStyle.Bold; 
chart.showLegend = false;
chart.showXCoordinates = false;
chart.showXTicks = false;

// background appearance
chart.gridType = Charting.GridType.Vertical;
chart.backColor = new Drawing.Color("darkGray");
chart.theme.gridColor1 = new Drawing.Color("darkGray");
chart.theme.gridColor2 = new Drawing.Color("gray");

// series style
chart.plot.seriesStyle = new Charting.CandlestickSeriesStyle(
	new Drawing.Brush("Tomato"),
	new Drawing.Brush("LawnGreen"),
	new Drawing.Brush("Black"),
	2, Drawing.DashStyle.Solid, <m.MindFusion.Charting.CandlestickRenderer>chart.plot.seriesRenderers.item(0));

chart.theme.uniformSeriesStroke = chart.theme.highlightStroke =
	chart.theme.dataLabelsBrush = chart.theme.axisLabelsBrush =
	chart.theme.axisTitleBrush = chart.theme.axisStroke = new Drawing.Brush("White");

chart.draw();

let tbCandlestickWidth = document.getElementById('tbCandlestickWidth') as HTMLInputElement;
tbCandlestickWidth.onchange = () =>
{
	chart.candlestickWidth = parseInt(tbCandlestickWidth.value);
}

let cbDateFormat = document.getElementById('cbDateFormat') as HTMLSelectElement;
cbDateFormat.onchange = () =>
{
	(chart.series.item(0) as m.MindFusion.Charting.StockPriceSeries).dateTimeFormat = cbDateFormat.selectedIndex;
};

let tbxCustomDateFormat = document.getElementById('tbxCustomDateFormat') as HTMLInputElement;
tbxCustomDateFormat.onchange = () =>
{
	(chart.series.item(0) as m.MindFusion.Charting.StockPriceSeries).customDateTimeFormat = tbxCustomDateFormat.value;
};

(document.getElementById('chbShowZoomWidgets') as HTMLInputElement).onchange = () =>
{
	chart.showZoomWidgets = !chart.showZoomWidgets;
}

let cbGridType = document.getElementById('cbGridType') as HTMLSelectElement;
cbGridType.onchange = () =>
{
	chart.gridType = cbGridType.selectedIndex;
};

(document.getElementById('chbPinGrid') as HTMLInputElement).onchange = () =>
{
	chart.pinGrid = !chart.pinGrid;
}