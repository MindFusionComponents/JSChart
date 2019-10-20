MindFusion = {
	Charting: {
		Collections: {
			Dictionary: function () {
				/// <summary>Represents a collection of keys and values.</summary>
			},
			IEnumerable: function (items) {
				/// <summary>Represents an array of arbitrary objects.</summary>
				/// <param name="items" type="Array<T>" optional="true">Optional. Type: Array<T>&#10;The underlying array data structure of the collection.</param>
			},
			List: function (items) {
				/// <summary>Represents an array of arbitrary objects.</summary>
				/// <param name="items" type="Array<T>" optional="true">Optional. Type: Array<T>&#10;The underlying array data structure of the list.</param>
			},
			ObservableCollection: function (items) {
				/// <summary>Represents a collection of arbitrary objects.</summary>
				/// <param name="items" type="Array<T>" optional="true">Optional. Type: Array<T>&#10;The underlying array data structure of the collection.</param>
			},
			__namespace: true
		},
		Commands: {
			Command: function (manager) {
				/// <summary>Represents an action that modifies an object and whose effects can be undone.</summary>
				/// <param name="manager" type="UndoManager">Type: UndoManager&#10;The UndoManager that contains this command.</param>
			},
			CompositeCommand: function (manager) {
				/// <summary>Represents a set of Command instances as a single operation.Undoing or redoing the composite action, respectively undoes or redoes all its constituent subactions at the same time.</summary>
				/// <param name="manager" type="UndoManager">Type: UndoManager&#10;The UndoManager that contains this command.</param>
			},
			DisposableCommand: function (manager) {
				/// <summary>Represents a command that implements the IDisposable interface.</summary>
				/// <param name="manager" type="UndoManager">Type: UndoManager&#10;The UndoManager that contains this command.</param>
			},
			TrackChangesCommand: function () {
				/// <summary>Represents a command that can track and undo changes of INotifyPropertyValueChanged objects.</summary>
			},
			UndoEventArgs: function (command) {
				/// <summary>Contains the arguments passed to the ActionUndone and ActionRedone event handlers.</summary>
				/// <param name="command" type="Command">Type: Command&#10;The Command related to the event.</param>
			},
			__namespace: true
		},
		Common: {
			EventDispatcher: function () {
				/// <summary>Represents a dispatcher for an event.</summary>
			},
			NotifyCollectionChangedAction: function() {
				/// <summary>Describes an action that triggered a INotifyCollectionChanged.collectionChanged event.</summary>
			},
			NotifyCollectionChangedEventArgs: function (action, changes, index) {
				/// <summary>Provides data for CollectionChanged events.</summary>
				/// <param name="action" type="NotifyCollectionChangedAction">Type: NotifyCollectionChangedAction&#10;The action that caused the event.</param>
				/// <param name="changes" type="Array" optional="true">Optional. Type: Array&#10;The items affected by the change.</param>
				/// <param name="index" type="Number" optional="true">Optional. Type: Number&#10;The index where the change occurred.</param>
			},
			NotifyCollectionChangedEventDispatcher: function () {
				/// <summary>Represents a dispatcher for NotifyCollectionChanged events.</summary>
			},
			PropertyChangedEventArgs: function (propertyName) {
				/// <summary>Provides data for PropertyChanged events.</summary>
				/// <param name="propertyName" type="void">Type: void&#10;</param>
			},
			PropertyChangedEventDispatcher: function () {
				/// <summary>Represents a dispatcher for PropertyChanged events.</summary>
			},
			PropertyEventArgs: function (propertyName, oldValue, newValue) {
				/// <summary>Provides data for PropertyValueChanged events.</summary>
				/// <param name="propertyName" type="String">Type: String&#10;The name of the property that changed.</param>
				/// <param name="oldValue" type="Object">Type: Object&#10;The old value of the property.</param>
				/// <param name="newValue" type="Object">Type: Object&#10;The new value of the property.</param>
			},
			__namespace: true
		},
		Components: {
			BorderComponent: function () {
				/// <summary>Represents a border UI component.</summary>
			},
			ButtonComponent: function () {
				/// <summary>Represents a button UI component.</summary>
			},
			ButtonDrawEventArgs: function () {
				/// <summary>Contains arguments passed to the CustomDraw event of buttons.</summary>
			},
			ButtonDrawEventDispatcher: function () {
				/// <summary>Represents a dispatcher for ButtonDraw events.</summary>
			},
			Component: function () {
				/// <summary>Represents a user interface component.</summary>
			},
			ComponentVisitor: function () {
				/// <summary>Defines the base visitor class for hierarchy of Component objects.</summary>
			},
			CursorHint: function() {
				/// <summary>Specifies what mouse cursor to display while a user interacts with the control.</summary>
			},
			GridColumn: function () {
				/// <summary>Represents a column in a GridPanel.</summary>
			},
			GridPanel: function () {
				/// <summary>Represents a layout panel that arranges its child components in a grid.</summary>
			},
			GridRow: function () {
				/// <summary>Represents a row in a GridPanel.</summary>
			},
			HitTestVisibility: function() {
				/// <summary>Identifies hit-test visibility of a component.</summary>
			},
			ImageComponent: function () {
				/// <summary>Represents a component that draws a bitmap image.</summary>
			},
			LayoutAlignment: function() {
				/// <summary>Indicates how child components are aligned within the layout rectangle allocated to them by their parent component.</summary>
			},
			LengthType: function() {
				/// <summary>Indicates how GridPanel determines dimensions of its rows and columns.</summary>
			},
			Orientation: function() {
				/// <summary>Identifies layout orientation.</summary>
			},
			Panel: function () {
				/// <summary>Represents a component that contains multiple child components and manages their layout.</summary>
			},
			RangeSelector: function (axis, minValue, maxValue) {
				/// <summary>Represents a control that handles zooming and scrolling of axes.</summary>
				/// <param name="axis" type="void">Type: void&#10;</param>
				/// <param name="minValue" type="void">Type: void&#10;</param>
				/// <param name="maxValue" type="void">Type: void&#10;</param>
			},
			SimplePanel: function () {
				/// <summary>Represents a layout panel that arranges its child components over each other.</summary>
			},
			StackPanel: function () {
				/// <summary>Represents a layout panel that arranges its child components in a stack.</summary>
			},
			TextComponent: function () {
				/// <summary>Represents a Component that draws text.</summary>
			},
			Visibility: function() {
				/// <summary>Identifies visibility of components.</summary>
			},
			__namespace: true
		},
		Controls: {
			AreaChart: function (element, lineType, seriesRenderer) {
				/// <summary>A control used to draw area charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="lineType" type="LineType" optional="true">Optional. Type: LineType&#10;A member of the LineType enumeration.</param>
				/// <param name="seriesRenderer" type="AreaRenderer" optional="true">Optional. Type: AreaRenderer&#10;An AreaRenderer used to draw chart's data series.</param>
			},
			BarChart: function (element, barLayout, seriesRenderer) {
				/// <summary>A control used to draw bar charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="barLayout" type="BarLayout" optional="true">Optional. Type: BarLayout&#10;A member of the BarLayout enumeration.</param>
				/// <param name="seriesRenderer" type="Renderer2D" optional="true">Optional. Type: Renderer2D&#10;A Renderer2D used to draw chart's data series.</param>
			},
			BarChart3D: function (element, barLayout, barModel, seriesRenderer) {
				/// <summary>A control used to draw 3D bar charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="barLayout" type="BarLayout" optional="true">Optional. Type: BarLayout&#10;A member of the BarLayout enumeration.</param>
				/// <param name="barModel" type="BarModel3D" optional="true">Optional. Type: BarModel3D&#10;A member of the BarModel3D enumeration.</param>
				/// <param name="seriesRenderer" type="Renderer2D" optional="true">Optional. Type: Renderer2D&#10;A Renderer2D used to draw chart's data series.</param>
			},
			BiaxialChart: function (element, seriesRenderer) {
				/// <summary>A base class for charts that display X and Y axes.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="seriesRenderer" type="Renderer2D" optional="true">Optional. Type: Renderer2D&#10;A SeriesRenderer used to draw chart's data series.</param>
			},
			BubbleChart: function (element, seriesRenderer) {
				/// <summary>A control used to draw bubble charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="seriesRenderer" type="BubbleRenderer" optional="true">Optional. Type: BubbleRenderer&#10;A LineRenderer used to draw chart's data series.</param>
			},
			CandlestickChart: function (element, seriesRenderer) {
				/// <summary>A control used to draw candlestick charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="seriesRenderer" type="CandlestickRenderer" optional="true">Optional. Type: CandlestickRenderer&#10;A CandlestickRenderer used to draw chart's data series.</param>
			},
			Chart: function (element, renderer) {
				/// <summary>A base class for chart controls.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="renderer" type="SeriesRenderer" optional="true">Optional. Type: SeriesRenderer&#10;A SeriesRenderer used to draw chart's data series.</param>
			},
			Dashboard: function (element) {
				/// <summary>A control that contains multiple chart plots and gauges</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this dashboard with.</param>
			},
			FunnelChart: function (element, seriesRenderer) {
				/// <summary>A control used to draw funnel charts. Funnel charts represent the stages of a process and show relative values or measurements associated with each stage.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="seriesRenderer" type="FunnelRenderer" optional="true">Optional. Type: FunnelRenderer&#10;A FunnelRenderer used to draw chart's data series.</param>
			},
			LayoutBuilder: function (board) {
				/// <summary>Provides shortcut methods for building fragments of dashboard's user interface.</summary>
				/// <param name="board" type="Dashboard">Type: Dashboard&#10;A Dashboard instance.</param>
			},
			LineChart: function (element, seriesRenderer) {
				/// <summary>A control used to draw line charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="seriesRenderer" type="LineRenderer" optional="true">Optional. Type: LineRenderer&#10;A LineRenderer used to draw chart's data series.</param>
			},
			PieChart: function (element, seriesRenderer) {
				/// <summary>A control used to draw pie charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="seriesRenderer" type="PieRenderer" optional="true">Optional. Type: PieRenderer&#10;A PieRenderer used to draw chart's data series.</param>
			},
			RadarChart: function (element, seriesRenderer) {
				/// <summary>A control used to draw radar charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="seriesRenderer" type="RadarRenderer" optional="true">Optional. Type: RadarRenderer&#10;A RadarRenderer used to draw chart's data series.</param>
			},
			ScatterChart: function (element, seriesRenderer) {
				/// <summary>A control used to draw scatter charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="seriesRenderer" type="ScatterRenderer" optional="true">Optional. Type: ScatterRenderer&#10;A ScatterRenderer used to draw chart's data series.</param>
			},
			__namespace: true
		},
		Drawing: {
			Brush: function (color) {
				/// <summary>Represents a brush.</summary>
				/// <param name="color" type="Color, string">Type: Color, string&#10;The color of this brush.</param>
			},
			Color: function (value) {
				/// <summary>Represents a color.</summary>
				/// <param name="value" type="String">Type: String&#10;A string representation of the color.</param>
			},
			DashStyle: function() {
				/// <summary>Specifies the dash pattern of lines.</summary>
			},
			Font: function (name, size, fontStyle) {
				/// <summary>Represents a font.</summary>
				/// <param name="name" type="String">Type: String&#10;The font name.</param>
				/// <param name="size" type="Number">Type: Number&#10;The font size.</param>
				/// <param name="fontStyle" type="MindFusion.Charting.Drawing.FontStyle" optional="true">Optional. Type: FontStyle&#10;The FontStyle</param>
			},
			FontStyle: function() {
				/// <summary>Specifies font style attributes.</summary>
			},
			Graphics: function (context) {
				/// <summary>Contains helper functions for drawing on a Canvas element.</summary>
				/// <param name="context" type="CanvasRenderingContext2D">Type: CanvasRenderingContext2D&#10;The CanvasRenderingContext2D drawing object.</param>
			},
			ImageAlign: function() {
				/// <summary>Specifies the position and alignment of a picture in a node, or that of the background image.</summary>
			},
			LinearGradientBrush: function (startColor, endColor, angle, bounds) {
				/// <summary>Represents a linear gradient brush.</summary>
				/// <param name="startColor" type="Color, string">Type: Color, string&#10;The starting color of the gradient.</param>
				/// <param name="endColor" type="Color, string">Type: Color, string&#10;The ending color of the gradient.</param>
				/// <param name="angle" type="Number" optional="true">Optional. Type: Number&#10;The angle of the gradient.</param>
				/// <param name="bounds" type="MindFusion.Drawing.Rect" optional="true">Optional. Type: Rect&#10;The bounds of the gradient.</param>
			},
			LineJoin: function() {
				/// <summary>Specifies how to join consecutive line or curve segments in a figure.</summary>
			},
			Pen: function (brush, width) {
				/// <summary>Represents a pen.</summary>
				/// <param name="brush" type="Brush, Color, string">Type: Brush, Color, string&#10;The color of this pen.</param>
				/// <param name="width" type="Number" optional="true">Optional. Type: Number&#10;The width of this pen.</param>
			},
			StringAlignment: function() {
				/// <summary>Specifies the alignment of a text string relative to its layout rectangle.</summary>
			},
			StringFormat: function () {
				/// <summary>Encapsulates text layout information.</summary>
			},
			__namespace: true
		},
		Gauges: {
			GaugeRenderer: function () {
				/// <summary>A Component that renders gauges in the dashboard.</summary>
			},
			LinearGaugeController: function (r, context) {
				/// <summary>Controls user interaction with linear gauges.</summary>
				/// <param name="r" type="LinearGaugeRenderer">Type: LinearGaugeRenderer&#10;A LinearGaugeRenderer instance controlled by this object.</param>
				/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
			},
			LinearGaugeRenderer: function (element) {
				/// <summary>A Component that renders linear gauges in the dashboard.</summary>
				/// <param name="element" type="void">Type: void&#10;</param>
			},
			OvalGaugeController: function (r, context) {
				/// <summary>Controls user interaction with oval gauges.</summary>
				/// <param name="r" type="OvalGaugeRenderer">Type: OvalGaugeRenderer&#10;An OvalGaugeRenderer instance controlled by this object.</param>
				/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
			},
			OvalGaugeRenderer: function (element) {
				/// <summary>A Component that renders oval gauges in the dashboard.</summary>
				/// <param name="element" type="void">Type: void&#10;</param>
			},
			__namespace: true
		},
		ThreeD: {
			Label3D: function () {
				/// <summary>Represents a text label in 3D scene.</summary>
			},
			LabelProjection: function (label, projTL, projBR) {
				/// <summary>Represents the projection of a Label3D on the projection plane.</summary>
				/// <param name="label" type="Label3D">Type: Label3D&#10;The projected Label3D.</param>
				/// <param name="projTL" type="Point3D">Type: Point3D&#10;Projection of top-left corner of Label3D's layout rectangle.</param>
				/// <param name="projBR" type="Point3D">Type: Point3D&#10;Projection of bottom-right corner of Label3D's layout rectangle.</param>
			},
			Matrix3D: function (width, height) {
				/// <summary>Represents a a mathematical matrix, specialized in 3D transformations.</summary>
				/// <param name="width" type="number">Type: number&#10;The width of the matrix.</param>
				/// <param name="height" type="number">Type: number&#10;The height of the matrix.</param>
			},
			Mesh3D: function (facePoints, brush, normals) {
				/// <summary>Represents a 3D mesh.</summary>
				/// <param name="facePoints" type="MindFusion.Charting.Collections.List<List<Point3D>>">Type: List<List<Point3D>>&#10;Lists of points defining mesh faces.</param>
				/// <param name="brush" type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;The Brush used to paint this mesh.</param>
				/// <param name="normals" type="Array<Array<Vector3D>>" optional="true">Optional. Type: Array<Array<Vector3D>>&#10;An array with the normal vectors in each vertex.</param>
			},
			Model3D: function (brush) {
				/// <summary>Represents a three-dimensional model.</summary>
				/// <param name="brush" type="MindFusion.Charting.Drawing.Brush" optional="true">Optional. Type: Brush&#10;The Brush used to fill this model's projection.</param>
			},
			Polygon3D: function (points, brush, normals) {
				/// <summary>Represents a polygon in 3D space.</summary>
				/// <param name="points" type="IEnumerable<Point3D>" optional="true">Optional. Type: IEnumerable<Point3D>&#10;A list of 3D points.</param>
				/// <param name="brush" type="MindFusion.Charting.Drawing.Brush" optional="true">Optional. Type: Brush&#10;A Brush used to fill the polygon.</param>
				/// <param name="normals" type="Array<Vector3D>" optional="true">Optional. Type: Array<Vector3D>&#10;An array with the normal vectors in each vertex.</param>
			},
			Scene3D: function () {
				/// <summary>Represents a 3D scene.</summary>
			},
			Vector3D: function () {
				/// <summary>Represents a three-dimensional vector.</summary>
			},
			__namespace: true
		},
		AnnotationRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws annotations in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as annotations.</param>
		},
		AreaRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws each series as an area in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as areas.</param>
		},
		AreaStackRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws stacked areas in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as stacked areas.</param>
		},
		Axis: function () {
			/// <summary>Represents an Axis range.</summary>
		},
		AxisInfo: function () {
			/// <summary>Stores information about Axis ranges processed by this controller.</summary>
		},
		AxisRenderer: function (axis) {
			/// <summary>A base class for components that render Axis ranges.</summary>
			/// <param name="axis" type="MindFusion.Charting.Axis">Type: Axis&#10;The Axis that will be drawn by this object.</param>
		},
		BarLayout: function() {
			/// <summary>Identifies supported bar placements when rendering multiple series.</summary>
		},
		BarModel3D: function() {
			/// <summary>Identifies supported bar shapes when rendering multiple series.</summary>
		},
		BarOverlayRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws overlaying bars in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as overlaying bars.</param>
		},
		BarOverlayRenderer3D: function (series) {
			/// <summary>A SeriesRenderer that draws a row of 3D bars for each series.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as rows of bars.</param>
		},
		BarRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws bars in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as bars.</param>
		},
		BarRenderer3D: function (series) {
			/// <summary>A SeriesRenderer that draws 3D bars in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as 3D bars.</param>
		},
		BarSeries: function (values, innerLabels, topLabels, xAxisLabels) {
			/// <summary>Represents one-dimensional series defined by e list of data values and several lists of labels.</summary>
			/// <param name="values" type="MindFusion.Charting.Collections.List<Number>">Type: List<Number>&#10;A list of data values.</param>
			/// <param name="innerLabels" type="MindFusion.Charting.Collections.List<String>">Type: List<String>&#10;A list of inner labels.</param>
			/// <param name="topLabels" type="MindFusion.Charting.Collections.List<String>" optional="true">Optional. Type: List<String>&#10;A list of top labels.</param>
			/// <param name="xAxisLabels" type="MindFusion.Charting.Collections.List<String>" optional="true">Optional. Type: List<String>&#10;A list of X axis labels.</param>
		},
		BarStackRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws stacked bars in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as stacked bars.</param>
		},
		BarStackRenderer3D: function (series) {
			/// <summary>A SeriesRenderer that draws stacked 3D bars in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as stacked bars.</param>
		},
		BubbleLabelAlignment: function() {
			/// <summary>Specifies the alignment of a label relative to its associated bubble.</summary>
		},
		BubbleRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws bubbles representing data items in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as bubbles.</param>
		},
		CandlestickRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws candlesticks in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered by this object.</param>
		},
		CandlestickSeriesStyle: function (risingBrush, fallingBrush, stroke, strokeThickness, strokeDashStyle, renderer) {
			/// <summary>Defines appearance attributes for candlestick charts.</summary>
			/// <param name="risingBrush" type="void">Type: void&#10;</param>
			/// <param name="fallingBrush" type="void">Type: void&#10;</param>
			/// <param name="stroke" type="void">Type: void&#10;</param>
			/// <param name="strokeThickness" type="void">Type: void&#10;</param>
			/// <param name="strokeDashStyle" type="void">Type: void&#10;</param>
			/// <param name="renderer" type="void">Type: void&#10;</param>
		},
		CurveAreaRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws each series as an area with curved boundaries in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as areas.</param>
		},
		CurveAreaStackRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws stacked areas in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as stacked areas.</param>
		},
		CurveRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws series as a cardinal spline.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as a cardinal spline.</param>
		},
		DataBoundSeries: function (dataSource) {
			/// <summary>Represents a series whose data items are retrieved from a data source.</summary>
			/// <param name="dataSource" type="any, Array<any>, IEnumerable<any>">Type: any, Array<any>, IEnumerable<any>&#10;A reference to the data source object.</param>
		},
		DateTimeFormat: function() {
			/// <summary>Specifies formats for DateTime values.</summary>
		},
		DateTimeSeries: function (dates, values, minDate, maxDate) {
			/// <summary>Represents a series that contains Date values as X coordinates and number values as Y coordinates.</summary>
			/// <param name="dates" type="MindFusion.Charting.Collections.List<Date>">Type: List<Date>&#10;A list of Date values.</param>
			/// <param name="values" type="MindFusion.Charting.Collections.List<Number>">Type: List<Number>&#10;A list of number values.</param>
			/// <param name="minDate" type="Date">Type: Date&#10;Identifies the start of the time range.</param>
			/// <param name="maxDate" type="Date">Type: Date&#10;Identifies the end of the time range.</param>
		},
		FunnelRenderer: function (series, dimension) {
			/// <summary>Implements a SeriesRenderer used to draw funnel charts. Funnel charts represent the stages of a process and show relative values or measurements associated with each stage.</summary>
			/// <param name="series" type="Series">Type: Series&#10;The Series that should be rendered as a funnel.</param>
			/// <param name="dimension" type="Number" optional="true">Optional. Type: Number&#10;Specifies the Series dimension index that should be used to access data.</param>
		},
		GridType: function() {
			/// <summary>Indicates Plot2D grid type.</summary>
		},
		HitResult: function (renderer, index, value, series) {
			/// <summary>Represents the result of a hit-test operation.</summary>
			/// <param name="renderer" type="SeriesRenderer">Type: SeriesRenderer&#10;A SeriesRenderer whose data item has been hit.</param>
			/// <param name="index" type="Number">Type: Number&#10;An integer index of the data item.</param>
			/// <param name="value" type="Number">The item's value.</param>
			/// <param name="series" type="Series">Type: Series&#10;The Series that contains the found item.</param>
		},
		LabelKinds: function() {
			/// <summary>Identifies the various kinds of labels that can be drawn for data items.</summary>
		},
		LegendController: function (renderContext) {
			/// <summary>Lets users move a legend within the boundaries of its parent Panel.</summary>
			/// <param name="renderContext" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		},
		LegendRenderer: function () {
			/// <summary>A component that renders chart legend.</summary>
		},
		LineRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws series as polylines.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as polylines.</param>
		},
		LineType: function() {
			/// <summary>Identifies how to connect adjacent data points in line and area charts.</summary>
		},
		Margins: function (left, top, right, bottom) {
			/// <summary>Describes rectangular margins.</summary>
			/// <param name="left" type="void">Type: void&#10;</param>
			/// <param name="top" type="void">Type: void&#10;</param>
			/// <param name="right" type="void">Type: void&#10;</param>
			/// <param name="bottom" type="void">Type: void&#10;</param>
		},
		MixedSeriesStyle: function (fill, stroke, strokeThickness, strokeDashStyle) {
			/// <summary>Implements SeriesStyle using mixed per-element and uniform values for attributes.</summary>
			/// <param name="fill" type="MindFusion.Charting.Drawing.Brush" optional="true">Optional. Type: Brush&#10;A Brush used to fill all series elements.</param>
			/// <param name="stroke" type="MindFusion.Charting.Drawing.Brush" optional="true">Optional. Type: Brush&#10;A Brush used to stroke all series elements.</param>
			/// <param name="strokeThickness" type="Number" optional="true">Optional. Type: Number&#10;Uniform thickness of series elements' strokes.</param>
			/// <param name="strokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle" optional="true">Optional. Type: DashStyle&#10;Uniform dash style of series elements' strokes.</param>
		},
		Pair: function (first, second) {
			/// <summary>Contains two values.</summary>
			/// <param name="first" type="void">Type: void&#10;The first value.</param>
			/// <param name="second" type="void">Type: void&#10;The second value.</param>
		},
		PanController: function (renderContext, vertical) {
			/// <summary>Represents a controller that pans its plot's data range.</summary>
			/// <param name="renderContext" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
			/// <param name="vertical" type="Boolean">Type: Boolean&#10;true to implement interaction along the Y axis, or false for the X axis.</param>
		},
		PanControllerAnimation: function () {
			/// <summary>Represents a controller that pans its plot's data range.</summary>
		},
		PerElementSeriesStyle: function (fills, strokes, strokeThicknesses, strokeDashStyles) {
			/// <summary>Implements SeriesStyle using different attributes for each data item.</summary>
			/// <param name="fills" type="MindFusion.Charting.Collections.List<List<Brush>>" optional="true">Optional. Type: List<List<Brush>>&#10;A list of Brush lists, each list used to draw a different series,and each Brush used to fill individual elements of a series.</param>
			/// <param name="strokes" type="MindFusion.Charting.Collections.List<List<Brush>>" optional="true">Optional. Type: List<List<Brush>>&#10;A list of Brush lists, each list used to stroke a different series,and each Brush used to stroke individual elements of a series.</param>
			/// <param name="strokeThicknesses" type="MindFusion.Charting.Collections.List<List<Number>>" optional="true">Optional. Type: List<List<Number>>&#10;A list of number lists, each list used to stroke a different series,and each number value specifying thickness of individual elements of a series.</param>
			/// <param name="strokeDashStyles" type="MindFusion.Charting.Collections.List<List<DashStyle>>" optional="true">Optional. Type: List<List<DashStyle>>&#10;A list of DashStyle lists, each list used to stroke a different series,and each DashStyle value specifying style of individual elements of a series.</param>
		},
		PerSeriesStyle: function (fills, strokes, strokeThicknesses, strokeDashStyles) {
			/// <summary>Implements SeriesStyle using a different set of attributes for each series,where all elements in a single series have common appearance.</summary>
			/// <param name="fills" type="MindFusion.Charting.Collections.List<Brush>" optional="true">Optional. Type: List<Brush>&#10;A list of Brushes, each Brush used to fill all elements of a series.</param>
			/// <param name="strokes" type="MindFusion.Charting.Collections.List<Brush>" optional="true">Optional. Type: List<Brush>&#10;A list of Brushes, each Brush used to stroke all elements of a series.</param>
			/// <param name="strokeThicknesses" type="MindFusion.Charting.Collections.List<Number>" optional="true">Optional. Type: List<Number>&#10;A list of stroke thicknesses, each thickness applied to all elements of a series.</param>
			/// <param name="strokeDashStyles" type="MindFusion.Charting.Collections.List<DashStyle>" optional="true">Optional. Type: List<DashStyle>&#10;A list of dash styles, each style applied to all elements of a series.</param>
		},
		PieRadarRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws pie-radars, where data items are represented circular sectors of equal central angles, and the sector corresponding to a data item has radius proportional to its value.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered by this object.</param>
		},
		PieRenderer: function (series, dimension) {
			/// <summary>A SeriesRenderer that draws pies in its containing plot.</summary>
			/// <param name="series" type="Series">Type: Series&#10;The Series that should be rendered as a pie.</param>
			/// <param name="dimension" type="Number" optional="true">Optional. Type: Number&#10;Specifies the Series dimension index that should be used to access data.</param>
		},
		PieSeries: function (values, innerLabels, outerLabels) {
			/// <summary>Represents one-dimensional series defined by e list of data values and lists of inner and outer labels, convenient for providing data to PieRenderer.</summary>
			/// <param name="values" type="MindFusion.Charting.Collections.List<Number>">Type: List<Number>&#10;A list of data values.</param>
			/// <param name="innerLabels" type="MindFusion.Charting.Collections.List<String>">Type: List<String>&#10;A list of inner labels.</param>
			/// <param name="outerLabels" type="MindFusion.Charting.Collections.List<String>">Type: List<String>&#10;A list of outer labels.</param>
		},
		Plot: function () {
			/// <summary>The base class for components used to draw chart graphics.</summary>
		},
		Plot2D: function () {
			/// <summary>A plot whose series are rendered relatively to a two-dimensional Cartesian coordinate system.</summary>
		},
		Plot2DController: function (renderContext, vertical) {
			/// <summary>A base class for controllers that let users interact with Plot2D objects.</summary>
			/// <param name="renderContext" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
			/// <param name="vertical" type="Boolean">Type: Boolean&#10;true to implement interaction along the Y axis, or false for the X axis.</param>
		},
		Plot3D: function () {
			/// <summary>A plot whose series are rendered relatively to a three-dimensional Cartesian coordinate system.</summary>
		},
		PlotController: function (renderContext) {
			/// <summary>A base class for controllers implementing user interaction with Plot components.</summary>
			/// <param name="renderContext" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		},
		Point3D: function (x, y, z) {
			/// <summary>Represents a point in 3D space.</summary>
			/// <param name="x" type="Number">Type: Number&#10;X coordinate of the point.</param>
			/// <param name="y" type="Number">Type: Number&#10;Y coordinate of the point.</param>
			/// <param name="z" type="Number">Type: Number&#10;Z coordinate of the point.</param>
		},
		PointSeries: function (points, labels) {
			/// <summary>Represents a data series defined by a list of Point objects.</summary>
			/// <param name="points" type="MindFusion.Charting.Collections.List<Point>">Type: List<Point>&#10;A list of points.</param>
			/// <param name="labels" type="MindFusion.Charting.Collections.List<String>">Type: List<String>&#10;A list of labels.</param>
		},
		PointSeries3D: function (points, labels) {
			/// <summary>Represents a data series defined by a list of Point3D objects.</summary>
			/// <param name="points" type="MindFusion.Charting.Collections.List<Point3D>">Type: List<Point3D>&#10;A list of 3D points.</param>
			/// <param name="labels" type="MindFusion.Charting.Collections.List<String>">Type: List<String>&#10;A list of labels.</param>
		},
		PolarPlot: function () {
			/// <summary>A plot used to draw graphics in polar coordinate system.</summary>
		},
		RadarAxisOptions: function (axis) {
			/// <summary>Provides properties for customizing axis rendering in radar charts.</summary>
			/// <param name="axis" type="void">Type: void&#10;</param>
		},
		RadarGridType: function() {
			/// <summary>Identifies the grid types supported by RadarPlot.</summary>
		},
		RadarPlot: function () {
			/// <summary>A plot containing radar-chart graphics.</summary>
		},
		RadarRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws series as polygons in polar coordinate system,where adjacent data points are at equal angular distances and radial coordinates correspond to magnitude of data item values.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered by this object.</param>
		},
		RadarScatterRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws scatter in radar plots.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as scatter.</param>
		},
		RadarType: function() {
			/// <summary>Identifies the type of radar-chart.</summary>
		},
		RenderContext: function (clipRect, theme) {
			/// <summary>Provides contextual information about the dashboard to its child components when calling their draw, layout and user input methods.</summary>
			/// <param name="clipRect" type="Rect">Type: Rect&#10;A Rect specifying the clip rectangle.</param>
			/// <param name="theme" type="Theme">Type: Theme&#10;A Theme instance where appearance attributes should be derived from.</param>
		},
		RenderContext2D: function (clipRect, theme) {
			/// <summary>Provides contextual information about the dashboard to its child components when calling their draw, layout and user input methods.</summary>
			/// <param name="clipRect" type="void">Type: void&#10;A RectD specifying the clip rectangle.</param>
			/// <param name="theme" type="void">Type: void&#10;A Theme instance where appearance attributes should be derived from.</param>
		},
		Renderer2D: function (series) {
			/// <summary>A base class for series renderers that draw in two dimensional Cartesian coordinate system.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered by this object.</param>
		},
		RotationController: function (renderContext) {
			/// <summary>Represents a controller that rotates a polar plot by changing its StartAngle.</summary>
			/// <param name="renderContext" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		},
		RotationControllerAnimation: function () {
			/// <summary>Represents a controller that rotates a polar plot by changing its StartAngle.</summary>
		},
		ScatterRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws scatter in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as scatter.</param>
		},
		ScatterType: function() {
			/// <summary>Identifies the shapes rendered by a ScatterRenderer.</summary>
		},
		Series2D: function (xValues, yValues, labels) {
			/// <summary>Represents a data series defined by two lists of values containing respectively X and Y coordinates.</summary>
			/// <param name="xValues" type="MindFusion.Charting.Collections.List<Number>">Type: List<Number>&#10;A list of X coordinates.</param>
			/// <param name="yValues" type="MindFusion.Charting.Collections.List<Number>">Type: List<Number>&#10;A list of Y coordinates.</param>
			/// <param name="labels" type="MindFusion.Charting.Collections.List<Number>">Type: List<Number>&#10;A list of labels.</param>
		},
		Series3D: function (xValues, yValues, zValues, labels) {
			/// <summary>Represents a data series defined by three lists of values containing respectively X, Y and Z coordinates.</summary>
			/// <param name="xValues" type="MindFusion.Charting.Collections.List<Number>">Type: List<Number>&#10;A list of X coordinates.</param>
			/// <param name="yValues" type="MindFusion.Charting.Collections.List<Number>">Type: List<Number>&#10;A list of Y coordinates.</param>
			/// <param name="zValues" type="MindFusion.Charting.Collections.List<Number>">Type: List<Number>&#10;A list of Z coordinates.</param>
			/// <param name="labels" type="MindFusion.Charting.Collections.List<String>">Type: List<String>&#10;A list of labels.</param>
		},
		SeriesRenderer: function () {
			/// <summary>Base class for renderer objects that draw data series inside a Plot.</summary>
		},
		SimpleSeries: function (values, labels) {
			/// <summary>Represents one-dimensional series defined by e list of data values and a list of labels.</summary>
			/// <param name="values" type="MindFusion.Charting.Collections.List<Number>">Type: List<Number>&#10;A list of data values.</param>
			/// <param name="labels" type="MindFusion.Charting.Collections.List<String>">Type: List<String>&#10;A list of labels.</param>
		},
		StackRenderer: function (series) {
			/// <summary>A base SeriesRenderer for stacked graphics.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;</param>
		},
		StepAreaRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws series as filled steps between data points.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered by this object.</param>
		},
		StepRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws series as steps between data points.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered by this object.</param>
		},
		StockPrice: function (open, close, low, high, date) {
			/// <summary>Represents a data object, containing open, close, low and high values for a certain date.</summary>
			/// <param name="open" type="Number">Type: Number&#10;The open value.</param>
			/// <param name="close" type="Number">Type: Number&#10;The close value.</param>
			/// <param name="low" type="Number">Type: Number&#10;The low value.</param>
			/// <param name="high" type="Number">Type: Number&#10;The high value.</param>
			/// <param name="date" type="Date" optional="true">Optional. Type: Date&#10;The corresponding date.</param>
		},
		StockPriceSeries: function (values) {
			/// <summary>Represents a data series defined by a list of StockPrice objects.</summary>
			/// <param name="values" type="MindFusion.Charting.Collections.List<StockPrice>">Type: List<StockPrice>&#10;A list of StockPrice objects.</param>
		},
		TextRenderer: function (context, font, textBrush) {
			/// <summary>Draws text and labels inside chart components.</summary>
			/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
			/// <param name="font" type="MindFusion.Drawing.Font">Type: Font&#10;A Font instance.</param>
			/// <param name="textBrush" type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</param>
		},
		TextStyle: function () {
			/// <summary>Defines text appearance attributes.</summary>
		},
		TextStyleHint: function() {
			/// <summary>Identifies text styles that can be accessed through RenderContent.</summary>
		},
		Theme: function (fill, stroke, strokeThickness, strokeDashStyle) {
			/// <summary>Represents a dashboard's theme defining all appearance attributes of its elements.</summary>
			/// <param name="fill" type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush used to fill all series elements.</param>
			/// <param name="stroke" type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush used to stroke all series elements.</param>
			/// <param name="strokeThickness" type="Number">Type: Number&#10;Uniform thickness of series elements' strokes.</param>
			/// <param name="strokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;Uniform dash style of series elements' strokes.</param>
		},
		ToolTip: function () {
			/// <summary>Represents current tooltip.</summary>
		},
		UniformSeriesStyle: function (fill, stroke, strokeThickness, strokeDashStyle) {
			/// <summary>Implements SeriesStyle using uniform attributes for all elements in all series.</summary>
			/// <param name="fill" type="MindFusion.Charting.Drawing.Brush" optional="true">Optional. Type: Brush&#10;A Brush used to fill all series elements.</param>
			/// <param name="stroke" type="MindFusion.Charting.Drawing.Brush" optional="true">Optional. Type: Brush&#10;A Brush used to stroke all series elements.</param>
			/// <param name="strokeThickness" type="Number" optional="true">Optional. Type: Number&#10;Uniform thickness of series elements' strokes.</param>
			/// <param name="strokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle" optional="true">Optional. Type: DashStyle&#10;Uniform dash style of series elements' strokes.</param>
		},
		Vector: function (x, y) {
			/// <summary>Represents a two-dimensional vector.</summary>
			/// <param name="x" type="Number">Type: Number&#10;X component of the vector.</param>
			/// <param name="y" type="Number">Type: Number&#10;Y component of the vector.</param>
		},
		XAxisRenderer: function (axis) {
			/// <summary>A Component that renders horizontal Axis ranges.</summary>
			/// <param name="axis" type="MindFusion.Charting.Axis">Type: Axis&#10;The Axis that will be drawn by this object.</param>
		},
		XmlPersistContext: function (document, fileVersion) {
			/// <summary>Contains methods that facilitate serializing and deserializing objects to and from XML documents.</summary>
			/// <param name="document" type="XMLDocument">Type: XMLDocument&#10;The associated XMLDocument.</param>
			/// <param name="fileVersion" type="number">Type: number&#10;Specifies the current file format number.</param>
		},
		YAxisRenderer: function (axis, xAxis) {
			/// <summary>A Component that renders vertical Axis ranges.</summary>
			/// <param name="axis" type="MindFusion.Charting.Axis">Type: Axis&#10;The Axis that will be drawn by this object.</param>
			/// <param name="xAxis" type="MindFusion.Charting.Axis" optional="true">Optional. Type: Axis&#10;The Axis used to check data item visibility.</param>
		},
		ZoomController: function (renderContext, vertical) {
			/// <summary>Represents a controller that zooms into plot's data range.</summary>
			/// <param name="renderContext" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
			/// <param name="vertical" type="Boolean">Type: Boolean&#10;true to implement interaction along the Y axis, or false for the X axis.</param>
		},
		__namespace: true
	},
	Drawing: {
		Canvas: function (element) {
			/// <summary>The Canvas class represents a wrapper class for the HTML5 Canvas element.</summary>
			/// <param name="element" type="Canvas">The Canvas DOM Element this Canvas is associated with.</param>
		},
		DashStyle: function() {
			/// <summary>Specifies the dash pattern of lines.</summary>
		},
		Ellipse: function (x, y, width, height) {
			/// <summary>Represents an Ellipse.</summary>
			/// <param name="x" type="Number">Type: Number&#10;The X-coordinate of the top left corner of the Ellipse.</param>
			/// <param name="y" type="Number">Type: Number&#10;The Y-coordinate of the top left corner of the Ellipse.</param>
			/// <param name="width" type="Number">Type: Number&#10;The width of the Ellipse.</param>
			/// <param name="height" type="Number">Type: Number&#10;The height of the Ellipse.</param>
		},
		Font: function () {
			/// <summary>Represents a font.</summary>
		},
		FontStyle: function() {
			/// <summary>Specifies font style attributes.</summary>
		},
		Image: function (bounds) {
			/// <summary>Represents an image.</summary>
			/// <param name="bounds" type="MindFusion.Drawing.Rect">Type: Rect&#10;The bounds of the image.</param>
		},
		Path: function (pathString) {
			/// <summary>Represents a path.</summary>
			/// <param name="pathString" type="String">Type: String&#10;A string representing the path figures.</param>
		},
		Point: function (x, y) {
			/// <summary>Represents a point.</summary>
			/// <param name="x" type="Number">The X-coordinate of the Point.</param>
			/// <param name="y" type="Number">The Y-coordinate of the Point.</param>
		},
		Rect: function (x, y, width, height) {
			/// <summary>Represents a rectangle.</summary>
			/// <param name="x" type="Number">Type: Number&#10;The X-coordinate of the top left corner of the rectangle.</param>
			/// <param name="y" type="Number">Type: Number&#10;The Y-coordinate of the top left corner of the rectangle.</param>
			/// <param name="width" type="Number">Type: Number&#10;The width of the rectangle.</param>
			/// <param name="height" type="Number">Type: Number&#10;The height of the rectangle.</param>
		},
		Size: function (width, height) {
			/// <summary>Represents the size of 2D object.</summary>
			/// <param name="width" type="Number">Type: Number&#10;Specifies width.</param>
			/// <param name="height" type="Number">Type: Number&#10;Specifies height.</param>
		},
		Text: function (text, bounds) {
			/// <summary>Represents a text container.</summary>
			/// <param name="text" type="String">Type: String&#10;The text to be displayed in the container.</param>
			/// <param name="bounds" type="MindFusion.Drawing.Rect">Type: Rect&#10;The bounds of the container.</param>
		},
		Thickness: function (left, top, right, bottom) {
			/// <summary>Describes the thickness of a rectangular frame.</summary>
			/// <param name="left" type="Number">Type: Number&#10;Specifies the width of the left side of the frame.</param>
			/// <param name="top" type="Number">Type: Number&#10;Specifies the width of the top side of the frame.</param>
			/// <param name="right" type="Number">Type: Number&#10;Specifies the width of the right side of the frame.</param>
			/// <param name="bottom" type="Number">Type: Number&#10;Specifies the width of the bottom side of the frame.</param>
		},
		Vector: function (x, y) {
			/// <summary>Represents displacement in 2D space.</summary>
			/// <param name="x" type="Number">Type: Number&#10;The X-coordinate of the Vector.</param>
			/// <param name="y" type="Number">Type: Number&#10;The Y-coordinate of the Vector.</param>
		},
		__namespace: true
	},
	Gauges: {
		Alignment: function() {
			/// <summary>Indicates an alignment of an object relative to the scale. In the descriptionsbelow 'outbound' refers to an element's outer outline, 'inbound' refers to anelement's inner outline and 'center' refers to en element's center, that is,the middle of the inbound and outbound.</summary>
		},
		ArcArea: function () {
			/// <summary>Represents an ellipse visual.</summary>
		},
		ArcSegment: function () {
			/// <summary>Represents an elliptical arc between two points.</summary>
		},
		BaseGauge: function (element) {
			/// <summary>Represents the base class of linear and oval gauges.</summary>
			/// <param name="element" type="Object">Type: Object&#10;The Div DOM element this gauge is associated with.</param>
		},
		BaseScale: function (parent) {
			/// <summary>Represents a scale within a gauge control.</summary>
			/// <param name="parent" type="BaseGauge">Type: BaseGauge&#10;The gauge control this scale belongs to.</param>
		},
		CenterPanel: function () {
			/// <summary>Represents a container which centers its children and makes them with square size.</summary>
		},
		CustomInterval: function () {
			/// <summary>Represents an interval with associated custom values for fill and stroke.</summary>
		},
		DisplayType: function() {
			/// <summary>Specifies a display condition.</summary>
		},
		Ellipse: function () {
			/// <summary>Represents an ellipse visual.</summary>
		},
		Events: function () {
			/// <summary>Defines all events raised by the Gauge component.</summary>
		},
		FunctionType: function() {
			/// <summary>Indicates the type of function that will be used to distribute values along the gauge scale.</summary>
		},
		GeometryFactory: function () {
			/// <summary>A factory class for various geometry objects.</summary>
		},
		LabelRotation: function() {
			/// <summary>Indicates the rotation of a label within a scale.</summary>
		},
		Length: function (value, type) {
			/// <summary>Specifies distance expressed either absolutely, through pixels, or relatively, through a percentage of the container's size.</summary>
			/// <param name="value" type="Number">Type: Number&#10;A number specifying the initial length value.</param>
			/// <param name="type" type="LengthType">A member of the LengthType enumeration specifying the length type.</param>
		},
		LengthType: function() {
			/// <summary>Indicates the type of the units of a Length object.</summary>
		},
		LinearGauge: function (element) {
			/// <summary>Represents a linear gauge control.</summary>
			/// <param name="element" type="Object">The Div DOM Element this LinearGauge is associated with.</param>
		},
		LinearScale: function (parent) {
			/// <summary>Represents a linear scale.</summary>
			/// <param name="parent" type="BaseGauge">Type: BaseGauge&#10;The gauge control this scale belongs to.</param>
		},
		LineSegment: function () {
			/// <summary>Represents a line between two points.</summary>
		},
		MajorTickSettings: function (parent) {
			/// <summary>Provides settings for the major ticks and labels in a gauge scale.</summary>
			/// <param name="parent" type="BaseScale">Type: BaseScale&#10;The scale these settings belong to.</param>
		},
		MiddleTickSettings: function (parent) {
			/// <summary>Provides settings for the middle ticks and labels in a gauge scale.</summary>
			/// <param name="parent" type="BaseScale">Type: BaseScale&#10;The scale these settings belong to.</param>
		},
		MinorTickSettings: function (parent) {
			/// <summary>Provides settings for the minor ticks and labels in a gauge scale.</summary>
			/// <param name="parent" type="BaseScale">Type: BaseScale&#10;The scale these settings belong to.</param>
		},
		MouseAction: function() {
			/// <summary>Specifies an action performed with the mouse.</summary>
		},
		MouseInfo: function () {
			/// <summary>Provides mouse information when processing mouse events in the visual element hierarchy.</summary>
		},
		Orientation: function() {
			/// <summary>Specifies the orientation of elements.</summary>
		},
		OvalGauge: function (element) {
			/// <summary>Represents a circular gauge control.</summary>
			/// <param name="element" type="Object">The Div DOM Element this OvalGauge is associated with.</param>
		},
		OvalGaugeStyle: function() {
			/// <summary>Specifies the appearance of an oval gauge.</summary>
		},
		OvalScale: function (parent) {
			/// <summary>Represents a radial scale.</summary>
			/// <param name="parent" type="BaseGauge">Type: BaseGauge&#10;The gauge control this scale belongs to.</param>
		},
		PaintEventArgs: function () {
			/// <summary>Provides data for the various custom painting event.</summary>
		},
		PathFigure: function (data) {
			/// <summary>Represents a connected series of geometric segments.</summary>
			/// <param name="data" type="String">Type: String&#10;The path data string.</param>
		},
		Pointer: function () {
			/// <summary>Represents a needle (or arrow) within a gauge scale.</summary>
		},
		PointerShape: function() {
			/// <summary>Indicates the shape of a pointer.</summary>
		},
		PrepaintEventArgs: function () {
			/// <summary>Provides data for various pre-paint events.</summary>
		},
		Range: function () {
			/// <summary>Represents a range within a gauge scale.</summary>
		},
		RoundRectangle: function () {
			/// <summary>Represents a rounded rectangle.</summary>
		},
		Segment: function () {
			/// <summary>Represents a segment of a PathFigure object.</summary>
		},
		Thickness: function (left, top, right, bottom, isRelative) {
			/// <summary>Describes the thickness on all four sides of a rectangular frame.</summary>
			/// <param name="left" type="Number">Type: Number&#10;The width of the left side of the frame.</param>
			/// <param name="top" type="Number">Type: Number&#10;The width of the top side of the frame.</param>
			/// <param name="right" type="Number">Type: Number&#10;The width of the right side of the frame.</param>
			/// <param name="bottom" type="Number">Type: Number&#10;The width of the bottom side of the frame.</param>
			/// <param name="isRelative" type="Number">Type: Number&#10;A flag indicating whether the thickness properties are expressed as relative or absolute quantities.</param>
		},
		Tick: function (settings) {
			/// <summary>Represents a tick mark within a gauge scale.</summary>
			/// <param name="settings" type="TickSettings">The TickSettings object associated with this tick.</param>
		},
		TickLabel: function (settings) {
			/// <summary>Represents a tick label within a gauge scale.</summary>
			/// <param name="settings" type="TickSettings">Type: TickSettings&#10;The TickSettings object associated with this label.</param>
		},
		TickSettings: function (parent) {
			/// <summary>Provides settings for the ticks and labels in a gauge scale.</summary>
			/// <param name="parent" type="BaseScale">Type: BaseScale&#10;The scale these settings belong to.</param>
		},
		TickShape: function() {
			/// <summary>Indicates the shape of a scale tick.</summary>
		},
		TickType: function() {
			/// <summary>Indicates the type of a scale tick.</summary>
		},
		ValueChangedEventArgs: function () {
			/// <summary>Contains the arguments passed to value changed notification handlers.</summary>
		},
		ValueChangingEventArgs: function () {
			/// <summary>Contains the arguments passed to value changing notification handlers.</summary>
		},
		VisualElement: function () {
			/// <summary>Represents an object with outline and fill, which can render itself to a canvas.</summary>
		},
		VisualElementContainer: function () {
			/// <summary>Represents a visual element which contains other visual elements.</summary>
		},
		__namespace: true
	},
	CancelEventArgs: function () {
		/// <summary>Contains the arguments passed to handlers of cancellable events.</summary>
	},
	EventArgs: function () {
		/// <summary>Base events args class.</summary>
	},
	__namespace: true
};

