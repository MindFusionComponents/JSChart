define(["require", "exports", 'Scripts/MindFusion.Charting'], function (require, exports, m) {
    "use strict";
    var Charting = m.MindFusion.Charting;
    var Controls = m.MindFusion.Charting.Controls;
    var Collections = m.MindFusion.Charting.Collections;
    var Drawing = m.MindFusion.Charting.Drawing;
    var chartEl = document.getElementById('chart');
    chartEl.width = chartEl.offsetParent.clientWidth;
    chartEl.height = chartEl.offsetParent.clientHeight;
    var chart = new Controls.BarChart(chartEl, Charting.BarLayout.SideBySide);
    chart.theme.loadFrom('Resources/DefaultExt.xml');
    chart.titleMargin = new Charting.Margins(0, 0, 0, 0);
    chart.barSpacingRatio = 2;
    chart.legendMargin = new Charting.Margins(10, 10, 10, 10);
    chart.legendTitle = "Legend";
    chart.showLegend = true;
    chart.subtitleMargin = new Charting.Margins(0, 0, 0, 0);
    // create bar brushes
    var thirdBrush = new Drawing.Brush("#ce0000");
    var secondBrush = new Drawing.LinearGradientBrush("#003466", "#000063");
    var firstBrush = new Drawing.LinearGradientBrush("#e0e9e9", "#669acc");
    var labels = new Collections.List([
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]);
    var angle = 1;
    // create sample data series
    var series = new Collections.ObservableCollection(new Array(new Charting.BarSeries(new Collections.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), labels), new Charting.BarSeries(new Collections.List([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]), labels), new Charting.BarSeries(new Collections.List([2, 8, 13, 15, 13, 8, 2, 8, 13, 15, 13, 8]), labels)));
    series.item(0).title = "2016";
    series.item(1).title = "2015";
    series.item(2).title = "2014";
    chart.xAxis.title = "Profit (in mlns)";
    chart.yAxis.title = "Turnover (in mlns)";
    chart.series = series;
    chart.xAxis.interval = 1;
    // assign one brush per series
    chart.plot.seriesStyle = new Charting.PerSeriesStyle(new Collections.List([firstBrush, secondBrush, thirdBrush]));
    chart.theme.legendBackground = new Drawing.Brush("#e0e9e9");
    chart.theme.legendBorderStroke = new Drawing.Brush("#000000");
    chart.theme.axisTitleFontSize = 14;
    chart.theme.axisTitleFontName = "Verdana";
    chart.theme.axisLabelsFontName = "Verdana";
    chart.theme.dataLabelsFontName = "Verdana";
    chart.legendTitle = "Year";
    chart.theme.gridColor1 = chart.theme.gridColor2 = new Drawing.Color("#ffffff");
    chart.draw();
    // handlers
    document.getElementById('chbHorizontalBars').onchange = function () {
        chart.horizontalBars = !chart.horizontalBars;
        firstBrush.angle += (angle * 90);
        secondBrush.angle += (angle * 90);
        angle *= -1;
    };
    var chbShowDataLabels = document.getElementById('chbShowDataLabels');
    chbShowDataLabels.onchange = function () {
        chart.showDataLabels = chbShowDataLabels.checked ? Charting.LabelKinds.All : Charting.LabelKinds.None;
        chart.invalidate();
    };
    document.getElementById('chbShowXTicks').onchange = function () {
        chart.showXTicks = !chart.showXTicks;
    };
    document.getElementById('chbShowYTicks').onchange = function () {
        chart.showYTicks = !chart.showYTicks;
    };
    document.getElementById('chbShowXCoords').onchange = function () {
        chart.showXCoordinates = !chart.showXCoordinates;
    };
    document.getElementById('chbShowYCoords').onchange = function () {
        chart.showYCoordinates = !chart.showYCoordinates;
    };
    document.getElementById('chbShowZoomWidgets').onchange = function () {
        chart.showZoomWidgets = !chart.showZoomWidgets;
    };
    var cbxBarLayout = document.getElementById('cbxBarLayout');
    cbxBarLayout.onchange = function () {
        chart.barLayout = cbxBarLayout.selectedIndex;
    };
    var tbRatio = document.getElementById('tbRatio');
    tbRatio.onchange = function () {
        chart.barSpacingRatio = parseInt(tbRatio.value);
    };
    var cbxGridType = document.getElementById('cbxGridType');
    cbxGridType.onchange = function () {
        chart.gridType = cbxGridType.selectedIndex;
    };
    var tbXAxisMax = document.getElementById('tbXAxisMax');
    var tbXAxisMin = document.getElementById('tbXAxisMin');
    tbXAxisMax.onchange = function () {
        chart.xAxis.maxValue = Math.max(parseInt(tbXAxisMin.value) + 1, parseInt(tbXAxisMax.value));
    };
    tbXAxisMin.onchange = function () {
        chart.xAxis.minValue = Math.min(parseInt(tbXAxisMin.value), parseInt(tbXAxisMax.value) - 1);
    };
    var tbYAxisMax = document.getElementById('tbYAxisMax');
    var tbYAxisMin = document.getElementById('tbYAxisMin');
    tbYAxisMax.onchange = function () {
        chart.yAxis.maxValue = Math.max(parseInt(tbYAxisMin.value) + 1, parseInt(tbYAxisMax.value));
    };
    tbYAxisMin.onchange = function () {
        chart.yAxis.minValue = Math.min(parseInt(tbYAxisMin.value), parseInt(tbYAxisMax.value) - 1);
    };
    document.getElementById('chbShowLegend').onchange = function () {
        chart.showLegend = !chart.showLegend;
    };
});
//# sourceMappingURL=BarChart.js.map