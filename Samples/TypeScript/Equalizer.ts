import MindFusion = require("mindfusion-common");
import Gauges = require("gauges-library");

var d = MindFusion.Drawing;
var TickSettings = Gauges.TickSettings;
var Pointer = Gauges.Pointer;

let majorSettings: MindFusion.Gauges.TickSettings;
let middleSettings: MindFusion.Gauges.TickSettings;
let minorSettings: MindFusion.Gauges.TickSettings;
let pointer: MindFusion.Gauges.Pointer;

for (let i = 0; i < 8; ++i)
{
	let gauge = Gauges.LinearGauge.create(<HTMLCanvasElement>document.getElementById(`lg${i}`), false);
	gauge.setOrientation(Gauges.Orientation.Vertical);
	gauge.addEventListener(Gauges.Events.prepaintBackground, cancelPaint.bind(this));
	gauge.addEventListener(Gauges.Events.prepaintForeground, cancelPaint.bind(this));
	gauge.addEventListener(Gauges.Events.prepaintScale, prepaintScale.bind(this));
	gauge.addEventListener(Gauges.Events.paintPointer, paintPointer.bind(this));

	let scale = new Gauges.LinearScale(gauge);
	scale.setLeft(new Gauges.Length(50, Gauges.LengthType.Relative));
	scale.setTop(new Gauges.Length(10, Gauges.LengthType.Relative));
	scale.setOrientation(Gauges.Orientation.Vertical);
	scale.setScaleLength(new Gauges.Length(80, Gauges.LengthType.Relative));
	scale.setStartWidth(new Gauges.Length(20, Gauges.LengthType.Relative));
	scale.setEndWidth(new Gauges.Length(20, Gauges.LengthType.Relative));
	scale.setMinValue(-24);
	scale.setMaxValue(24);
	scale.setFill("Transparent");
	scale.setStroke("Transparent");

	majorSettings = scale.majorTickSettings;
	majorSettings.setTickShape(Gauges.TickShape.Rectangle);
	majorSettings.setTickWidth(new Gauges.Length(2, Gauges.LengthType.Relative));
	majorSettings.setTickHeight(new Gauges.Length(0.5, Gauges.LengthType.Relative));
	majorSettings.setTickAlignment(Gauges.Alignment.InnerInside);
	majorSettings.setLabelAlignment(Gauges.Alignment.InnerCenter);
	majorSettings.setTickOffset(new Gauges.Length(1));
	majorSettings.setLabelOffset(new Gauges.Length(25, Gauges.LengthType.Relative));
	majorSettings.setLabelRotation(Gauges.LabelRotation.BaselineToCenter);
	majorSettings.setFontSize(new Gauges.Length(20, Gauges.LengthType.Relative));
	majorSettings.setNumberPrecision(0);
	majorSettings.setCount(2);

	middleSettings = scale.middleTickSettings;
	middleSettings.setShowLabels(false);
	middleSettings.setTickShape(Gauges.TickShape.Rectangle);
	middleSettings.setTickWidth(new Gauges.Length(1.5, Gauges.LengthType.Relative));
	middleSettings.setTickHeight(new Gauges.Length(1));
	middleSettings.setTickOffset(new Gauges.Length(1));
	middleSettings.setTickAlignment(Gauges.Alignment.InnerInside);
	middleSettings.setCount(10);

	minorSettings = scale.minorTickSettings;
	minorSettings.setShowLabels(false);
	minorSettings.setShowTicks(false);

	pointer = new Pointer();
	pointer.setName("mainPointer");
	pointer.setPointerWidth(new Gauges.Length(24, Gauges.LengthType.Relative));
	pointer.setPointerHeight(new Gauges.Length(48, Gauges.LengthType.Relative));
	pointer.setShape(Gauges.PointerShape.Custom);
	pointer.setIsInteractive(true);
	scale.addPointer(pointer);
}

