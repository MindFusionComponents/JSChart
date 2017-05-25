define(["require", "exports", 'Scripts/MindFusion.Charting'], function (require, exports, m) {
    "use strict";
    var Charting = m.MindFusion.Charting;
    var Controls = m.MindFusion.Charting.Controls;
    var Collections = m.MindFusion.Charting.Collections;
    var Drawing = m.MindFusion.Charting.Drawing;
    var chartEl = document.getElementById('chart');
    chartEl.width = chartEl.offsetParent.clientWidth;
    chartEl.height = chartEl.offsetParent.clientHeight;
    var chart = new Controls.AreaChart(chartEl);
    // create sample data
    var data = new Collections.ObservableCollection();
    var years = new Collections.List();
    var dt = new Date(new Date().getFullYear() - 10, 11, 32);
    for (;;) {
        if (dt.getFullYear() > new Date().getFullYear())
            break;
        years.add(new Date(dt.setFullYear(dt.getFullYear() + 1)));
    }
    var income = new Collections.List([13.2, 15.6, 17.8, 39, 20, 29, 79, 101, 120, 122]);
    var series = new Charting.DateTimeSeries(years, income, years.item(0), years.item(years.count() - 1));
    series.minValue = 0;
    series.maxValue = 1;
    series.dateTimeFormat = Charting.DateTimeFormat.CustomDateTime;
    series.customDateTimeFormat = '{"year":"numeric"}';
    data.add(series);
    // setup chart
    chart.series = data;
    chart.title = "Acme Inc. financial report";
    chart.showXCoordinates = false;
    chart.showLegend = false;
    chart.layoutPanel.margin = new Charting.Margins(0, 0, 20, 0);
    chart.xAxis.title = "";
    chart.xAxis.minValue = 0;
    chart.xAxis.maxValue = 1;
    chart.xAxis.interval = 0.1;
    chart.yAxis.title = "Income ($ in millions)";
    chart.theme.uniformSeriesFill = new Drawing.LinearGradientBrush("Cornsilk", "Crimson");
    chart.draw();
});
//# sourceMappingURL=DateTimeSeries.js.map