import { Drawing } from 'MindFusion.Common';
import g = require('MindFusion.Gauges');

var d = Drawing;

let compass = g.OvalGauge.create(<HTMLCanvasElement>$('#compass')[0], false);
compass.addEventListener(g.Events.prepaintBackground, onPrepaintBackground.bind(this));
compass.addEventListener(g.Events.prepaintForeground, onPrepaintForeground.bind(this));
compass.addEventListener(g.Events.prepaintScale, onPrepaintScale.bind(this));
compass.addEventListener(g.Events.paintPointer, onPaintPointer.bind(this));

let scale = new g.OvalScale(compass);
scale.setName("mainScale");
scale.setMinValue(0);
scale.setMaxValue(360);
scale.setStartAngle(285);
scale.setEndAngle(645);
scale.setScaleRelativeRadius(0.5743);
scale.setStartWidth(new g.Length(5, g.LengthType.Relative));
scale.setEndWidth(new g.Length(5, g.LengthType.Relative));
scale.setFill("Transparent");
scale.setStroke("#202020");
scale.setMargin(new g.Thickness(0.075, 0.075, 0.075, 0.075, true));

let majorSettings = scale.majorTickSettings;
majorSettings.setShowLabels(false);
majorSettings.setTickShape(g.TickShape.Line);
majorSettings.setTickWidth(new g.Length(100, g.LengthType.Relative));
majorSettings.setTickHeight(new g.Length(10, g.LengthType.Relative));
majorSettings.setFill("Transparent");
majorSettings.setStroke("#202020");
majorSettings.setTickAlignment(g.Alignment.CenterInside);
majorSettings.setCount(12);

let middleSettings = scale.middleTickSettings;
middleSettings.setShowTicks(true);
middleSettings.setShowLabels(false);
middleSettings.setTickShape(g.TickShape.Line);
middleSettings.setTickWidth(new g.Length(8, g.LengthType.Relative));
middleSettings.setTickHeight(new g.Length(6, g.LengthType.Relative));
middleSettings.setFill("Transparent");
middleSettings.setStroke("#202020");
middleSettings.setTickAlignment(g.Alignment.CenterInside);
middleSettings.setCount(6);

let minorSettings = scale.minorTickSettings;
minorSettings.setShowLabels(false);
minorSettings.setTickShape(g.TickShape.Line);
minorSettings.setTickWidth(new g.Length(4, g.LengthType.Relative));
minorSettings.setTickHeight(new g.Length(2, g.LengthType.Relative));
minorSettings.setFill("Transparent");
minorSettings.setStroke("#202020");
minorSettings.setTickAlignment(g.Alignment.CenterInside);
minorSettings.setCount(5);

// innerScale
let innerScale = new g.OvalScale(compass);
innerScale.setName("innerScale");
innerScale.setMinValue(0);
innerScale.setMaxValue(360);
innerScale.setStartAngle(270);
innerScale.setEndAngle(630);
innerScale.setScaleRelativeRadius(0.4);
innerScale.setStartWidth(new g.Length(5, g.LengthType.Relative));
innerScale.setEndWidth(new g.Length(5, g.LengthType.Relative));
innerScale.setFill("Transparent");
innerScale.setStroke("#202020");
innerScale.setMargin(new g.Thickness(0.075, 0.075, 0.075, 0.075, true));

majorSettings = innerScale.majorTickSettings;
majorSettings.setTickShape(g.TickShape.None);
majorSettings.setTickWidth(new g.Length(10, g.LengthType.Relative));
majorSettings.setTickHeight(new g.Length(10, g.LengthType.Relative));
majorSettings.setShowMaxValueTick(false);
majorSettings.setFontSize(new g.Length(14, g.LengthType.Relative));
majorSettings.setNumberPrecision(0);
majorSettings.setFill("White");
majorSettings.setStroke("#808080");
majorSettings.setLabelForeground("White");
majorSettings.setLabelAlignment(g.Alignment.OuterCenter);
majorSettings.setTickAlignment(g.Alignment.TrueCenter);
majorSettings.setLabelOffset(new g.Length(-10, g.LengthType.Relative));
majorSettings.setLabelRotation(g.LabelRotation.BaselineToCenter);
majorSettings.setCount(4);

middleSettings = innerScale.middleTickSettings;
middleSettings.setTickShape(g.TickShape.None);
middleSettings.setTickWidth(new g.Length(6, g.LengthType.Relative));
middleSettings.setTickHeight(new g.Length(6, g.LengthType.Relative));
middleSettings.setFontSize(new g.Length(12, g.LengthType.Relative));
middleSettings.setNumberPrecision(0);
middleSettings.setFontStyle("bold");
middleSettings.setFill("White");
middleSettings.setStroke("#808080");
middleSettings.setLabelForeground("#505050");
middleSettings.setLabelAlignment(g.Alignment.OuterCenter);
middleSettings.setTickAlignment(g.Alignment.TrueCenter);
middleSettings.setLabelOffset(new g.Length(-7, g.LengthType.Relative));
middleSettings.setLabelRotation(g.LabelRotation.BaselineToCenter);
middleSettings.setCount(2);