MindFusion.Charting.Collections.Dictionary.prototype = {
	contains: function(key) {
		/// <summary>Determines whether the dictionary contains a specific key.</summary>
		/// <param name="key" type="TKey">Type: TKey&#10;The key to locate in the dictionary.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the element exists in the collection, otherwise false.</returns>
	},
	get: function(key) {
		/// <summary>Gets the value associated with the specified key within the dictionary.</summary>
		/// <param name="key" type="TKey">Type: TKey&#10;The key whose value to get.</param>
	},
	remove: function(key) {
		/// <summary>Removes the element with the specified key from the dictionary.</summary>
		/// <param name="key" type="TKey">Type: TKey&#10;The key of the element to remove.</param>
	},
	set: function(key, value) {
		/// <summary>Associates the specified value with the specified key within the dictionary.</summary>
		/// <param name="key" type="TKey">Type: TKey&#10;The key to associate the value with.</param>
		/// <param name="value" type="TValue">Type: TValue&#10;The value to associate.</param>
	}
};
MindFusion.Charting.Collections.Dictionary.__class = true;

MindFusion.Charting.Collections.IEnumerable.prototype = {
	add: function(item) {
		/// <summary>Adds an object to the end of the collection.</summary>
		/// <param name="item" type="T">Type: T&#10;The object to add.</param>
	},
	clear: function() {
		/// <summary>Clears the collection.</summary>
	},
	clone: function() {
		/// <summary>Creates a copy of the collection.</summary>
		/// <returns type="IEnumerable<T>">Type: IEnumerable<T>&#10;A copy of this collection.</returns>
	},
	contains: function(item) {
		/// <summary>Checks if the given element is present in the collection.</summary>
		/// <param name="item" type="T">Type: T&#10;The object to check for.</param>
		/// <returns type="Boolean">Type: Boolean&#10;True if the element is found, otherwise false.</returns>
	},
	copyTo: function(destination, length, sourceIndex, destinationIndex) {
		/// <summary>Copies a range of elements from this collection to a destination collection.</summary>
		/// <param name="destination" type="IEnumerable<T>">Type: IEnumerable<T>&#10;The destination collection.</param>
		/// <param name="length" type="Number">Type: Number&#10;The length of the range to copy.</param>
		/// <param name="sourceIndex" type="Number" optional="true">Optional. Type: Number&#10;The starting index of the range to copy.</param>
		/// <param name="destinationIndex" type="Number" optional="true">Optional. Type: Number&#10;The index at which the range should be copied.</param>
	},
	count: function() {
		/// <summary>Gets the number of elements.</summary>
		/// <returns type="Number">Type: Number&#10;The number of elements.</returns>
	},
	indexOfItem: function(obj, fromIndex) {
		/// <summary>Gets the index of a given object in a collection.</summary>
		/// <param name="obj" type="T">Type: T&#10;The object to look for.</param>
		/// <param name="fromIndex" type="Number" optional="true">Optional. Type: Number&#10;The starting index to search from.</param>
		/// <returns type="Number">Type: Number&#10;The index of the object, or -1 if the object is not present in the collection.</returns>
	},
	insert: function(index, item) {
		/// <summary>Adds an element to the collection at the specified index.</summary>
		/// <param name="index" type="Number">Type: Number&#10;The index.</param>
		/// <param name="item" type="T">Type: T&#10;The object to add.</param>
	},
	item: function(index) {
		/// <summary>Gets the element at the given index.</summary>
		/// <param name="index" type="Number">Type: Number&#10;The index.</param>
		/// <returns type="T">Type: T&#10;The element at the given index.</returns>
	},
	items: function() {
		/// <summary>Gets the collection as an array.</summary>
		/// <returns type="Array<T>">Type: Array<T>&#10;The underlying array data structure of the collection.</returns>
	},
	max: function(selector) {
		/// <summary>Invokes a transform function on each item and returns the maximum value in a sequence of numbers.</summary>
		/// <param name="selector" type="Function">Type: Function&#10;A transform function to invoke on each element.</param>
		/// <returns type="Number">Type: Number&#10;The maximum number in the sequence.</returns>
	},
	min: function(selector) {
		/// <summary>Invokes a transform function on each item and returns the minimum value in a sequence of numbers.</summary>
		/// <param name="selector" type="Function">Type: Function&#10;A transform function to invoke on each element.</param>
		/// <returns type="Number">Type: Number&#10;The minimum number in the sequence.</returns>
	},
	remove: function(item) {
		/// <summary>Removes an element from the collection.</summary>
		/// <param name="item" type="T">Type: T&#10;The object to remove.</param>
	},
	removeAt: function(index) {
		/// <summary>Removes the element at the given index.</summary>
		/// <param name="index" type="Number">Type: Number&#10;The index.</param>
	},
	removeRange: function(index, count) {
		/// <summary>Removes a range of elements starting from the given index.</summary>
		/// <param name="index" type="Number">Type: Number&#10;The starting index of the range.</param>
		/// <param name="count" type="Number">Type: Number&#10;The length of the range.</param>
	},
	reverse: function() {
		/// <summary>Gets the collection as an array in reverse order.</summary>
		/// <returns type="Array<T>">Type: Array<T>&#10;The underlying array data structure of the collection in reverse order.</returns>
	},
	select: function(selector) {
		/// <summary>Projects each element of a sequence into a new form.</summary>
		/// <param name="selector" type="Function">Type: Function&#10;A transform function to invoke on each element.</param>
		/// <returns type="IEnumerable<T>">An collection whose elements are the result invoking the transform function on each element.</returns>
	},
	sort: function(compareFn) {
		/// <summary>Sorts the underlying array.</summary>
		/// <param name="compareFn" type="Function" optional="true">Optional. Type: Function&#10;The comparing function.</param>
	},
	sum: function(selector) {
		/// <summary>Computes the sum of the sequence of number values that are obtained by invoking a transform function on each element.</summary>
		/// <param name="selector" type="Function">Type: Function&#10;A transform function to invoke on each element.</param>
		/// <returns type="Number">Type: Number&#10;The sum of the number values in the sequence.</returns>
	},
	toArray: function() {
		/// <summary>Returns a new Object array, containing the contents of the collection.</summary>
		/// <returns type="Array<T>">Type: Array<T>&#10;The array.</returns>
	}
};
MindFusion.Charting.Collections.IEnumerable.__class = true;

MindFusion.Charting.Collections.List.prototype = {
};
MindFusion.Charting.Collections.List.__class = true;

MindFusion.Charting.Collections.ObservableCollection.prototype = {
	add: function(item) {
		/// <summary>Adds an object to the collection.</summary>
		/// <param name="item" type="T">Type: T&#10;The item to add.</param>
	},
	clear: function() {
		/// <summary>Clears the collection</summary>
	},
	onCollectionChanged: function(args) {
		/// <summary>Raises the collectionChanged event.</summary>
		/// <param name="args" type="NotifyCollectionChangedEventArgs">Type: NotifyCollectionChangedEventArgs&#10;An instance of the NotifyCollectionChangedEventArgs class.</param>
	},
	onPropertyChanged: function(args) {
		/// <summary>Raises the propertyChanged event.</summary>
		/// <param name="args" type="PropertyChangedEventArgs">Type: PropertyChangedEventArgs&#10;An instance of the PropertyChangedEventArgs class.</param>
	},
	remove: function(item) {
		/// <summary>Deletes an object from the collection</summary>
		/// <param name="item" type="T">Type: T&#10;The item to remove.</param>
	},
	removeAt: function(itemIndex) {
		/// <summary>Delete the element at the specified index.</summary>
		/// <param name="itemIndex" type="Number">Type: Number&#10;The index to remove at.</param>
	},
	removeRange: function(index, count) {
		/// <summary>Deletes a range of elements from the collection</summary>
		/// <param name="index" type="Number">Type: Number&#10;The starting index of the range to remove.</param>
		/// <param name="count" type="Number">Type: Number&#10;The length of the range to remove.</param>
	}
};
MindFusion.Charting.Collections.ObservableCollection.__class = true;

MindFusion.Charting.Commands.Command.prototype = {
	commit: function() {
		/// <summary>A shortcut method for executing the command through the undo engine.</summary>
	}
};
MindFusion.Charting.Commands.Command.__class = true;

MindFusion.Charting.Commands.CompositeCommand.prototype = {
	execute: function() {
		/// <summary>DisposableCommand.Execute override.</summary>
	},
	redo: function() {
		/// <summary>Command.Redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.Undo override.</summary>
	}
};
MindFusion.Charting.Commands.CompositeCommand.__class = true;

MindFusion.Charting.Commands.DisposableCommand.prototype = {
	cancel: function() {
		/// <summary>Cancels the command.</summary>
	},
	clean: function() {
		/// <summary>Disposes of this command.</summary>
	},
	dispose: function() {
		/// <summary>IDisposable.Dispose implementation.</summary>
	},
	execute: function() {
		/// <summary>Command.Execute override.</summary>
	},
	redo: function() {
		/// <summary>Command.Redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.Undo override.</summary>
	}
};
MindFusion.Charting.Commands.DisposableCommand.__class = true;

MindFusion.Charting.Commands.TrackChangesCommand.prototype = {
	beginChange: function() {
		/// <summary>Called before undoing or redoing the command.</summary>
	},
	endChange: function() {
		/// <summary>Called after undoing or redoing the command.</summary>
	},
	redo: function() {
		/// <summary>DisposableCommand.Redo override.</summary>
	},
	undo: function() {
		/// <summary>DisposableCommand.Undo override.</summary>
	}
};
MindFusion.Charting.Commands.TrackChangesCommand.__class = true;

MindFusion.Charting.Commands.UndoEventArgs.prototype = {
};
MindFusion.Charting.Commands.UndoEventArgs.__class = true;

MindFusion.Charting.Common.EventDispatcher.prototype = {
	addEventListener: function(handler) {
		/// <summary>Subscribes an event listener to this event.</summary>
		/// <param name="handler" type="void">Type: void&#10;</param>
	},
	raiseEvent: function(sender, args) {
		/// <summary>Raises this event.</summary>
		/// <param name="sender" type="void">Type: void&#10;</param>
		/// <param name="args" type="void">Type: void&#10;</param>
	},
	removeEventListener: function(handler) {
		/// <summary>Removes an event listener from this event.</summary>
		/// <param name="handler" type="void">Type: void&#10;</param>
	}
};
MindFusion.Charting.Common.EventDispatcher.__class = true;

MindFusion.Charting.Common.NotifyCollectionChangedAction.prototype = {
	Add: 0,
	Remove: 1,
	Reset: 2
};
MindFusion.Charting.Common.NotifyCollectionChangedAction.__enum = true;

MindFusion.Charting.Common.NotifyCollectionChangedEventArgs.prototype = {
};
MindFusion.Charting.Common.NotifyCollectionChangedEventArgs.__class = true;

MindFusion.Charting.Common.NotifyCollectionChangedEventDispatcher.prototype = {
};
MindFusion.Charting.Common.NotifyCollectionChangedEventDispatcher.__class = true;

MindFusion.Charting.Common.PropertyChangedEventArgs.prototype = {
};
MindFusion.Charting.Common.PropertyChangedEventArgs.__class = true;

MindFusion.Charting.Common.PropertyChangedEventDispatcher.prototype = {
};
MindFusion.Charting.Common.PropertyChangedEventDispatcher.__class = true;

MindFusion.Charting.Common.PropertyEventArgs.prototype = {
};
MindFusion.Charting.Common.PropertyEventArgs.__class = true;

