import m = require('Scripts/MindFusion.Charting');
import { Patient, PatientSeries } from "./Patient"

var Charting = m.MindFusion.Charting;
var Controls = m.MindFusion.Charting.Controls;
var Collections = m.MindFusion.Charting.Collections;
var Drawing = m.MindFusion.Charting.Drawing;

let chartEl = <HTMLCanvasElement>document.getElementById('chart');
chartEl.width = chartEl.offsetParent.clientWidth;
chartEl.height = chartEl.offsetParent.clientHeight;
let chart = new Controls.BubbleChart(chartEl);
chart.theme.loadFrom('Resources/DefaultExt.xml');

let collection = new Collections.ObservableCollection<m.MindFusion.Charting.Series>();
for (let i = 0; i < 3; i++)
{
	if (i == 0)
	{
		collection.add(new PatientSeries(
			new Array<Patient>(
				new Patient("Adams", 15, 70, "BMI > 25"),
				new Patient("Byrnes", 4, 20, "BMI > 25"),
				new Patient("Clyde", 25, 95, "BMI > 25"),
				new Patient("Davis", 32, 108, "BMI > 25"),
				new Patient("Evans", 51, 83, "BMI > 25")
			)));
	}
	if (i == 1)
	{
		collection.add(new PatientSeries(
			new Array<Patient>(
				new Patient("Fox", 35, 180, "BMI > 30"),
				new Patient("Gene", 14, 77, "BMI > 30"),
				new Patient("Harold", 7, 65, "BMI > 30"),
				new Patient("Ian", 48, 125, "BMI > 30"),
				new Patient("James", 67, 98, "BMI > 30")
			)));
	}
}

chart.series = collection;
chart.title = "Patient BM Index by Age";
chart.backColor = new Drawing.Color("#c0c0c0");

chart.xAxis.minValue = 0;
chart.xAxis.maxValue = 80;
chart.xAxis.title = "Age";
chart.yAxis.minValue = 0;
chart.yAxis.maxValue = 250;
chart.yAxis.title = "Weight";

chart.theme.commonSeriesFills = chart.theme.commonSeriesStrokes = new Collections.List<m.MindFusion.Charting.Drawing.Brush>([

    new Drawing.Brush(Drawing.Color.fromArgb(0.7, 206, 0, 0)),
    new Drawing.Brush(Drawing.Color.fromArgb(0.7, 45, 57, 86))
]);

chart.legendHorizontalAlignment = m.MindFusion.Charting.Components.LayoutAlignment.Far;
chart.theme.legendBackground = new Drawing.Brush("#9caac6");
chart.theme.highlightStroke = new Drawing.Brush("#c0c0c0");
chart.legendTitle = "";
chart.allowMoveLegend = false;
chart.gridType = Charting.GridType.Horizontal;
chart.theme.gridColor1 = chart.theme.gridColor2 = Drawing.Color.fromArgb(224, 233, 233);
chart.theme.gridLineStyle = Drawing.DashStyle.Dash;

chart.theme.titleFontSize = 20;
chart.theme.titleFontStyle = Drawing.FontStyle.Underline;

chart.draw();