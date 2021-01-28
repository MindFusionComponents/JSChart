/// <reference path="Scripts/MindFusion.Charting-vsdoc.js" />
var Gauges = MindFusion.Gauges;

var d = MindFusion.Drawing;

var compass = Gauges.OvalGauge.create(document.getElementById('compass'), false);
compass.addEventListener(Gauges.Events.prepaintBackground, onPrepaintBackground.bind(this));
compass.addEventListener(Gauges.Events.prepaintForeground, onPrepaintForeground.bind(this));
compass.addEventListener(Gauges.Events.prepaintScale, onPrepaintScale.bind(this));
compass.addEventListener(Gauges.Events.paintPointer, onPaintPointer.bind(this));

var scale = new Gauges.OvalScale(compass);
scale.setName("mainScale");
scale.setMinValue(0);
scale.setMaxValue(360);
scale.setStartAngle(285);
scale.setEndAngle(645);
scale.setScaleRelativeRadius(0.5743);
scale.setStartWidth(new Gauges.Length(5, Gauges.LengthType.Relative));
scale.setEndWidth(new Gauges.Length(5, Gauges.LengthType.Relative));
scale.setFill("Transparent");
scale.setStroke("#202020");
scale.setMargin(new Gauges.Thickness(0.075, 0.075, 0.075, 0.075, true));

var majorSettings = scale.majorTickSettings;
majorSettings.setShowLabels(false);
majorSettings.setTickShape(Gauges.TickShape.Line);
majorSettings.setTickWidth(new Gauges.Length(100, Gauges.LengthType.Relative));
majorSettings.setTickHeight(new Gauges.Length(10, Gauges.LengthType.Relative));
majorSettings.setFill("Transparent");
majorSettings.setStroke("#202020");
majorSettings.setTickAlignment(Gauges.Alignment.CenterInside);
majorSettings.setCount(12);

var middleSettings = scale.middleTickSettings;
middleSettings.setShowTicks(true);
middleSettings.setShowLabels(false);
middleSettings.setTickShape(Gauges.TickShape.Line);
middleSettings.setTickWidth(new Gauges.Length(8, Gauges.LengthType.Relative));
middleSettings.setTickHeight(new Gauges.Length(6, Gauges.LengthType.Relative));
middleSettings.setFill("Transparent");
middleSettings.setStroke("#202020");
middleSettings.setTickAlignment(Gauges.Alignment.CenterInside);
middleSettings.setCount(6);

var minorSettings = scale.minorTickSettings;
minorSettings.setShowLabels(false);
minorSettings.setTickShape(Gauges.TickShape.Line);
minorSettings.setTickWidth(new Gauges.Length(4, Gauges.LengthType.Relative));
minorSettings.setTickHeight(new Gauges.Length(2, Gauges.LengthType.Relative));
minorSettings.setFill("Transparent");
minorSettings.setStroke("#202020");
minorSettings.setTickAlignment(Gauges.Alignment.CenterInside);
minorSettings.setCount(5);

// innerScale
var innerScale = new Gauges.OvalScale(compass);
innerScale.setName("innerScale");
innerScale.setMinValue(0);
innerScale.setMaxValue(360);
innerScale.setStartAngle(270);
innerScale.setEndAngle(630);
innerScale.setScaleRelativeRadius(0.4);
innerScale.setStartWidth(new Gauges.Length(5, Gauges.LengthType.Relative));
innerScale.setEndWidth(new Gauges.Length(5, Gauges.LengthType.Relative));
innerScale.setFill("Transparent");
innerScale.setStroke("#202020");
innerScale.setMargin(new Gauges.Thickness(0.075, 0.075, 0.075, 0.075, true));

majorSettings = innerScale.majorTickSettings;
majorSettings.setTickShape(Gauges.TickShape.None);
majorSettings.setTickWidth(new Gauges.Length(10, Gauges.LengthType.Relative));
majorSettings.setTickHeight(new Gauges.Length(10, Gauges.LengthType.Relative));
majorSettings.setShowMaxValueTick(false);
majorSettings.setFontSize(new Gauges.Length(14, Gauges.LengthType.Relative));
majorSettings.setNumberPrecision(0);
majorSettings.setFill("White");
majorSettings.setStroke("#808080");
majorSettings.setLabelForeground("White");
majorSettings.setLabelAlignment(Gauges.Alignment.OuterCenter);
majorSettings.setTickAlignment(Gauges.Alignment.TrueCenter);
majorSettings.setLabelOffset(new Gauges.Length(-10, Gauges.LengthType.Relative));
majorSettings.setLabelRotation(Gauges.LabelRotation.BaselineToCenter);
majorSettings.setCount(4);

