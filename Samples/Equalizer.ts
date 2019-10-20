import { Drawing } from 'MindFusion.Common';
import g = require('MindFusion.Gauges');

var d = Drawing;
var TickSettings = g.TickSettings;
var Pointer = g.Pointer;

let majorSettings: TickSettings;
let middleSettings: TickSettings;
let minorSettings: TickSettings;
let pointer: Pointer;

for (let i = 0; i < 8; ++i)
{
	let gauge = g.LinearGauge.create(<HTMLCanvasElement>$(`#lg${i}`)[0], false);
	gauge.setOrientation(g.Orientation.Vertical);
	gauge.addEventListener(g.Events.prepaintBackground, cancelPaint.bind(this));
	gauge.addEventListener(g.Events.prepaintForeground, cancelPaint.bind(this));
	gauge.addEventListener(g.Events.prepaintScale, prepaintScale.bind(this));
	gauge.addEventListener(g.Events.paintPointer, paintPointer.bind(this));

	let scale = new g.LinearScale(gauge);
	scale.setLeft(new g.Length(50, g.LengthType.Relative));
	scale.setTop(new g.Length(10, g.LengthType.Relative));
	scale.setOrientation(g.Orientation.Vertical);
	scale.setScaleLength(new g.Length(80, g.LengthType.Relative));
	scale.setStartWidth(new g.Length(20, g.LengthType.Relative));
	scale.setEndWidth(new g.Length(20, g.LengthType.Relative));
	scale.setMinValue(-24);
	scale.setMaxValue(24);
	scale.setFill("Transparent");
	scale.setStroke("Transparent");

	majorSettings = scale.majorTickSettings;
	majorSettings.setTickShape(g.TickShape.Rectangle);
	majorSettings.setTickWidth(new g.Length(2, g.LengthType.Relative));
	majorSettings.setTickHeight(new g.Length(0.5, g.LengthType.Relative));
	majorSettings.setTickAlignment(g.Alignment.InnerInside);
	majorSettings.setLabelAlignment(g.Alignment.InnerCenter);
	majorSettings.setTickOffset(new g.Length(1));
	majorSettings.setLabelOffset(new g.Length(25, g.LengthType.Relative));
	majorSettings.setLabelRotation(g.LabelRotation.BaselineToCenter);
	majorSettings.setFontSize(new g.Length(20, g.LengthType.Relative));
	majorSettings.setNumberPrecision(0);
	majorSettings.setCount(2);

	middleSettings = scale.middleTickSettings;
	middleSettings.setShowLabels(false);
	middleSettings.setTickShape(g.TickShape.Rectangle);
	middleSettings.setTickWidth(new g.Length(1.5, g.LengthType.Relative));
	middleSettings.setTickHeight(new g.Length(1));
	middleSettings.setTickOffset(new g.Length(1));
	middleSettings.setTickAlignment(g.Alignment.InnerInside);
	middleSettings.setCount(10);

	minorSettings = scale.minorTickSettings;
	minorSettings.setShowLabels(false);
	minorSettings.setShowTicks(false);

	pointer = new Pointer();
	pointer.setName("mainPointer");
	pointer.setPointerWidth(new g.Length(24, g.LengthType.Relative));
	pointer.setPointerHeight(new g.Length(48, g.LengthType.Relative));
	pointer.setShape(g.PointerShape.Custom);
	pointer.setIsInteractive(true);
	scale.addPointer(pointer);
}

