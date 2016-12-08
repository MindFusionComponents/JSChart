define(["require", "exports", 'Scripts/MindFusion.Charting'], function (require, exports, m) {
    "use strict";
    var Charting = m.MindFusion.Charting;
    var Controls = m.MindFusion.Charting.Controls;
    var Collections = m.MindFusion.Charting.Collections;
    var Drawing = m.MindFusion.Charting.Drawing;
    var chartEl = document.getElementById('lineChart');
    chartEl.width = chartEl.offsetParent.clientWidth;
    chartEl.height = chartEl.offsetParent.clientHeight;
    // create the chart
    var lineChart = new Controls.LineChart(chartEl);
    // create line brushes
    var firstBrush = new Drawing.Brush("skyBlue");
    var secondBrush = new Drawing.Brush("deepPink");
    var thirdBrush = new Drawing.Brush("green");
    lineChart.legendRenderer.background = new Drawing.Brush("khaki");
    lineChart.showZoomWidgets = true;
    // create sample data series
    var labels = new Collections.List([
        "one", "two", "three", "four", "five", "six",
        "seven", "eight", "nine", "ten", "eleven", "twelve"
    ]);
    var series1 = new Charting.Series2D(new Collections.List([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), new Collections.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), labels);
    series1.title = "Series 1";
    lineChart.series.add(series1);
    var series2 = new Charting.Series2D(new Collections.List([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), new Collections.List([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]), labels);
    series2.title = "Series 2";
    lineChart.series.add(series2);
    //lineChart.Series.Add(
    //				new FunctionSeries("x*Sin(x)+x+5", 12, 12)
    //				{ Title = "Series 3" });
    lineChart.xAxis.interval = 1;
    // assign one brush per series
    var style = new Charting.MixedSeriesStyle();
    style.commonFills = new Collections.List([firstBrush, secondBrush, thirdBrush]);
    style.commonStrokes = new Collections.List([firstBrush, secondBrush, thirdBrush]);
    style.uniformStrokeThickness = 5;
    lineChart.plot.seriesStyle = style;
    lineChart.draw();
    // handlers
    var gridType = document.getElementById('gridType');
    gridType.selectedIndex = lineChart.gridType;
    gridType.onchange = function () {
        lineChart.gridType = gridType.selectedIndex;
        lineChart.draw();
    };
    var lineType = document.getElementById('lineType');
    lineType.selectedIndex = lineChart.lineType;
    lineType.onchange = function () {
        lineChart.lineType = lineType.selectedIndex;
        lineChart.draw();
    };
    var xAxisMin = document.getElementById('xAxisMin');
    xAxisMin.valueAsNumber = lineChart.xAxis.effectiveMinValue;
    xAxisMin.onchange = function () {
        lineChart.xAxis.minValue = xAxisMin.valueAsNumber;
        lineChart.draw();
    };
    var xAxisMax = document.getElementById('xAxisMax');
    xAxisMax.valueAsNumber = lineChart.xAxis.effectiveMaxValue;
    xAxisMax.onchange = function () {
        lineChart.xAxis.maxValue = xAxisMax.valueAsNumber;
        lineChart.draw();
    };
    var yAxisMin = document.getElementById('yAxisMin');
    yAxisMin.valueAsNumber = lineChart.yAxis.effectiveMinValue;
    yAxisMin.onchange = function () {
        lineChart.yAxis.minValue = yAxisMin.valueAsNumber;
        lineChart.draw();
    };
    var yAxisMax = document.getElementById('yAxisMax');
    yAxisMax.valueAsNumber = lineChart.yAxis.effectiveMaxValue;
    yAxisMax.onchange = function () {
        lineChart.yAxis.maxValue = yAxisMax.valueAsNumber;
        lineChart.draw();
    };
    var showXticks = document.getElementById('showXticks');
    showXticks.checked = lineChart.showXTicks;
    showXticks.onchange = function () {
        lineChart.showXTicks = showXticks.checked;
        lineChart.draw();
    };
    var showYticks = document.getElementById('showYticks');
    showYticks.checked = lineChart.showYTicks;
    showYticks.onchange = function () {
        lineChart.showYTicks = showYticks.checked;
        lineChart.draw();
    };
    var showXCoords = document.getElementById('showXCoords');
    showXCoords.checked = lineChart.showXCoordinates;
    showXCoords.onchange = function () {
        lineChart.showXCoordinates = showXCoords.checked;
        lineChart.draw();
    };
    var showYCoords = document.getElementById('showYCoords');
    showYCoords.checked = lineChart.showYCoordinates;
    showYCoords.onchange = function () {
        lineChart.showYCoordinates = showYCoords.checked;
        lineChart.draw();
    };
    var showLegend = document.getElementById('showLegend');
    showLegend.checked = lineChart.showLegend;
    showLegend.onchange = function () {
        lineChart.showLegend = showLegend.checked;
        lineChart.draw();
    };
    var scrollGrid = document.getElementById('scrollGrid');
    scrollGrid.checked = lineChart.pinGrid;
    scrollGrid.onchange = function () {
        lineChart.pinGrid = scrollGrid.checked;
        lineChart.draw();
    };
    var showDataLabels = document.getElementById('showDataLabels');
    showDataLabels.checked = lineChart.showDataLabels == Charting.LabelKinds.All;
    showDataLabels.onchange = function () {
        if (showDataLabels.checked)
            lineChart.showDataLabels = Charting.LabelKinds.All;
        else
            lineChart.showDataLabels = Charting.LabelKinds.None;
        lineChart.draw();
    };
});
//# sourceMappingURL=LineChart.js.map