define(["require", "exports", 'Scripts/MindFusion.Charting'], function (require, exports, m) {
    "use strict";
    var Charting = m.MindFusion.Charting;
    var Controls = m.MindFusion.Charting.Controls;
    var Collections = m.MindFusion.Charting.Collections;
    var Drawing = m.MindFusion.Charting.Drawing;
    var xFunnelStart = 0, yFunnelStart = 0;
    // create the chart
    var funnelhartEl = document.getElementById('funnelChart');
    funnelhartEl.width = funnelhartEl.offsetParent.clientWidth;
    funnelhartEl.height = funnelhartEl.offsetParent.clientHeight;
    var funnelChart = new Controls.FunnelChart(funnelhartEl);
    // create sample data
    var values = new Collections.List([70, 60, 50, 30, 20, 15, 10, 4]);
    var labels = new Collections.List(["Unqualified prospects", "Leads", "Initial communication",
        "Customer evaluation", "Negotiation", "Purchase order received", "Delivery", "Payment"]);
    funnelChart.series = new Charting.SimpleSeries(values, labels);
    var brushes = new Collections.List([
        new Drawing.Brush("skyBlue"),
        new Drawing.Brush("yellow"),
        new Drawing.Brush("lightGreen"),
        new Drawing.Brush("orange"),
        new Drawing.Brush("cyan"),
        new Drawing.Brush("pink"),
        new Drawing.Brush("purple"),
        new Drawing.Brush("greenYellow")
    ]);
    var seriesBrushes = new Collections.List();
    seriesBrushes.add(brushes);
    funnelChart.plot.seriesStyle = new Charting.PerElementSeriesStyle(seriesBrushes);
    // create a custom legend renderer
    var seriesList = new Collections.ObservableCollection();
    var series = new Charting.SimpleSeries(null, null);
    series.title = "Unqualified prospects=70K, 100%";
    seriesList.add(series);
    series = new Charting.SimpleSeries(null, null);
    series.title = "Leads=60K, 85.7%";
    seriesList.add(series);
    series = new Charting.SimpleSeries(null, null);
    series.title = "Initial communication=50K, 71.4%";
    seriesList.add(series);
    series = new Charting.SimpleSeries(null, null);
    series.title = "Customer evaluation=30K, 42.9%";
    seriesList.add(series);
    series = new Charting.SimpleSeries(null, null);
    series.title = "Negotiation=20K, 28.6%";
    seriesList.add(series);
    series = new Charting.SimpleSeries(null, null);
    series.title = "Purchase order received=15K, 21.4%";
    seriesList.add(series);
    series = new Charting.SimpleSeries(null, null);
    series.title = "Delivery=10K, 14.3%";
    seriesList.add(series);
    series = new Charting.SimpleSeries(null, null);
    series.title = "Payment=4K, 5.7%";
    seriesList.add(series);
    var ren = new Charting.BarRenderer(seriesList);
    ren.series = seriesList;
    ren.labelFontSize = 12.0;
    ren.seriesStyle = new Charting.PerSeriesStyle(brushes);
    funnelChart.legendRenderer.content.clear();
    funnelChart.legendRenderer.background = new Drawing.Brush("LightGray");
    funnelChart.legendRenderer.borderStroke = new Drawing.Brush("Black");
    funnelChart.legendRenderer.titleFontSize = 14.0;
    funnelChart.legendRenderer.content.add(ren);
    funnelChart.legendVerticalAlignment = Charting.Components.LayoutAlignment.Far;
    funnelChart.draw();
    var showDataLabels = document.getElementById('showDataLabels');
    showDataLabels.checked = funnelChart.showDataLabels == Charting.LabelKinds.All;
    showDataLabels.onchange = function () {
        if (showDataLabels.checked)
            funnelChart.showDataLabels = Charting.LabelKinds.All;
        else
            funnelChart.showDataLabels = Charting.LabelKinds.None;
        funnelChart.draw();
    };
    var segmentSpacing = document.getElementById('segmentSpacing');
    segmentSpacing.valueAsNumber = funnelChart.segmentSpacing;
    segmentSpacing.onchange = function () {
        funnelChart.segmentSpacing = segmentSpacing.valueAsNumber;
        funnelChart.draw();
    };
    var bottomBase = document.getElementById('bottomBase');
    bottomBase.valueAsNumber = funnelChart.bottomBase;
    bottomBase.max = (funnelChart.series.getValue(funnelChart.series.size - 1, 0) * 0.75).toString();
    bottomBase.onchange = function () {
        funnelChart.bottomBase = bottomBase.valueAsNumber;
        funnelChart.draw();
    };
    var marginLeft = document.getElementById('marginLeft');
    marginLeft.onchange = function () {
        xFunnelStart = marginLeft.valueAsNumber;
        funnelChart.plot.margin = new Charting.Margins(xFunnelStart, yFunnelStart, 0, 0);
        funnelChart.plot.invalidate();
        funnelChart.draw();
    };
    var marginTop = document.getElementById('marginTop');
    marginTop.onchange = function () {
        yFunnelStart = marginTop.valueAsNumber;
        funnelChart.plot.margin = new Charting.Margins(xFunnelStart, yFunnelStart, 0, 0);
        funnelChart.plot.invalidate();
        funnelChart.draw();
    };
    var fw = document.getElementById('funnelWidth');
    fw.value = fw.max = funnelChart.plot.actualWidth.toString();
    fw.onchange = function () {
        funnelChart.plot.width = fw.valueAsNumber;
        funnelChart.plot.invalidate();
        funnelChart.draw();
    };
    var fh = document.getElementById('funnelHeight');
    fh.value = fh.max = funnelChart.plot.actualHeight.toString();
    fh.onchange = function () {
        funnelChart.plot.height = fh.valueAsNumber;
        funnelChart.plot.invalidate();
        funnelChart.draw();
    };
    document.getElementById('chbShowLegend').onchange = function () {
        funnelChart.showLegend = !funnelChart.showLegend;
    };
    document.getElementById('chbAllowMoveLegend').onchange = function () {
        funnelChart.allowMoveLegend = !funnelChart.allowMoveLegend;
    };
    var cbLegendHorAlign = document.getElementById('cbLegendHorAlign');
    cbLegendHorAlign.onchange = function () {
        funnelChart.legendHorizontalAlignment = cbLegendHorAlign.selectedIndex;
    };
    var cbLegendVerAlign = document.getElementById('cbLegendVerAlign');
    cbLegendVerAlign.onchange = function () {
        funnelChart.legendVerticalAlignment = cbLegendVerAlign.selectedIndex;
    };
    var tbLegendMarginLeft = document.getElementById('tbLegendMarginLeft');
    tbLegendMarginLeft.onchange = function () {
        var margin = funnelChart.legendMargin;
        margin.left = parseInt(tbLegendMarginLeft.value);
        funnelChart.legendMargin = margin;
        funnelChart.invalidateLayout(funnelChart.rootPanel);
        funnelChart.draw();
    };
    var tbLegendMarginTop = document.getElementById('tbLegendMarginTop');
    tbLegendMarginTop.onchange = function () {
        var margin = funnelChart.legendMargin;
        margin.top = parseInt(tbLegendMarginTop.value);
        funnelChart.legendMargin = margin;
        funnelChart.invalidateLayout(funnelChart.rootPanel);
        funnelChart.draw();
    };
});
//# sourceMappingURL=FunnelChart.js.map