// oval gauges
for (var i = 0; i < 4; ++i)
{
	let gauge = g.OvalGauge.create(<HTMLCanvasElement>$(`#og${i}`)[0], false);
	gauge.addEventListener(g.Events.prepaintBackground, cancelPaint.bind(this));
	gauge.addEventListener(g.Events.prepaintForeground, cancelPaint.bind(this));
	gauge.addEventListener(g.Events.prepaintPointer, ovalPrepaintPointer.bind(this));

	let scale = new g.OvalScale(gauge);
	scale.setScaleRelativeRadius(0.45);
	scale.setMinValue(-50);
	scale.setMaxValue(50);
	scale.setFill("Transparent");
	scale.setStroke("Transparent");

	majorSettings = scale.majorTickSettings;
	majorSettings.setTickShape(g.TickShape.Rectangle);
	majorSettings.setTickWidth(new g.Length(12, g.LengthType.Relative));
	majorSettings.setTickHeight(new g.Length(4, g.LengthType.Relative));
	majorSettings.setFontSize(new g.Length(20, g.LengthType.Relative));
	majorSettings.setNumberPrecision(0);
	majorSettings.setTickAlignment(g.Alignment.InnerInside);
	majorSettings.setLabelAlignment(g.Alignment.OuterCenter);
	majorSettings.setLabelOffset(new g.Length(-15, g.LengthType.Relative));
	majorSettings.setLabelRotation(g.LabelRotation.None);
	majorSettings.setCount(5);
	majorSettings.setFill("Black");
	majorSettings.setStroke("Black");

	middleSettings = scale.middleTickSettings;
	middleSettings.setShowLabels(false);
	middleSettings.setTickShape(g.TickShape.Rectangle);
	middleSettings.setTickWidth(new g.Length(12, g.LengthType.Relative));
	middleSettings.setTickHeight(new g.Length(4, g.LengthType.Relative));
	middleSettings.setFill("Black");
	middleSettings.setStroke("Black");

	minorSettings = scale.minorTickSettings;
	minorSettings.setShowTicks(true);
	minorSettings.setTickShape(g.TickShape.Rectangle);
	minorSettings.setFill("Black");
	minorSettings.setStroke("Black");
	minorSettings.setTickWidth(new g.Length(12, g.LengthType.Relative));
	minorSettings.setTickHeight(new g.Length(4, g.LengthType.Relative));

	pointer = new Pointer();
	pointer.setPointerWidth(new g.Length(165, g.LengthType.Relative));
	pointer.setPointerHeight(new g.Length(165, g.LengthType.Relative));
	pointer.setIsInteractive(true);
	scale.addPointer(pointer);
}

//on/off gauge
let gauge = g.OvalGauge.create(<HTMLCanvasElement>$('#onoff')[0], false);
gauge.addEventListener(g.Events.prepaintBackground, cancelPaint.bind(this));
gauge.addEventListener(g.Events.prepaintForeground, cancelPaint.bind(this));
gauge.addEventListener(g.Events.prepaintPointer, onOffPrepaintPointer.bind(this));

let scale = new g.OvalScale(gauge);
scale.setStartAngle(225);
scale.setEndAngle(315);
scale.setMinValue(0);
scale.setMaxValue(1);
scale.setFill("Transparent");
scale.setStroke("Transparent");

majorSettings = scale.majorTickSettings;
majorSettings.setTickShape(g.TickShape.Rectangle);
majorSettings.setTickWidth(new g.Length(15, g.LengthType.Relative));
majorSettings.setTickHeight(new g.Length(4, g.LengthType.Relative));
majorSettings.setFontSize(new g.Length(20, g.LengthType.Relative));
majorSettings.setLabelAlignment(g.Alignment.OuterOutside);
majorSettings.setLabelOffset(new g.Length(-10, g.LengthType.Relative));
majorSettings.setLabelRotation(g.LabelRotation.None);
majorSettings.setCount(1);

middleSettings = scale.middleTickSettings;
middleSettings.setShowLabels(false);
middleSettings.setShowTicks(false);

pointer = new Pointer();
pointer.setPointerWidth(new g.Length(140, g.LengthType.Relative));
pointer.setPointerHeight(new g.Length(140, g.LengthType.Relative));
pointer.setIsDiscrete(true);
pointer.setIsInteractive(true);
scale.addPointer(pointer);

function cancelPaint(sender, args)
{
	args.setCancelDefaultPainting(true);
}