middleSettings = innerScale.middleTickSettings;
middleSettings.setTickShape(Gauges.TickShape.None);
middleSettings.setTickWidth(new Gauges.Length(6, Gauges.LengthType.Relative));
middleSettings.setTickHeight(new Gauges.Length(6, Gauges.LengthType.Relative));
middleSettings.setFontSize(new Gauges.Length(12, Gauges.LengthType.Relative));
middleSettings.setNumberPrecision(0);
middleSettings.setFontStyle("bold");
middleSettings.setFill("White");
middleSettings.setStroke("#808080");
middleSettings.setLabelForeground("#505050");
middleSettings.setLabelAlignment(Gauges.Alignment.OuterCenter);
middleSettings.setTickAlignment(Gauges.Alignment.TrueCenter);
middleSettings.setLabelOffset(new Gauges.Length(-7, Gauges.LengthType.Relative));
middleSettings.setLabelRotation(Gauges.LabelRotation.BaselineToCenter);
middleSettings.setCount(2);

minorSettings = innerScale.minorTickSettings;
minorSettings.setShowLabels(false);
minorSettings.setShowTicks(false);

var pointer = new Gauges.Pointer();
pointer.setPointerWidth(new Gauges.Length(200, Gauges.LengthType.Relative));
pointer.setPointerHeight(new Gauges.Length(20, Gauges.LengthType.Relative));
pointer.setPointerOffset(new Gauges.Length(90, Gauges.LengthType.Relative));
pointer.setShape(Gauges.PointerShape.Custom);
pointer.setIsInteractive(true);
innerScale.addPointer(pointer);


function onPrepaintBackground(sender, args)
{
	args.setCancelDefaultPainting(true);

	var context = args.getContext();
	var element = args.getElement();
	var bounds = new d.Rect(0, 0, element.getRenderSize().width, element.getRenderSize().height);
	context.save();
	context.beginPath();

	context.strokeStyle = 'rgba(122,123,124,1)';

	var gradient1 = context.createLinearGradient(bounds.x, bounds.y, bounds.width, bounds.height);
	gradient1.addColorStop(0, "rgba(148,148,148,1)");
	gradient1.addColorStop(1, "rgba(48,48,48,1)");
	context.fillStyle = gradient1;

	context.arc(bounds.center().x, bounds.center().y, bounds.width / 2, 2 * Math.PI, false);
	context.fill();
	context.stroke();

	context.beginPath();
	bounds.x += 10;
	bounds.y += 10;
	bounds.width -= 20;
	bounds.height -= 20;
	context.fillStyle = 'rgba(222,222,222,1)';

	context.arc(bounds.center().x, bounds.center().y, bounds.width / 2, 2 * Math.PI, false);
	context.fill();
	context.stroke();

	context.restore();
};

function onPrepaintForeground(sender, args)
{
	args.setCancelDefaultPainting(true);

	var context = args.getContext();
	var element = args.getElement();
	var size = element.getRenderSize();
	var psize = new d.Size(size.height, size.height);

	var area = new Gauges.ArcArea();
	area.setX(60);
	area.setStartAngle(160);
	area.setEndAngle(-20);
	area.setMargin(new Gauges.Thickness(0.03));
	area.setFill(Gauges.Utils.createRadialGradient(null, null, [0, 'rgba(255,255,255,0)', 1, 'rgba(255,255,255,0.3)'], null, null));
	args.paintVisualElement(area, psize);

	area = new Gauges.ArcArea();
	area.setX(60);
	area.setStartAngle(140);
	area.setEndAngle(-40);
	area.setMargin(new Gauges.Thickness(0.03));
	area.setFill(Gauges.Utils.createRadialGradient(null, null, [0, 'rgba(255,255,255,0)', 1, 'rgba(255,255,255,0.2)'], null, null));
	args.paintVisualElement(area, psize);
};