minorSettings = innerScale.minorTickSettings;
minorSettings.setShowLabels(false);
minorSettings.setShowTicks(false);

let pointer = new g.Pointer();
pointer.setPointerWidth(new g.Length(200, g.LengthType.Relative));
pointer.setPointerHeight(new g.Length(20, g.LengthType.Relative));
pointer.setPointerOffset(new g.Length(90, g.LengthType.Relative));
pointer.setShape(g.PointerShape.Custom);
pointer.setIsInteractive(true);
innerScale.addPointer(pointer);


function onPrepaintBackground(sender, args)
{
	args.setCancelDefaultPainting(true);

	let context = args.getContext();
	let element = args.getElement();
	let bounds = new d.Rect(0, 0, element.getRenderSize().width, element.getRenderSize().height);
	context.save();
	context.beginPath();

	context.strokeStyle = 'rgba(122,123,124,1)';

	let gradient1 = context.createLinearGradient(bounds.x, bounds.y, bounds.width, bounds.height);
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

	let context = args.getContext();
	let element = args.getElement();
	let size = element.getRenderSize();
	let psize = new d.Size(size.height, size.height);

	let area = new g.ArcArea();
	area.setX(60);
	area.setStartAngle(160);
	area.setEndAngle(-20);
	area.setMargin(new g.Thickness(0.03));
	area.setFill(g.Utils.createRadialGradient(null, null, [0, 'rgba(255,255,255,0)', 1, 'rgba(255,255,255,0.3)'], null, null));
	args.paintVisualElement(area, psize);

	area = new g.ArcArea();
	area.setX(60);
	area.setStartAngle(140);
	area.setEndAngle(-40);
	area.setMargin(new g.Thickness(0.03));
	area.setFill(g.Utils.createRadialGradient(null, null, [0, 'rgba(255,255,255,0)', 1, 'rgba(255,255,255,0.2)'], null, null));
	args.paintVisualElement(area, psize);
};

function onPrepaintScale(sender, args)
{
	let context = args.getContext();
	let element = args.getElement();
	let size = element.getRenderSize();

	if (element.name == 'innerScale')
	{
		let figure = new g.PathFigure('M0.44, 0.5 L0.5, 0.15 L0.5, 0.85 L0.56, 0.5 Z');
		figure.setFill('rgba(191,191,191,1)');
		args.paintVisualElement(figure, size);

		context.save();
		let transform = new d.Matrix();
		transform.rotateAt(90, new d.Point(size.width / 2, size.height / 2));
		context.transform.apply(context, transform.matrix());
		args.paintVisualElement(figure, size);
		context.restore();

		figure = new g.PathFigure('M0.56, 0.5 L0.5, 0.15 L0.5, 0.85 L0.44, 0.5 Z');
		figure.setFill('rgba(128,128,128,1)');
		args.paintVisualElement(figure, size);

		context.save();
		transform = new d.Matrix();
		transform.rotateAt(90, new d.Point(size.width / 2, size.height / 2));
		context.transform.apply(context, transform.matrix());
		args.paintVisualElement(figure, size);
		context.restore();

		figure = new g.PathFigure('M0.44, 0.5 L0.5, 0.15 L0.56, 0.5 L0.5, 0.85 Z');
		figure.setStroke('rgba(32,32,32,1)');
		args.paintVisualElement(figure, size);

		figure = new g.PathFigure('M0.5, 0.56 L0.15, 0.5 L0.5, 0.44 L0.85, 0.5 Z');
		figure.setStroke('rgba(32,32,32,1)');
		args.paintVisualElement(figure, size);

		figure = new g.PathFigure('M0.46, 0.5 L0.3, 0.3 L0.5, 0.46 L0.7, 0.3 L0.53, 0.5 L0.7, 0.7 L0.5, 0.53 L0.3, 0.7Z');
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
	let context = args.getContext();
	let element = args.getElement();
	let size = element.getRenderSize();

	let figure = new g.PathFigure('M0.5, 0 L1, 0.5 L0.5, 1 Z');
	figure.setFill(g.Utils.createRadialGradient(new d.Point(0.5, 0.1), 0, [0, 'rgba(193,0,0,1)', 0.3, 'rgba(255,0,0,1)', 1, 'rgba(102,0,0,1)'], null, null));
	figure.setStroke('rgba(32,32,32,1)');
	args.paintVisualElement(figure, size);

	figure = new g.PathFigure('M0.5, 0 L0, 0.5 L0.5, 1 Z');
	figure.setFill(g.Utils.createRadialGradient(new d.Point(0.5, 0.1), 0, [0, 'rgba(193,193,193,1)', 0.3, 'rgba(204,204,204,1)', 1, 'rgba(102,102,102,1)'], null, null));
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