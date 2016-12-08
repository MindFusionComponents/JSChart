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
    areaChart.areaOpacity = 0.5;
    // create bar brushes
    var firstBrush = new Drawing.LinearGradientBrush("LightGreen", "LightBlue");
    var secondBrush = new Drawing.LinearGradientBrush("Yellow", "Red");
    var thirdBrush = new Drawing.Brush("Khaki");
    var labels = new Collections.List([
        "one", "two", "three", "four", "five", "six",
        "seven", "eight", "nine", "ten", "eleven", "twelve"
    ]);
    var angle = 1;
    // create sample data series
    var series = new Collections.ObservableCollection(new Array(new Charting.BarSeries(new Collections.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), labels), new Charting.BarSeries(new Collections.List([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]), labels), new Charting.BarSeries(new Collections.List([2, 8, 13, 15, 13, 8, 2, 8, 13, 15, 13, 8]), labels)));
    series.item(0).title = "Series 1";
    series.item(1).title = "Series 2";
    series.item(2).title = "Series 3";
    areaChart.series = series;
    areaChart.xAxis.interval = 1;
    // assign one brush per series
    areaChart.plot.seriesStyle = new Charting.PerSeriesStyle(new Collections.List([firstBrush, secondBrush, thirdBrush]));
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