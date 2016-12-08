define(["require", "exports", 'Scripts/MindFusion.Charting'], function (require, exports, m) {
    "use strict";
    var Charting = m.MindFusion.Charting;
    var Controls = m.MindFusion.Charting.Controls;
    var Collections = m.MindFusion.Charting.Collections;
    var Drawing = m.MindFusion.Charting.Drawing;
    var Components = m.MindFusion.Charting.Components;
    // create the Dashboard
    var dashboardEl = document.getElementById('dashboard');
    dashboardEl.width = dashboardEl.offsetParent.clientWidth;
    dashboardEl.height = dashboardEl.offsetParent.clientHeight;
    var dashboard = new Controls.Dashboard(dashboardEl);
    // set up grid panel
    var grid = new Components.GridPanel();
    grid.columns.add(new Components.GridColumn());
    for (var i = 0; i < 3; i++)
        grid.rows.add(new Components.GridRow());
    // create two plots to it
    var plot1 = new Charting.Plot2D();
    var plot2 = new Charting.Plot2D();
    plot1.gridColumn = 1;
    plot1.gridRow = 0;
    plot2.gridColumn = 1;
    plot2.gridRow = 3;
    // assigning a shared Axis to plots makes them show same data
    // range and scroll together when the user pans any plot
    var commonAxis = new Charting.Axis();
    commonAxis.minValue = 0;
    commonAxis.interval = 0.5;
    commonAxis.title = "";
    plot1.xAxis = commonAxis;
    plot2.xAxis = commonAxis;
    // use second axis renderer for shared axis just to show ticks from other side
    var commonAxisRenderer1 = new Charting.XAxisRenderer(commonAxis);
    commonAxisRenderer1.gridColumn = 1;
    commonAxisRenderer1.gridRow = 1;
    var commonAxisRenderer2 = new Charting.XAxisRenderer(commonAxis);
    commonAxisRenderer2.gridColumn = 1;
    commonAxisRenderer2.gridRow = 2;
    commonAxisRenderer2.plotBottomSide = false;
    commonAxisRenderer2.showCoordinates = false;
    // create Y axes
    var p1YAxis = new Charting.Axis();
    var p2YAxis = new Charting.Axis();
    p1YAxis.minValue = 0;
    p1YAxis.interval = 5;
    p1YAxis.title = "BarChart";
    plot1.yAxis = p1YAxis;
    p2YAxis.minValue = 0;
    p2YAxis.interval = 10;
    p2YAxis.title = "LineChart";
    plot2.yAxis = p2YAxis;
    var p1Renderer = new Charting.YAxisRenderer(p1YAxis);
    p1Renderer.gridColumn = 0;
    p1Renderer.gridRow = 0;
    p1Renderer.showTicks = true;
    var p2Renderer = new Charting.YAxisRenderer(p2YAxis);
    p2Renderer.gridColumn = 0;
    p2Renderer.gridRow = 3;
    // show sample bar and line graphics in different plots
    var barRenderer = new Charting.BarRenderer(new Collections.ObservableCollection([
        new Charting.Series2D(new Collections.List([1, 2, 3, 4, 5, 6, 7]), new Collections.List([20.3, 12, 73.23, 21.2, 72, 66, 42.239]), null),
        new Charting.Series2D(new Collections.List([1, 2, 3, 4, 5, 6, 7]), new Collections.List([22.3, 15, 43.23, 11.2, 32, 12, 62.239]), null)]));
    var lineRenderer = new Charting.LineRenderer(new Collections.ObservableCollection([
        new Charting.Series2D(new Collections.List([1, 2, 3, 4, 5, 6, 7]), new Collections.List([10.3, 22, 33.23, 41.2, 12, 26, 42.239]), null),
        new Charting.Series2D(new Collections.List([1, 2, 3, 4, 5, 6, 7]), new Collections.List([42.3, 45, 43.23, 21.2, 12, 22, 22.239]), null)]));
    plot1.seriesStyle = new Charting.PerSeriesStyle(new Collections.List([
        new Drawing.Brush("purple"),
        new Drawing.Brush("lightBlue")
    ]));
    plot2.seriesStyle = new Charting.PerSeriesStyle(null, new Collections.List([
        new Drawing.Brush("purple"),
        new Drawing.Brush("lightBlue")
    ]));
    plot1.seriesRenderers.add(barRenderer);
    plot2.seriesRenderers.add(lineRenderer);
    // add the plots and axes to the dashboard
    grid.children.add(plot1);
    grid.children.add(plot2);
    grid.children.add(commonAxisRenderer1);
    grid.children.add(commonAxisRenderer2);
    grid.children.add(p1Renderer);
    grid.children.add(p2Renderer);
    dashboard.layoutPanel.children.add(grid);
    dashboard.draw();
});
//# sourceMappingURL=SynchronizedScroll.js.map