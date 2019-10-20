define(["require", "exports", 'Scripts/MindFusion.Charting'], function (require, exports, m) {
    "use strict";
    var Charting = m.MindFusion.Charting;
    var Controls = m.MindFusion.Charting.Controls;
    var Collections = m.MindFusion.Charting.Collections;
    var Drawing = m.MindFusion.Charting.Drawing;
    // create the chart
    var radarChartEl = document.getElementById('radarChart');
    radarChartEl.width = radarChartEl.offsetParent.clientWidth;
    radarChartEl.height = radarChartEl.offsetParent.clientHeight;
    var radarChart = new Controls.RadarChart(radarChartEl);
    radarChart.theme.loadFrom('Resources/DefaultExt.xml');
    // create sample data
    var data = new Collections.ObservableCollection();
    var series1 = new Charting.SimpleSeries(new Collections.List([20, 30, 43, 40, 44, 37, 35, 51]), new Collections.List(["20", "30", "43", "40", "44", "37", "35", "51"]));
    var series2 = new Charting.SimpleSeries(new Collections.List([12, 40, 23, 30, 34, 47, 45, 21]), new Collections.List(["12", "40", "23", "30", "34", "47", "45", "21"]));
    data.add(series1);
    data.add(series2);
    radarChart.series = data;
    // define axis appearance
    radarChart.theme.axisLabelsBrush = new Drawing.Brush("black");
    radarChart.theme.axisLabelsFontStyle = Drawing.FontStyle.Bold;
    radarChart.theme.axisLabelsFontSize = 10;
    radarChart.theme.axisStroke = new Drawing.Brush("#c0c0c0");
    radarChart.gridDivisions = 5;
    radarChart.defaultAxis.minValue = 0;
    radarChart.defaultAxis.maxValue = 55;
    radarChart.showLegend = false;
    for (var i = 0; i < 8; i++) {
        var axis = new Charting.Axis();
        axis.title = "Axis " + (i + 1).toString();
        radarChart.axes.add(axis);
    }
    // specify one color per series
    radarChart.plot.seriesStyle = new Charting.PerSeriesStyle(new Collections.List([
        new Drawing.Brush("#ce0000"),
        new Drawing.Brush("#2d3956")
    ]), new Collections.List([
        new Drawing.Brush("#ce0000"),
        new Drawing.Brush("#2d3956")
    ]), new Collections.List([
        4
    ]));
    radarChart.theme.highlightStroke = new Drawing.Brush("#9caac6");
    radarChart.draw();
    // handlers
    var gridDivisions = document.getElementById('gridDivisions');
    gridDivisions.valueAsNumber = radarChart.gridDivisions;
    gridDivisions.onchange = function () {
        radarChart.gridDivisions = gridDivisions.valueAsNumber;
        radarChart.draw();
    };
    var axisMinValue = document.getElementById('axisMinValue');
    axisMinValue.valueAsNumber = radarChart.defaultAxis.minValue;
    axisMinValue.onchange = function () {
        radarChart.defaultAxis.minValue = axisMinValue.valueAsNumber;
        radarChart.draw();
    };
    var axisMaxValue = document.getElementById('axisMaxValue');
    axisMaxValue.valueAsNumber = radarChart.defaultAxis.maxValue;
    axisMaxValue.onchange = function () {
        radarChart.defaultAxis.maxValue = axisMaxValue.valueAsNumber;
        radarChart.draw();
    };
    var areaOpacity = document.getElementById('areaOpacity');
    areaOpacity.valueAsNumber = radarChart.areaOpacity * 10;
    areaOpacity.onchange = function () {
        radarChart.areaOpacity = areaOpacity.valueAsNumber / 10;
        radarChart.draw();
    };
    var chartPadding = document.getElementById('chartPadding');
    chartPadding.valueAsNumber = radarChart.chartPadding;
    chartPadding.onchange = function () {
        radarChart.chartPadding = chartPadding.valueAsNumber;
        radarChart.draw();
    };
    var startAngle = document.getElementById('startAngle');
    startAngle.valueAsNumber = radarChart.startAngle;
    startAngle.onchange = function () {
        radarChart.startAngle = startAngle.valueAsNumber;
        radarChart.draw();
    };
    var alignAxis = document.getElementById('alignAxis');
    alignAxis.checked = radarChart.alignToAxis;
    alignAxis.onchange = function () {
        radarChart.alignToAxis = alignAxis.checked;
        radarChart.draw();
    };
    var allowRotate = document.getElementById('allowRotate');
    allowRotate.checked = radarChart.allowRotate;
    allowRotate.onchange = function () {
        radarChart.allowRotate = allowRotate.checked;
        radarChart.draw();
    };
    var showDataLabels = document.getElementById('showDataLabels');
    showDataLabels.checked = radarChart.showDataLabels == Charting.LabelKinds.All;
    showDataLabels.onchange = function () {
        if (showDataLabels.checked)
            radarChart.showDataLabels = Charting.LabelKinds.All;
        else
            radarChart.showDataLabels = Charting.LabelKinds.None;
        radarChart.draw();
    };
    var gridType = document.getElementById('gridType');
    gridType.selectedIndex = radarChart.gridType;
    gridType.onchange = function () {
        radarChart.gridType = gridType.selectedIndex;
        radarChart.draw();
    };
    var radarType = document.getElementById('radarType');
    radarType.selectedIndex = radarChart.radarType;
    radarType.onchange = function () {
        radarChart.radarType = radarType.selectedIndex;
        radarChart.draw();
    };
});
//# sourceMappingURL=RadarChart.js.map