function onPrepaintScale(sender, args)
{
	var context = args.getContext();
	var element = args.getElement();
	var size = element.getRenderSize();

	if (element.name == 'innerScale')
	{
		var figure = new Gauges.PathFigure('M0.44, 0.5 L0.5, 0.15 L0.5, 0.85 L0.56, 0.5 Z');
		figure.setFill('rgba(191,191,191,1)');
		args.paintVisualElement(figure, size);

		context.save();
		var transform = new d.Matrix();
		transform.rotateAt(90, new d.Point(size.width / 2, size.height / 2));
		context.transform.apply(context, transform.matrix());
		args.paintVisualElement(figure, size);
		context.restore();

		figure = new Gauges.PathFigure('M0.56, 0.5 L0.5, 0.15 L0.5, 0.85 L0.44, 0.5 Z');
		figure.setFill('rgba(128,128,128,1)');
		args.paintVisualElement(figure, size);

		context.save();
		transform = new d.Matrix();
		transform.rotateAt(90, new d.Point(size.width / 2, size.height / 2));
		context.transform.apply(context, transform.matrix());
		args.paintVisualElement(figure, size);
		context.restore();

		figure = new Gauges.PathFigure('M0.44, 0.5 L0.5, 0.15 L0.56, 0.5 L0.5, 0.85 Z');
		figure.setStroke('rgba(32,32,32,1)');
		args.paintVisualElement(figure, size);

		figure = new Gauges.PathFigure('M0.5, 0.56 L0.15, 0.5 L0.5, 0.44 L0.85, 0.5 Z');
		figure.setStroke('rgba(32,32,32,1)');
		args.paintVisualElement(figure, size);

		figure = new Gauges.PathFigure('M0.46, 0.5 L0.3, 0.3 L0.5, 0.46 L0.7, 0.3 L0.53, 0.5 L0.7, 0.7 L0.5, 0.53 L0.3, 0.7Z');
		figure.setFill('rgba(191,191,191,1)');
		figure.setStroke('rgba(32,32,32,1)');
		args.paintVisualElement(figure, size);

		context.save();
		context.beginPath();
		context.arc(size.width / 2, size.height / 2, 37, 0, 2 * Math.PI, false);
		context.fillStyle = 'rgba(191,191,191,1)';
		context.strokeStyle = 'rgba(32,32,32,1)';
		context.fill();
		context.stroke();

		context.beginPath();
		context.arc(size.width / 2, size.height / 2, 35, 0, 2 * Math.PI, false);
		context.fillStyle = 'rgba(222,222,222,1)';
		context.fill();
		context.stroke();
		context.restore();
	}
};

function onPaintPointer(sender, args)
{
	var context = args.getContext();
	var element = args.getElement();
	var size = element.getRenderSize();

	var figure = new Gauges.PathFigure('M0.5, 0 L1, 0.5 L0.5, 1 Z');
	figure.setFill(Gauges.Utils.createRadialGradient(new d.Point(0.5, 0.1), 0, [0, 'rgba(193,0,0,1)', 0.3, 'rgba(255,0,0,1)', 1, 'rgba(102,0,0,1)'], null, null));
	figure.setStroke('rgba(32,32,32,1)');
	args.paintVisualElement(figure, size);

	figure = new Gauges.PathFigure('M0.5, 0 L0, 0.5 L0.5, 1 Z');
	figure.setFill(Gauges.Utils.createRadialGradient(new d.Point(0.5, 0.1), 0, [0, 'rgba(193,193,193,1)', 0.3, 'rgba(204,204,204,1)', 1, 'rgba(102,102,102,1)'], null, null));
	figure.setStroke('rgba(32,32,32,1)');
	args.paintVisualElement(figure, size);

	context.save();
	context.beginPath();
	context.arc(size.width / 2, size.height / 2, 3, 0, 2 * Math.PI, false);
	context.fillStyle = 'gray';
	context.strokeStyle = 'rgba(32,32,32,1)';
	context.fill();
	context.stroke();
	context.restore();
}; 