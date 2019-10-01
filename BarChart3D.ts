import m = require('Scripts/MindFusion.Charting');

var Charting = m.MindFusion.Charting;
var Controls = m.MindFusion.Charting.Controls;
var Collections = m.MindFusion.Charting.Collections;
var Drawing = m.MindFusion.Charting.Drawing;

let chartEl = <HTMLCanvasElement>document.getElementById('chart');

let chart = new Controls.BarChart3D(chartEl, Charting.BarLayout.SideBySide);
chart.theme.loadFrom('Resources/DefaultExt.xml');

var bgImage;

chart.title = "Agricultural produce by type";

// create sample data
let labels = new Collections.List<string>(["Tomatoes", "Cucumbers", "Peppers", "Lettuce"]);
let collection = new Collections.ObservableCollection<m.MindFusion.Charting.Series>();

let series = new Charting.Series2D(new Collections.List<number>([10, 20, 30, 40]), new Collections.List<number>([50, 40, 50, 5]), labels);
series.title = "Traditional";
collection.add(series);

series = new Charting.Series2D(new Collections.List<number>([10, 20, 30, 40]), new Collections.List<number>([60, 10, 20, 80]), labels);
series.title = "Urban";
collection.add(series);

series = new Charting.Series2D(new Collections.List<number>([10, 20, 30, 40]), new Collections.List<number>([0, 60, 0, 90]), labels);
series.title = "Hydroponics";
collection.add(series);

chart.series = collection;

// set one color per series
chart.theme.commonSeriesFills = chart.theme.commonSeriesStrokes = new Collections.List<m.MindFusion.Charting.Drawing.Brush>([
    new Drawing.Brush(new Drawing.Color("#669acc")),
    new Drawing.Brush(new Drawing.Color("#003466")),
    new Drawing.Brush(new Drawing.Color("#ce0000"))
]);
chart.theme.commonSeriesStrokeThicknesses = new Collections.List<number>([10,10,10]);
// background
chart.backColor = new Drawing.Color("#e0e9e9");
chart.plotImageLocation = bgImage = 'Resources/bgimage.png';
chart.plotImageAlign = Drawing.ImageAlign.MiddleLeft;
chart.plotImageAutoSize = false;

// axis appearance
chart.xAxis.title = "";
chart.yAxis.title = "Quantity in tons";
chart.theme.axisStroke = chart.theme.axisLabelsBrush = new Drawing.Brush(new Drawing.Color("DimGray"));
chart.theme.axisStrokeThickness = 1;

// legend appearance
chart.legendTitle = "Agricultural type";
chart.theme.legendBackground = new Drawing.Brush(new Drawing.Color("#e0e9e9"));
chart.theme.legendBorderStroke = new Drawing.Brush(new Drawing.Color("DimGray"));
chart.theme.legendBorderStrokeThickness = 1;
chart.legendMargin = new Charting.Margins(80, 5, 5, 5);
chart.theme.axisTitleFontName = "Verdana";
chart.theme.axisLabelsFontName = "Verdana";
chart.theme.dataLabelsFontName = "Verdana";

chart.layoutPanel.margin = new Charting.Margins(10, 10, 10, 10);

chart.draw();


(document.getElementById('chbShowScatter') as HTMLInputElement).onchange = () =>
{
	chart.showScatter = !chart.showScatter;
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

(document.getElementById('chbAllowPan') as HTMLInputElement).onchange = () =>
{
	chart.allowPan = !chart.allowPan;
}

(document.getElementById('chbAllowMoveLegend') as HTMLInputElement).onchange = () =>
{
	chart.allowMoveLegend = !chart.allowMoveLegend;
}

(document.getElementById('chbAllowZoom') as HTMLInputElement).onchange = () =>
{
	chart.allowZoom = !chart.allowZoom;
}

(document.getElementById('btnResetZoom') as HTMLInputElement).onclick = () =>
{
	chart.resetZoom();
}

(document.getElementById('chbShowBackground') as HTMLInputElement).onchange = () =>
{
	if (chart.plotImageLocation != null)
		chart.plotImageLocation = null;
	else
		chart.plotImageLocation = bgImage;

	chart.draw();
}

let cbxBarLayout = document.getElementById('cbxBarLayout') as HTMLSelectElement;
cbxBarLayout.onchange = () =>
{
	chart.barLayout = cbxBarLayout.selectedIndex;
}

let cbxBarModel3D = document.getElementById('cbxBarModel3D') as HTMLSelectElement;
cbxBarModel3D.onchange = () =>
{
	chart.barModel = cbxBarModel3D.selectedIndex;
}
let cbLegendHorAlign = document.getElementById('cbLegendHorAlign') as HTMLSelectElement;
cbLegendHorAlign.onchange = () =>
{
	chart.legendHorizontalAlignment = cbLegendHorAlign.selectedIndex;
};

let cbLegendVerAlign = document.getElementById('cbLegendVerAlign') as HTMLSelectElement;
cbLegendVerAlign.onchange = () =>
{
	chart.legendVerticalAlignment = cbLegendVerAlign.selectedIndex;
};

let tbLegendMarginLeft = document.getElementById('tbLegendMarginLeft') as HTMLInputElement;
tbLegendMarginLeft.onchange = () =>
{
	let margin = chart.legendMargin;
	margin.left = parseInt(tbLegendMarginLeft.value);
	chart.legendMargin = margin;
	chart.invalidateLayout(chart.rootPanel);
	chart.draw();
}
let tbLegendMarginTop = document.getElementById('tbLegendMarginTop') as HTMLInputElement;
tbLegendMarginTop.onchange = () =>
{
	let margin = chart.legendMargin;
	margin.top = parseInt(tbLegendMarginTop.value);
	chart.legendMargin = margin;
	chart.invalidateLayout(chart.rootPanel);
	chart.draw();
}