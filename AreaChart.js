define(["require", "exports", 'Scripts/MindFusion.Charting'], function (require, exports, m) {
    "use strict";
    var Charting = m.MindFusion.Charting;
    var Controls = m.MindFusion.Charting.Controls;
    var Collections = m.MindFusion.Charting.Collections;
    var Drawing = m.MindFusion.Charting.Drawing;
    var areaChartEl = document.getElementById('areaChart');
    areaChartEl.width = areaChartEl.offsetParent.clientWidth;
    areaChartEl.height = areaChartEl.offsetParent.clientHeight;
    // create the chart
    var areaChart = new Controls.AreaChart(areaChartEl);
    areaChart.theme.loadFrom('Resources/DefaultExt.xml');
    areaChart.areaOpacity = 0.5;
    // create area brushes
    var firstBrush = new Drawing.Brush("#ce0000");
    var secondBrush = new Drawing.LinearGradientBrush("#003466", "#000063");
    var thirdBrush = new Drawing.LinearGradientBrush("#e0e9e9", "#669acc");
    var labels = new Collections.List([
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]);
    var angle = 1;
    // create sample data series
    var series = new Collections.ObservableCollection(new Array(new Charting.BarSeries(new Collections.List([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]), labels), new Charting.BarSeries(new Collections.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), labels), new Charting.BarSeries(new Collections.List([2, 8, 13, 15, 13, 8, 2, 8, 13, 15, 13, 8]), labels)));
    series.item(0).title = "2016";
    series.item(1).title = "2015";
    series.item(2).title = "2014";
    areaChart.xAxis.title = "Profit (in mlns)";
    areaChart.yAxis.title = "Turnover (in mlns)";
    areaChart.series = series;
    areaChart.xAxis.interval = 1;
    // assign one brush per series
    areaChart.plot.seriesStyle = new Charting.PerSeriesStyle(new Collections.List([firstBrush, secondBrush, thirdBrush]));
    areaChart.theme.legendBackground = new Drawing.Brush("#e0e9e9");
    areaChart.theme.legendBorderStroke = new Drawing.Brush("#000000");
    areaChart.theme.axisTitleFontSize = 14;
    areaChart.theme.axisTitleFontName = "Verdana";
    areaChart.theme.axisLabelsFontName = "Verdana";
    areaChart.theme.dataLabelsFontName = "Verdana";
    areaChart.legendTitle = "Year";
    areaChart.draw();
    // handlers
    var lineType = document.getElementById('lineType');
    lineType.selectedIndex = areaChart.gridType;
    lineType.onchange = function () {
        areaChart.lineType = lineType.selectedIndex;
        areaChart.draw();
    };
    var areaOpacity = document.getElementById('areaOpacity');
    areaOpacity.valueAsNumber = areaChart.areaOpacity * 100;
    areaOpacity.onchange = function () {
        areaChart.areaOpacity = areaOpacity.valueAsNumber / 100;
        areaChart.draw();
    };
    var showDataLabels = document.getElementById('showDataLabels');
    showDataLabels.checked = areaChart.showDataLabels == Charting.LabelKinds.All;
    showDataLabels.onchange = function () {
        if (showDataLabels.checked)
            areaChart.showDataLabels = Charting.LabelKinds.All;
        else
            areaChart.showDataLabels = Charting.LabelKinds.None;
        areaChart.draw();
    };
});
//# sourceMappingURL=AreaChart.js.map