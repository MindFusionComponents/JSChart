define(["require", "exports", 'Scripts/MindFusion.Charting'], function (require, exports, m) {
    "use strict";
    var Charting = m.MindFusion.Charting;
    var Controls = m.MindFusion.Charting.Controls;
    var Collections = m.MindFusion.Charting.Collections;
    var Drawing = m.MindFusion.Charting.Drawing;
    var chartEl = document.getElementById('chart');
    chartEl.width = chartEl.offsetParent.clientWidth;
    chartEl.height = chartEl.offsetParent.clientHeight;
    var chart = new Controls.CandlestickChart(chartEl);
    // create sample data
    var dataList = new Collections.List();
    for (var i = 0; i < 30; i++) {
        var open_1 = Math.round(Math.random() * 100);
        var close_1 = Math.round(Math.random() * 100);
        var low = open_1 > close_1 ? close_1 - Math.round(Math.random() * 10) : open_1 - Math.round(Math.random() * 10);
        var high = open_1 < close_1 ? close_1 + Math.round(Math.random() * 10) : open_1 + Math.round(Math.random() * 10);
        var date = new Date(new Date().getFullYear(), new Date().getMonth());
        var dataItem = new Charting.StockPrice(open_1, close_1, low, high, new Date(date.setDate(1 + i)));
        dataList.add(dataItem);
    }
    var series = new Charting.StockPriceSeries(dataList);
    series.customDateTimeFormat = '{"day":"2-digit"}';
    var data = new Collections.ObservableCollection();
    data.add(series);
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
    chart.plot.seriesStyle = new Charting.CandlestickSeriesStyle(new Drawing.Brush("Tomato"), new Drawing.Brush("LawnGreen"), new Drawing.Brush("Black"), 2, Drawing.DashStyle.Solid, chart.plot.seriesRenderers.item(0));
    chart.theme.uniformSeriesStroke = chart.theme.highlightStroke =
        chart.theme.dataLabelsBrush = chart.theme.axisLabelsBrush =
            chart.theme.axisTitleBrush = chart.theme.axisStroke = new Drawing.Brush("White");
    chart.draw();
    var tbCandlestickWidth = document.getElementById('tbCandlestickWidth');
    tbCandlestickWidth.onchange = function () {
        chart.candlestickWidth = parseInt(tbCandlestickWidth.value);
    };
    var cbDateFormat = document.getElementById('cbDateFormat');
    cbDateFormat.onchange = function () {
        chart.series.item(0).dateTimeFormat = cbDateFormat.selectedIndex;
    };
    var tbxCustomDateFormat = document.getElementById('tbxCustomDateFormat');
    tbxCustomDateFormat.onchange = function () {
        chart.series.item(0).customDateTimeFormat = tbxCustomDateFormat.value;
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
});
//# sourceMappingURL=CandlestickChart.js.map