define(["require", "exports", 'Scripts/MindFusion.Charting'], function (require, exports, m) {
    "use strict";
    var Charting = m.MindFusion.Charting;
    var Controls = m.MindFusion.Charting.Controls;
    var Collections = m.MindFusion.Charting.Collections;
    var Drawing = m.MindFusion.Charting.Drawing;
    var chartEl = document.getElementById('chart');
    chartEl.width = chartEl.offsetParent.clientWidth;
    chartEl.height = chartEl.offsetParent.clientHeight;
    var chart = new Controls.BubbleChart(chartEl);
    //chart.theme.loadFrom('Resources/DefaultExt.xml');
    // bubble chart requires three dimensional data;
    // two dimensions for position and one for size
    var series3D1 = new Charting.PointSeries3D(new Collections.List([
        new Charting.Point3D(0.32, 81, 9.5 * 10),
        new Charting.Point3D(0.39, 66, 7.8 * 10),
        new Charting.Point3D(0.75, 65, 7.6 * 10),
        new Charting.Point3D(0.49, 60, 7.1 * 10)
    ]), new Collections.List(["Germany", "France", "UK", "Italy"]));
    series3D1.title = ">50 000 000";
    var series3D2 = new Charting.PointSeries3D(new Collections.List([
        new Charting.Point3D(-0.28, 46, 5.4 * 10),
        new Charting.Point3D(-0.32, 42, 5 * 10),
        new Charting.Point3D(0.05, 38, 4.5 * 10),
        new Charting.Point3D(-0.4, 19, 2.3 * 10)
    ]), new Collections.List(["Spain", "Ukraine", "Poland", "Romania"]));
    series3D2.title = "<50 000 000";
    var data = new Collections.ObservableCollection();
    data.add(series3D1);
    data.add(series3D2);
    chart.series = data;
    // axis titles and ranges
    chart.xAxis.title = "Average relative annual growth (%)";
    chart.xAxis.minValue = -1;
    chart.xAxis.maxValue = 1;
    chart.yAxis.title = "July 1, 2015 projection";
    chart.yAxis.minValue = 0;
    chart.yAxis.maxValue = 100;
    // background appearance
    chart.showZoomWidgets = true;
    chart.gridType = Charting.GridType.Vertical;
    chart.backColor = new Drawing.Color("#2d3956");
    chart.theme.gridColor1 = Drawing.Color.fromArgb(0.4, 45, 57, 86);
    chart.theme.gridColor2 = Drawing.Color.fromArgb(1, 97, 106, 127);
    chart.theme.legendBackground = new Drawing.Brush("#2d3956");
    // series colors
    chart.theme.commonSeriesFills = new Collections.List([
        new Drawing.LinearGradientBrush("Transparent", "#ce0000"),
        new Drawing.LinearGradientBrush("Transparent", "#e0e9e9")
    ]);
    var light = new Drawing.Brush("#e0e9e9");
    chart.theme.uniformSeriesStroke = chart.theme.highlightStroke =
        chart.theme.dataLabelsBrush = chart.theme.legendTitleBrush =
            chart.theme.legendBorderStroke = chart.theme.axisLabelsBrush =
                chart.theme.axisTitleBrush = chart.theme.axisStroke = light;
    chart.theme.highlightStrokeDashStyle = Drawing.DashStyle.Dot;
    chart.draw();
    document.getElementById('chbShowScatter').onchange = function () {
        chart.showScatter = !chart.showScatter;
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
    var cbGridType = document.getElementById('cbGridType');
    cbGridType.onchange = function () {
        chart.gridType = cbGridType.selectedIndex;
    };
    document.getElementById('chbPinGrid').onchange = function () {
        chart.pinGrid = !chart.pinGrid;
    };
    document.getElementById('chbAllowPan').onchange = function () {
        chart.allowPan = !chart.allowPan;
    };
    document.getElementById('chbAllowMoveLegend').onchange = function () {
        chart.allowMoveLegend = !chart.allowMoveLegend;
    };
    var cbLegendHorAlign = document.getElementById('cbLegendHorAlign');
    cbLegendHorAlign.onchange = function () {
        chart.legendHorizontalAlignment = cbLegendHorAlign.selectedIndex;
    };
    var cbLegendVerAlign = document.getElementById('cbLegendVerAlign');
    cbLegendVerAlign.onchange = function () {
        chart.legendVerticalAlignment = cbLegendVerAlign.selectedIndex;
    };
    var tbLegendMarginLeft = document.getElementById('tbLegendMarginLeft');
    tbLegendMarginLeft.onchange = function () {
        var margin = chart.legendMargin;
        margin.left = parseInt(tbLegendMarginLeft.value);
        chart.legendMargin = margin;
        chart.invalidateLayout(chart.rootPanel);
        chart.draw();
    };
    var tbLegendMarginTop = document.getElementById('tbLegendMarginTop');
    tbLegendMarginTop.onchange = function () {
        var margin = chart.legendMargin;
        margin.top = parseInt(tbLegendMarginTop.value);
        chart.legendMargin = margin;
        chart.invalidateLayout(chart.rootPanel);
        chart.draw();
    };
    document.getElementById('chbShowLegend').onchange = function () {
        chart.showLegend = !chart.showLegend;
    };
});
//# sourceMappingURL=BubbleChart.js.map