// oval gauges
for (var i = 0; i < 4; ++i)
{
	let gauge = Gauges.OvalGauge.create(<HTMLCanvasElement>document.getElementById(`og${i}`), false);
	gauge.addEventListener(Gauges.Events.prepaintBackground, cancelPaint.bind(this));
	gauge.addEventListener(Gauges.Events.prepaintForeground, cancelPaint.bind(this));
	gauge.addEventListener(Gauges.Events.prepaintPointer, ovalPrepaintPointer.bind(this));

	let scale = new Gauges.OvalScale(gauge);
	scale.setScaleRelativeRadius(0.45);
	scale.setMinValue(-50);
	scale.setMaxValue(50);
	scale.setFill("Transparent");
	scale.setStroke("Transparent");

	majorSettings = scale.majorTickSettings;
	majorSettings.setTickShape(Gauges.TickShape.Rectangle);
	majorSettings.setTickWidth(new Gauges.Length(12, Gauges.LengthType.Relative));
	majorSettings.setTickHeight(new Gauges.Length(4, Gauges.LengthType.Relative));
	majorSettings.setFontSize(new Gauges.Length(20, Gauges.LengthType.Relative));
	majorSettings.setNumberPrecision(0);
	majorSettings.setTickAlignment(Gauges.Alignment.InnerInside);
	majorSettings.setLabelAlignment(Gauges.Alignment.OuterCenter);
	majorSettings.setLabelOffset(new Gauges.Length(-15, Gauges.LengthType.Relative));
	majorSettings.setLabelRotation(Gauges.LabelRotation.None);
	majorSettings.setCount(5);
	majorSettings.setFill("Black");
	majorSettings.setStroke("Black");

	middleSettings = scale.middleTickSettings;
	middleSettings.setShowLabels(false);
	middleSettings.setTickShape(Gauges.TickShape.Rectangle);
	middleSettings.setTickWidth(new Gauges.Length(12, Gauges.LengthType.Relative));
	middleSettings.setTickHeight(new Gauges.Length(4, Gauges.LengthType.Relative));
	middleSettings.setFill("Black");
	middleSettings.setStroke("Black");

	minorSettings = scale.minorTickSettings;
	minorSettings.setShowTicks(true);
	minorSettings.setTickShape(Gauges.TickShape.Rectangle);
	minorSettings.setFill("Black");
	minorSettings.setStroke("Black");
	minorSettings.setTickWidth(new Gauges.Length(12, Gauges.LengthType.Relative));
	minorSettings.setTickHeight(new Gauges.Length(4, Gauges.LengthType.Relative));

	pointer = new Pointer();
	pointer.setPointerWidth(new Gauges.Length(165, Gauges.LengthType.Relative));
	pointer.setPointerHeight(new Gauges.Length(165, Gauges.LengthType.Relative));
	pointer.setIsInteractive(true);
	scale.addPointer(pointer);
}

//on/off gauge
let gauge = Gauges.OvalGauge.create(<HTMLCanvasElement>document.getElementById('onoff'), false);
gauge.addEventListener(Gauges.Events.prepaintBackground, cancelPaint.bind(this));
gauge.addEventListener(Gauges.Events.prepaintForeground, cancelPaint.bind(this));
gauge.addEventListener(Gauges.Events.prepaintPointer, onOffPrepaintPointer.bind(this));

let scale = new Gauges.OvalScale(gauge);
scale.setStartAngle(225);
scale.setEndAngle(315);
scale.setMinValue(0);
scale.setMaxValue(1);
scale.setFill("Transparent");
scale.setStroke("Transparent");

majorSettings = scale.majorTickSettings;
majorSettings.setTickShape(Gauges.TickShape.Rectangle);
majorSettings.setTickWidth(new Gauges.Length(15, Gauges.LengthType.Relative));
majorSettings.setTickHeight(new Gauges.Length(4, Gauges.LengthType.Relative));
majorSettings.setFontSize(new Gauges.Length(20, Gauges.LengthType.Relative));
majorSettings.setLabelAlignment(Gauges.Alignment.OuterOutside);
majorSettings.setLabelOffset(new Gauges.Length(-10, Gauges.LengthType.Relative));
majorSettings.setLabelRotation(Gauges.LabelRotation.None);
majorSettings.setCount(1);

middleSettings = scale.middleTickSettings;
middleSettings.setShowLabels(false);
middleSettings.setShowTicks(false);

pointer = new Pointer();
pointer.setPointerWidth(new Gauges.Length(140, Gauges.LengthType.Relative));
pointer.setPointerHeight(new Gauges.Length(140, Gauges.LengthType.Relative));
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

	let r = new Gauges.RoundRectangle();
	r.setRoundness(20);
	r.setMargin(new Gauges.Thickness(0.38, 0.055, 0.38, 0.05, true));
	r.setFill(Gauges.Utils.createLinearGradient(0, [0, '#666666', 0.2, '#cccccc', 0.4, '#cccccc', 1, '#888888']));
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

	let r = new Gauges.RoundRectangle();
	r.setRoundness(20);
	r.setFill('black');
	args.paintVisualElement(r, size);

	var rsize = new d.Size(size.width - 2, size.height - 2)
	r.setStroke('white');
	r.setX(1);
	r.setY(1);
	r.setFill(Gauges.Utils.createLinearGradient(0, [0, 'white', 1, '#666666']));
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

	let outer = new Gauges.Ellipse();
	outer.setFill(Gauges.Utils.createLinearGradient(0, [0, '#a0c0c0', 1, '#103030']));
	args.paintVisualElement(outer, size);

	let inner1 = new Gauges.Ellipse();
	inner1.setFill('#608080');
	inner1.setMargin(new Gauges.Thickness(0.15));
	args.paintVisualElement(inner1, size);

	let inner2 = new Gauges.Ellipse();
	inner2.setFill('#608080');
	inner2.setMargin(new Gauges.Thickness(0.2));
	args.paintVisualElement(inner2, size);

	context.strokeStyle = 'black';
	context.moveTo(size.width / 2, size.height / 2);
	context.lineTo(size.width * 0.9, size.height / 2);
	context.stroke();
	context.restore();

	var dot = new Gauges.Ellipse();
	dot.setFill('red');
	dot.setMargin(new Gauges.Thickness(0.9, 0.45, 0, 0.45));
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