MindFusion.Charting.Components.BorderComponent.prototype = {
	arrange: function(x, y, w, h, context) {
		/// <summary>Component.Arrange override. Sets the location and size of this border and arranges its Content.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	draw: function(context) {
		/// <summary>Component.Draw override. Draws this border in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this border and its Content.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Components.BorderComponent.__class = true;

MindFusion.Charting.Components.ButtonComponent.prototype = {
	arrange: function(x, y, w, h, context) {
		/// <summary>Component.Arrange override. Sets the location and size of this button relatively to its parent.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	createController: function(context) {
		/// <summary>Component.CreateController override. Returns a controller used to interact with this button.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;Instance of a ComponentController -derived class.</returns>
	},
	draw: function(context) {
		/// <summary>Component.Draw override. Draws this button in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this button.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	onClicked: function(e) {
		/// <summary>Raises the Clicked event.</summary>
		/// <param name="e" type="EventArgs">Type: EventArgs&#10;An instance of the EventArgs class.</param>
	},
	onCustomDraw: function(e) {
		/// <summary>Raises the CustomDraw event.</summary>
		/// <param name="e" type="ButtonDrawEventArgs">Type: ButtonDrawEventArgs&#10;An instance of the ButtonDrawEventArgs class.</param>
	}
};
MindFusion.Charting.Components.ButtonComponent.__class = true;

MindFusion.Charting.Components.ButtonDrawEventArgs.prototype = {
};
MindFusion.Charting.Components.ButtonDrawEventArgs.__class = true;

MindFusion.Charting.Components.ButtonDrawEventDispatcher.prototype = {
};
MindFusion.Charting.Components.ButtonDrawEventDispatcher.__class = true;

MindFusion.Charting.Components.Component.prototype = {
	add: function(value1, value2) {
		/// <summary>Sums specified nullable number values.</summary>
		/// <param name="value1" type="Number">Type: Number&#10;The first term to sum.</param>
		/// <param name="value2" type="Number">Type: Number&#10;The second term to sum.</param>
		/// <returns type="Number">Type: Number&#10;A nullable number value representing the sum.</returns>
	},
	arrange: function(x, y, w, h, context) {
		/// <summary>Sets the location and size of this component relatively to its parent.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	arrangeInRect: function(child, context, x, y, w, h) {
		/// <summary>Arranges a child component in specified layout rectangle.</summary>
		/// <param name="child" type="Component">Type: Component&#10;A Component instance specifying the child to arrange.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="x" type="Number">Type: Number&#10;Layout rectangle's horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;Layout rectangle's vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;Layout rectangle's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;Layout rectangle's height.</param>
	},
	createController: function(context) {
		/// <summary>Returns a ComponentController used to interact with this component.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;Instance of a ComponentController -derived class.</returns>
	},
	draw: function(context) {
		/// <summary>Draws this component in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	getCursorHint: function(x, y) {
		/// <summary>Invoked while the mouse is moved to let your application set the mouse cursor.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A double value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A double value specifying the vertical position of mouse pointer.</param>
		/// <returns type="CursorHint">Type: CursorHint&#10;A member of the CursorHint enumeration.</returns>
	},
	hitTest: function(x, y) {
		/// <summary>Returns the component containing specified point.</summary>
		/// <param name="x" type="Number">Type: Number&#10;X coordinate of the point to test.</param>
		/// <param name="y" type="Number">Type: Number&#10;Y coordinate of the point to test.</param>
		/// <returns type="Component">Type: Component&#10;A Component instance if one contains the point, or null otherwise.</returns>
	},
	invalidate: function(rect) {
		/// <summary>Invalidates the appearance of this component and calls its Draw method at next draw operation.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect" optional="true">Optional. Type: Rect&#10;A RectD instance specifying the invalid rectangle.</param>
	},
	invalidateLayout: function() {
		/// <summary>Invalidates the current layout and runs a new layout pass before next draw operation.</summary>
	},
	localToRoot: function(point) {
		/// <summary>Transforms the specified point to the coordinate system of the root panel.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;A Point instance containing coordinates local to this component.</param>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;A Point instance containing coordinates relative to the root panel.</returns>
	},
	max: function(value1, value2) {
		/// <summary>Returns the larger of specified values.</summary>
		/// <param name="value1" type="Number">Type: Number&#10;The first value to compare.</param>
		/// <param name="value2" type="Number">Type: Number&#10;The second value to compare.</param>
		/// <returns type="Number">Type: Number&#10;A nullable number value representing the larger value.</returns>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	rootToLocal: function(point) {
		/// <summary>Transforms the specified point to the coordinate system of this component.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;A Point instance containing coordinates relative to the root panel.</param>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;A Point instance containing coordinates local to this component.</returns>
	},
	visit: function(visitor) {
		/// <summary>Implements the visitor design pattern.</summary>
		/// <param name="visitor" type="ComponentVisitor">Type: ComponentVisitor&#10;An instance of a ComponentVisitor -derived class.</param>
	}
};
MindFusion.Charting.Components.Component.__class = true;

MindFusion.Charting.Components.ComponentVisitor.prototype = {
	visitPanel: function(panel) {
		/// <summary>Visits a Panel component.</summary>
		/// <param name="panel" type="void">Type: void&#10;A Panel instance.</param>
	},
	visitPlot: function(plot) {
		/// <summary>Visits a Plot component.</summary>
		/// <param name="plot" type="Plot">Type: Plot&#10;A Plot instance.</param>
	}
};
MindFusion.Charting.Components.ComponentVisitor.__class = true;

MindFusion.Charting.Components.CursorHint.prototype = {
	CounterDiagonalResize: 0,
	DiagonalResize: 1,
	Disallow: 2,
	DontChange: 3,
	HorizontalResize: 4,
	Move: 5,
	Pointer: 6,
	Rotate: 7,
	VerticalResize: 8
};
MindFusion.Charting.Components.CursorHint.__enum = true;

MindFusion.Charting.Components.GridColumn.prototype = {
	measuredSize: function() {
		/// <summary>Returns the column's measured width.</summary>
		/// <returns type="Number">Type: Number&#10;A number value representing the column's width.</returns>
	},
	relativeSize: function() {
		/// <summary>Gets whether the column should be sized relatively to other columns in the grid panel.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;true to apply relative size to this column, or false otherwise.</returns>
	},
	setPos: function(value) {
		/// <summary>Sets the column's position.</summary>
		/// <param name="value" type="Number">Type: Number&#10;X coordinate of the column.</param>
	}
};
MindFusion.Charting.Components.GridColumn.__class = true;

MindFusion.Charting.Components.GridPanel.prototype = {
	arrange: function(x, y, w, h, context) {
		/// <summary>Component.Arrange override. Sets the location and size of this panel and arranges its child components.</summary>
		/// <param name="x" type="void">Type: void&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="void">Type: void&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="void">Type: void&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="void">Type: void&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Panel.Measure override. Measures the desired size of this panel and its child components.</summary>
		/// <param name="maxWidth" type="void">Type: void&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="void">Type: void&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Components.GridPanel.__class = true;

MindFusion.Charting.Components.GridRow.prototype = {
	measuredSize: function() {
		/// <summary>Returns the row's measured height.</summary>
	},
	relativeSize: function() {
		/// <summary>Gets whether the row should be sized relatively to other rows in the grid panel.</summary>
	},
	setPos: function(value) {
		/// <summary>Sets the row's position.</summary>
		/// <param name="value" type="void">Type: void&#10;Y coordinate of the row.</param>
	}
};
MindFusion.Charting.Components.GridRow.__class = true;

MindFusion.Charting.Components.HitTestVisibility.prototype = {
	Children: 0,
	HitTestVisibility: 1,
	SelfAndChildren: 2
};
MindFusion.Charting.Components.HitTestVisibility.__enum = true;

MindFusion.Charting.Components.ImageComponent.prototype = {
	draw: function(context) {
		/// <summary>Component.Draw override. Draws associated Image in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Components.ImageComponent.__class = true;

MindFusion.Charting.Components.LayoutAlignment.prototype = {
	Center: 0,
	Far: 1,
	Near: 2,
	Stretch: 3
};
MindFusion.Charting.Components.LayoutAlignment.__enum = true;

MindFusion.Charting.Components.LengthType.prototype = {
	Auto: 0,
	Relative: 1
};
MindFusion.Charting.Components.LengthType.__enum = true;

MindFusion.Charting.Components.Orientation.prototype = {
	Horizontal: 0,
	Vertical: 1
};
MindFusion.Charting.Components.Orientation.__enum = true;

MindFusion.Charting.Components.Panel.prototype = {
	draw: function(context) {
		/// <summary>Component.Draw override. Draws child components in specified RenderContext.</summary>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
	},
	hitTest: function(x, y) {
		/// <summary>Component.HitTest override. Returns the component containing specified point.</summary>
		/// <param name="x" type="Number">Type: Number&#10;X coordinate of the point to test.</param>
		/// <param name="y" type="Number">Type: Number&#10;Y coordinate of the point to test.</param>
		/// <returns type="Component">Type: Component&#10;A Component instance if one contains the point, or null otherwise.</returns>
	},
	invalidate: function(rect) {
		/// <summary>Component.Invalidate override. Invalidates the appearance this panel and calls its Draw method at next draw operation.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect" optional="true">Optional. Type: Rect&#10;A Rect instance specifying the invalid rectangle.</param>
	},
	invalidateLayout: function() {
		/// <summary>Component.InvalidateLayout override. Invalidates the current layout and runs a new layout pass before next draw operation.</summary>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this panel and its child components.</summary>
		/// <param name="maxWidth" type="void">Type: void&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="void">Type: void&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
	},
	visit: function(visitor) {
		/// <summary>Component.Visit override. Implements the visitor design pattern.</summary>
		/// <param name="visitor" type="void">Type: void&#10;An instance of a ComponentVisitor -derived class.</param>
	}
};
MindFusion.Charting.Components.Panel.__class = true;

MindFusion.Charting.Components.RangeSelector.prototype = {
	arrange: function(x, y, w, h, context) {
		/// <summary>Component.Arrange override. Sets the location and size of this component relatively to its parent.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	createController: function(context) {
		/// <summary>Component.CreateController override. Returns a controller used to interact with this component.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;Instance of a ComponentController -derived class.</returns>
	},
	draw: function(context) {
		/// <summary>Component.Draw override. Draws this component in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Components.RangeSelector.__class = true;

MindFusion.Charting.Components.SimplePanel.prototype = {
	arrange: function(x, y, w, h, context) {
		/// <summary>Component.Arrange override. Sets the location and size of this panel and arranges its child components.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Panel.Measure override. Measures the desired size of this panel and its child components.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Components.SimplePanel.__class = true;

MindFusion.Charting.Components.StackPanel.prototype = {
	arrange: function(x, y, w, h, context) {
		/// <summary>Component.Arrange override. Sets the location and size of this panel and arranges its child components.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Panel.Measure override. Measures the desired size of this panel and its child components.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Components.StackPanel.__class = true;

MindFusion.Charting.Components.TextComponent.prototype = {
	draw: function(context) {
		/// <summary>Component.Draw override. Draws associated Text in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Components.TextComponent.__class = true;

MindFusion.Charting.Components.Visibility.prototype = {
	Collapsed: 0,
	Hidden: 1,
	Visible: 2
};
MindFusion.Charting.Components.Visibility.__enum = true;

MindFusion.Charting.Controls.AreaChart.prototype = {
};
MindFusion.Charting.Controls.AreaChart.__class = true;

MindFusion.Charting.Controls.BarChart.prototype = {
	createPlot: function() {
		/// <summary>Chart.CreatePlot override. Creates the Plot type corresponding to this chart.</summary>
		/// <returns type="Plot">Type: Plot&#10;An instance of the Plot2D class.</returns>
	}
};
MindFusion.Charting.Controls.BarChart.__class = true;

MindFusion.Charting.Controls.BarChart3D.prototype = {
	createPlot: function() {
		/// <summary>Chart.CreatePlot override. Creates the Plot type corresponding to this chart.</summary>
		/// <returns type="Plot">Type: Plot&#10;An instance of the Plot3D class.</returns>
	}
};
MindFusion.Charting.Controls.BarChart3D.__class = true;

MindFusion.Charting.Controls.BiaxialChart.prototype = {
	createRenderContext: function(graphics, clipRect) {
		/// <summary>Dashboard.CreateRenderContext override. Creates a RenderContext instance.</summary>
		/// <param name="graphics" type="MindFusion.Drawing.Graphics">Type: Graphics&#10;An Graphics surface where dashboard elements should be rendered.</param>
		/// <param name="clipRect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The current clip rectangle.</param>
		/// <returns type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</returns>
	},
	resetZoom: function() {
		/// <summary>Chart.resetZoom override. Resets zoom level to original data range.</summary>
	},
	zoomOut: function() {
		/// <summary>Chart.zoomOut override. Zooms out of current data range.</summary>
	}
};
MindFusion.Charting.Controls.BiaxialChart.__class = true;

MindFusion.Charting.Controls.BubbleChart.prototype = {
};
MindFusion.Charting.Controls.BubbleChart.__class = true;

MindFusion.Charting.Controls.CandlestickChart.prototype = {
};
MindFusion.Charting.Controls.CandlestickChart.__class = true;

MindFusion.Charting.Controls.Chart.prototype = {
	createPlot: function() {
		/// <summary>Creates the Plot type corresponding to this chart.</summary>
		/// <returns type="Plot">Type: Plot&#10;An instance of Plot -derived class.</returns>
	},
	onPaddingChanged: function(e) {
		/// <summary>Control.OnPaddingChanged override.</summary>
		/// <param name="e" type="EventArgs">Type: EventArgs&#10;An EventArgs instance.</param>
	},
	onSizeChanged: function(e) {
		/// <summary>Control.OnSizeChanged override.</summary>
		/// <param name="e" type="EventArgs">Type: EventArgs&#10;An EventArgs instance.</param>
	},
	resetZoom: function() {
		/// <summary>Resets zoom level to original data range.</summary>
	},
	zoomOut: function() {
		/// <summary>Zooms out of current data range.</summary>
	}
};
MindFusion.Charting.Controls.Chart.__class = true;

MindFusion.Charting.Controls.Dashboard.prototype = {
	createRenderContext: function(graphics, clipRect) {
		/// <summary>Creates a RenderContext instance.</summary>
		/// <param name="graphics" type="MindFusion.Drawing.Graphics">Type: Graphics&#10;A Graphics surface where dashboard elements should be rendered.</param>
		/// <param name="clipRect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The current clip rectangle.</param>
		/// <returns type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</returns>
	},
	dataBind: function() {
		/// <summary>Binds the chart to current DataSource.</summary>
	},
	draw: function(g, layoutRect, clipRect) {
		/// <summary>Draws the dashboard on specified Graphics surface.</summary>
		/// <param name="g" type="MindFusion.Drawing.Graphics">Type: Graphics&#10;A Graphics instance.</param>
		/// <param name="layoutRect" type="MindFusion.Drawing.Rect">Type: Rect&#10;Current layout rectangle.</param>
		/// <param name="clipRect" type="MindFusion.Drawing.Rect">Type: Rect&#10;Current clip rectangle.</param>
	},
	fromJson: function(json) {
		/// <summary>Deserializes the control's data from JSON string.</summary>
		/// <param name="json" type="void">Type: void&#10;</param>
	},
	invalidate: function(rect, panel) {
		/// <summary>Implements RootControl.InvalidateLayout. Invalidates the specified region of a component.</summary>
		/// <param name="rect" type="RectD" optional="true">Optional. Type: RectD&#10;The area to invalidate and redraw.</param>
		/// <param name="panel" type="Components.Component" optional="true">Optional. Type: Component&#10;The reference Component.</param>
	},
	invalidateLayout: function(panel) {
		/// <summary>Implements RootControl.InvalidateLayout. Invalidates layout of specified component.</summary>
		/// <param name="panel" type="Components.Component">Type: Component&#10;The component to invalidate.</param>
	},
	onClick: function(e) {
		/// <summary>Raises the DataItemClicked event if the user has clicked on data element in a plot.</summary>
		/// <param name="e" type="MouseEvent">Type: MouseEvent&#10;A MouseEvent instance.</param>
	},
	onMouseDown: function(e) {
		/// <summary>Handles the HTMLCanvasElement mousedown event.</summary>
		/// <param name="e" type="MouseEvent">Type: MouseEvent&#10;A MouseEvent instance.</param>
	},
	onMouseMove: function(e) {
		/// <summary>Handles the HTMLCanvasElement mousemove event.</summary>
		/// <param name="e" type="MouseEvent">Type: MouseEvent&#10;A MouseEvent instance.</param>
	},
	onMouseUp: function(e) {
		/// <summary>Handles the HTMLCanvasElement mouseup event.</summary>
		/// <param name="e" type="MouseEvent">Type: MouseEvent&#10;A MouseEvent instance.</param>
	},
	onResize: function(e) {
		/// <summary>Control.OnResize override. Invalidates the layout of child components and runs a new layout pass.</summary>
		/// <param name="e" type="EventArgs">Type: EventArgs&#10;An EventArgs instance.</param>
	},
	toJson: function() {
		/// <summary>Serializes the control's data to JSON string.</summary>
	}
};
MindFusion.Charting.Controls.Dashboard.__class = true;

MindFusion.Charting.Controls.FunnelChart.prototype = {
};
MindFusion.Charting.Controls.FunnelChart.__class = true;

MindFusion.Charting.Controls.LayoutBuilder.prototype = {
	create1By2ColumnLayout: function(col1, col2row1, col2row2) {
		/// <summary>Creates a two-column stack panel whose first column is a vertical stack of two components.</summary>
		/// <param name="col1" type="Component">Type: Component&#10;The component in first column.</param>
		/// <param name="col2row1" type="Component">Type: Component&#10;The first component in second column.</param>
		/// <param name="col2row2" type="Component">Type: Component&#10;The second component in second column.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	create1By2RowLayout: function(row1, row2col1, row2col2) {
		/// <summary>Creates a two-row stack panel whose second row is a horizontal stack of two components.</summary>
		/// <param name="row1" type="Component">Type: Component&#10;The component on first row.</param>
		/// <param name="row2col1" type="Component">Type: Component&#10;The first component on second row.</param>
		/// <param name="row2col2" type="Component">Type: Component&#10;The second component on second row.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	create2By1ColumnLayout: function(col1row1, col1row2, col2) {
		/// <summary>Creates a two-column stack panel whose first column is a vertical stack of two components.</summary>
		/// <param name="col1row1" type="Component">Type: Component&#10;The first component in first column.</param>
		/// <param name="col1row2" type="Component">Type: Component&#10;The second component in first column.</param>
		/// <param name="col2" type="Component">Type: Component&#10;The component in second column.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	create2By1RowLayout: function(row1col1, row1col2, row2) {
		/// <summary>Creates a two-row stack panel whose first row is a horizontal stack of two components.</summary>
		/// <param name="row1col1" type="Component">Type: Component&#10;The first component on first row.</param>
		/// <param name="row1col2" type="Component">Type: Component&#10;The second component on first row.</param>
		/// <param name="row2" type="Component">Type: Component&#10;The component on first row.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	create2By2Layout: function(row1col1, row1col2, row2col1, row2col2) {
		/// <summary>Creates horizontal stack panels for components on same row and adds them to a vertical stack panel.</summary>
		/// <param name="row1col1" type="Component">Type: Component&#10;The first component on first row.</param>
		/// <param name="row1col2" type="Component">Type: Component&#10;The second component on first row.</param>
		/// <param name="row2col1" type="Component">Type: Component&#10;The first component on second row.</param>
		/// <param name="row2col2" type="Component">Type: Component&#10;The second component on second row.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	createAndAdd1By2ColumnLayout: function(col1, col2row1, col2row2) {
		/// <summary>Creates a two-column stack panel whose first column is a vertical stack of two components.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="col1" type="Component">Type: Component&#10;The component in first column.</param>
		/// <param name="col2row1" type="Component">Type: Component&#10;The first component in second column.</param>
		/// <param name="col2row2" type="Component">Type: Component&#10;The second component in second column.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	createAndAdd1By2RowLayout: function(row1, row2col1, row2col2) {
		/// <summary>Creates a two-row stack panel whose second row is a horizontal stack of two components.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="row1" type="Component">Type: Component&#10;The component on first row.</param>
		/// <param name="row2col1" type="Component">Type: Component&#10;The first component on second row.</param>
		/// <param name="row2col2" type="Component">Type: Component&#10;The second component on second row.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	createAndAdd2By1ColumnLayout: function(col1row1, col1row2, col2) {
		/// <summary>Creates a two-column stack panel whose first column is a vertical stack of two components.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="col1row1" type="Component">Type: Component&#10;The first component in first column.</param>
		/// <param name="col1row2" type="Component">Type: Component&#10;The second component in first column.</param>
		/// <param name="col2" type="Component">Type: Component&#10;The component in second column.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	createAndAdd2By1RowLayout: function(row1col1, row1col2, row2) {
		/// <summary>Creates a two-row stack panel whose first row is a horizontal stack of two components.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="row1col1" type="Component">Type: Component&#10;The first component on first row.</param>
		/// <param name="row1col2" type="Component">Type: Component&#10;The second component on first row.</param>
		/// <param name="row2" type="Component">Type: Component&#10;The component on first row.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	createAndAdd2By2Layout: function(row1col1, row1col2, row2col1, row2col2) {
		/// <summary>Creates horizontal stack panels for components on same row and adds them to a vertical stack panel.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="row1col1" type="Component">Type: Component&#10;The first component on first row.</param>
		/// <param name="row1col2" type="Component">Type: Component&#10;The second component on first row.</param>
		/// <param name="row2col1" type="Component">Type: Component&#10;The first component on second row.</param>
		/// <param name="row2col2" type="Component">Type: Component&#10;The second component on second row.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	createAndAddPlotAndAxes: function(plot, top, left, bottom, right) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="top" type="XAxisRenderer">Type: XAxisRenderer&#10;An array of XAxisRenderer components that should be placed at top side of the plot.</param>
		/// <param name="left" type="YAxisRenderer">Type: YAxisRenderer&#10;An array of YAxisRenderer components that should be placed at left side of the plot.</param>
		/// <param name="bottom" type="XAxisRenderer">Type: XAxisRenderer&#10;An array of XAxisRenderer components that should be placed at bottom side of the plot.</param>
		/// <param name="right" type="YAxisRenderer">Type: YAxisRenderer&#10;An array of YAxisRenderer components that should be placed at right side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createAndAddPlotWithBottomAndLeftAxes: function(plot, bottom, left) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="bottom" type="XAxisRenderer">Type: XAxisRenderer&#10;An XAxisRenderer that should be placed at bottom side of the plot.</param>
		/// <param name="left" type="YAxisRenderer">Type: YAxisRenderer&#10;A YAxisRenderer that should be placed at left side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createAndAddPlotWithBottomAndRightAxes: function(plot, bottom, right) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="bottom" type="XAxisRenderer">Type: XAxisRenderer&#10;An XAxisRenderer that should be placed at bottom side of the plot.</param>
		/// <param name="right" type="YAxisRenderer">Type: YAxisRenderer&#10;A YAxisRenderer that should be placed at right side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createAndAddPlotWithTopAndLeftAxes: function(plot, top, left) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="top" type="XAxisRenderer">Type: XAxisRenderer&#10;An XAxisRenderer that should be placed at top side of the plot.</param>
		/// <param name="left" type="YAxisRenderer">Type: YAxisRenderer&#10;A YAxisRenderer that should be placed at left side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createAndAddPlotWithTopAndRightAxes: function(plot, top, right) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="top" type="XAxisRenderer">Type: XAxisRenderer&#10;An XAxisRenderer that should be placed at top side of the plot.</param>
		/// <param name="right" type="YAxisRenderer">Type: YAxisRenderer&#10;A YAxisRenderer that should be placed at right side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createLayout: function(horizontal, c1, c2, c3) {
		/// <summary>Creates a StackPanel for each array of components and adds it to a parent StackPanel with opposite orientation.</summary>
		/// <param name="horizontal" type="Boolean">Type: Boolean&#10;The orientation of the parent panel.</param>
		/// <param name="c1" type="Component">Type: Component&#10;The first stack of components.</param>
		/// <param name="c2" type="Component">Type: Component&#10;The second stack of components.</param>
		/// <param name="c3" type="Component">Type: Component&#10;The third stack of components.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	createPlotAndAxes: function(plot, top, left, bottom, right) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="top" type="XAxisRenderer">Type: XAxisRenderer&#10;An array of XAxisRenderer components that should be placed at top side of the plot.</param>
		/// <param name="left" type="YAxisRenderer">Type: YAxisRenderer&#10;An array of YAxisRenderer components that should be placed at left side of the plot.</param>
		/// <param name="bottom" type="XAxisRenderer">Type: XAxisRenderer&#10;An array of XAxisRenderer components that should be placed at bottom side of the plot.</param>
		/// <param name="right" type="YAxisRenderer">Type: YAxisRenderer&#10;An array of YAxisRenderer components that should be placed at right side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createPlotWithBottomAndLeftAxes: function(plot, bottom, left) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="bottom" type="XAxisRenderer">Type: XAxisRenderer&#10;An XAxisRenderer that should be placed at bottom side of the plot.</param>
		/// <param name="left" type="YAxisRenderer">Type: YAxisRenderer&#10;A YAxisRenderer that should be placed at left side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createPlotWithBottomAndRightAxes: function(plot, bottom, right) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="bottom" type="XAxisRenderer">Type: XAxisRenderer&#10;An XAxisRenderer that should be placed at bottom side of the plot.</param>
		/// <param name="right" type="YAxisRenderer">Type: YAxisRenderer&#10;A YAxisRenderer that should be placed at right side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createPlotWithTopAndLeftAxes: function(plot, top, left) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="top" type="XAxisRenderer">Type: XAxisRenderer&#10;An XAxisRenderer that should be placed at top side of the plot.</param>
		/// <param name="left" type="YAxisRenderer">Type: YAxisRenderer&#10;A YAxisRenderer that should be placed at left side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createPlotWithTopAndRightAxes: function(plot, top, right) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="top" type="XAxisRenderer">Type: XAxisRenderer&#10;An XAxisRenderer that should be placed at top side of the plot.</param>
		/// <param name="right" type="YAxisRenderer">Type: YAxisRenderer&#10;A YAxisRenderer that should be placed at right side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	}
};
MindFusion.Charting.Controls.LayoutBuilder.__class = true;

MindFusion.Charting.Controls.LineChart.prototype = {
};
MindFusion.Charting.Controls.LineChart.__class = true;

MindFusion.Charting.Controls.PieChart.prototype = {
	createPlot: function() {
		/// <summary>Chart.CreatePlot override. Creates the Plot type corresponding to this chart.</summary>
		/// <returns type="Plot">Type: Plot&#10;An instance of the PolarPlot class.</returns>
	}
};
MindFusion.Charting.Controls.PieChart.__class = true;

MindFusion.Charting.Controls.RadarChart.prototype = {
	createPlot: function() {
		/// <summary>Chart.CreatePlot override. Creates the Plot type corresponding to this chart.</summary>
		/// <returns type="Plot">Type: Plot&#10;An instance of the RadarPlot class.</returns>
	}
};
MindFusion.Charting.Controls.RadarChart.__class = true;

MindFusion.Charting.Controls.ScatterChart.prototype = {
};
MindFusion.Charting.Controls.ScatterChart.__class = true;

MindFusion.Charting.Drawing.Brush.prototype = {
	apply: function(context) {
		/// <summary>Applies the brush properties to a CanvasRenderingContext2D drawing object.</summary>
		/// <param name="context" type="CanvasRenderingContext2D">Type: CanvasRenderingContext2D&#10;The CanvasRenderingContext2D drawing object.</param>
	},
	clone: function() {
		/// <summary>Creates a copy of this brush.</summary>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;The copy of this brush.</returns>
	},
	equals: function(The) {
		/// <summary>Determines whether the specified object is equal to this Brush.</summary>
		/// <param name="The" type="Object">Type: Object&#10;object to compare with.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the specified object is equal to this Brush; otherwise, false.</returns>
	},
	toObject: function() {
		/// <summary>Returns a JSON object describing this brush.</summary>
		/// <returns type="Object">Type: Object&#10;The object describing this brush.</returns>
	}
};
MindFusion.Charting.Drawing.Brush.__class = true;

MindFusion.Charting.Drawing.Brush.fromObject = function(obj) {
	/// <summary>Returns a Brush from a JSON object or string describing this brush.</summary>
	/// <param name="obj" type="void">Type: void&#10;</param>
	/// <returns type="Brush">Type: Brush&#10;The brush object.</returns>
};

MindFusion.Charting.Drawing.Color.prototype = {
};
MindFusion.Charting.Drawing.Color.__class = true;

MindFusion.Charting.Drawing.Color.fromArgb = function(alpha, red, green, blue) {
	/// <summary>Creates a Color instance from alpha, red, green and blue values.</summary>
	/// <param name="alpha" type="Number">Type: Number&#10;The alpha value.</param>
	/// <param name="red" type="Number">Type: Number&#10;The red value.</param>
	/// <param name="green" type="Number">Type: Number&#10;The green value.</param>
	/// <param name="blue" type="Number">Type: Number&#10;The blue value.</param>
	/// <returns type="MindFusion.Charting.Drawing.Color">Type: Color&#10;The new Color instance.</returns>
};

MindFusion.Charting.Drawing.DashStyle.prototype = {
	Dash: 0,
	DashDot: 1,
	DashDotDot: 2,
	Dot: 3,
	Solid: 4
};
MindFusion.Charting.Drawing.DashStyle.__enum = true;

MindFusion.Charting.Drawing.Font.prototype = {
	apply: function(context) {
		/// <summary>Applies the font properties to a CanvasRenderingContext2D drawing object.</summary>
		/// <param name="context" type="CanvasRenderingContext2D">Type: CanvasRenderingContext2D&#10;The CanvasRenderingContext2D drawing object.</param>
	},
	toString: function() {
		/// <summary>Returns a string representation of this font.</summary>
		/// <returns type="String">Type: String&#10;The string representation of this font.</returns>
	}
};
MindFusion.Charting.Drawing.Font.__class = true;

MindFusion.Charting.Drawing.FontStyle.prototype = {
	Bold: 0,
	Italic: 1,
	Regular: 2,
	Underline: 3
};
MindFusion.Charting.Drawing.FontStyle.__enum = true;

MindFusion.Charting.Drawing.Graphics.prototype = {
	beginFigure: function(pen, brush, bounds) {
		/// <summary>Starts a new figure.</summary>
		/// <param name="pen" type="MindFusion.Charting.Drawing.Pen" optional="true">Optional. Type: Pen&#10;The pen to stroke the figure with.</param>
		/// <param name="brush" type="MindFusion.Charting.Drawing.Brush" optional="true">Optional. Type: Brush&#10;The brush to fill the figure with.</param>
		/// <param name="bounds" type="MindFusion.Drawing.Rect" optional="true">Optional. Type: Rect&#10;The bounds to which the brush should be applied.</param>
	},
	clear: function() {
		/// <summary>Clears the canvas.</summary>
	},
	clip: function(rect) {
		/// <summary>Sets the clip rectangle.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The clip rectangle</param>
	},
	closeFigure: function(pen, brush, bounds) {
		/// <summary>Closes the current figure.</summary>
		/// <param name="pen" type="MindFusion.Charting.Drawing.Pen" optional="true">Optional. Type: Pen&#10;The pen to stroke the figure with.</param>
		/// <param name="brush" type="MindFusion.Charting.Drawing.Brush" optional="true">Optional. Type: Brush&#10;The brush to fill the figure with.</param>
		/// <param name="bounds" type="MindFusion.Drawing.Rect" optional="true">Optional. Type: Rect&#10;The bounds to which the brush should be applied.</param>
	},
	drawCurve: function(pen, points) {
		/// <summary>Draws a spline curve.</summary>
		/// <param name="pen" type="MindFusion.Charting.Drawing.Pen">Type: Pen&#10;The pen to stroke the curve with.</param>
		/// <param name="points" type="MindFusion.Drawing.Point">Type: Point&#10;The points describing the curve.</param>
	},
	drawEllipse: function(pen, rect) {
		/// <summary>Draws an ellipse.</summary>
		/// <param name="pen" type="MindFusion.Charting.Drawing.Pen">Type: Pen&#10;The pen to stroke the ellipse with.</param>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The rectangle describing the ellipse.</param>
	},
	drawImage: function(image, rect, align) {
		/// <summary>Draws an image.</summary>
		/// <param name="image" type="HTMLImageElement">Type: HTMLImageElement&#10;The image to draw.</param>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The bounds of the image.</param>
		/// <param name="align" type="MindFusion.Charting.Drawing.ImageAlign">Type: ImageAlign&#10;The align to use.</param>
	},
	drawLines: function(pen, points) {
		/// <summary>Draws a series of straight lines.</summary>
		/// <param name="pen" type="MindFusion.Charting.Drawing.Pen">Type: Pen&#10;The pen to draw the lines with.</param>
		/// <param name="points" type="MindFusion.Drawing.Point">Type: Point&#10;The points of the lines to draw.</param>
	},
	drawPie: function(pen, rect, radius, startAngle, endAngle, doughnut) {
		/// <summary>Draws a pie.</summary>
		/// <param name="pen" type="MindFusion.Charting.Drawing.Pen">Type: Pen&#10;The pen to stroke the pie with.</param>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The bounds of the pie.</param>
		/// <param name="radius" type="Number">Type: Number&#10;The radius of the pie.</param>
		/// <param name="startAngle" type="Number">Type: Number&#10;The startAngle of the pie.</param>
		/// <param name="endAngle" type="Number">Type: Number&#10;The endAngle of the pie.</param>
		/// <param name="doughnut" type="Boolean" optional="true">Optional. Type: Boolean&#10;True if the pie should be a doughnut, otherwise false.</param>
	},
	drawPolygon: function(pen, points) {
		/// <summary>Draws a polygon.</summary>
		/// <param name="pen" type="MindFusion.Charting.Drawing.Pen">Type: Pen&#10;The pen to draw the polygon with.</param>
		/// <param name="points" type="MindFusion.Drawing.Point">Type: Point&#10;The points describing the polygon.</param>
	},
	drawRectangle: function(pen, rect) {
		/// <summary>Draws a rectangle.</summary>
		/// <param name="pen" type="MindFusion.Charting.Drawing.Pen">Type: Pen&#10;The pen to stroke the rectangle with.</param>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The rectangle to draw.</param>
	},
	drawString: function(text, font, brush, location, format) {
		/// <summary>Draws a string.</summary>
		/// <param name="text" type="String">Type: String&#10;The string to draw.</param>
		/// <param name="font" type="MindFusion.Drawing.Font">Type: Font&#10;The font to use.</param>
		/// <param name="brush" type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;The brush to use.</param>
		/// <param name="location" type="Point, Rect">Type: Point, Rect&#10;The position at which to draw.</param>
		/// <param name="format" type="MindFusion.Charting.Drawing.StringFormat" optional="true">Optional. Type: StringFormat&#10;The format to use.</param>
	},
	fillEllipse: function(brush, rect) {
		/// <summary>Fills an ellipse.</summary>
		/// <param name="brush" type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;The brush to fill the ellipse with.</param>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The rectangle describing the ellipse.</param>
	},
	fillPie: function(brush, rect, radius, startAngle, endAngle, doughnut) {
		/// <summary>Fills a pie.</summary>
		/// <param name="brush" type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;The brush to fill the pie with.</param>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The bounds of the pie.</param>
		/// <param name="radius" type="Number">Type: Number&#10;The radius of the pie.</param>
		/// <param name="startAngle" type="Number">Type: Number&#10;The startAngle of the pie.</param>
		/// <param name="endAngle" type="Number">Type: Number&#10;The endAngle of the pie.</param>
		/// <param name="doughnut" type="Boolean" optional="true">Optional. Type: Boolean&#10;True if the pie should be a doughnut, otherwise false.</param>
	},
	fillPolygon: function(brush, points) {
		/// <summary>Fills a polygon.</summary>
		/// <param name="brush" type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;The brush to fill the polygon with.</param>
		/// <param name="points" type="MindFusion.Drawing.Point">Type: Point&#10;The points describing the polygon.</param>
	},
	fillRectangle: function(brush, rect) {
		/// <summary>Fills a rectangle.</summary>
		/// <param name="brush" type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;The pen to fill the rectangle with.</param>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The rectangle to fill.</param>
	},
	measureString: function(text, font, width) {
		/// <summary>Gets the size of the specified string.</summary>
		/// <param name="text" type="String">Type: String&#10;The string to measure.</param>
		/// <param name="font" type="MindFusion.Drawing.Font">Type: Font&#10;The font to use.</param>
		/// <param name="width" type="Number" optional="true">Optional. Type: Number&#10;The maximum width.</param>
		/// <returns type="MindFusion.Drawing.Size">Type: Size&#10;The size of the given string when drawn with the given font.</returns>
	},
	pointInPie: function(point, rect, radius, startAngle, endAngle, doughnut) {
		/// <summary>Checks if the given point is within the bounds of the given pie.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;The point to check.</param>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The bounds of the pie.</param>
		/// <param name="radius" type="Number">Type: Number&#10;The radius of the pie.</param>
		/// <param name="startAngle" type="Number">Type: Number&#10;The startAngle of the pie.</param>
		/// <param name="endAngle" type="Number">Type: Number&#10;The endAngle of the pie.</param>
		/// <param name="doughnut" type="Boolean" optional="true">Optional. Type: Boolean&#10;True if the pie is a doughnut, otherwise false.</param>
		/// <returns type="Boolean">Type: Boolean&#10;True if the point lies within pie bounds, otherwise false.</returns>
	},
	pointInPoly: function(point, poly) {
		/// <summary>Checks if the given point is within the bounds of the given polygon.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;The point to check.</param>
		/// <param name="poly" type="MindFusion.Drawing.Point">Type: Point&#10;The points describing the polygon.</param>
	},
	restore: function() {
		/// <summary>Restores to a previously saved graphics state.</summary>
	},
	save: function() {
		/// <summary>Saves the current graphics state.</summary>
	},
	setTransform: function(transform) {
		/// <summary>Sets a transform.</summary>
		/// <param name="transform" type="MindFusion.Drawing.Matrix">Type: Matrix&#10;The transform matrix.</param>
	},
	translate: function(x, y) {
		/// <summary>Sets a translate transform.</summary>
		/// <param name="x" type="Number">Type: Number&#10;The distance to translate along the x-axis.</param>
		/// <param name="y" type="Number">Type: Number&#10;The distance to translate along the y-axis.</param>
	}
};
MindFusion.Charting.Drawing.Graphics.__class = true;

MindFusion.Charting.Drawing.ImageAlign.prototype = {
	BottomCenter: 0,
	BottomLeft: 1,
	BottomRight: 2,
	Center: 3,
	Fit: 4,
	MiddleLeft: 5,
	MiddleRight: 6,
	Stretch: 7,
	Tile: 8,
	TopCenter: 9,
	TopLeft: 10,
	TopRight: 11
};
MindFusion.Charting.Drawing.ImageAlign.__enum = true;

MindFusion.Charting.Drawing.LinearGradientBrush.prototype = {
	apply: function(context, bounds) {
		/// <summary>Applies the brush properties to a CanvasRenderingContext2D drawing object.</summary>
		/// <param name="context" type="CanvasRenderingContext2D">Type: CanvasRenderingContext2D&#10;The CanvasRenderingContext2D drawing object.</param>
		/// <param name="bounds" type="MindFusion.Drawing.Rect">Type: Rect&#10;The bounds of the gradient.</param>
	},
	clone: function() {
		/// <summary>Creates a copy of this brush.</summary>
		/// <returns type="LinearGradientBrush">Type: LinearGradientBrush&#10;The copy of this brush.</returns>
	},
	equals: function(The) {
		/// <summary>Determines whether the specified object is equal to this LinearGradientBrush.</summary>
		/// <param name="The" type="Object">Type: Object&#10;object to compare with.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the specified object is equal to this LinearGradientBrush; otherwise, false.</returns>
	},
	toObject: function() {
		/// <summary>Returns a JSON object describing this brush.</summary>
		/// <returns type="Object">Type: Object&#10;The object describing this brush.</returns>
	}
};
MindFusion.Charting.Drawing.LinearGradientBrush.__class = true;

MindFusion.Charting.Drawing.LinearGradientBrush.fromObject = function(obj) {
	/// <summary>Returns a LinearGradientBrush from a JSON object or string describing this brush.</summary>
	/// <param name="obj" type="void">Type: void&#10;</param>
	/// <returns type="LinearGradientBrush">Type: LinearGradientBrush&#10;The brush object.</returns>
};

MindFusion.Charting.Drawing.LineJoin.prototype = {
	Bevel: 0,
	Miter: 1,
	Round: 2
};
MindFusion.Charting.Drawing.LineJoin.__enum = true;

MindFusion.Charting.Drawing.Pen.prototype = {
	apply: function(context) {
		/// <summary>Applies the pen properties to a CanvasRenderingContext2D drawing object.</summary>
		/// <param name="context" type="CanvasRenderingContext2D">Type: CanvasRenderingContext2D&#10;The CanvasRenderingContext2D drawing object.</param>
	},
	equals: function(The) {
		/// <summary>Determines whether the specified object is equal to this LinearGradientBrush.</summary>
		/// <param name="The" type="Object">Type: Object&#10;object to compare with.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the specified object is equal to this LinearGradientBrush; otherwise, false.</returns>
	},
	toString: function() {
		/// <summary>Returns a string representation of this pen.</summary>
		/// <returns type="String">Type: String&#10;The string representation of this pen.</returns>
	}
};
MindFusion.Charting.Drawing.Pen.__class = true;

MindFusion.Charting.Drawing.Pen.fromObject = function(obj) {
	/// <summary>Returns a Pen from a string describing this pen.</summary>
	/// <param name="obj" type="void">Type: void&#10;</param>
	/// <returns type="Pen">Type: Pen&#10;The pen object.</returns>
};

MindFusion.Charting.Drawing.StringAlignment.prototype = {
	Center: 0,
	Far: 1,
	Near: 2
};
MindFusion.Charting.Drawing.StringAlignment.__enum = true;

MindFusion.Charting.Drawing.StringFormat.prototype = {
};
MindFusion.Charting.Drawing.StringFormat.__class = true;

MindFusion.Charting.Gauges.GaugeRenderer.prototype = {
	getDefaultPointerFill: function(pointer) {
		/// <summary>Gets the default pointer fill.</summary>
		/// <param name="pointer" type="void">Type: void&#10;</param>
	},
	getDefaultPointerStroke: function(pointer) {
		/// <summary>Gets the default pointer stroke.</summary>
		/// <param name="pointer" type="void">Type: void&#10;</param>
	}
};
MindFusion.Charting.Gauges.GaugeRenderer.__class = true;

MindFusion.Charting.Gauges.LinearGaugeController.prototype = {
	drawInteraction: function(graphics) {
		/// <summary>Implements ComponentController.DrawInteraction. Draws a representation of the current state of user interaction on specified IGraphics surface.</summary>
		/// <param name="graphics" type="IGraphics">A Graphics instance.</param>
	},
	getCursorHint: function(x, y) {
		/// <summary>For internal use.</summary>
		/// <param name="x" type="void">Type: void&#10;</param>
		/// <param name="y" type="void">Type: void&#10;</param>
		/// <returns type="CursorHint">Type: CursorHint&#10;A member of the CursorHint enumeration.</returns>
	},
	getRunningAnimation: function() {
		/// <summary>For internal use.</summary>
		/// <returns type="ComponentAnimation">Type: ComponentAnimation&#10;An instance of a ComponentAnimation -derived class.</returns>
	},
	onMouseDown: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseMove: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseMove. Called when the user moves the mouse.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseUp: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseUp. Called when the user releases a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseWheel: function(x, y, delta) {
		/// <summary>Implements ComponentController.OnMouseWheel. Called when the user scrolls with the middle mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
		/// <param name="delta" type="Number">Type: Number&#10;A number value specifying the amount and the direction for the mouse scroll.</param>
	}
};
MindFusion.Charting.Gauges.LinearGaugeController.__class = true;

MindFusion.Charting.Gauges.LinearGaugeRenderer.prototype = {
	arrange: function(x, y, w, h, context) {
		/// <summary>Component.Arrange override. Sets the location and size of this component relatively to its parent.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	createController: function(context) {
		/// <summary>Component.CreateController override. Returns a ComponentController used to interact with this component.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;An instance of the LinearGaugeController class.</returns>
	},
	draw: function(context) {
		/// <summary>Component.Draw override. Draws this component in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Gauges.LinearGaugeRenderer.__class = true;

MindFusion.Charting.Gauges.OvalGaugeController.prototype = {
	drawInteraction: function(graphics) {
		/// <summary>Implements ComponentController.DrawInteraction. Draws a representation of the current state of user interaction on specified IGraphics surface.</summary>
		/// <param name="graphics" type="IGraphics">A Graphics instance.</param>
	},
	getCursorHint: function(x, y) {
		/// <summary>For internal use.</summary>
		/// <param name="x" type="void">Type: void&#10;</param>
		/// <param name="y" type="void">Type: void&#10;</param>
		/// <returns type="CursorHint">Type: CursorHint&#10;A member of the CursorHint enumeration.</returns>
	},
	getRunningAnimation: function() {
		/// <summary>For internal use.</summary>
		/// <returns type="ComponentAnimation">Type: ComponentAnimation&#10;An instance of a ComponentAnimation -derived class.</returns>
	},
	onMouseDown: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseMove: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseMove. Called when the user moves the mouse.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseUp: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseUp. Called when the user releases a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseWheel: function(x, y, delta) {
		/// <summary>Implements ComponentController.OnMouseWheel. Called when the user scrolls with the middle mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
		/// <param name="delta" type="Number">Type: Number&#10;A number value specifying the amount and the direction for the mouse scroll.</param>
	}
};
MindFusion.Charting.Gauges.OvalGaugeController.__class = true;

MindFusion.Charting.Gauges.OvalGaugeRenderer.prototype = {
	arrange: function(x, y, w, h, context) {
		/// <summary>Component.Arrange override. Sets the location and size of this component relatively to its parent.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	createController: function(context) {
		/// <summary>Component.CreateController override. Returns a ComponentController used to interact with this component.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;An instance of the OvalGaugeController class.</returns>
	},
	draw: function(context) {
		/// <summary>Component.Draw override. Draws this component in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Gauges.OvalGaugeRenderer.__class = true;

MindFusion.Charting.ThreeD.Label3D.prototype = {
};
MindFusion.Charting.ThreeD.Label3D.__class = true;

MindFusion.Charting.ThreeD.LabelProjection.prototype = {
	drawAsProjection: function(context) {
		/// <summary>Draws this projection in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.ThreeD.LabelProjection.__class = true;

MindFusion.Charting.ThreeD.Matrix3D.prototype = {
	fill: function(array) {
		/// <summary>Fills the matrix with an array, starting from the top left, filling horisontally.</summary>
		/// <param name="array" type="number">Type: number&#10;The array to be filled in the matrix.</param>
	},
	multiply: function() {
	},
	nullify: function() {
		/// <summary>Fills the matrix with zeros.</summary>
	},
};
MindFusion.Charting.ThreeD.Matrix3D.__class = true;

MindFusion.Charting.ThreeD.Matrix3D.Identety = function() {
	/// <summary>A 4x4 Identety Matrix</summary>
};
MindFusion.Charting.ThreeD.Matrix3D.Perspective = function(filedOfView, aspectRatio, near, far) {
	/// <summary>A 4x4 matrix, allowing perspective and vercitile coordinates.</summary>
	/// <param name="filedOfView" type="number">Type: number&#10;The angle of the camera.</param>
	/// <param name="aspectRatio" type="number">Type: number&#10;The width devided by height of the viewing window.</param>
	/// <param name="near" type="number">Type: number&#10;The nearest coordinate, where the object will still be drawn.</param>
	/// <param name="far" type="number">Type: number&#10;The furthest coordinate, where the object will still be drawn.</param>
};
MindFusion.Charting.ThreeD.Matrix3D.RotateX = function(angle) {
	/// <summary>A 4x4 matrix, allowing rotation around the X axis.</summary>
	/// <param name="angle" type="number">Type: number&#10;The amount of rotation around the X axis in radians.</param>
};
MindFusion.Charting.ThreeD.Matrix3D.RotateY = function(angle) {
	/// <summary>A 4x4 matrix, allowing rotation around the Y axis.</summary>
	/// <param name="angle" type="number">Type: number&#10;The amount of rotation around the Y axis in radians.</param>
};
MindFusion.Charting.ThreeD.Matrix3D.RotateZ = function(angle) {
	/// <summary>A 4x4 matrix, allowing rotation around the Z axis.</summary>
	/// <param name="angle" type="number">Type: number&#10;The amount of rotation around the Z axis in radians.</param>
};
MindFusion.Charting.ThreeD.Matrix3D.Scale = function(width, height, depth) {
	/// <summary>A 4x4 matrix, allowing scaling.</summary>
	/// <param name="width" type="number">Type: number&#10;The amount of scaling on the X axis in percent/100.</param>
	/// <param name="height" type="number">Type: number&#10;The amount of scaling on the Y axis in percent/100.</param>
	/// <param name="depth" type="number">Type: number&#10;The amount of scaling on the Z axis in percent/100.</param>
};
MindFusion.Charting.ThreeD.Matrix3D.Translate = function(x, y, z) {
	/// <summary>A 4x4 matrix, allowing translation.</summary>
	/// <param name="x" type="number">Type: number&#10;The amount of translation on the X axis.</param>
	/// <param name="y" type="number">Type: number&#10;The amount of translation on the Y axis.</param>
	/// <param name="z" type="number">Type: number&#10;The amount of translation on the Z axis.</param>
};

MindFusion.Charting.ThreeD.Mesh3D.prototype = {
};
MindFusion.Charting.ThreeD.Mesh3D.__class = true;

MindFusion.Charting.ThreeD.Model3D.prototype = {
};
MindFusion.Charting.ThreeD.Model3D.__class = true;

MindFusion.Charting.ThreeD.Polygon3D.prototype = {
	drawAsProjection: function(context) {
		/// <summary>Draws this projection in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	midPoint: function() {
		/// <summary>Returns the polygon's middle point.</summary>
		/// <returns type="Point3D">Type: Point3D&#10;A Point3D instance representing the middle point.</returns>
	},
	normal: function() {
		/// <summary>Gets the polygon's normal vector.</summary>
		/// <returns type="Vector3D">Type: Vector3D&#10;A Vector3D representing the polygon's normal vector.</returns>
	},
};
MindFusion.Charting.ThreeD.Polygon3D.__class = true;

MindFusion.Charting.ThreeD.Polygon3D.pointToPlaneDist = function() {
};

MindFusion.Charting.ThreeD.Scene3D.prototype = {
	buildCuboid: function(x1, y1, z1, x2, y2, z2, brush) {
		/// <summary>Creates a cuboid model.</summary>
		/// <param name="x1" type="Number">Type: Number&#10;X coordinate of a corner point of the cuboid.</param>
		/// <param name="y1" type="Number">Type: Number&#10;Y coordinate of a corner point of the cuboid.</param>
		/// <param name="z1" type="Number">Type: Number&#10;Z coordinate of a corner point of the cuboid.</param>
		/// <param name="x2" type="Number">Type: Number&#10;X coordinate of diametrically opposite corner.</param>
		/// <param name="y2" type="Number">Type: Number&#10;Y coordinate of diametrically opposite corner.</param>
		/// <param name="z2" type="Number">Type: Number&#10;Z coordinate of diametrically opposite corner.</param>
		/// <param name="brush" type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;The Brush used to paint the cuboid model.</param>
		/// <returns type="Mesh3D">Type: Mesh3D&#10;A Mesh3D containing the cuboid faces.</returns>
	},
	draw: function(context) {
		/// <summary>Draws a projection of this scene in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.ThreeD.Scene3D.__class = true;

MindFusion.Charting.ThreeD.Vector3D.prototype = {
	div: function(s) {
		/// <summary>Divides the vector by specified measure.</summary>
		/// <param name="s" type="Number">Type: Number&#10;A double value representing the divisor.</param>
		/// <returns type="Vector3D">Type: Vector3D&#10;A Vector3D representing the result.</returns>
	},
	length: function() {
		/// <summary>Calculates the length of this vector.</summary>
		/// <returns type="Number">Type: Number&#10;A double value representing the vector length.</returns>
	}
};
MindFusion.Charting.ThreeD.Vector3D.__class = true;

MindFusion.Charting.ThreeD.Vector3D.crossProduct = function(a, b) {
	/// <summary>Calculates the cross-product of two vectors.</summary>
	/// <param name="a" type="Vector3D">Type: Vector3D&#10;A Vector3D instance.</param>
	/// <param name="b" type="Vector3D">Type: Vector3D&#10;A Vector3D instance.</param>
	/// <returns type="Vector3D">Type: Vector3D&#10;A Vector3D representing the cross-product of specified vectors.</returns>
};

MindFusion.Charting.AnnotationRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.AnnotationRenderer.__class = true;

MindFusion.Charting.AreaRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.AreaRenderer.__class = true;

MindFusion.Charting.AreaStackRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.AreaStackRenderer.__class = true;

MindFusion.Charting.Axis.prototype = {
	inRange: function(value) {
		/// <summary>Determines whether specified value is within the axis range.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The number to check.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if value is inside the current axis range, or false otherwise.</returns>
	},
	mapValueToPixelX: function(value, viewSize) {
		/// <summary>Maps a value from this axis' coordinate system to a pixel position in specified view.</summary>
		/// <param name="value" type="Number">Type: Number&#10;A number value.</param>
		/// <param name="viewSize" type="Number">Type: Number&#10;The view size.</param>
		/// <returns type="Number">Type: Number&#10;X coordinate of pixel.</returns>
	},
	mapValueToPixelY: function(value, viewSize) {
		/// <summary>Maps a value from this axis' coordinate system to a pixel position in specified view.</summary>
		/// <param name="value" type="Number">Type: Number&#10;A number value.</param>
		/// <param name="viewSize" type="Number">Type: Number&#10;The view size.</param>
		/// <returns type="Number">Type: Number&#10;Y coordinate of pixel.</returns>
	},
	onPropertyChanged: function(propertyName) {
		/// <summary>Raises the PropertyChanged event.</summary>
		/// <param name="propertyName" type="String">Type: String&#10;Specifies the name of changed property.</param>
	}
};
MindFusion.Charting.Axis.__class = true;

MindFusion.Charting.AxisInfo.prototype = {
};
MindFusion.Charting.AxisInfo.__class = true;

MindFusion.Charting.AxisRenderer.prototype = {
	effectiveAxisDashStyle: function(context) {
		/// <summary>Gets the dash style of axis line strokes.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A member of the DashStyle enumeration.</returns>
	},
	effectiveAxisStroke: function(context) {
		/// <summary>Gets the Brush that should be used to stroke axis lines.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	effectiveAxisStrokeThickness: function(context) {
		/// <summary>Gets the thickness of axis line strokes.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	effectiveLabelBrush: function(context) {
		/// <summary>Gets the Brush that should be used to draw axis labels.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="SysBrush">Type: SysBrush&#10;A System.Brush instance.</returns>
	},
	effectiveLabelFont: function(context) {
		/// <summary>Gets the Font that should be used to draw axis labels.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Drawing.Font">Type: Font&#10;A System.Drawing.Font instance.</returns>
	},
	effectivePen: function(context) {
		/// <summary>Gets the Pen that should be used to draw axis lines.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Pen">Type: Pen&#10;A System.Pen instance.</returns>
	},
	effectiveTitleBrush: function(context) {
		/// <summary>Gets the Brush that should be used to draw the axis Title.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="SysBrush">Type: SysBrush&#10;A System.Brush instance.</returns>
	},
	effectiveTitleFont: function(context) {
		/// <summary>Gets the Font that should be used to draw the axis Title.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Drawing.Font">Type: Font&#10;A System.Drawing.Font instance.</returns>
	}
};
MindFusion.Charting.AxisRenderer.__class = true;

MindFusion.Charting.BarLayout.prototype = {
	Overlay: 0,
	SideBySide: 1,
	Stack: 2
};
MindFusion.Charting.BarLayout.__enum = true;

MindFusion.Charting.BarModel3D.prototype = {
	Bar: 0,
	Cylinder: 1
};
MindFusion.Charting.BarModel3D.__enum = true;

MindFusion.Charting.BarOverlayRenderer.prototype = {
	adjustDataRange: function(context) {
		/// <summary>seriesRenderer.AdjustDataRange override. Adjusts the data range of associated Axis objects after initial measure pass.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	backToFrontRatio: function() {
		/// <summary>Gets the ratio between widths of backmost and frontmost bars.</summary>
		/// <returns type="Number">Type: Number&#10;3</returns>
	},
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>Renderer2D.DrawHighlight override. Draws highlighted bar in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumVisibleOverlays: function(context, frontToBack, process) {
		/// <summary>Enumerates the bars visible in current data range.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="frontToBack" type="Boolean">Type: Boolean&#10;true to enumerate from front bar to back bar, or false otherwise.</param>
		/// <param name="process" type="ProcessBars">Type: ProcessBars&#10;A ProcessBars callback.</param>
	},
	hitTest: function(context, location) {
		/// <summary>Renderer2D.HitTest override. Hit-tests the bar representations of data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for a bar.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	},
	measureDataRange: function(context) {
		/// <summary>Renderer2D.MeasureDataRange override. Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.BarOverlayRenderer.__class = true;

MindFusion.Charting.BarOverlayRenderer3D.prototype = {
	backToFrontRatio: function() {
		/// <summary>BarOverlayRenderer.BackToFrontRatio override. Gets the ratio between widths of backmost and frontmost bars.</summary>
		/// <returns type="Number">Type: Number&#10;1.</returns>
	},
	buildModels: function(scene, context) {
		/// <summary>Implements Renderer3D.BuildModels. Adds 3D bar models for the series data to specified scene.</summary>
		/// <param name="scene" type="Scene3D">Type: Scene3D&#10;A Scene3D instance.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.BarOverlayRenderer3D.__class = true;

MindFusion.Charting.BarRenderer.prototype = {
	adjustDataRange: function(context) {
		/// <summary>SeriesRenderer.AdjustDataRange override. Adjusts the data range of associated Axis objects after initial measure pass.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>Renderer2D.DrawHighlight override. Draws highlighted bar in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumVisibleBars: function(context, process) {
		/// <summary>Enumerates the bars visible in current data range.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessBars">Type: ProcessBars&#10;A ProcessBars callback.</param>
	},
	hitTest: function(context, location) {
		/// <summary>Renderer2D.HitTest override. Hit-tests the bar representations of data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for a bar.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	},
	measureDataRange: function(context) {
		/// <summary>Renderer2D.MeasureDataRange override. Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.BarRenderer.__class = true;

MindFusion.Charting.BarRenderer3D.prototype = {
	buildModels: function(scene, context) {
		/// <summary>Implements Renderer3D.BuildModels. Adds 3D bar models for the series data to specified scene.</summary>
		/// <param name="scene" type="Scene3D">Type: Scene3D&#10;A Scene3D instance.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.BarRenderer3D.__class = true;

MindFusion.Charting.BarSeries.prototype = {
	getLabel: function(index, kind) {
		/// <summary>SimpleSeries.GetLabel override. Returns an element of a labels list.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	}
};
MindFusion.Charting.BarSeries.__class = true;

MindFusion.Charting.BarStackRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>Renderer2D.DrawHighlight override. Draws highlighted bar in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumVisibleStackBars: function(context, process) {
		/// <summary>Enumerates the bars visible in current data range.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessStackBars">Type: ProcessStackBars&#10;A ProcessStackBars callback.</param>
	},
	hitTest: function(context, location) {
		/// <summary>StackRenderer.HitTest override. Hit-tests the bar representations of data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for a bar.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	},
	measureDataRange: function(context) {
		/// <summary>StackRenderer.MeasureDataRange override. Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.BarStackRenderer.__class = true;

MindFusion.Charting.BarStackRenderer3D.prototype = {
	buildModels: function(scene, context) {
		/// <summary>Implements Renderer3D.BuildModels. Adds 3D bar models for the series data to specified scene.</summary>
		/// <param name="scene" type="Scene3D">Type: Scene3D&#10;A Scene3D instance.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.BarStackRenderer3D.__class = true;

MindFusion.Charting.BubbleLabelAlignment.prototype = {
	Above: 0,
	Below: 1,
	Center: 2,
	Left: 3,
	Right: 4
};
MindFusion.Charting.BubbleLabelAlignment.__enum = true;

MindFusion.Charting.BubbleRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws bubbles representing data items in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>Renderer2D.DrawHighlight override. Draws highlighted bubble in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	hitTest: function(context, location) {
		/// <summary>Renderer2D.HitTest override. Hit-tests the bubble representations of data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for a bubble.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	}
};
MindFusion.Charting.BubbleRenderer.__class = true;

MindFusion.Charting.CandlestickRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>Renderer2D.DrawHighlight override. Draws highlighted candlestick in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	effectiveFill: function(seriesIndex, dataIndex, context) {
		/// <summary>Gets the brush that should be used to fill the representation of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this SeriesRenderer.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	enumVisibleCandlesticks: function(context, process) {
		/// <summary>Enumerates the candlesticks visible in current data range.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessCandlesticks">Type: ProcessCandlesticks&#10;A ProcessBars callback.</param>
	},
	hitTest: function(context, location) {
		/// <summary>Renderer2D.HitTest override. Hit-tests the bar representations of data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for a candlestick.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	},
	measureDataRange: function(context) {
		/// <summary>Renderer2D.MeasureDataRange override. Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.CandlestickRenderer.__class = true;

MindFusion.Charting.CandlestickSeriesStyle.prototype = {
	fill: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Fill. Returns a Brush instance, depending on the series data.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	stroke: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Stroke.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	strokeDashStyle: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeDashStyle.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A nullable DashStyle value specifying stroke dash style.</returns>
	},
	strokeThickness: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeThickness.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A nullable number value specifying stroke thickness.</returns>
	}
};
MindFusion.Charting.CandlestickSeriesStyle.__class = true;

MindFusion.Charting.CurveAreaRenderer.prototype = {
	draw: function(context) {
		/// <summary>AreaRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.CurveAreaRenderer.__class = true;

MindFusion.Charting.CurveAreaStackRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.CurveAreaStackRenderer.__class = true;

MindFusion.Charting.CurveRenderer.prototype = {
	draw: function(context) {
		/// <summary>LineRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.CurveRenderer.__class = true;

MindFusion.Charting.DataBoundSeries.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns a label for the specified data item in the data source.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a value for the specified data item in the data source.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;A double-precision number representing the value of a data item in the data source.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. DataBoundSeries always returns false.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted. Gets a value indicating whether the series values increase monotonously in specified dimension.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.DataBoundSeries.__class = true;

MindFusion.Charting.DateTimeFormat.prototype = {
	CustomDateTime: 0,
	FullDateTime: 1,
	LongDate: 2,
	LongTime: 3,
	MonthDateTime: 4,
	None: 5,
	ShortDate: 6,
	ShortTime: 7,
	YearDateTime: 8
};
MindFusion.Charting.DateTimeFormat.__enum = true;

MindFusion.Charting.DateTimeSeries.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns Date value at specified index as an XAxisLabel.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a value for the specified data item in this series.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;A double-precision number representing the value of a data item in the series.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. DateTimeSeries always returns false.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted. DateTimeSeries always returns false.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.DateTimeSeries.__class = true;

MindFusion.Charting.FunnelRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>SeriesRenderer.DrawHighlight override. Draws highlighted slice in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumSegments: function(context, process) {
		/// <summary>Enumerates the segments of the funnel.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessSegment">Type: ProcessSegment&#10;A ProcessSegment callback.</param>
	},
	enumSeries: function() {
		/// <summary>Implements the SeriesContainer interface.</summary>
		/// <returns type="IEnumerable<Series>">Type: IEnumerable<Series>&#10;An instance of the IEnumerable&amp;lt;Series&amp;gt; class.</returns>
	},
	hitTest: function(context, location) {
		/// <summary>SeriesRenderer.HitTest override. Hit-tests the slices representing data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for a pie slice.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	}
};
MindFusion.Charting.FunnelRenderer.__class = true;

MindFusion.Charting.GridType.prototype = {
	Crossed: 0,
	Horizontal: 1,
	None: 2,
	Vertical: 3
};
MindFusion.Charting.GridType.__enum = true;

MindFusion.Charting.HitResult.prototype = {
};
MindFusion.Charting.HitResult.__class = true;

MindFusion.Charting.LabelKinds.prototype = {
	All: 0,
	InnerLabel: 1,
	None: 2,
	OuterLabel: 3,
	ToolTip: 4,
	XAxisLabel: 5,
	YAxisLabel: 6,
	ZAxisLabel: 7
};
MindFusion.Charting.LabelKinds.__enum = true;

MindFusion.Charting.LegendController.prototype = {
	onMouseDown: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseMove: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseMove. Called when the user moves the mouse.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	}
};
MindFusion.Charting.LegendController.__class = true;

MindFusion.Charting.LegendRenderer.prototype = {
	createController: function(context) {
		/// <summary>Component.CreateController override. Returns a ComponentController used to interact with this component.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;Instance of the LegendController class.</returns>
	},
	draw: function(context) {
		/// <summary>Component.Draw override. Draws legend elements in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	effectiveBorderPen: function(context) {
		/// <summary>Gets the Pen that should be used to draw the legend borders.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Pen">Type: Pen&#10;A Pen instance.</returns>
	},
	effectiveBorderStroke: function(context) {
		/// <summary>Gets the Brush that should be used to stroke the legend borders.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	effectiveBorderStrokeThickness: function(context) {
		/// <summary>Gets the thickness of border strokes.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	effectiveFill: function(context) {
		/// <summary>Gets the Brush that should be used to fill the legend background.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	effectiveStrokeDashStyle: function(context) {
		/// <summary>Gets the dash style of border strokes.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A member of the DashStyle enumeration.</returns>
	},
	effectiveTitleBrush: function(context) {
		/// <summary>Gets the Brush that should be used to draw the legend's Title.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="SysBrush">Type: SysBrush&#10;A System.Brush instance.</returns>
	},
	effectiveTitleFont: function(context) {
		/// <summary>Gets the Font that should be used to draw the legend's Title.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Drawing.Font">Type: Font&#10;A System.Drawing.Font instance.</returns>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.LegendRenderer.__class = true;

MindFusion.Charting.LineRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.LineRenderer.__class = true;

MindFusion.Charting.LineType.prototype = {
	Curve: 0,
	Polyline: 1,
	Step: 2
};
MindFusion.Charting.LineType.__enum = true;

MindFusion.Charting.Margins.prototype = {
};
MindFusion.Charting.Margins.__class = true;

MindFusion.Charting.MixedSeriesStyle.prototype = {
	fill: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Stroke. Returns a Brush instance fromFills, CommonFills or UniformFill properties.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	stroke: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Stroke. Returns a Brush instance fromStrokes, CommonStrokes or UniformStroke properties.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	strokeDashStyle: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeDashStyle. Returns a value from StrokeDashStyles, CommonStrokeDashStyles or UniformStrokeDashStyle properties.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A nullable DashStyle value specifying stroke dash style.</returns>
	},
	strokeThickness: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeThickness. Returns a value from StrokeThicknesses, CommonStrokeThicknesses or UniformStrokeThickness properties.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A nullable number value specifying stroke thickness.</returns>
	}
};
MindFusion.Charting.MixedSeriesStyle.__class = true;

MindFusion.Charting.Pair.prototype = {
	toString: function() {
		/// <summary>Object.ToString override.</summary>
	}
};
MindFusion.Charting.Pair.__class = true;

MindFusion.Charting.PanController.prototype = {
	getRunningAnimation: function() {
		/// <summary>For internal use.</summary>
		/// <returns type="ComponentAnimation">Type: ComponentAnimation&#10;An instance of a ComponentAnimation -derived class.</returns>
	},
	onMouseDown: function(x, y) {
		/// <summary>Plot2DController.OnMouseDown override. Called when the user presses a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseMove: function(x, y) {
		/// <summary>PlotController.OnMouseMove override. Called when the user moves the mouse.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseUp: function(x, y) {
		/// <summary>PlotController.OnMouseUp override. Called when the user releases a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	}
};
MindFusion.Charting.PanController.__class = true;

MindFusion.Charting.PanControllerAnimation.prototype = {
};
MindFusion.Charting.PanControllerAnimation.__class = true;

MindFusion.Charting.PerElementSeriesStyle.prototype = {
	fill: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Fill. Returns a Brush from the Fills list that matches specified series and data indices.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	stroke: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Stroke. Returns a Brush from the Strokes list that matches specified series and data indices.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	strokeDashStyle: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeDashStyle. Returns a value from the StrokeDashStyles list that matches specified series and data indices.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A nullable DashStyle value specifying stroke dash style.</returns>
	},
	strokeThickness: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeThickness. Returns a value from the StrokeThicknesses list that matches specified series and data indices.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A nullable number value specifying stroke thickness.</returns>
	}
};
MindFusion.Charting.PerElementSeriesStyle.__class = true;

MindFusion.Charting.PerSeriesStyle.prototype = {
	fill: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Fill. Returns a Brush from the Fills list that matches specified series index.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	stroke: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Stroke. Returns a Brush from the Strokes list that matches specified series index.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	strokeDashStyle: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeDashStyle. Returns a value from the StrokeDashStyles list that matches specified series index.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A nullable DashStyle value specifying stroke dash style.</returns>
	},
	strokeThickness: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeThickness. Returns a value from the StrokeThicknesses list that matches specified series index.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A nullable number value specifying stroke thickness.</returns>
	}
};
MindFusion.Charting.PerSeriesStyle.__class = true;

MindFusion.Charting.PieRadarRenderer.prototype = {
	draw: function(context) {
		/// <summary>RadarRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>RadarRenderer.DrawHighlight override. Draws highlighted data item in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumSectors: function(context, process) {
		/// <summary>Enumerates the pie-radar sectors corresponding to each series.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessSectors">Type: ProcessSectors&#10;A ProcessSectors callback.</param>
	}
};
MindFusion.Charting.PieRadarRenderer.__class = true;

MindFusion.Charting.PieRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>SeriesRenderer.DrawHighlight override. Draws highlighted slice in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumSeries: function() {
		/// <summary>Implements the SeriesContainer interface.</summary>
		/// <returns type="IEnumerable<Series>">Type: IEnumerable<Series>&#10;An instance of the IEnumerable&amp;lt;Series&amp;gt; class.</returns>
	},
	enumSlices: function(context, process) {
		/// <summary>Enumerates the slices of the pie.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessSlice">Type: ProcessSlice&#10;A ProcessBars callback.</param>
	},
	hitTest: function(context, location) {
		/// <summary>SeriesRenderer.HitTest override. Hit-tests the slices representing data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for a pie slice.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	}
};
MindFusion.Charting.PieRenderer.__class = true;

MindFusion.Charting.PieSeries.prototype = {
	getLabel: function(index, kind) {
		/// <summary>SimpleSeries.GetLabel override. Returns an element of the inner or outer label lists.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	}
};
MindFusion.Charting.PieSeries.__class = true;

MindFusion.Charting.Plot.prototype = {
	adjustDataRanges: function(context) {
		/// <summary>Called at the end of data measurement pass.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	domainDimension: function(series) {
		/// <summary>Implements the SeriesContainer interface. Gets the index of the dimension whose set of values should be treated as domain of plotted function.</summary>
		/// <param name="series" type="Series">Type: Series&#10;A Series in this container.</param>
	},
	draw: function(context) {
		/// <summary>Component.Draw override. Draws a grid and all chart graphics represented by contained SeriesRenderer objects.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawGrid: function(context) {
		/// <summary>Draws the plot's grid.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawPlot: function(context) {
		/// <summary>Draws the plot's background and borders.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	effectiveBorder: function(context) {
		/// <summary>Gets the Pen that should be used to draw the plot's borders.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Pen">Type: Pen&#10;A Pen instance.</returns>
	},
	effectiveBorderStroke: function(context) {
		/// <summary>Gets the Brush that should be used to stroke the plot's borders.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	effectiveBorderStrokeThickness: function(context) {
		/// <summary>Gets the thickness of border strokes.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	effectiveFill: function(context) {
		/// <summary>Gets the Brush that should be used to fill the plot's background.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	effectiveStrokeDashStyle: function(context) {
		/// <summary>Gets the dash style of border strokes.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A member of the DashStyle enumeration.</returns>
	},
	enumSeries: function() {
		/// <summary>Implements SeriesContainer.</summary>
		/// <returns type="IEnumerable<Series>">Type: IEnumerable<Series>&#10;An instance of the IEnumerable&amp;lt;Series&amp;gt; class.</returns>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measureDataRanges: function(context) {
		/// <summary>Measures data of all SeriesRenderer objects drawn inside this plot.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	onRendererDataChanged: function(sender, e) {
		/// <summary>Called when a Series raises its DataChanged event.</summary>
		/// <param name="sender" type="Object">Type: Object&#10;The event sender.</param>
		/// <param name="e" type="EventArgs">Type: EventArgs&#10;An EventArgs instance.</param>
	},
	startMeasureData: function(context) {
		/// <summary>Called in the beginning of data measurement pass.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	unsubscribe: function(seriesRenderers) {
		/// <summary>Unsubscribes from DataChanged and PropertyChanged events of all SeriesRenderer objects in specified list.</summary>
		/// <param name="seriesRenderers" type="MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>">Type: ObservableCollection<SeriesRenderer>&#10;A list of SeriesRenderer objects.</param>
	}
};
MindFusion.Charting.Plot.__class = true;

MindFusion.Charting.Plot2D.prototype = {
	createController: function(context) {
		/// <summary>Component.CreateController override. Returns a ComponentController used to interact with this component.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;An instance of the PanController class.</returns>
	},
	drawGrid: function(context) {
		/// <summary>Plot.DrawGrid override. Draws the grid specified by GridType property.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	resetZoom: function() {
		/// <summary>Resets the zoom level to original axis ranges.</summary>
	},
	visit: function(visitor) {
		/// <summary>Component.Visit override. Calls visitor's VisitPlot method.</summary>
		/// <param name="visitor" type="ComponentVisitor">Type: ComponentVisitor&#10;An instance of a ComponentVisitor -derived class.</param>
	},
	zoomOut: function(axes) {
		/// <summary>Zooms out from current data range.</summary>
		/// <param name="axes" type="IEnumerable<Axis>">Type: IEnumerable<Axis>&#10;The axes whose ranges should be scaled.</param>
	}
};
MindFusion.Charting.Plot2D.__class = true;

MindFusion.Charting.Plot2DController.prototype = {
	onMouseDown: function(x, y) {
		/// <summary>PlotController.OnMouseDown override. Called when the user presses a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	plotToAxisValue: function(axis, value) {
		/// <summary>Converts a plot pixel position to a logical value from specified axis' coordinate system.</summary>
		/// <param name="axis" type="MindFusion.Charting.Axis">Type: Axis&#10;The target Axis.</param>
		/// <param name="value" type="Number">Type: Number&#10;The value to convert.</param>
		/// <returns type="Number">Type: Number&#10;The converted value.</returns>
	}
};
MindFusion.Charting.Plot2DController.__class = true;

MindFusion.Charting.Plot3D.prototype = {
	draw: function(context) {
		/// <summary>Plot.Draw override. Draws a projection of 3D models generated by contained Renderer3D objects.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Plot3D.__class = true;

MindFusion.Charting.PlotController.prototype = {
	drawInteraction: function(graphics) {
		/// <summary>Implements ComponentController.DrawInteraction. Draws a representation of the current state of user interaction on specified Graphics surface.</summary>
		/// <param name="graphics" type="IGraphics">A Graphics instance.</param>
	},
	getCursorHint: function(x, y) {
		/// <summary>For internal use.</summary>
		/// <param name="x" type="void">Type: void&#10;</param>
		/// <param name="y" type="void">Type: void&#10;</param>
		/// <returns type="CursorHint">Type: CursorHint&#10;A member of the CursorHint enumeration.</returns>
	},
	getRunningAnimation: function() {
		/// <summary>For internal use.</summary>
		/// <returns type="ComponentAnimation">Type: ComponentAnimation&#10;An instance of a ComponentAnimation -derived class.</returns>
	},
	onMouseDown: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseMove: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseMove. Called when the user moves the mouse.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseUp: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseUp. Called when the user releases a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseWheel: function(x, y, delta) {
		/// <summary>Implements ComponentController.onMouseWheel. Called when the user scrolls with the middle mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
		/// <param name="delta" type="Number">Type: Number&#10;A number value specifying the amount and the direction for the mouse scroll.</param>
	}
};
MindFusion.Charting.PlotController.__class = true;

MindFusion.Charting.Point3D.prototype = {
	distance: function(p) {
		/// <summary>Gets the distance to specified point.</summary>
		/// <param name="p" type="Point3D">Type: Point3D&#10;A Point3D instance.</param>
		/// <returns type="Number">Type: Number&#10;A number value representing the distance.</returns>
	},
	scale: function(scale) {
		/// <summary>Scales the point's coordinates by specified scale factor.</summary>
		/// <param name="scale" type="Number">Type: Number&#10;A number value by which to multiply point's coordinates.</param>
		/// <returns type="Point3D">Type: Point3D&#10;A Point3D containing scaled coordinates.</returns>
	},
	toString: function() {
		/// <summary>Returns a string representation of this point.</summary>
		/// <returns type="String">Type: String&#10;A string representation of this point.</returns>
	}
};
MindFusion.Charting.Point3D.__class = true;

MindFusion.Charting.Point3D.add = function(p1, p2) {
	/// <summary>Sums two points' coordinates.</summary>
	/// <param name="p1" type="Point3D">Type: Point3D&#10;The first point.</param>
	/// <param name="p2" type="Point3D">Type: Point3D&#10;The second point.</param>
	/// <returns type="Point3D">Type: Point3D&#10;A Point3D containing sum of coordinates.</returns>
};

MindFusion.Charting.PointSeries.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns an element of the Labels list.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a coordinate of specified point in this series.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;A double-precision number representing the value of a data item in the series.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. PointSeries always returns false.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted. PointSeries always returns false.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.PointSeries.__class = true;

MindFusion.Charting.PointSeries3D.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns an element of the Labels list.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a coordinate of specified point in this series.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;A double-precision number representing the value of a data item in the series.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. PointSeries3D always returns false.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted. PointSeries3D always returns false.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.PointSeries3D.__class = true;

MindFusion.Charting.PolarPlot.prototype = {
	createController: function(context) {
		/// <summary>Component.CreateController override. Returns a ComponentController used to interact with this component.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;An instance of the RotationController class.</returns>
	},
	rotatePoint: function(pointToRotate, centerPoint, angleInDegrees) {
		/// <summary>Rotates point around specified rotation center at specified angle.</summary>
		/// <param name="pointToRotate" type="MindFusion.Drawing.Point">Type: Point&#10;The point to rotate.</param>
		/// <param name="centerPoint" type="MindFusion.Drawing.Point">Type: Point&#10;The rotation center.</param>
		/// <param name="angleInDegrees" type="Number">Type: Number&#10;The rotation angle.</param>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;</returns>
	},
	visit: function(visitor) {
		/// <summary>Component.Visit override. Calls visitor's VisitPlot method.</summary>
		/// <param name="visitor" type="ComponentVisitor">Type: ComponentVisitor&#10;An instance of a ComponentVisitor -derived class.</param>
	}
};
MindFusion.Charting.PolarPlot.__class = true;

MindFusion.Charting.RadarAxisOptions.prototype = {
	draw: function(context) {
		/// <summary>AxisRenderer.Draw override.</summary>
		/// <param name="context" type="void">Type: void&#10;</param>
	},
	effectiveAxis: function(context) {
		/// <summary>AxisRenderer.EffectiveAxis override.</summary>
		/// <param name="context" type="void">Type: void&#10;</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>AxisRenderer.Measure override.</summary>
		/// <param name="maxWidth" type="void">Type: void&#10;</param>
		/// <param name="maxHeight" type="void">Type: void&#10;</param>
		/// <param name="context" type="void">Type: void&#10;</param>
	}
};
MindFusion.Charting.RadarAxisOptions.__class = true;

MindFusion.Charting.RadarGridType.prototype = {
	Radar: 0,
	Spiderweb: 1
};
MindFusion.Charting.RadarGridType.__enum = true;

MindFusion.Charting.RadarPlot.prototype = {
	drawGrid: function(context) {
		/// <summary>Plot.DrawGrid override. Draws spiderweb of radial grid.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	getEffectiveAxis: function(index) {
		/// <summary>Gets the Axis representing the range for specified data variable index.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer index of data items in series.</param>
		/// <returns type="MindFusion.Charting.Axis">Type: Axis&#10;The associated Axis.</returns>
	},
	startMeasureData: function(context) {
		/// <summary>Plot.StartMeasureData override. Called in the beginning of data measurement pass.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.RadarPlot.__class = true;

MindFusion.Charting.RadarRenderer.prototype = {
	data: function(seriesIndex, dataIndex) {
		/// <summary>Returns the data value of specified series item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>SeriesRenderer.DrawHighlight override. Draws highlighted data item in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumSeries: function() {
		/// <summary>Implement SeriesContainer.</summary>
		/// <returns type="IEnumerable<Series>">Type: IEnumerable<Series>&#10;An instance of the IEnumerable&amp;lt;Series&amp;gt; class.</returns>
	},
	enumVisibleRanges: function(context, process) {
		/// <summary>Enumerates each series once providing a list of all visible points at each iteration.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessRange">Type: ProcessRange&#10;A ProcessRange callback.</param>
	},
	getMaxValue: function(index) {
		/// <summary>Gets the maximum value from all series located at specified index.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer index of data element in the series.</param>
		/// <returns type="Number">Type: Number&#10;A number value representing the largest data element.</returns>
	},
	getMinValue: function(index) {
		/// <summary>Gets the minimum value from all series located at specified index.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer index of data element in the series.</param>
		/// <returns type="Number">Type: Number&#10;A number value representing the smallest data element.</returns>
	},
	hitTest: function(context, location) {
		/// <summary>SeriesRenderer.HitTest override. Hit-tests the visual representation of the series for a data item.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for data items.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	},
	measureDataRange: function(context) {
		/// <summary>SeriesRenderer.MeasureDataRange override. Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.RadarRenderer.__class = true;

MindFusion.Charting.RadarScatterRenderer.prototype = {
	enumPoints: function(context, process) {
		/// <summary>ScatterRenderer.EnumPoints override. Enumerates the data values of rendered series mapped to plot's 2D coordinates.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessPoint">Type: ProcessPoint&#10;A ProcessPoint callback.</param>
	},
	measureDataRange: function(context) {
		/// <summary>Renderer2D.MeasureDataRange override. Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.RadarScatterRenderer.__class = true;

MindFusion.Charting.RadarType.prototype = {
	Pie: 0,
	Polygon: 1
};
MindFusion.Charting.RadarType.__enum = true;

MindFusion.Charting.RenderContext.prototype = {
	getClipRect: function(relativeTo) {
		/// <summary>Gets the clip rectangle relative to specified Component.</summary>
		/// <param name="relativeTo" type="Component">Type: Component&#10;A Component instance.</param>
		/// <returns type="Rect">Type: Rect&#10;A Rect instance.</returns>
	},
	getXAxis: function(series) {
		/// <summary>Gets the X axis assigned to a Renderer2D or returns one from parent plot or chart.</summary>
		/// <param name="series" type="Renderer2D" optional="true">Optional. Type: Renderer2D&#10;A Renderer2D instance.</param>
		/// <returns type="Axis">Type: Axis&#10;An Axis instance.</returns>
	},
	getYAxis: function(series) {
		/// <summary>Gets the Y axis assigned to a Renderer2D or returns one from parent plot or chart.</summary>
		/// <param name="series" type="Renderer2D" optional="true">Optional. Type: Renderer2D&#10;A Renderer2D instance.</param>
		/// <returns type="Axis">Type: Axis&#10;An Axis instance.</returns>
	},
	textStyle: function(hint) {
		/// <summary>Gets a TextStyle from current Theme.</summary>
		/// <param name="hint" type="TextStyleHint">Type: TextStyleHint&#10;A member of the TextStyleHint enumeration.</param>
		/// <returns type="TextStyle">Type: TextStyle&#10;A TextStyle instance.</returns>
	}
};
MindFusion.Charting.RenderContext.__class = true;

MindFusion.Charting.RenderContext2D.prototype = {
};
MindFusion.Charting.RenderContext2D.__class = true;

MindFusion.Charting.Renderer2D.prototype = {
	domainData: function(seriesIndex, dataIndex) {
		/// <summary>Gets the domain axis coordinate (input value) of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>SeriesRenderer.DrawHighlight override. Draws highlighted data item in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumSeries: function() {
		/// <summary>Implements the SeriesContainer interface.</summary>
		/// <returns type="IEnumerable<Series>">Type: IEnumerable<Series>&#10;An instance of the IEnumerable&amp;lt;Series&amp;gt; class.</returns>
	},
	enumVisiblePointPairs: function(context, process) {
		/// <summary>Enumerates the data values of rendered series mapped to plot 2D coordinates.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessPoints">Type: ProcessPoints&#10;A ProcessPoints callback.</param>
	},
	enumVisiblePoints: function(context, frontToBack, process) {
		/// <summary>Enumerates the data values of rendered series mapped to plot 2D coordinates.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="frontToBack" type="Boolean">Type: Boolean&#10;true if the series list should be enumerated from front to back, or false otherwise.</param>
		/// <param name="process" type="ProcessPoint">Type: ProcessPoint&#10;A ProcessPoint callback.</param>
	},
	enumVisiblePoints1: function(context, process) {
		/// <summary>Enumerates the data values of rendered series mapped to plot 2D coordinates.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessPoint">Type: ProcessPoint&#10;A ProcessPoint callback.</param>
	},
	enumVisibleRanges: function(context, process) {
		/// <summary>Enumerates each series once providing a list of all visible points at each iteration.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessRange">Type: ProcessRange&#10;A ProcessRange callback.</param>
	},
	getMaxXSum: function() {
		/// <summary>Gets the maximum sum of X data values locates at same index in all series.</summary>
		/// <returns type="Number">Type: Number&#10;A number value containing the maximum sum.</returns>
	},
	getMaxYSum: function() {
		/// <summary>Gets the maximum sum of Y data values locates at same index in all series.</summary>
		/// <returns type="Number">Type: Number&#10;A number value containing the maximum sum.</returns>
	},
	getPixel: function(seriesIndex, dataIndex, xAxis, yAxis, component) {
		/// <summary>Gets the coordinates of specified data item when mapped to a Plot2D pixel.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <param name="xAxis" type="MindFusion.Charting.Axis">Type: Axis&#10;An Axis reference specifying the X axis.</param>
		/// <param name="yAxis" type="MindFusion.Charting.Axis">Type: Axis&#10;An Axis reference specifying the Y axis.</param>
		/// <param name="component" type="Components.Component">Type: Component&#10;An instance of Plot2D or derived class.</param>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;A Point containing Plot2D coordinates corresponding to specified data item.</returns>
	},
	getPixel1: function(valueX, xAxis, valueY, yAxis, component) {
		/// <summary>Gets the coordinates of specified data item when mapped to a Plot2D pixel.</summary>
		/// <param name="valueX" type="Number">Type: Number&#10;The X value of data item in logical coordinate system.</param>
		/// <param name="xAxis" type="MindFusion.Charting.Axis">Type: Axis&#10;The X Axis from which logical value is mapped to plot's actual width.</param>
		/// <param name="valueY" type="Number">Type: Number&#10;The Y value of data item in logical coordinate system.</param>
		/// <param name="yAxis" type="MindFusion.Charting.Axis">Type: Axis&#10;The Y Axis from which logical value is mapped to plot's actual height.</param>
		/// <param name="component" type="Components.Component">Type: Component&#10;An instance of Plot2D or derived class.</param>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;</returns>
	},
	hitTest: function(context, location) {
		/// <summary>SeriesRenderer.HitTest override. Hit-tests the visual representation of the series for a data item.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for data items.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	},
	imageData: function(seriesIndex, dataIndex) {
		/// <summary>Gets the image axis coordinate (output value) of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	measureDataRange: function(context) {
		/// <summary>SeriesRenderer.MeasureDataRange override. Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	startMeasureData: function(context) {
		/// <summary>SeriesRenderer.StartMeasureData override. Called to reset measure accumulators at the beginning of a measure pass.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	xData: function(seriesIndex, dataIndex) {
		/// <summary>Gets the X value of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	xSorted: function(seriesIndex) {
		/// <summary>Gets a value indicating whether values of specified series increase monotonously in X dimension.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if specified series is sorted, or false otherwise.</returns>
	},
	yData: function(seriesIndex, dataIndex) {
		/// <summary>Gets the Y value of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	ySorted: function(seriesIndex) {
		/// <summary>Gets a value indicating whether values of specified series increase monotonously in Y dimension.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if specified series is sorted, or false otherwise.</returns>
	}
};
MindFusion.Charting.Renderer2D.__class = true;

MindFusion.Charting.RotationController.prototype = {
	getRunningAnimation: function() {
		/// <summary>For internal use.</summary>
		/// <returns type="ComponentAnimation">Type: ComponentAnimation&#10;An instance of a ComponentAnimation -derived class.</returns>
	},
	onMouseDown: function(x, y) {
		/// <summary>PlotController.OnMouseDown override. Called when the user presses a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseMove: function(x, y) {
		/// <summary>PlotController.OnMouseMove override. Called when the user moves the mouse.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseUp: function(x, y) {
		/// <summary>PlotController.OnMouseUp override. Called when the user releases a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	}
};
MindFusion.Charting.RotationController.__class = true;

MindFusion.Charting.RotationControllerAnimation.prototype = {
};
MindFusion.Charting.RotationControllerAnimation.__class = true;

MindFusion.Charting.ScatterRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>Renderer2D.DrawHighlight override. Draws highlighted shape in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumPoints: function(context, process) {
		/// <summary>Enumerates the data values of rendered series mapped to plot 2D coordinates.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessPoint">Type: ProcessPoint&#10;A ProcessPoint callback.</param>
	},
	hitTest: function(context, location) {
		/// <summary>Renderer2D.HitTest override. Hit-tests the scatter representations of data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for data items.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	}
};
MindFusion.Charting.ScatterRenderer.__class = true;

MindFusion.Charting.ScatterType.prototype = {
	Circle: 0,
	Diamond: 1,
	None: 2,
	Square: 3,
	Triangle: 4
};
MindFusion.Charting.ScatterType.__enum = true;

MindFusion.Charting.Series2D.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns an element of the Labels list.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a value for the specified data item in this series.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;A double-precision number representing the value of a data item in the series.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. Series2D always returns false.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted. Series2D always returns false.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.Series2D.__class = true;

MindFusion.Charting.Series3D.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns an element of the Labels list.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a value for the specified data item in this series.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;A double-precision number representing the value of a data item in the series.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. Series3D always returns false.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted. Series3D always returns false.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.Series3D.__class = true;

MindFusion.Charting.SeriesRenderer.prototype = {
	adjustDataRange: function(context) {
		/// <summary>Adjusts the data range of associated Axis objects after initial measure pass.</summary>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
	},
	domainDimension: function(series) {
		/// <summary>Implements the SeriesContainer interface. Gets the index of the dimension whose set of values should be treated as domain of plotted function.</summary>
		/// <param name="series" type="Series">Type: Series&#10;A Series in this container.</param>
	},
	draw: function(context) {
		/// <summary>Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>Draws highlighted data item in specified RenderContext.</summary>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="void">Type: void&#10;A HitResult instance identifying highlighted data item.</param>
	},
	effectiveFill: function(seriesIndex, dataIndex, context) {
		/// <summary>Gets the brush that should be used to fill the representation of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this SeriesRenderer.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	effectiveLabelBrush: function(context) {
		/// <summary>Gets the System.Drawing.Brush that should be used to draw labels of data items.</summary>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance used to find styles and theme from dashboard hierarchy.</param>
	},
	effectiveLabelFont: function(context) {
		/// <summary>Gets the Font that should be used to draw labels of data items.</summary>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance used to find styles and theme from dashboard hierarchy.</param>
	},
	effectiveStroke: function(seriesIndex, dataIndex, context) {
		/// <summary>Gets the brush that should be used to stroke the representation of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this SeriesRenderer.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	effectiveStrokeDashStyle: function(seriesIndex, dataIndex, context) {
		/// <summary>Gets the dash style of the pen that should be used to stroke the representation of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this SeriesRenderer.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A member of the DashStyle enumeration.</returns>
	},
	effectiveStrokePen: function(seriesIndex, dataIndex, context) {
		/// <summary>Gets the Pen that should be used to stroke the representation of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this SeriesRenderer.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Pen">Type: Pen&#10;A Pen instance.</returns>
	},
	effectiveStrokeThickness: function(seriesIndex, dataIndex, context) {
		/// <summary>Gets the thickness of the pen that should be used to stroke the representation of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this SeriesRenderer.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	hitTest: function(context, location) {
		/// <summary>Hit-tests the visual representation of the series for a data item.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for data items.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	},
	measureDataRange: function(context) {
		/// <summary>Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
	},
	onPropertyChanged: function(propertyName) {
		/// <summary>Raises the PropertyChanged event.</summary>
		/// <param name="propertyName" type="void">Type: void&#10;Specifies the name of changed property.</param>
	},
	onSeriesDataChanged: function(sender, e) {
		/// <summary>Called when Series raise their DataChanged event.</summary>
		/// <param name="sender" type="Object">Type: Object&#10;The Series raising the event.</param>
		/// <param name="e" type="EventArgs">Type: EventArgs&#10;An EventArgs instance.</param>
	},
	searchStyle: function(check, context) {
		/// <summary>Returns a SeriesStyle object that meets specified criteria.</summary>
		/// <param name="check" type="void">Type: void&#10;A StyleCheck delegate that tests SeriesStyle for some criteria.</param>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance used to access styles and theme from the dashboard hierarchy.</param>
	},
	setToolTip: function(text, location) {
		/// <summary>Sets tooltip text and location.</summary>
		/// <param name="text" type="void">Type: void&#10;A string specifying tooltip text.</param>
		/// <param name="location" type="void">Type: void&#10;A Point specifying tooltip location.</param>
	},
	startMeasureData: function(context) {
		/// <summary>Called to reset measure accumulators at the beginning of a measure pass.</summary>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
	},
	subscribe: function(series) {
		/// <summary>Subscribes to the DataChanged event of specified Series.</summary>
		/// <param name="series" type="Series">Type: Series&#10;A Series instance.</param>
	},
	unsubscribe: function(series) {
		/// <summary>Unsubscribes from the DataChanged event of specified Series.</summary>
		/// <param name="series" type="Series">Type: Series&#10;A Series instance.</param>
	}
};
MindFusion.Charting.SeriesRenderer.__class = true;

MindFusion.Charting.SimpleSeries.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns an element of the labels list.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a value for the specified data item in this series.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;A double-precision number representing the value of a data item in the series.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. Gets a value indicating whether the specified data item should be emphasized by the SeriesRenderer.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted. SimpleSeries always returns false.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.SimpleSeries.__class = true;

MindFusion.Charting.StackRenderer.prototype = {
	enumVisibleStackPoints: function(context, process) {
		/// <summary>Enumerates the data values of rendered series mapped to plot 2D coordinates.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessStackPoint">Type: ProcessStackPoint&#10;A ProcessStackPoint callback.</param>
	},
	enumVisibleStackRanges: function(context, process) {
		/// <summary>Enumerates each series once providing a list of all visible points at each iteration.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessStackRange">Type: ProcessStackRange&#10;A ProcessStackRange callback.</param>
	},
	getPixel: function(seriesIndex, dataIndex, xAxis, yAxis, component) {
		/// <summary>Gets the coordinates of specified data item when mapped to a Plot2D pixel.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <param name="xAxis" type="MindFusion.Charting.Axis">Type: Axis&#10;An Axis reference specifying the X axis.</param>
		/// <param name="yAxis" type="MindFusion.Charting.Axis">Type: Axis&#10;An Axis reference specifying the Y axis.</param>
		/// <param name="component" type="Components.Component">Type: Component&#10;An instance of Plot2D or derived class.</param>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;A Point containing Plot2D coordinates corresponding to specified data item.</returns>
	},
	hitTest: function(context, location) {
		/// <summary>Renderer2D.HitTest override. Hit-tests the stack representations of data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for a data point.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	},
	measureDataRange: function(context) {
		/// <summary>Renderer2D.MeasureDataRange override. Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.StackRenderer.__class = true;

MindFusion.Charting.StepAreaRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.StepAreaRenderer.__class = true;

MindFusion.Charting.StepRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.StepRenderer.__class = true;

MindFusion.Charting.StockPrice.prototype = {
};
MindFusion.Charting.StockPrice.__class = true;

MindFusion.Charting.StockPriceSeries.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns DateTime value at specified index as an XAxisLabel.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a coordinate of specified point in this series.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;A double-precision number representing the value of a data item in the series.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. StockPriceSeries always returns false.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted. StockPriceSeries always returns false.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.StockPriceSeries.__class = true;

MindFusion.Charting.TextRenderer.prototype = {
	drawLabelAtPoint: function(series, index, point, labelKind, format) {
		/// <summary>Draws the specified label centered at specified location.</summary>
		/// <param name="series" type="Series">Type: Series&#10;A Series whose label to draw.</param>
		/// <param name="index" type="Number">Type: Number&#10;An integer index of the label.</param>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying the label's location.</param>
		/// <param name="labelKind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <param name="format" type="MindFusion.Charting.Drawing.StringFormat" optional="true">Optional. Type: StringFormat&#10;A StringFormat instance.</param>
	},
	drawLabelInRect: function(series, index, bounds, labelKind, format) {
		/// <summary>Draws the specified label in specified layout rectangle.</summary>
		/// <param name="series" type="Series">Type: Series&#10;A Series whose label to draw.</param>
		/// <param name="index" type="Number">Type: Number&#10;An integer index of the label.</param>
		/// <param name="bounds" type="MindFusion.Drawing.Rect">Type: Rect&#10;A RectangleF specifying the layout rectangle.</param>
		/// <param name="labelKind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <param name="format" type="MindFusion.Charting.Drawing.StringFormat" optional="true">Optional. Type: StringFormat&#10;A StringFormat instance.</param>
	},
	drawRightFromPoint: function(series, index, point, labelKind) {
		/// <summary>Draws the specified label on the right side of specified point.</summary>
		/// <param name="series" type="Series">Type: Series&#10;A Series whose label to draw.</param>
		/// <param name="index" type="Number">Type: Number&#10;An integer index of the label.</param>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying the label's location.</param>
		/// <param name="labelKind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
	}
};
MindFusion.Charting.TextRenderer.__class = true;

MindFusion.Charting.TextStyle.prototype = {
};
MindFusion.Charting.TextStyle.__class = true;

MindFusion.Charting.TextStyleHint.prototype = {
	AxisLabels: 0,
	AxisTitle: 1,
	DataLabels: 2,
	LegendTitle: 3,
	Subtitle: 4,
	Title: 5,
	Widget: 6
};
MindFusion.Charting.TextStyleHint.__enum = true;

MindFusion.Charting.Theme.prototype = {
	loadFrom: function(fileUrl) {
		/// <summary>Loads the theme values from an XML file.</summary>
		/// <param name="fileUrl" type="String">Type: String&#10;The URL of an XML file where the data should be read from.</param>
	},
	saveTo: function(fileUrl) {
		/// <summary>Saves the theme values to specified file.</summary>
		/// <param name="fileUrl" type="String">Type: String&#10;The URL where the theme's XML should be posted to.</param>
	}
};
MindFusion.Charting.Theme.__class = true;

MindFusion.Charting.ToolTip.prototype = {
};
MindFusion.Charting.ToolTip.__class = true;

MindFusion.Charting.UniformSeriesStyle.prototype = {
	fill: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Fill. Returns UniformFill for any data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	stroke: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Stroke. Returns UniformStroke for any data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	strokeDashStyle: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeDashStyle. Returns UniformStrokeDashStyle for any data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A nullable DashStyle value specifying stroke dash style.</returns>
	},
	strokeThickness: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeThickness. Returns UniformStrokeThickness for any data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A nullable double value specifying stroke thickness.</returns>
	}
};
MindFusion.Charting.UniformSeriesStyle.__class = true;

MindFusion.Charting.Vector.prototype = {
	negate: function() {
		/// <summary>Reverses the direction of this vector.</summary>
	},
	normalize: function() {
		/// <summary>Makes this vector a unit vector.</summary>
	},
};
MindFusion.Charting.Vector.__class = true;

MindFusion.Charting.Vector.add = function(vector1, vector2) {
	/// <summary>Adds two vectors.</summary>
	/// <param name="vector1" type="MindFusion.Charting.Vector">Type: Vector&#10;The first vector.</param>
	/// <param name="vector2" type="MindFusion.Charting.Vector">Type: Vector&#10;The second vector.</param>
	/// <returns type="MindFusion.Charting.Vector">Type: Vector&#10;A vector representing the sum of specified vectors.</returns>
};
MindFusion.Charting.Vector.addPoint = function(vector, point) {
	/// <summary>Translates point by a vector.</summary>
	/// <param name="vector" type="MindFusion.Charting.Vector">Type: Vector&#10;The vector to add.</param>
	/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;The reference point.</param>
	/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;The translated point.</returns>
};
MindFusion.Charting.Vector.angleBetween = function(vector1, vector2) {
	/// <summary>Determines the angle between two vectors.</summary>
	/// <param name="vector1" type="MindFusion.Charting.Vector">Type: Vector&#10;The first vector.</param>
	/// <param name="vector2" type="MindFusion.Charting.Vector">Type: Vector&#10;The second vector.</param>
	/// <returns type="Number">Type: Number&#10;The angle between specified vectors.</returns>
};
MindFusion.Charting.Vector.crossProduct = function(vector1, vector2) {
	/// <summary>Returns the size of cross-product of two vectors.</summary>
	/// <param name="vector1" type="MindFusion.Charting.Vector">Type: Vector&#10;The first vector.</param>
	/// <param name="vector2" type="MindFusion.Charting.Vector">Type: Vector&#10;The second vector.</param>
	/// <returns type="Number">Type: Number&#10;The size of cross-product.</returns>
};
MindFusion.Charting.Vector.determinant = function(vector1, vector2) {
	/// <summary>Finds the determinant of two vectors.</summary>
	/// <param name="vector1" type="MindFusion.Charting.Vector">Type: Vector&#10;The first vector.</param>
	/// <param name="vector2" type="MindFusion.Charting.Vector">Type: Vector&#10;The second vector.</param>
	/// <returns type="Number">Type: Number&#10;The determinant.</returns>
};
MindFusion.Charting.Vector.divide = function(vector, scalar) {
	/// <summary>Divides a vector by a scalar.</summary>
	/// <param name="vector" type="MindFusion.Charting.Vector">Type: Vector&#10;The vector to divide.</param>
	/// <param name="scalar" type="Number">Type: Number&#10;The scalar value.</param>
	/// <returns type="MindFusion.Charting.Vector">Type: Vector&#10;A vector containing the division result.</returns>
};
MindFusion.Charting.Vector.multiply = function(vector1, vector2) {
	/// <summary>Returns the dot product of two vectors.</summary>
	/// <param name="vector1" type="MindFusion.Charting.Vector">Type: Vector&#10;The first vector.</param>
	/// <param name="vector2" type="MindFusion.Charting.Vector">Type: Vector&#10;The second vector.</param>
	/// <returns type="Number">Type: Number&#10;The dot product.</returns>
};
MindFusion.Charting.Vector.multiplyScalarAndVector = function(scalar, vector) {
	/// <summary>Multiplies vector by a scalar.</summary>
	/// <param name="scalar" type="Number">Type: Number&#10;The scalar value.</param>
	/// <param name="vector" type="MindFusion.Charting.Vector">Type: Vector&#10;The vector to multiply.</param>
	/// <returns type="MindFusion.Charting.Vector">Type: Vector&#10;A vector containing the multiplication result.</returns>
};
MindFusion.Charting.Vector.multiplyVectorAndScalar = function(vector, scalar) {
	/// <summary>Multiplies vector by a scalar.</summary>
	/// <param name="vector" type="MindFusion.Charting.Vector">Type: Vector&#10;The vector to multiply.</param>
	/// <param name="scalar" type="Number">Type: Number&#10;The scalar value.</param>
	/// <returns type="MindFusion.Charting.Vector">Type: Vector&#10;A vector containing the multiplication result.</returns>
};
MindFusion.Charting.Vector.subtract = function(vector1, vector2) {
	/// <summary>Subtracts two vectors.</summary>
	/// <param name="vector1" type="MindFusion.Charting.Vector">Type: Vector&#10;The first vector.</param>
	/// <param name="vector2" type="MindFusion.Charting.Vector">Type: Vector&#10;The second vector.</param>
	/// <returns type="MindFusion.Charting.Vector">Type: Vector&#10;A vector representing the difference between specified vectors.</returns>
};

MindFusion.Charting.XAxisRenderer.prototype = {
	draw: function(context) {
		/// <summary>Component.draw override. Draws this component in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	effectiveAxis: function(context) {
		/// <summary>AxisRenderer.effectiveAxis override. Gets the effective horizontal Axis in current context,getting one from Plot2D or chart control if there's no local Axis associated with this renderer.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Axis">Type: Axis&#10;An Axis instance.</returns>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.XAxisRenderer.__class = true;

MindFusion.Charting.XmlPersistContext.prototype = {
	addChildElement: function(elementName, parentElement, innerText) {
		/// <summary>Adds a new child node with the specified name andvalue to the specified parent node.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="innerText" type="void">Type: void&#10;</param>
	},
	readBool: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a boolean value with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="defaultValue" type="void">Type: void&#10;</param>
	},
	readBrush: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a MindFusion.Drawing.Brush object with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="defaultValue" type="void">Type: void&#10;</param>
	},
	readBrushes: function(parentElement) {
		/// <summary>Reads all brushes.</summary>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	readBrushList: function(elementName, subElementName, parentElement) {
		/// <summary>Reads a list of brushes.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="subElementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	readColor: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a color with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="defaultValue" type="void">Type: void&#10;</param>
	},
	readDashStyleList: function(elementName, subElementName, parentElement) {
		/// <summary>Reads a list of dash styles.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="subElementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	readEnum: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads an enum value with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="defaultValue" type="void">Type: void&#10;</param>
	},
	readFloat: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a float value with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="defaultValue" type="void">Type: void&#10;</param>
	},
	readFloatList: function(elementName, subElementName, parentElement) {
		/// <summary>Reads a list of floats.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="subElementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	readInt: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads an integer value with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="defaultValue" type="void">Type: void&#10;</param>
	},
	readObject: function(elementName, parentElement) {
		/// <summary>Reads an object with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	readString: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a string value with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="defaultValue" type="void">Type: void&#10;</param>
	},
	readStringFormat: function(elementName, parentElement, defultFormat) {
		/// <summary>Reads a StringFormat object with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="defultFormat" type="void">Type: void&#10;</param>
	},
	writeBool: function(boolValue, elementName, parentElement) {
		/// <summary>Writes a boolean value with the specified name.</summary>
		/// <param name="boolValue" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeBrush: function(brush, elementName, parentElement) {
		/// <summary>Writes a reference to the specified brush. The brushis registered within the internal hashtable forsubsequent serialization.</summary>
		/// <param name="brush" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeBrushes: function(parentElement) {
		/// <summary>Writes all currently accumulated brushes.</summary>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeBrushList: function(list, elementName, subElementName, parentElement) {
		/// <summary>Writes a list of brushes.</summary>
		/// <param name="list" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="subElementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeColor: function(color, elementName, parentElement) {
		/// <summary>Writes the specified color.</summary>
		/// <param name="color" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeColorList: function(list, elementName, subElementName, parentElement) {
		/// <summary>Writes a list of colors.</summary>
		/// <param name="list" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="subElementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeDashStyleList: function(list, elementName, subElementName, parentElement) {
		/// <summary>Writes a list of dash styles.</summary>
		/// <param name="list" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="subElementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeEnum: function(enumValue, elementName, parentElement) {
		/// <summary>Writes the specified enum value.</summary>
		/// <param name="enumValue" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeFloat: function(floatValue, elementName, parentElement) {
		/// <summary>Writes a float value with the specified name.</summary>
		/// <param name="floatValue" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeFloatList: function(list, elementName, subElementName, parentElement) {
		/// <summary>Writes a list of floating-point numbers.</summary>
		/// <param name="list" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="subElementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeInt: function(intValue, elementName, parentElement) {
		/// <summary>Writes an integer value with the specified name.</summary>
		/// <param name="intValue" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeObject: function(objectValue, elementName, parentElement) {
		/// <summary>Writes the specified object under the specified name.</summary>
		/// <param name="objectValue" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeString: function(stringValue, elementName, parentElement) {
		/// <summary>Writes a string value with the specified name.</summary>
		/// <param name="stringValue" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	}
};
MindFusion.Charting.XmlPersistContext.__class = true;

MindFusion.Charting.YAxisRenderer.prototype = {
	draw: function(context) {
		/// <summary>Component.draw override. Draws this component in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	effectiveAxis: function(context) {
		/// <summary>AxisRenderer.effectiveAxis override. Gets the effective vertical Axis in current context,getting one from Plot2D or chart control if there's no local Axis associated with this renderer.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Axis">Type: Axis&#10;An Axis instance.</returns>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.YAxisRenderer.__class = true;

MindFusion.Charting.ZoomController.prototype = {
	drawInteraction: function(graphics) {
		/// <summary>PlotController.drawInteraction override. Draws the currently selected data range that that controller will zoom into when the user releases the mouse button.</summary>
		/// <param name="graphics" type="MindFusion.Charting.Drawing.Graphics">Type: Graphics&#10;A Graphics instance.</param>
	},
	onMouseDown: function(x, y) {
		/// <summary>Plot2DController.OnMouseDown override. Called when the user presses a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseMove: function(x, y) {
		/// <summary>PlotController.OnMouseMove override. Called when the user moves the mouse.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseUp: function(x, y) {
		/// <summary>PlotController.OnMouseUp override. Called when the user releases a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseWheel: function(x, y, delta) {
		/// <summary>PlotController.OnMouseWheel override. Called when the user releases a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
		/// <param name="delta" type="Number">Type: Number&#10;A number value specifying the direction and the amount of scrolling needed.</param>
	}
};
MindFusion.Charting.ZoomController.__class = true;

MindFusion.Drawing.Canvas.prototype = {
	clientToDoc: function(point) {
		/// <summary>Transforms a point from client to document coordinates.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;The point to transform.</param>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;The transformed point.</returns>
	},
	dispose: function() {
		/// <summary>Overrides Component.Dispose</summary>
	},
	docToClient: function(point) {
		/// <summary>Transforms a point from document to client coordinates.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;The point to transform.</param>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;The transformed point.</returns>
	},
	getBounds: function() {
		/// <summary>Gets the underlying Canvas element's bounds.</summary>
		/// <returns type="MindFusion.Drawing.Rect">A Rect instance.</returns>
	},
	getLicenseLocation: function() {
		/// <summary>Gets the URL of the diagram's license file.</summary>
		/// <returns type="String">Type: String&#10;A valid URL string that specifies the location of the license key.</returns>
	},
	getMeasureUnit: function() {
		/// <summary>Gets the unit of measure used for logical coordinates.</summary>
		/// <returns type="MindFusion.Drawing.GraphicsUnit">Type: GraphicsUnit&#10;The current measure unit.</returns>
	},
	getZoomFactor: function() {
		/// <summary>Gets the zoom factor.</summary>
		/// <returns type="Number">Type: Number&#10;The current zoom factor.</returns>
	},
	setBounds: function(bounds) {
		/// <summary>Sets the underlying Canvas element's bounds.</summary>
		/// <param name="bounds" type="MindFusion.Drawing.Rect">A Rect instance.</param>
	},
	setLicenseLocation: function(value) {
		/// <summary>Sets the URL of the diagram's license file.</summary>
		/// <param name="value" type="String">Type: String&#10;A valid URL string that specifies the location of the license key.</param>
	},
	setMeasureUnit: function(value) {
		/// <summary>Sets the unit of measure used for logical coordinates.</summary>
		/// <param name="value" type="MindFusion.Drawing.GraphicsUnit">A GraphicsUnit instance.</param>
	},
	setZoomFactor: function(value) {
		/// <summary>Sets the zoom factor.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The zoom factor.</param>
	}
};
MindFusion.Drawing.Canvas.__class = true;

MindFusion.Drawing.Canvas.create = function(element) {
	/// <summary>Creates and initializes a new Canvas from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">Type: Object&#10;The DOM element that the diagram should be attached to.</param>
	/// <returns type="MindFusion.Drawing.Canvas">Type: Canvas&#10;A Canvas object that represents the newly created canvas.</returns>
};

MindFusion.Drawing.DashStyle.prototype = {
	Dash: 0,
	DashDot: 1,
	DashDotDot: 2,
	Dot: 3,
	Solid: 4
};
MindFusion.Drawing.DashStyle.__enum = true;

MindFusion.Drawing.Ellipse.prototype = {
	clone: function() {
		/// <summary>Creates a Ellipse object identical to the current object.</summary>
		/// <returns type="MindFusion.Drawing.Ellipse">The newly created Ellipse object.</returns>
	}
};
MindFusion.Drawing.Ellipse.__class = true;

MindFusion.Drawing.Font.prototype = {
};
MindFusion.Drawing.Font.__class = true;

MindFusion.Drawing.FontStyle.prototype = {
	Bold: 0,
	Italic: 1,
	Regular: 2,
	Underline: 3
};
MindFusion.Drawing.FontStyle.__enum = true;

MindFusion.Drawing.Image.prototype = {
};
MindFusion.Drawing.Image.__class = true;

MindFusion.Drawing.Path.prototype = {
	addEllipse: function(x, y, width, height) {
		/// <summary>Adds an ellipse figure to the path.</summary>
		/// <param name="x" type="Number">Type: Number&#10;The x-coordinate of the center of the ellipse.</param>
		/// <param name="y" type="Number">Type: Number&#10;The y-coordinate of the center of the ellipse.</param>
		/// <param name="width" type="Number">Type: Number&#10;The width of the ellipse.</param>
		/// <param name="height" type="Number">Type: Number&#10;The height of the ellipse.</param>
	},
	addRect: function(x, y, width, height) {
		/// <summary>Adds a rectangle figure to the path.</summary>
		/// <param name="x" type="Number">Type: Number&#10;The x-coordinate of the rectangle.</param>
		/// <param name="y" type="Number">Type: Number&#10;The y-coordinate of the rectangle.</param>
		/// <param name="width" type="Number">Type: Number&#10;The width of the rectangle.</param>
		/// <param name="height" type="Number">Type: Number&#10;The height of the rectangle.</param>
	},
	arcTo: function(x, y, radius, startAngle, endAngle, anticlockwise) {
		/// <summary>Draws an arc.</summary>
		/// <param name="x" type="Number">Type: Number&#10;The x-coordinate of the center of the circle.</param>
		/// <param name="y" type="Number">Type: Number&#10;The y-coordinate of the center of the circle.</param>
		/// <param name="radius" type="Number">Type: Number&#10;The radius of the circle</param>
		/// <param name="startAngle" type="Number">Type: Number&#10;The starting angle in radians.</param>
		/// <param name="endAngle" type="Number">Type: Number&#10;The ending angle in radians.</param>
		/// <param name="anticlockwise" type="Boolean">Type: Boolean&#10;Specifies whether the drawing should be counterclockwise or clockwise.</param>
	},
	bezierTo: function(x1, y1, x2, y2, x3, y3) {
		/// <summary>Draws a cubic bezier curve.</summary>
		/// <param name="x1" type="Number">Type: Number&#10;The x-coordinate of the first bezier control point.</param>
		/// <param name="y1" type="Number">Type: Number&#10;The y-coordinate of the first bezier control point.</param>
		/// <param name="x2" type="Number">Type: Number&#10;The x-coordinate of the second bezier control point.</param>
		/// <param name="y2" type="Number">Type: Number&#10;The y-coordinate of the second bezier control point.</param>
		/// <param name="x3" type="Number">Type: Number&#10;The x-coordinate of the ending point.</param>
		/// <param name="y3" type="Number">Type: Number&#10;The y-coordinate of the ending point.</param>
	},
	clone: function() {
		/// <summary>Creates a Path object identical to the current object.</summary>
		/// <returns type="MindFusion.Drawing.Path">The newly created Path object.</returns>
	},
	close: function() {
		/// <summary>Closes the path.</summary>
	},
	done: function() {
		/// <summary>Ends the path definition.</summary>
	},
	empty: function() {
		/// <summary>Gets a value indicating whether this Path is empty.</summary>
		/// <returns type="Boolean">true if the path does not contain any figures; otherwise, false.</returns>
	},
	getBounds: function() {
		/// <summary>Gets the bounding rect of the path.</summary>
		/// <returns type="MindFusion.Drawing.Rect">Type: Rect&#10;The bounding rect.</returns>
	},
	init: function() {
		/// <summary>Begins a path or resets the current path.</summary>
	},
	lineTo: function(x, y) {
		/// <summary>Draws a line from the current point to the specified location.</summary>
		/// <param name="x" type="Number">Type: Number&#10;The x-coordinate of the point.</param>
		/// <param name="y" type="Number">Type: Number&#10;The y-coordinate of the point.</param>
	},
	moveTo: function(x, y) {
		/// <summary>Moves the path to the specified location.</summary>
		/// <param name="x" type="Number">Type: Number&#10;The x-coordinate of the point.</param>
		/// <param name="y" type="Number">Type: Number&#10;The y-coordinate of the point.</param>
	},
	quadraticCurveTo: function(x1, y1, x, y) {
		/// <summary>Draws a quadratic bezier curve.</summary>
		/// <param name="x1" type="Number">Type: Number&#10;The x-coordinate of the bezier control point.</param>
		/// <param name="y1" type="Number">Type: Number&#10;The y-coordinate of the bezier control point.</param>
		/// <param name="x" type="Number">Type: Number&#10;The x-coordinate of the ending point.</param>
		/// <param name="y" type="Number">Type: Number&#10;The y-coordinate of the ending point.</param>
	},
	setBrush: function(brush) {
		/// <summary>Sets the brush used to fill a closed path.</summary>
		/// <param name="brush" type="Object">Type: Object&#10;The brush.</param>
	},
	setPen: function(pen) {
		/// <summary>Sets the pen used to draw the path.</summary>
		/// <param name="pen" type="Object">Type: Object&#10;The pen.</param>
	},
	setText: function(text) {
		/// <summary>Sets the text displayed inside this path.</summary>
		/// <param name="text" type="String">Type: String&#10;The text.</param>
	}
};
MindFusion.Drawing.Path.__class = true;

MindFusion.Drawing.Point.prototype = {
	empty: function() {
		/// <summary>Gets a value indicating whether this Point is empty.</summary>
		/// <returns type="Boolean">true if both&#160;x and&#160;y are 0; otherwise, false.</returns>
	},
	equals: function(point) {
		/// <summary>Specifies whether this Point contains the same coordinates as the specified point.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point" optional="true">Optional. The Point to test.</param>
		/// <returns type="Boolean">true if point is a Point and has the same coordinates as this Point.</returns>
	}
};
MindFusion.Drawing.Point.__class = true;

MindFusion.Drawing.Rect.prototype = {
	bottom: function() {
		/// <summary>Gets the y-coordinate that is the sum of the&#160;y and height values of this Rect object.</summary>
		/// <returns type="Number">The y-coordinate that is the sum of&#160;y and height of this Rect.</returns>
	},
	bottomLeft: function() {
		/// <summary>Gets the bottom-left edge of this Rect object.</summary>
		/// <returns type="MindFusion.Drawing.Point">The bottom-left edge, which is a Point with&#160;x that is equal to&#160;x and with&#160;y that is the sum of&#160;y and height.</returns>
	},
	bottomRight: function() {
		/// <summary>Gets the bottom-right edge of this Rect object.</summary>
		/// <returns type="MindFusion.Drawing.Point">The bottom-right edge, which is a Point with&#160;x that is the sum of&#160;x and width and with&#160;y that is the sum of&#160;y and height.</returns>
	},
	center: function() {
		/// <summary>Gets the center of this Rect object.</summary>
		/// <returns type="MindFusion.Drawing.Point">The center, which is a Point with&#160;x that is the sum of&#160;x and half of width and with&#160;y that is the sum of&#160;y and half of height.</returns>
	},
	clone: function() {
		/// <summary>Creates a Rect object identical to the current object.</summary>
		/// <returns type="MindFusion.Drawing.Rect">Type: Rect&#10;The newly created Rect object.</returns>
	},
	contains: function(rect) {
		/// <summary>Determines if the rectangular region represented by rect is entirely contained within this Rect object.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect">The Rect to test.</param>
		/// <returns type="Boolean">true if the rectangular region represented by rect is entirely contained within this Rect; otherwise, false.</returns>
	},
	containsPoint: function(point) {
		/// <summary>Determines if the specified point is contained within this Rect object.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;The point to check.</param>
		/// <returns type="Boolean">true if point is contained within the Rect; otherwise, false.</returns>
	},
	equals: function(rect) {
		/// <summary>Specifies whether this Rect contains the same coordinates as the specified rectangle.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The Rect to test.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if rect has the same coordinates as this Rect.</returns>
	},
	intersect: function(rect) {
		/// <summary>Returns a Rect object representing the intersection of the current rectangle with the specified rectangle.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The rectangle to intersect.</param>
		/// <returns type="MindFusion.Drawing.Rect">A Rect object representing the intersection of the two rectangles.</returns>
	},
	intersectsWith: function(rect) {
		/// <summary>Checks if this Rect intersects with the specified rect.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect">The other Rect.</param>
		/// <returns type="Boolean">true if this Rect and the specified Rect intersect; otherwise, false.</returns>
	},
	isEmpty: function() {
		/// <summary>Gets a value indicating whether this Rect is empty.</summary>
		/// <returns type="Boolean">true if both width and height are 0; otherwise, false.</returns>
	},
	left: function() {
		/// <summary>Gets the x-coordinate of the left edge of this Rect object.</summary>
		/// <returns type="Number">The x-coordinate of the left edge of this Rect object.</returns>
	},
	right: function() {
		/// <summary>Gets the x-coordinate that is the sum of x and width values of this Rect.</summary>
		/// <returns type="Number">The x-coordinate that is the sum of x and width of this rectangle.</returns>
	},
	setCenter: function(point) {
		/// <summary>Sets the center of this Rect object.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">The center of this Rect.</param>
	},
	setLocation: function(point) {
		/// <summary>Sets the top-left edge of this Rect object.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">The top-left edge of the Rect.</param>
	},
	top: function() {
		/// <summary>Gets the y-coordinate of the top edge of this Rect object.</summary>
	},
	topLeft: function() {
		/// <summary>Gets the top-left edge of this Rect.</summary>
		/// <returns type="MindFusion.Drawing.Point">The top-left edge of this Rect.</returns>
	},
	topMiddle: function() {
		/// <summary>Gets the top-middle of this Rect object.</summary>
		/// <returns type="MindFusion.Drawing.Point">The top-middle coordinate, which is a Point with x that is the sum of x and half of width and with y equal to y.</returns>
	},
	topRight: function() {
		/// <summary>Gets the top-right edge of this Rect object.</summary>
		/// <returns type="MindFusion.Drawing.Point">The top-right edge, which is a Point with x that is the sum of x and width and with y equal to y.</returns>
	},
	union: function(rect) {
		/// <summary>Returns a Rect object representing the union of the current rectangle with the specified rectangle.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The rectangle to union.</param>
		/// <returns type="MindFusion.Drawing.Rect">A Rect object that bounds the union of the two rectangles.</returns>
	}
};
MindFusion.Drawing.Rect.__class = true;

MindFusion.Drawing.Rect.fromLTRB = function(l, t, r, b) {
	/// <summary>Creates a Rect object with the specified edge locations.</summary>
	/// <param name="l" type="Number">Type: Number&#10;The x-coordinate of the upper-left corner of this Rect.</param>
	/// <param name="t" type="Number">Type: Number&#10;The y-coordinate of the upper-left corner of this Rect.</param>
	/// <param name="r" type="Number">Type: Number&#10;The x-coordinate of the lower-right corner of this Rect.</param>
	/// <param name="b" type="Number">Type: Number&#10;The y-coordinate of the lower-right corner of this Rect.</param>
	/// <returns type="MindFusion.Drawing.Rect">Type: Rect&#10;A rectangle with the specified coordinates.</returns>
};

MindFusion.Drawing.Size.prototype = {
};
MindFusion.Drawing.Size.__class = true;

MindFusion.Drawing.Text.prototype = {
	clone: function() {
		/// <summary>Creates a Text object identical to the current object.</summary>
		/// <returns type="MindFusion.Drawing.Text">The newly created Text object.</returns>
	},
	getBounds: function() {
		/// <summary>Gets a value indicating the bounding rectangle of the text container.</summary>
		/// <returns type="Rect">Type: Rect&#10;The bounding rectangle.</returns>
	},
	getFont: function() {
		/// <summary>Gets the font of the text.</summary>
		/// <returns type="Font">Type: Font&#10;The font of the text.</returns>
	},
	getRotationAngle: function() {
		/// <summary>Gets a value indicating the rotation of the text container.</summary>
		/// <returns type="Number">Type: Number&#10;The angle.</returns>
	},
	getText: function() {
		/// <summary>Gets the text to be displayed.</summary>
		/// <returns type="String">Type: String&#10;The text.</returns>
	},
	setBounds: function(bounds, angle) {
		/// <summary>Sets a value indicating the bounding rectangle of the text container.</summary>
		/// <param name="bounds" type="Rect">Type: Rect&#10;The bounding rectangle.</param>
		/// <param name="angle" type="Number" optional="true">Optional. Type: Number&#10;The rotation angle to be applied to the bounding rectangle.</param>
	},
	setFont: function(value) {
		/// <summary>Sets the font of the text.</summary>
		/// <param name="value" type="void">Type: void&#10;</param>
	},
	setText: function(value) {
		/// <summary>Sets the text to be displayed.</summary>
		/// <param name="value" type="void">Type: void&#10;</param>
	}
};
MindFusion.Drawing.Text.__class = true;

MindFusion.Drawing.Thickness.prototype = {
};
MindFusion.Drawing.Thickness.__class = true;

MindFusion.Drawing.Vector.prototype = {
};
MindFusion.Drawing.Vector.__class = true;

MindFusion.Gauges.Alignment.prototype = {
	CenterInside: 0,
	CenterOutside: 1,
	InnerCenter: 2,
	InnerInside: 3,
	InnerOutside: 4,
	OuterCenter: 5,
	OuterInside: 6,
	OuterOutside: 7,
	TrueCenter: 8
};
MindFusion.Gauges.Alignment.__enum = true;

MindFusion.Gauges.ArcArea.prototype = {
	getEndAngle: function() {
		/// <summary>Gets the end angle of the arc.</summary>
		/// <returns type="Number">Type: Number&#10;The end angle of the arc.</returns>
	},
	getStartAngle: function() {
		/// <summary>Gets the start angle of the arc.</summary>
		/// <returns type="Number">Type: Number&#10;The start angle of the arc.</returns>
	},
	setEndAngle: function(value) {
		/// <summary>Sets the end angle of the arc.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The end angle of the arc.</param>
	},
	setStartAngle: function(value) {
		/// <summary>Sets the start angle of the arc.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The start angle of the arc.</param>
	}
};
MindFusion.Gauges.ArcArea.__class = true;

MindFusion.Gauges.ArcSegment.prototype = {
	addTo: function(path, startPoint, isOutline) {
		/// <summary>Segment.addTo override.</summary>
		/// <param name="path" type="void">Type: void&#10;</param>
		/// <param name="startPoint" type="void">Type: void&#10;</param>
		/// <param name="isOutline" type="void">Type: void&#10;</param>
	},
	getIsCounterclockwise: function() {
		/// <summary>Gets a value that indicates whether the arc is drawn in counterclockwise or clockwise direction.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;True if the arc is drawn in counterclockwise, otherwise false.</returns>
	},
	getIsLargeArc: function() {
		/// <summary>Gets a value that indicates whether the arc should be greater than 180 degrees.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;True if the arc should be greater than 180 degrees, otherwise false.</returns>
	},
	getPoint: function() {
		/// <summary>Gets the endpoint of the elliptical arc.</summary>
		/// <returns type="Point">Type: Point&#10;The endpoint of the elliptical arc.</returns>
	},
	getRotationAngle: function() {
		/// <summary>Gets the amount (in degrees) by which the ellipse is rotated about the x-axis.</summary>
		/// <returns type="Number">Type: Number&#10;The amount (in degrees) by which the ellipse is rotated about the x-axis.</returns>
	},
	getSize: function() {
		/// <summary>Gets the x- and y-radius of the arc as a Size structure.</summary>
		/// <returns type="Size">The x- and y-radius of the arc as a Size structure.</returns>
	},
	setIsCounterclockwise: function(value) {
		/// <summary>Sets a value that indicates whether the arc is drawn in counterclockwise or clockwise direction.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;True if the arc is drawn in counterclockwise, otherwise false.</param>
	},
	setIsLargeArc: function(value) {
		/// <summary>Sets a value that indicates whether the arc should be greater than 180 degrees.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;True if the arc should be greater than 180 degrees, otherwise false.</param>
	},
	setPoint: function(value) {
		/// <summary>Sets the endpoint of the elliptical arc.</summary>
		/// <param name="value" type="Point">Type: Point&#10;The endpoint of the elliptical arc.</param>
	},
	setRotationAngle: function(value) {
		/// <summary>Sets the amount (in degrees) by which the ellipse is rotated about the x-axis.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The amount (in degrees) by which the ellipse is rotated about the x-axis.</param>
	},
	setSize: function(value) {
		/// <summary>Sets the x- and y-radius of the arc as a Size structure.</summary>
		/// <param name="value" type="Size">The x- and y-radius of the arc as a Size structure.</param>
	}
};
MindFusion.Gauges.ArcSegment.__class = true;

MindFusion.Gauges.BaseGauge.prototype = {
	addEventListener: function(eventName, handler) {
		/// <summary>Registers a single event listener on the element.</summary>
		/// <param name="eventName" type="String">Type: String&#10;The name of the event. See a list of supported events here.</param>
		/// <param name="handler" type="Method">Type: Method&#10;Represents the method that will handle the event specified with eventName.</param>
	},
	addScale: function(scale) {
		/// <summary>Adds a scale to the gauge.</summary>
		/// <param name="scale" type="MindFusion.Gauges.BaseScale">Type: BaseScale&#10;The scale to add.</param>
	},
	getAutoPostBack: function() {
		/// <summary>Gets a value indicating whether the control will post back to the server when a pointer's value has changed.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;true if the control should post back, otherwise, false.</returns>
	},
	getElementByName: function(name) {
		/// <summary>Returns the VisualElement object corresponding to the specified name.</summary>
		/// <param name="name" type="String">Type: String&#10;The name of the object to find.</param>
	},
	getScales: function() {
		/// <summary>Returns the array of all scales in this gauge.</summary>
		/// <returns type="Array">Array of all BaseScale instances in the gauge.</returns>
	},
	raiseEvent: function(eventName, args) {
		/// <summary>Raises an event.</summary>
		/// <param name="eventName" type="String">Type: String&#10;The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">An instance of type EventArgs that holds data for the event specified with eventName.</param>
	},
	removeEventListener: function(eventName, handler) {
		/// <summary>Removes a single event listener attached to the element.</summary>
		/// <param name="eventName" type="String">Type: String&#10;The name of the event. See a list of supported events here.</param>
		/// <param name="handler" type="Method">Type: Method&#10;Represents the method that handles the event specified with eventName.</param>
	},
	removeScale: function(scale) {
		/// <summary>Removes a scale from the gauge.</summary>
		/// <param name="scale" type="MindFusion.Gauges.BaseScale">Type: BaseScale&#10;The scale to remove.</param>
	},
	setAutoPostBack: function(value) {
		/// <summary>Sets a value indicating whether the control should post back to the server when a pointer's value has changed.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;true if the control should post back, otherwise, false.</param>
	}
};
MindFusion.Gauges.BaseGauge.__class = true;

MindFusion.Gauges.BaseScale.prototype = {
	addPointer: function(pointer) {
		/// <summary>Adds a Pointer object to the pointers collection.</summary>
		/// <param name="pointer" type="Pointer">Type: Pointer&#10;The pointer to add.</param>
	},
	addRange: function(range) {
		/// <summary>Adds a Range object to the ranges collection.</summary>
		/// <param name="range" type="Range">Type: Range&#10;The ranges to add.</param>
	},
	getCustomFunction: function() {
		/// <summary>Gets the function to be used for distribution of values along the scale when functionType is set to Custom.</summary>
		/// <returns type="FunctionDelegate">Type: FunctionDelegate&#10;The function to be used for distribution of values along the scale when functionType is set to Custom.</returns>
	},
	getEndWidth: function() {
		/// <summary>Gets the width of the scale at its end.</summary>
		/// <returns type="Length">Type: Length&#10;The width of the scale at its end.</returns>
	},
	getFunctionArgument: function() {
		/// <summary>Gets the argument passed to custom functions.</summary>
		/// <returns type="Number">Type: Number&#10;The argument passed to custom functions.</returns>
	},
	getFunctionType: function() {
		/// <summary>Gets the type of the function used to calculate the distribution of values along the scale.</summary>
		/// <returns type="FunctionType">Type: FunctionType&#10;The type of the function used to calculate the distribution of values along the scale.</returns>
	},
	getLogarithmBase: function() {
		/// <summary>Gets the logarithm base when FunctionType is set to Logarithmic.</summary>
		/// <returns type="Number">Type: Number&#10;The logarithm base when functionType is set to Logarithmic.</returns>
	},
	getMajorTickSettings: function() {
		/// <summary>Gets the settings for the major ticks and their associated labels.</summary>
		/// <returns type="MajorTickSettings">Type: MajorTickSettings&#10;The settings for the major ticks and their associated labels.</returns>
	},
	getMaxValue: function() {
		/// <summary>Gets the maximal value displayed by the scale.</summary>
		/// <returns type="Number">Type: Number&#10;The maximal value displayed by the scale.</returns>
	},
	getMiddleTickSettings: function() {
		/// <summary>Gets the settings for the middle ticks and their associated labels.</summary>
		/// <returns type="MiddleTickSettings">Type: MiddleTickSettings&#10;The settings for the middle ticks and their associated labels.</returns>
	},
	getMinorTickSettings: function() {
		/// <summary>Gets the settings for the minor ticks and their associated labels.</summary>
		/// <returns type="MinorTickSettings">Type: MinorTickSettings&#10;The settings for the minor ticks and their associated labels.</returns>
	},
	getMinValue: function() {
		/// <summary>Gets the minimal value displayed by the scale.</summary>
		/// <returns type="Number">Type: Number&#10;The minimal value displayed by the scale.</returns>
	},
	getPointers: function() {
		/// <summary>Returns the array of all pointers in this scale.</summary>
		/// <returns type="Array">Array of all Pointer instances in the scale.</returns>
	},
	getRanges: function() {
		/// <summary>Returns the array of all ranges in this scale.</summary>
		/// <returns type="Array">Array of all Range instances in the scale.</returns>
	},
	getReversedCustomFunction: function() {
		/// <summary>Gets the reversed version of the function specified through customFunction.</summary>
		/// <returns type="FunctionDelegate">Type: FunctionDelegate&#10;The reversed version of the function specified through CustomFunction.</returns>
	},
	getStartWidth: function() {
		/// <summary>Gets the width of the scale at its beginning.</summary>
		/// <returns type="Length">Type: Length&#10;The width of the scale at its beginning.</returns>
	},
	removePointer: function(pointer) {
		/// <summary>Removes a Pointer object from the pointers collection.</summary>
		/// <param name="pointer" type="Pointer">Type: Pointer&#10;The pointer to remove.</param>
	},
	removeRange: function(range) {
		/// <summary>Removes a Range object from the ranges collection.</summary>
		/// <param name="range" type="Range">Type: Range&#10;The ranges to remove.</param>
	},
	setCustomFunction: function(value) {
		/// <summary>Sets the function to be used for distribution of values along the scale when functionType is set to Custom.</summary>
		/// <param name="value" type="FunctionDelegate">Type: FunctionDelegate&#10;The function to be used for distribution of values along the scale when functionType is set to Custom.</param>
	},
	setEndWidth: function(value) {
		/// <summary>Sets the width of the scale at its end.</summary>
		/// <param name="value" type="Length">Type: Length&#10;The width of the scale at its end.</param>
	},
	setFunctionArgument: function(value) {
		/// <summary>Sets the argument passed to custom functions.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The argument passed to custom functions.</param>
	},
	setFunctionType: function(value) {
		/// <summary>Sets the type of the function used to calculate the distribution of values along the scale.</summary>
		/// <param name="value" type="FunctionType">Type: FunctionType&#10;The type of the function used to calculate the distribution of values along the scale.</param>
	},
	setLogarithmBase: function(value) {
		/// <summary>Sets the logarithm base when FunctionType is set to Logarithmic.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The logarithm base when functionType is set to Logarithmic.</param>
	},
	setMaxValue: function(value) {
		/// <summary>Sets the maximal value displayed by the scale.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The maximal value displayed by the scale.</param>
	},
	setMinValue: function(value) {
		/// <summary>Sets the minimal value displayed by the scale.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The minimal value displayed by the scale.</param>
	},
	setReversedCustomFunction: function(value) {
		/// <summary>Sets the reversed version of the function specified through customFunction.</summary>
		/// <param name="value" type="FunctionDelegate">Type: FunctionDelegate&#10;The reversed version of the function specified through CustomFunction.</param>
	},
	setStartWidth: function(value) {
		/// <summary>Sets the width of the scale at its beginning.</summary>
		/// <param name="value" type="Length">Type: Length&#10;The width of the scale at its beginning.</param>
	}
};
MindFusion.Gauges.BaseScale.__class = true;

MindFusion.Gauges.CenterPanel.prototype = {
};
MindFusion.Gauges.CenterPanel.__class = true;

MindFusion.Gauges.CustomInterval.prototype = {
	contains: function(value) {
		/// <summary>Checks whether the specified value falls within this interval.</summary>
		/// <param name="value" type="void">Type: void&#10;</param>
	},
	getFill: function() {
		/// <summary>Gets the brush to apply as a background of the elements within the custom interval.</summary>
		/// <returns type="Object">Type: Object&#10;The brush to apply as a background of the elements within the custom interval.</returns>
	},
	getForeground: function() {
		/// <summary>Gets the color to apply as a foreground to the elements within this custom interval.</summary>
		/// <returns type="Object">Type: Object&#10;The color to apply as a foreground to the elements within this custom interval.</returns>
	},
	getMaxValue: function() {
		/// <summary>Gets the end of this custom interval.</summary>
		/// <returns type="Number">Type: Number&#10;The end of this custom interval.</returns>
	},
	getMinValue: function() {
		/// <summary>Gets the start of this custom interval.</summary>
		/// <returns type="Number">Type: Number&#10;The start of this custom interval.</returns>
	},
	getStroke: function() {
		/// <summary>Gets the brush to apply as an outline of the elements within the custom interval.</summary>
		/// <returns type="Object">Type: Object&#10;The brush to apply as an outline of the elements within the custom interval.</returns>
	},
	setFill: function(value) {
		/// <summary>Sets the brush to apply as a background of the elements within the custom interval.</summary>
		/// <param name="value" type="Object">Type: Object&#10;The brush to apply as a background of the elements within the custom interval.</param>
	},
	setForeground: function(value) {
		/// <summary>Sets the color to apply as a foreground to the elements within this custom interval.</summary>
		/// <param name="value" type="Object">Type: Object&#10;The color to apply as a foreground to the elements within this custom interval.</param>
	},
	setMaxValue: function(value) {
		/// <summary>Sets the end of this custom interval.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The end of this custom interval.</param>
	},
	setMinValue: function(value) {
		/// <summary>Sets the start of this custom interval.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The start of this custom interval.</param>
	},
	setStroke: function(value) {
		/// <summary>Sets the brush to apply as an outline of the elements within the custom interval.</summary>
		/// <param name="value" type="Object">Type: Object&#10;The brush to apply as an outline of the elements within the custom interval.</param>
	}
};
MindFusion.Gauges.CustomInterval.__class = true;

MindFusion.Gauges.DisplayType.prototype = {
	Always: 0,
	Auto: 1,
	Never: 2
};
MindFusion.Gauges.DisplayType.__enum = true;

MindFusion.Gauges.Ellipse.prototype = {
};
MindFusion.Gauges.Ellipse.__class = true;

MindFusion.Gauges.Events.prototype = {
};
MindFusion.Gauges.Events.__class = true;

MindFusion.Gauges.FunctionType.prototype = {
	Custom: 0,
	Linear: 1,
	Logarithmic: 2
};
MindFusion.Gauges.FunctionType.__enum = true;

MindFusion.Gauges.GeometryFactory.prototype = {
};
MindFusion.Gauges.GeometryFactory.__class = true;

MindFusion.Gauges.GeometryFactory.createLinearGeometry = function(centerX, centerY, startInnerOffset, startOuterOffset, endInnerOffset, endOuterOffset, length, isVertical, capStart, capEnd, strokeInner, strokeOuter) {
	/// <summary>Generates a linear bar geometry with the specified parameters.</summary>
	/// <param name="centerX" type="Number">Type: Number&#10;The x-coordinate of the generated geometry.</param>
	/// <param name="centerY" type="Number">Type: Number&#10;The y-coordinate of the generated geometry.</param>
	/// <param name="startInnerOffset" type="Number">Type: Number&#10;The start inner offset of the generated geometry relative to the specified center.</param>
	/// <param name="startOuterOffset" type="Number">Type: Number&#10;The start outer offset of the generated geometry relative to the specified center.</param>
	/// <param name="endInnerOffset" type="Number">Type: Number&#10;The end inner offset of the generated geometry relative to the specified center.</param>
	/// <param name="endOuterOffset" type="Number">Type: Number&#10;The end outer offset of the generated geometry relative to the specified center.</param>
	/// <param name="length" type="Number">Type: Number&#10;The length of the generated geometry.</param>
	/// <param name="isVertical" type="Boolean">Type: Boolean&#10;A flag indicating whether the generated geometry is vertical.</param>
	/// <param name="capStart" type="Boolean">Type: Boolean&#10;A flag indicating whether to draw a stroke at the start of the bar.</param>
	/// <param name="capEnd" type="Boolean">Type: Boolean&#10;A flag indicating whether to draw a stroke at the end of the bar.</param>
	/// <param name="strokeInner" type="Boolean">Type: Boolean&#10;A flag indicating whether to draw a stroke at the inner side of the bar.</param>
	/// <param name="strokeOuter" type="Boolean">Type: Boolean&#10;A flag indicating whether to draw a stroke at the outer side of the bar.</param>
	/// <returns type="PathFigure">A PathFigure representing a linear bar with the specified parameters.</returns>
};
MindFusion.Gauges.GeometryFactory.createRadialGeometry = function(centerX, centerY, startInnerRadius, startOuterRadius, endInnerRadius, endOuterRadius, startAngle, endAngle, capStart, capEnd, strokeInner, strokeOuter) {
	/// <summary>Generates a radial bar geometry with the specified parameters.</summary>
	/// <param name="centerX" type="Number">Type: Number&#10;The x-coordinate of the generated geometry.</param>
	/// <param name="centerY" type="Number">Type: Number&#10;The y-coordinate of the generated geometry.</param>
	/// <param name="startInnerRadius" type="Number">Type: Number&#10;The radius of the start point of the inner outline of the bar.</param>
	/// <param name="startOuterRadius" type="Number">Type: Number&#10;The radius of the start point of the outer outline of the bar.</param>
	/// <param name="endInnerRadius" type="Number">Type: Number&#10;The radius of the end point of the inner outline of the bar.</param>
	/// <param name="endOuterRadius" type="Number">Type: Number&#10;The radius of the end point of the outer outline of the bar.</param>
	/// <param name="startAngle" type="Number">Type: Number&#10;The start angle of the radial bar.</param>
	/// <param name="endAngle" type="Number">Type: Number&#10;The end angle of the radial bar.</param>
	/// <param name="capStart" type="Boolean">Type: Boolean&#10;A flag indicating whether to draw a stroke at the start of the bar.</param>
	/// <param name="capEnd" type="Boolean">Type: Boolean&#10;A flag indicating whether to draw a stroke at the end of the bar.</param>
	/// <param name="strokeInner" type="Boolean">Type: Boolean&#10;A flag indicating whether to draw a stroke at the inner curve of the bar.</param>
	/// <param name="strokeOuter" type="Boolean">Type: Boolean&#10;A flag indicating whether to draw a stroke at the outer curve of the bar.</param>
	/// <returns type="PathFigure">A PathFigure representing a radial bar with the specified parameters.</returns>
};

MindFusion.Gauges.LabelRotation.prototype = {
	Auto: 0,
	BaselineAwayFromCenter: 1,
	BaselineToCenter: 2,
	None: 3,
	Sideways: 4
};
MindFusion.Gauges.LabelRotation.__enum = true;

MindFusion.Gauges.Length.prototype = {
	getAbsoluteLength: function(space) {
		/// <summary>Calculates the absolute length corresponding to the specified argument, relative to the the specified area.</summary>
		/// <param name="space" type="void">Type: void&#10;</param>
	},
	getType: function() {
		/// <summary>Gets the type of this length.</summary>
		/// <returns type="LengthType">Type: LengthType&#10;The type of this length.</returns>
	},
	getValue: function() {
		/// <summary>Gets the value representing this length.</summary>
		/// <returns type="Number">Type: Number&#10;The value representing this length.</returns>
	},
	setType: function(value) {
		/// <summary>Sets the type of this length.</summary>
		/// <param name="value" type="LengthType">Type: LengthType&#10;The type of this length.</param>
	},
	setValue: function(value) {
		/// <summary>Sets the value representing this length.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The value representing this length.</param>
	}
};
MindFusion.Gauges.Length.__class = true;

MindFusion.Gauges.LengthType.prototype = {
	Absolute: 0,
	Relative: 1
};
MindFusion.Gauges.LengthType.__enum = true;

MindFusion.Gauges.LinearGauge.prototype = {
	getOrientation: function() {
		/// <summary>Gets the orientation of the gauge.</summary>
		/// <returns type="Orientation">Type: Orientation&#10;The orientation of the gauge.</returns>
	},
	setOrientation: function(value) {
		/// <summary>Sets the orientation of the gauge.</summary>
		/// <param name="value" type="Orientation">Type: Orientation&#10;The orientation of the gauge.</param>
	}
};
MindFusion.Gauges.LinearGauge.__class = true;

MindFusion.Gauges.LinearGauge.create = function(element) {
	/// <summary>Creates and initializes a new LinearGauge from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">The DOM element that the LinearGauge should be attached to.</param>
	/// <returns type="MindFusion.Gauges.LinearGauge">A LinearGauge object that represents the newly created gauge.</returns>
};
MindFusion.Gauges.LinearGauge.find = function(id, parent) {
	/// <summary>Returns the specified LinearGauge object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">A string that contains the ID of the LinearGauge to find.</param>
	/// <param name="parent" type="Object" optional="true">Optional. The component or element that contains the LinearGauge to find.</param>
	/// <returns type="MindFusion.Gauges.LinearGauge">A LinearGauge object that contains the gauge requested by id, if found; otherwise, null.</returns>
};

MindFusion.Gauges.LinearScale.prototype = {
	getLeft: function() {
		/// <summary>Gets the distance between the left of this scale and the left of its container.</summary>
		/// <returns type="Length">Type: Length&#10;The distance between the left of this scale and the left of its container.</returns>
	},
	getOrientation: function() {
		/// <summary>Gets the orientation of the scale.</summary>
		/// <returns type="Orientation">Type: Orientation&#10;The orientation of the scale.</returns>
	},
	getScaleAlignment: function() {
		/// <summary>Gets the alignment of the scale.</summary>
		/// <returns type="Alignment">Type: Alignment&#10;The alignment of the scale.</returns>
	},
	getScaleLength: function() {
		/// <summary>Gets the length of the scale.</summary>
		/// <returns type="Length">Type: Length&#10;The length of the scale.</returns>
	},
	getTop: function() {
		/// <summary>Gets the distance between the top of this scale and the top of its container.</summary>
		/// <returns type="Length">Type: Length&#10;The distance between the top of this scale and the top of its container.</returns>
	},
	getValueFromPoint: function(point) {
		/// <summary>BaseScale.getValueFromPoint override.</summary>
		/// <param name="point" type="Point">Type: Point&#10;The point to test.</param>
		/// <returns type="Number">Type: Number&#10;The value from the scale, corresponding to the point, possibly MinValue orMaxValue if the specified point cannot be associated with a value.</returns>
	},
	setLeft: function(value) {
		/// <summary>Sets the distance between the left of this scale and the left of its container.</summary>
		/// <param name="value" type="Length">Type: Length&#10;The distance between the left of this scale and the left of its container.</param>
	},
	setOrientation: function(value) {
		/// <summary>Sets the orientation of the scale.</summary>
		/// <param name="value" type="Orientation">Type: Orientation&#10;The orientation of the scale.</param>
	},
	setScaleAlignment: function(value) {
		/// <summary>Sets the alignment of the scale.</summary>
		/// <param name="value" type="Alignment">Type: Alignment&#10;The alignment of the scale.</param>
	},
	setScaleLength: function(value) {
		/// <summary>Sets the length of the scale.</summary>
		/// <param name="value" type="Length">Type: Length&#10;The length of the scale.</param>
	},
	setTop: function(value) {
		/// <summary>Sets the distance between the top of this scale and the top of its container.</summary>
		/// <param name="value" type="Length">Type: Length&#10;The distance between the top of this scale and the top of its container.</param>
	}
};
MindFusion.Gauges.LinearScale.__class = true;

MindFusion.Gauges.LineSegment.prototype = {
	addTo: function(path, startPoint, isOutline) {
		/// <summary>Segment.addTo override.</summary>
		/// <param name="path" type="void">Type: void&#10;</param>
		/// <param name="startPoint" type="void">Type: void&#10;</param>
		/// <param name="isOutline" type="void">Type: void&#10;</param>
	},
	getPoint: function() {
		/// <summary>Gets the end point of the line segment.</summary>
		/// <returns type="Point">Type: Point&#10;The end point of the line segment.</returns>
	},
	setPoint: function(value) {
		/// <summary>Sets the end point of the line segment.</summary>
		/// <param name="value" type="Point">Type: Point&#10;The end point of the line segment.</param>
	}
};
MindFusion.Gauges.LineSegment.__class = true;

MindFusion.Gauges.MajorTickSettings.prototype = {
};
MindFusion.Gauges.MajorTickSettings.__class = true;

MindFusion.Gauges.MiddleTickSettings.prototype = {
};
MindFusion.Gauges.MiddleTickSettings.__class = true;

MindFusion.Gauges.MinorTickSettings.prototype = {
};
MindFusion.Gauges.MinorTickSettings.__class = true;

MindFusion.Gauges.MouseAction.prototype = {
	Down: 0,
	Move: 1,
	Up: 2
};
MindFusion.Gauges.MouseAction.__enum = true;

MindFusion.Gauges.MouseInfo.prototype = {
	getAction: function() {
		/// <summary>Gets the action that was performed.</summary>
		/// <returns type="MouseAction">Type: MouseAction&#10;The action that was performed.</returns>
	},
	getPoint: function() {
		/// <summary>Gets the mouse location.</summary>
		/// <returns type="Point">Type: Point&#10;The mouse location.</returns>
	}
};
MindFusion.Gauges.MouseInfo.__class = true;

MindFusion.Gauges.Orientation.prototype = {
	Horizontal: 0,
	Vertical: 1
};
MindFusion.Gauges.Orientation.__enum = true;

MindFusion.Gauges.OvalGauge.prototype = {
	getStyle: function() {
		/// <summary>Gets the visual style of the gauge.</summary>
		/// <returns type="OvalGaugeStyle">Type: OvalGaugeStyle&#10;The visual style of the gauge.</returns>
	},
	setStyle: function(value) {
		/// <summary>Sets the visual style of the gauge.</summary>
		/// <param name="value" type="OvalGaugeStyle">Type: OvalGaugeStyle&#10;The visual style of the gauge.</param>
	}
};
MindFusion.Gauges.OvalGauge.__class = true;

MindFusion.Gauges.OvalGauge.create = function(element) {
	/// <summary>Creates and initializes a new OvalGauge from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">The DOM element that the OvalGauge should be attached to.</param>
	/// <returns type="MindFusion.Gauges.OvalGauge">A OvalGauge object that represents the newly created gauge.</returns>
};
MindFusion.Gauges.OvalGauge.find = function(id, parent) {
	/// <summary>Returns the specified OvalGauge object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">A string that contains the ID of the OvalGauge to find.</param>
	/// <param name="parent" type="Object" optional="true">Optional. The component or element that contains the OvalGauge to find.</param>
	/// <returns type="MindFusion.Gauges.OvalGauge">A OvalGauge object that contains the gauge requested by id, if found; otherwise, null.</returns>
};

MindFusion.Gauges.OvalGaugeStyle.prototype = {
	Circular: 0,
	QuadraticNE: 1,
	QuadraticNW: 2,
	QuadraticSE: 3,
	QuadraticSW: 4,
	SemicircleE: 5,
	SemicircleN: 6,
	SemicircleS: 7,
	SemicircleW: 8
};
MindFusion.Gauges.OvalGaugeStyle.__enum = true;

MindFusion.Gauges.OvalScale.prototype = {
	getEndAngle: function() {
		/// <summary>Gets the end angle of the scale.</summary>
		/// <returns type="Number">Type: Number&#10;The end angle of the scale.</returns>
	},
	getScaleRelativeCenter: function() {
		/// <summary>Gets the center of the scale relative to the scale bounds.</summary>
		/// <returns type="Point">Type: Point&#10;The center of the scale relative to the scale bounds.</returns>
	},
	getScaleRelativeRadius: function() {
		/// <summary>Gets the radius of the scale relative to the scale bounds.</summary>
		/// <returns type="Number">Type: Number&#10;The radius of the scale relative to the scale bounds.</returns>
	},
	getStartAngle: function() {
		/// <summary>Gets the start angle of the scale.</summary>
		/// <returns type="Number">Type: Number&#10;The start angle of the scale.</returns>
	},
	getValueFromPoint: function(point) {
		/// <summary>BaseScale.getValueFromPoint override.</summary>
		/// <param name="point" type="Point">Type: Point&#10;The point to test.</param>
		/// <returns type="Number">Type: Number&#10;The value from the scale, corresponding to the point, possibly MinValue orMaxValue if the specified point cannot be associated with a value.</returns>
	},
	setEndAngle: function(value) {
		/// <summary>Sets the end angle of the scale.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The end angle of the scale.</param>
	},
	setScaleRelativeCenter: function(value) {
		/// <summary>Sets the center of the scale relative to the scale bounds.</summary>
		/// <param name="value" type="Point">Type: Point&#10;The center of the scale relative to the scale bounds.</param>
	},
	setScaleRelativeRadius: function(value) {
		/// <summary>Sets the radius of the scale relative to the scale bounds.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The radius of the scale relative to the scale bounds.</param>
	},
	setStartAngle: function(value) {
		/// <summary>Sets the start angle of the scale.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The start angle of the scale.</param>
	}
};
MindFusion.Gauges.OvalScale.__class = true;

MindFusion.Gauges.PaintEventArgs.prototype = {
	getContext: function() {
		/// <summary>Gets the canvas rendering context.</summary>
		/// <returns type="CanvasRenderingContext2D">Type: CanvasRenderingContext2D&#10;A rendering context used to draw on the Canvas element.</returns>
	},
	getElement: function() {
		/// <summary>Gets the element being custom drawn.</summary>
		/// <returns type="VisualElement">A VisualElement instance.</returns>
	},
	paintVisualElement: function(element, constraint) {
		/// <summary>Paints the specified visual element to the underlying canvas.</summary>
		/// <param name="element" type="void">Type: void&#10;</param>
		/// <param name="constraint" type="void">Type: void&#10;</param>
		/// <returns type="VisualElement">element The VisualElement to paint.</returns>
	},
	setElement: function(value) {
		/// <summary>Sets the element being custom drawn.</summary>
		/// <param name="value" type="VisualElement">A VisualElement instance.</param>
	}
};
MindFusion.Gauges.PaintEventArgs.__class = true;

MindFusion.Gauges.PathFigure.prototype = {
};
MindFusion.Gauges.PathFigure.__class = true;

MindFusion.Gauges.Pointer.prototype = {
	getAlignment: function() {
		/// <summary>Gets the alignment of the pointer relative to the scale.</summary>
		/// <returns type="Alignment">Type: Alignment&#10;The alignment of the pointer relative to the scale.</returns>
	},
	getCustomShape: function() {
		/// <summary>Gets the definition of the pointer shape when Shape is set to Custom.</summary>
		/// <returns type="String">Type: String&#10;The definition of the pointer shape when Shape is set to Custom.</returns>
	},
	getIsDiscrete: function() {
		/// <summary>Gets a value indicating whether the pointer value can be changed only discretely(the pointer Value can be only integer).</summary>
		/// <returns type="Boolean">Type: Boolean&#10;True if the pointer is discrete, otherwise false.</returns>
	},
	getIsInteractive: function() {
		/// <summary>Gets a value indicating whether the pointer position should be affected by user interactions.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;True if the pointer is interactive, otherwise false.</returns>
	},
	getPointerHeight: function() {
		/// <summary>Gets the height of the pointer.</summary>
		/// <returns type="Length">Type: Length&#10;The height of the pointer.</returns>
	},
	getPointerOffset: function() {
		/// <summary>Gets the offset of the pointer along the direction it points to.</summary>
		/// <returns type="Length">Type: Length&#10;The offset of the pointer along the direction it points to.</returns>
	},
	getPointerWidth: function() {
		/// <summary>Gets the width of the pointer.</summary>
		/// <returns type="Length">Type: Length&#10;The width of the pointer.</returns>
	},
	getShape: function() {
		/// <summary>Gets the shape of the pointer.</summary>
		/// <returns type="PointerShape">Type: PointerShape&#10;The shape of the pointer.</returns>
	},
	getValue: function() {
		/// <summary>Gets the value this pointer points to.</summary>
		/// <returns type="Number">Type: Number&#10;The value this pointer points to.</returns>
	},
	setAlignment: function(value) {
		/// <summary>Sets the alignment of the pointer relative to the scale.</summary>
		/// <param name="value" type="Alignment">Type: Alignment&#10;The alignment of the pointer relative to the scale.</param>
	},
	setCustomShape: function(value) {
		/// <summary>Sets the definition of the pointer shape when Shape is set to Custom.</summary>
		/// <param name="value" type="String">Type: String&#10;The definition of the pointer shape when Shape is set to Custom.</param>
	},
	setIsDiscrete: function(value) {
		/// <summary>Sets a value indicating whether the pointer value can be changed only discretely(the pointer Value can be only integer).</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;True if the pointer is discrete, otherwise false.</param>
	},
	setIsInteractive: function(value) {
		/// <summary>Sets a value indicating whether the pointer position should be affected by user interactions.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;True if the pointer is interactive, otherwise false.</param>
	},
	setPointerHeight: function(value) {
		/// <summary>Sets the height of the pointer.</summary>
		/// <param name="value" type="Length">Type: Length&#10;The height of the pointer.</param>
	},
	setPointerOffset: function(value) {
		/// <summary>Sets the offset of the pointer along the direction it points to.</summary>
		/// <param name="value" type="Length">Type: Length&#10;The offset of the pointer along the direction it points to.</param>
	},
	setPointerWidth: function(value) {
		/// <summary>Sets the width of the pointer.</summary>
		/// <param name="value" type="Length">Type: Length&#10;The width of the pointer.</param>
	},
	setShape: function(value) {
		/// <summary>Sets the shape of the pointer.</summary>
		/// <param name="value" type="PointerShape">Type: PointerShape&#10;The shape of the pointer.</param>
	},
	setValue: function(value) {
		/// <summary>Sets the value this pointer points to.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The value this pointer points to.</param>
	}
};
MindFusion.Gauges.Pointer.__class = true;

MindFusion.Gauges.PointerShape.prototype = {
	Custom: 0,
	Ellipse: 1,
	Needle: 2,
	Needle2: 3,
	None: 4,
	Rectangle: 5
};
MindFusion.Gauges.PointerShape.__enum = true;

MindFusion.Gauges.PrepaintEventArgs.prototype = {
	getCancelDefaultPainting: function() {
		/// <summary>Gets a value indicating whether the default painting of this element should be performed.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;true if the default painting of this element should be performed; otherwise, false.</returns>
	},
	setCancelDefaultPainting: function(value) {
		/// <summary>Sets a value indicating whether the default painting of this element should be performed.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;true if the default painting of this element should be performed; otherwise, false.</param>
	}
};
MindFusion.Gauges.PrepaintEventArgs.__class = true;

MindFusion.Gauges.Range.prototype = {
	getAlignment: function() {
		/// <summary>Gets the alignment of this range relative to the scale it is associated with.</summary>
		/// <returns type="Alignment">Type: Alignment&#10;The alignment of this range relative to the scale it is associated with.</returns>
	},
	getAutoSize: function() {
		/// <summary>Gets a value indicating whether the start and end width of the range will be automatically adjusted to match the width of the scale.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;True if the range is autosized, otherwise false.</returns>
	},
	getCapEnd: function() {
		/// <summary>Gets a value indicating whether to draw a stroke in the end of this range.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;True if there should be a stroke in the end of this range, otherwise false.</returns>
	},
	getCapStart: function() {
		/// <summary>Gets a value indicating whether to draw a stroke in the beginning of this range.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;True if there should be a stroke in the beginning of this range, otherwise false.</returns>
	},
	getEndWidth: function() {
		/// <summary>Gets the width of this range at its end.</summary>
		/// <returns type="Length">Type: Length&#10;The width of this range at its end.</returns>
	},
	getMaxValue: function() {
		/// <summary>Gets the end value of this range.</summary>
		/// <returns type="Number">Type: Number&#10;The end value of this range.</returns>
	},
	getMinValue: function() {
		/// <summary>Gets the start value of this range.</summary>
		/// <returns type="Number">Type: Number&#10;The start value of this range.</returns>
	},
	getOffset: function() {
		/// <summary>Gets the offset of the range from the position calculated according to its alignment.</summary>
		/// <returns type="Length">Type: Length&#10;The offset of the range from the position calculated according to its alignment.</returns>
	},
	getStartWidth: function() {
		/// <summary>Gets the width of this range at its start.</summary>
		/// <returns type="Length">Type: Length&#10;The width of this range at its start.</returns>
	},
	getStrokeInside: function() {
		/// <summary>Gets a value indicating whether to draw a stroke at the inside of this range.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;True if there should be a stroke at the inside of this range, otherwise false.</returns>
	},
	getStrokeOutside: function() {
		/// <summary>Gets a value indicating whether to draw a stroke at the outside of this range.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;True if there should be a stroke at the outside of this range, otherwise false.</returns>
	},
	setAlignment: function(value) {
		/// <summary>Sets the alignment of this range relative to the scale it is associated with.</summary>
		/// <param name="value" type="Alignment">Type: Alignment&#10;The alignment of this range relative to the scale it is associated with.</param>
	},
	setAutoSize: function(value) {
		/// <summary>Sets a value indicating whether the start and end width of the range will be automatically adjusted to match the width of the scale.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;True if the range is autosized, otherwise false.</param>
	},
	setCapEnd: function(value) {
		/// <summary>Sets a value indicating whether to draw a stroke in the end of this range.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;True if there should be a stroke in the end of this range, otherwise false.</param>
	},
	setCapStart: function(value) {
		/// <summary>Sets a value indicating whether to draw a stroke in the beginning of this range.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;True if there should be a stroke in the beginning of this range, otherwise false.</param>
	},
	setEndWidth: function(value) {
		/// <summary>Sets the width of this range at its end.</summary>
		/// <param name="value" type="Length">Type: Length&#10;The width of this range at its end.</param>
	},
	setMaxValue: function(value) {
		/// <summary>Sets the end value of this range.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The end value of this range.</param>
	},
	setMinValue: function(value) {
		/// <summary>Sets the start value of this range.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The start value of this range.</param>
	},
	setOffset: function(value) {
		/// <summary>Sets the offset of the range from the position calculated according to its alignment.</summary>
		/// <param name="value" type="Length">Type: Length&#10;The offset of the range from the position calculated according to its alignment.</param>
	},
	setStartWidth: function(value) {
		/// <summary>Sets the width of this range at its start.</summary>
		/// <param name="value" type="Length">Type: Length&#10;The width of this range at its start.</param>
	},
	setStrokeInside: function(value) {
		/// <summary>Sets a value indicating whether to draw a stroke at the inside of this range.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;True if there should be a stroke at the inside of this range, otherwise false.</param>
	},
	setStrokeOutside: function(value) {
		/// <summary>Sets a value indicating whether to draw a stroke at the outside of this range.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;True if there should be a stroke at the outside of this range, otherwise false.</param>
	}
};
MindFusion.Gauges.Range.__class = true;

MindFusion.Gauges.RoundRectangle.prototype = {
	getRoundness: function() {
		/// <summary>Gets the relative roundness of this rectangle's corners.</summary>
		/// <returns type="Number">Type: Number&#10;The relative roundness of this rectangle's corners.</returns>
	},
	setRoundness: function(value) {
		/// <summary>Sets the relative roundness of this rectangle's corners.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The relative roundness of this rectangle's corners.</param>
	}
};
MindFusion.Gauges.RoundRectangle.__class = true;

MindFusion.Gauges.Segment.prototype = {
	addTo: function(path, startPoint, isOutline) {
		/// <summary>Adds the segment to the specified graphics path.</summary>
		/// <param name="path" type="void">Type: void&#10;</param>
		/// <param name="startPoint" type="void">Type: void&#10;</param>
		/// <param name="isOutline" type="void">Type: void&#10;</param>
	},
	getIsStroked: function() {
		/// <summary>Gets a value that indicates whether the segment is stroked.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;True if the segment is stroked, otherwise false.</returns>
	},
	setIsStroked: function(value) {
		/// <summary>Sets a value that indicates whether the segment is stroked.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;True if the segment is stroked, otherwise false.</param>
	}
};
MindFusion.Gauges.Segment.__class = true;

MindFusion.Gauges.Thickness.prototype = {
	apply: function(rect) {
		/// <summary>Applies the current thickness to the specified rectangle by deflating the rectangle.</summary>
		/// <param name="rect" type="Rect">Type: Rect&#10;The rectangle to deflate.</param>
		/// <returns type="Rect">Type: Rect&#10;The modified rectangle.</returns>
	},
	getBottom: function() {
		/// <summary>Gets the width of the bottom side of the frame.</summary>
		/// <returns type="Number">Type: Number&#10;The width of the bottom side of the frame.</returns>
	},
	getIsRelative: function() {
		/// <summary>Gets a flag indicating whether the thickness properties are expressed as relative or absolute quantities.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;True if the thickness is relative, otherwise false.</returns>
	},
	getLeft: function() {
		/// <summary>Gets the width of the left side of the frame.</summary>
		/// <returns type="Number">Type: Number&#10;The width of the left side of the frame.</returns>
	},
	getRight: function() {
		/// <summary>Gets the width of the right side of the frame.</summary>
		/// <returns type="Number">Type: Number&#10;The width of the right side of the frame.</returns>
	},
	getTop: function() {
		/// <summary>Gets the width of the top side of the frame.</summary>
		/// <returns type="Number">Type: Number&#10;The width of the top side of the frame.</returns>
	},
	setBottom: function(value) {
		/// <summary>Sets the width of the top bottom of the frame.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The width of the bottom side of the frame.</param>
	},
	setIsRelative: function(value) {
		/// <summary>Sets a flag indicating whether the thickness properties are expressed as relative or absolute quantities.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;True if the thickness is relative, otherwise false.</param>
	},
	setLeft: function(value) {
		/// <summary>Sets the width of the left side of the frame.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The width of the left side of the frame.</param>
	},
	setRight: function(value) {
		/// <summary>Sets the width of the right side of the frame.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The width of the right side of the frame.</param>
	},
	setTop: function(value) {
		/// <summary>Sets the width of the top side of the frame.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The width of the top side of the frame.</param>
	},
	toAbsolute: function(size) {
		/// <summary>Converts the current thickness to absolute value relative to the specified size.</summary>
		/// <param name="size" type="void">Type: void&#10;</param>
	}
};
MindFusion.Gauges.Thickness.__class = true;

MindFusion.Gauges.Tick.prototype = {
	getRawValue: function() {
		/// <summary>Gets the value associated with this tick before it was processed by any value distribution functions.</summary>
		/// <returns type="Number">Type: Number&#10;The value associated with this tick before it was processed by any value distribution functions.</returns>
	},
	getSettings: function() {
		/// <summary>Gets the TickSettings object associated with this tick.</summary>
		/// <returns type="TickSettings">The TickSettings object associated with this tick.</returns>
	},
	getValue: function() {
		/// <summary>Gets the value associated with this tick.</summary>
		/// <returns type="Number">Type: Number&#10;The value associated with this tick.</returns>
	}
};
MindFusion.Gauges.Tick.__class = true;

MindFusion.Gauges.TickLabel.prototype = {
	getForeground: function() {
		/// <summary>Gets the foreground color of this label.</summary>
		/// <returns type="Color">Type: Color&#10;The foreground color of this label.</returns>
	},
	getRawValue: function() {
		/// <summary>Gets the value associated with this tick before it was processed by any value distribution functions.</summary>
		/// <returns type="Number">Type: Number&#10;The value associated with this tick before it was processed by any value distribution functions.</returns>
	},
	getSettings: function() {
		/// <summary>Gets the TickSettings object associated with this label.</summary>
		/// <returns type="TickSettings">Type: TickSettings&#10;The TickSettings object associated with this label.</returns>
	},
	getValue: function() {
		/// <summary>Gets the value associated with this label.</summary>
		/// <returns type="Number">Type: Number&#10;The value associated with this label.</returns>
	}
};
MindFusion.Gauges.TickLabel.__class = true;

MindFusion.Gauges.TickSettings.prototype = {
	addCustomInterval: function(interval) {
		/// <summary>Adds a CustomInterval object to these settings' customIntervals collection.</summary>
		/// <param name="interval" type="CustomInterval">Type: CustomInterval&#10;The interval to add.</param>
	},
	getCount: function() {
		/// <summary>Gets the number of ticks and labels.</summary>
		/// <returns type="Number">Type: Number&#10;The number of ticks and labels.</returns>
	},
	getCustomIntervals: function() {
		/// <summary>Gets an array of CustomInterval objects, which can be used to customize the appearance of the ticks in a particular interval.</summary>
		/// <returns type="Array">An array of CustomInterval objects, which can be used to customize the appearance of the ticks in a particular interval.</returns>
	},
	getFill: function() {
		/// <summary>Gets the fill brush of the ticks.</summary>
		/// <returns type="Object">Type: Object&#10;The fill brush of the ticks.</returns>
	},
	getFontFamily: function() {
		/// <summary>Gets the font family of the labels.</summary>
		/// <returns type="String">Type: String&#10;The font family of the labels.</returns>
	},
	getFontSize: function() {
		/// <summary>Gets the font size of the labels.</summary>
		/// <returns type="Length">Type: Length&#10;The font size of the labels.</returns>
	},
	getFontStyle: function() {
		/// <summary>Gets the font style of the labels.</summary>
		/// <returns type="String">Type: String&#10;The font style of the labels.</returns>
	},
	getLabelAlignment: function() {
		/// <summary>Gets the alignment of the labels relative to the scale.</summary>
		/// <returns type="Alignment">Type: Alignment&#10;The alignment of the labels relative to the scale.</returns>
	},
	getLabelForeground: function() {
		/// <summary>Gets the brush used to paint label texts.</summary>
		/// <returns type="Object">Type: Object&#10;The brush used to paint label texts.</returns>
	},
	getLabelOffset: function() {
		/// <summary>Gets the offset of the labels relative to their calculated position.</summary>
		/// <returns type="Length">Type: Length&#10;The offset of the labels relative to their calculated position.</returns>
	},
	getLabelRotation: function() {
		/// <summary>Gets the rotation mode of the labels.</summary>
		/// <returns type="LabelRotation">Type: LabelRotation&#10;The rotation mode of the labels.</returns>
	},
	getNumberPrecision: function() {
		/// <summary>Gets the number recision of the labels.</summary>
		/// <returns type="Number">Type: Number&#10;The number recision of the labels.</returns>
	},
	getShowLabels: function() {
		/// <summary>Gets a value indicating whether the labels are visible.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;True if labels are visible, otherwise false.</returns>
	},
	getShowMaxValueTick: function() {
		/// <summary>Gets a value indicating whether to display a tick for the maxValue of the scale.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;True to display a tick for the maxValue, otherwise false.</returns>
	},
	getShowTicks: function() {
		/// <summary>Gets a value indicating whether the ticks are visible.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;True if ticks are visible, otherwise false.</returns>
	},
	getStep: function() {
		/// <summary>Gets the value between adjacent ticks and labels.</summary>
		/// <returns type="Number">Type: Number&#10;The value between adjacent ticks and labels.</returns>
	},
	getStroke: function() {
		/// <summary>Gets the stroke brush of the ticks.</summary>
		/// <returns type="Object">Type: Object&#10;The stroke brush of the ticks.</returns>
	},
	getTickAlignment: function() {
		/// <summary>Gets the alignment of the ticks relative to the scale.</summary>
		/// <returns type="Alignment">Type: Alignment&#10;The alignment of the ticks relative to the scale.</returns>
	},
	getTickHeight: function() {
		/// <summary>Gets the height of a tick.</summary>
		/// <returns type="Length">Type: Length&#10;The height of a tick.</returns>
	},
	getTickOffset: function() {
		/// <summary>Gets the offset of the ticks relative to their calculated position.</summary>
		/// <returns type="Length">Type: Length&#10;The offset of the ticks relative to their calculated position.</returns>
	},
	getTickShape: function() {
		/// <summary>Gets the shape of the ticks.</summary>
		/// <returns type="TickShape">Type: TickShape&#10;The shape of the ticks.</returns>
	},
	getTickWidth: function() {
		/// <summary>Gets the width of a tick.</summary>
		/// <returns type="Length">Type: Length&#10;The width of a tick.</returns>
	},
	removeCustomInterval: function(interval) {
		/// <summary>Removes a CustomInterval object from these settings' customIntervals collection.</summary>
		/// <param name="interval" type="CustomInterval">Type: CustomInterval&#10;The interval to remove.</param>
	},
	setCount: function(value) {
		/// <summary>Sets the number of ticks and labels.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The number of ticks and labels.</param>
	},
	setFill: function(value) {
		/// <summary>Sets the fill brush of the ticks.</summary>
		/// <param name="value" type="Object">Type: Object&#10;The fill brush of the ticks.</param>
	},
	setFontFamily: function(value) {
		/// <summary>Sets the font family of the labels.</summary>
		/// <param name="value" type="String">Type: String&#10;The font family of the labels.</param>
	},
	setFontSize: function(value) {
		/// <summary>Sets the font size of the labels.</summary>
		/// <param name="value" type="Length">Type: Length&#10;The font size of the labels.</param>
	},
	setFontStyle: function(value) {
		/// <summary>Sets the font style of the labels.</summary>
		/// <param name="value" type="String">Type: String&#10;The font style of the labels.</param>
	},
	setLabelAlignment: function(value) {
		/// <summary>Sets the alignment of the labels relative to the scale.</summary>
		/// <param name="value" type="Alignment">Type: Alignment&#10;The alignment of the labels relative to the scale.</param>
	},
	setLabelForeground: function(value) {
		/// <summary>Sets the brush used to paint label texts.</summary>
		/// <param name="value" type="Object">Type: Object&#10;The brush used to paint label texts.</param>
	},
	setLabelOffset: function(value) {
		/// <summary>Sets the offset of the labels relative to their calculated position.</summary>
		/// <param name="value" type="Length">Type: Length&#10;The offset of the labels relative to their calculated position.</param>
	},
	setLabelRotation: function(value) {
		/// <summary>Sets the rotation mode of the labels.</summary>
		/// <param name="value" type="LabelRotation">Type: LabelRotation&#10;The rotation mode of the labels.</param>
	},
	setNumberPrecision: function(value) {
		/// <summary>Sets the number recision of the labels.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The number recision of the labels.</param>
	},
	setShowLabels: function(value) {
		/// <summary>Sets a value indicating whether the labels are visible.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;True if labels are visible, otherwise false.</param>
	},
	setShowMaxValueTick: function(value) {
		/// <summary>Sets a value indicating whether to display a tick for the maxValue of the scale.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;True to display a tick for the maxValue, otherwise false.</param>
	},
	setShowTicks: function(value) {
		/// <summary>Sets a value indicating whether the ticks are visible.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;True if ticks are visible, otherwise false.</param>
	},
	setStep: function(value) {
		/// <summary>Sets the value between adjacent ticks and labels.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The value between adjacent ticks and labels.</param>
	},
	setStroke: function(value) {
		/// <summary>Sets the stroke brush of the ticks.</summary>
		/// <param name="value" type="Object">Type: Object&#10;The stroke brush of the ticks.</param>
	},
	setTickAlignment: function(value) {
		/// <summary>Sets the alignment of the ticks relative to the scale.</summary>
		/// <param name="value" type="Alignment">Type: Alignment&#10;The alignment of the ticks relative to the scale.</param>
	},
	setTickHeight: function(value) {
		/// <summary>Sets the height of a tick.</summary>
		/// <param name="value" type="Length">Type: Length&#10;The height of a tick.</param>
	},
	setTickOffset: function(value) {
		/// <summary>Sets the offset of the ticks relative to their calculated position.</summary>
		/// <param name="value" type="Length">Type: Length&#10;The offset of the ticks relative to their calculated position.</param>
	},
	setTickShape: function(value) {
		/// <summary>Sets the shape of the ticks.</summary>
		/// <param name="value" type="TickShape">Type: TickShape&#10;The shape of the ticks.</param>
	},
	setTickWidth: function(value) {
		/// <summary>Sets the width of a tick.</summary>
		/// <param name="value" type="Length">Type: Length&#10;The width of a tick.</param>
	}
};
MindFusion.Gauges.TickSettings.__class = true;

MindFusion.Gauges.TickShape.prototype = {
	Arrow1: 0,
	Arrow2: 1,
	Arrow3: 2,
	Custom: 3,
	Ellipse: 4,
	Line: 5,
	None: 6,
	Rectangle: 7,
	Rhombus: 8,
	RoundRect: 9,
	Triangle: 10
};
MindFusion.Gauges.TickShape.__enum = true;

MindFusion.Gauges.TickType.prototype = {
	Major: 0,
	Middle: 1,
	Minor: 2,
	None: 3
};
MindFusion.Gauges.TickType.__enum = true;

MindFusion.Gauges.ValueChangedEventArgs.prototype = {
	getNewValue: function(value) {
		/// <summary>Gets the new value of the changed property.</summary>
		/// <param name="value" type="void">Type: void&#10;</param>
		/// <returns type="Object">Type: Object&#10;The new value of the changed property.</returns>
	},
	getOldValue: function() {
		/// <summary>Gets the previous value of the changed property.</summary>
		/// <returns type="Object">Type: Object&#10;The previous value of the changed property.</returns>
	}
};
MindFusion.Gauges.ValueChangedEventArgs.__class = true;

MindFusion.Gauges.ValueChangingEventArgs.prototype = {
	getNewValue: function(value) {
		/// <summary>Gets the new value of the changing property.</summary>
		/// <param name="value" type="void">Type: void&#10;</param>
		/// <returns type="Object">Type: Object&#10;The new value of the changing property.</returns>
	},
	getOldValue: function() {
		/// <summary>Gets the previous value of the changing property.</summary>
		/// <returns type="Object">Type: Object&#10;The previous value of the changing property.</returns>
	}
};
MindFusion.Gauges.ValueChangingEventArgs.__class = true;

MindFusion.Gauges.VisualElement.prototype = {
	getBounds: function() {
		/// <summary>Gets the bounding rectangle of this element.</summary>
		/// <returns type="Rect">Type: Rect&#10;The bounding rectangle of this element.</returns>
	},
	getFill: function() {
		/// <summary>Gets the fill of this element.</summary>
		/// <returns type="Object">Type: Object&#10;The fill of this element.</returns>
	},
	getIsVisible: function() {
		/// <summary>Gets a value indicating whether this element is visible.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;True if the element is visible, otherwise false.</returns>
	},
	getMargin: function() {
		/// <summary>Gets the margin of this element.</summary>
		/// <returns type="Thickness">Type: Thickness&#10;The margin of this element.</returns>
	},
	getName: function() {
		/// <summary>Gets the name of this element.</summary>
		/// <returns type="String">Type: String&#10;The name of this element.</returns>
	},
	getRelativeCoordinates: function() {
		/// <summary>Gets a value indicating whether the metrics of this element are expressed as relative or absolute quantities.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;True if the metrics are relative, otherwise false.</returns>
	},
	getRenderSize: function() {
		/// <summary>Gets the rendering size of the element.</summary>
		/// <returns type="Size">Type: Size&#10;The rendering size of the element.</returns>
	},
	getSize: function() {
		/// <summary>Gets the size of this element.</summary>
		/// <returns type="Size">Type: Size&#10;The size of this element.</returns>
	},
	getStroke: function() {
		/// <summary>Gets the stroke of this element.</summary>
		/// <returns type="Object">Type: Object&#10;The stroke of this element.</returns>
	},
	getX: function() {
		/// <summary>Gets the normalized x position of this element, relative to its parent.</summary>
		/// <returns type="Number">Type: Number&#10;The normalized x position of this element, relative to its parent.</returns>
	},
	getY: function() {
		/// <summary>Gets the normalized y position of this element, relative to its parent.</summary>
		/// <returns type="Number">Type: Number&#10;The normalized y position of this element, relative to its parent.</returns>
	},
	setBounds: function(value) {
		/// <summary>Sets the bounding rectangle of this element.</summary>
		/// <param name="value" type="Rect">Type: Rect&#10;The bounding rectangle of this element.</param>
	},
	setFill: function(value) {
		/// <summary>Sets the fill of this element.</summary>
		/// <param name="value" type="Object">Type: Object&#10;The fill of this element.</param>
	},
	setIsVisible: function(value) {
		/// <summary>Sets a value indicating whether this element is visible.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;True if the element is visible, otherwise false.</param>
	},
	setMargin: function(value) {
		/// <summary>Sets the margin of this element.</summary>
		/// <param name="value" type="Thickness">Type: Thickness&#10;The margin of this element.</param>
	},
	setName: function(value) {
		/// <summary>Sets the name of this element.</summary>
		/// <param name="value" type="String">Type: String&#10;The name of this element.</param>
	},
	setRelativeCoordinates: function(value) {
		/// <summary>Sets a value indicating whether the metrics of this element are expressed as relative or absolute quantities.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;True if the metrics are relative, otherwise false.</param>
	},
	setRenderSize: function(value) {
		/// <summary>Sets the rendering size of the element.</summary>
		/// <param name="value" type="Size">Type: Size&#10;The rendering size of the element.</param>
	},
	setStroke: function(value) {
		/// <summary>Sets the stroke of this element.</summary>
		/// <param name="value" type="Object">Type: Object&#10;The stroke of this element.</param>
	},
	setX: function(value) {
		/// <summary>Sets the normalized x position of this element, relative to its parent.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The normalized x position of this element, relative to its parent.</param>
	},
	setY: function(value) {
		/// <summary>Sets the normalized y position of this element, relative to its parent.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The normalized y position of this element, relative to its parent.</param>
	}
};
MindFusion.Gauges.VisualElement.__class = true;

MindFusion.Gauges.VisualElementContainer.prototype = {
};
MindFusion.Gauges.VisualElementContainer.__class = true;

MindFusion.CancelEventArgs.prototype = {
	get_cancel: function() {
		/// <summary>Gets a value indicating whether the event should be canceled.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;true if the event should be canceled, otherwise false.</returns>
	},
	set_cancel: function(value) {
		/// <summary>Sets a value indicating whether the event should be canceled.</summary>
		/// <param name="value" type="Boolean">Type: Boolean&#10;true if the event should be canceled, otherwise false.</param>
	}
};
MindFusion.CancelEventArgs.__class = true;

MindFusion.EventArgs.prototype = {
};
MindFusion.EventArgs.__class = true;