function prepaintScale(sender, args)
{
	let context = args.getContext();
	let element = args.getElement();
	let size = element.getRenderSize();

	let r = new g.RoundRectangle();
	r.setRoundness(20);
	r.setMargin(new g.Thickness(0.38, 0.055, 0.38, 0.05, true));
	r.setFill(g.Utils.createLinearGradient(0, [0, '#666666', 0.2, '#cccccc', 0.4, '#cccccc', 1, '#888888']));
	args.paintVisualElement(r, size);

	let filledBounds = r.getMargin().toAbsolute(size).apply(new d.Rect(0, 0, size.width, size.height));
	let mid = size.width / 2;

	context.save();
	context.beginPath();
	context.strokeStyle = 'black';
	context.moveTo(mid - 0.5, filledBounds.y + 11);
	context.lineTo(mid - 0.5, filledBounds.bottom() - 11);
	context.stroke();

	context.strokeStyle = 'white';
	context.beginPath();
	context.moveTo(mid + 0.5, filledBounds.y + 11);
	context.lineTo(mid + 0.5, filledBounds.bottom() - 11);
	context.stroke();

	context.restore();
}

function paintPointer(sender, args)
{
	let context = args.getContext();
	let element = args.getElement();
	let size = element.getRenderSize();

	let r = new g.RoundRectangle();
	r.setRoundness(20);
	r.setFill('black');
	args.paintVisualElement(r, size);

	var rsize = new d.Size(size.width - 2, size.height - 2)
	r.setStroke('white');
	r.setX(1);
	r.setY(1);
	r.setFill(g.Utils.createLinearGradient(0, [0, 'white', 1, '#666666']));
	args.paintVisualElement(r, rsize);

	let middle = rsize.height / 2;

	context.save();
	context.beginPath();
	context.strokeStyle = 'white';
	context.moveTo(3, middle - 0.5);
	context.lineTo(rsize.width - 3, middle - 0.5);
	context.stroke();

	context.strokeStyle = 'gray';
	context.moveTo(3, middle + 0.5);
	context.lineTo(rsize.width - 3, middle + 0.5);
	context.stroke();

	context.restore();
}

function ovalPrepaintPointer(sender, args)
{
	args.setCancelDefaultPainting(true);

	let context = args.getContext();
	let element = args.getElement();
	let size = element.getRenderSize();

	context.transform.apply(context, element.transform.matrix());
	context.save();
	context.beginPath();

	let outer = new g.Ellipse();
	outer.setFill(g.Utils.createLinearGradient(0, [0, '#a0c0c0', 1, '#103030']));
	args.paintVisualElement(outer, size);

	let inner1 = new g.Ellipse();
	inner1.setFill('#608080');
	inner1.setMargin(new g.Thickness(0.15));
	args.paintVisualElement(inner1, size);

	let inner2 = new g.Ellipse();
	inner2.setFill('#608080');
	inner2.setMargin(new g.Thickness(0.2));
	args.paintVisualElement(inner2, size);

	context.strokeStyle = 'black';
	context.moveTo(size.width / 2, size.height / 2);
	context.lineTo(size.width * 0.9, size.height / 2);
	context.stroke();
	context.restore();

	var dot = new g.Ellipse();
	dot.setFill('red');
	dot.setMargin(new g.Thickness(0.9, 0.45, 0, 0.45));
	args.paintVisualElement(dot, size);
}

function onOffPrepaintPointer(sender, args)
{
	args.setCancelDefaultPainting(true);

	let context = args.getContext();
	let element = args.getElement();
	let bounds = new d.Rect(0, 0, element.getRenderSize().width, element.getRenderSize().height);

	context.transform.apply(context, element.transform.matrix());
	context.save();
	context.beginPath();

	let gradient1 = context.createLinearGradient(bounds.width, bounds.y, bounds.width, bounds.height);
	gradient1.addColorStop(0, "#a0a0a0");
	gradient1.addColorStop(0.4, "#d0d0d0");
	gradient1.addColorStop(0.4, "#ffffff");
	gradient1.addColorStop(0.41, "#ffffff");
	gradient1.addColorStop(0.41, "#a1a1a1");
	gradient1.addColorStop(0.6, "#a1a1a1");
	gradient1.addColorStop(0.6, "#808080");
	gradient1.addColorStop(0.8, "#a0a0a0");
	context.fillStyle = gradient1;
	context.strokeStyle = '#5f5f5f';

	context.arc(bounds.center().x, bounds.center().y, bounds.width / 2, 2 * Math.PI, false);
	context.fill();
	context.stroke();

	context.restore();
} 