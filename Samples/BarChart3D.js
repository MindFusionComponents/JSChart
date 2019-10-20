define(["require", "exports", 'Scripts/MindFusion.Charting'], function (require, exports, m) {
    "use strict";
    var Charting = m.MindFusion.Charting;
    var Controls = m.MindFusion.Charting.Controls;
    var Collections = m.MindFusion.Charting.Collections;
    var Drawing = m.MindFusion.Charting.Drawing;
    var chartEl = document.getElementById('chart');
    var chart = new Controls.BarChart3D(chartEl, Charting.BarLayout.SideBySide);
    chart.theme.loadFrom('Resources/DefaultExt.xml');
    var bgImage;
    chart.title = "Agricultural produce by type";
    // create sample data
    var labels = new Collections.List(["Tomatoes", "Cucumbers", "Peppers", "Lettuce"]);
    var collection = new Collections.ObservableCollection();
    var series = new Charting.Series2D(new Collections.List([10, 20, 30, 40]), new Collections.List([50, 40, 50, 5]), labels);
    series.title = "Traditional";
    collection.add(series);
    series = new Charting.Series2D(new Collections.List([10, 20, 30, 40]), new Collections.List([60, 10, 20, 80]), labels);
    series.title = "Urban";
    collection.add(series);
    series = new Charting.Series2D(new Collections.List([10, 20, 30, 40]), new Collections.List([0, 60, 0, 90]), labels);
    series.title = "Hydroponics";
    collection.add(series);
    chart.series = collection;
    // set one color per series
    chart.theme.commonSeriesFills = chart.theme.commonSeriesStrokes = new Collections.List([
        new Drawing.Brush(new Drawing.Color("#669acc")),
        new Drawing.Brush(new Drawing.Color("#003466")),
        new Drawing.Brush(new Drawing.Color("#ce0000"))
    ]);
    chart.theme.commonSeriesStrokeThicknesses = new Collections.List([10, 10, 10]);
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
    document.getElementById('chbShowScatter').onchange = function () {
        chart.showScatter = !chart.showScatter;
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
    document.getElementById('chbAllowPan').onchange = function () {
        chart.allowPan = !chart.allowPan;
    };
    document.getElementById('chbAllowMoveLegend').onchange = function () {
        chart.allowMoveLegend = !chart.allowMoveLegend;
    };
    document.getElementById('chbAllowZoom').onchange = function () {
        chart.allowZoom = !chart.allowZoom;
    };
    document.getElementById('btnResetZoom').onclick = function () {
        chart.resetZoom();
    };
    document.getElementById('chbShowBackground').onchange = function () {
        if (chart.plotImageLocation != null)
            chart.plotImageLocation = null;
        else
            chart.plotImageLocation = bgImage;
        chart.draw();
    };
    var cbxBarLayout = document.getElementById('cbxBarLayout');
    cbxBarLayout.onchange = function () {
        chart.barLayout = cbxBarLayout.selectedIndex;
    };
    var cbxBarModel3D = document.getElementById('cbxBarModel3D');
    cbxBarModel3D.onchange = function () {
        chart.barModel = cbxBarModel3D.selectedIndex;
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
});
//# sourceMappingURL=BarChart3D.js.map