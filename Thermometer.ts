import { Drawing } from 'MindFusion.Common';
import g = require('MindFusion.Gauges');

var d = Drawing;
var LinearScale = g.LinearScale;
var Orientation = g.Orientation;
var Length = g.Length;
var LengthType = g.LengthType;
var TickShape = g.TickShape;
var Alignment = g.Alignment;
var LabelRotation = g.LabelRotation;
var Pointer = g.Pointer;
var Range = g.Range;

let gauge = g.LinearGauge.create(<HTMLCanvasElement>$('#gauge')[0], false);
gauge.setOrientation(Orientation.Vertical);
gauge.addEventListener(g.Events.prepaintBackground, onPrepaintBackground.bind(this));
gauge.addEventListener(g.Events.prepaintForeground, onPrepaintForeground.bind(this));
gauge.addEventListener(g.Events.prepaintScale, onPrepaintScale.bind(this));

var scale = new LinearScale(gauge);
scale.setOrientation(Orientation.Vertical);
scale.setFill("Transparent");
scale.setStroke("Green");
scale.setMinValue(0);
scale.setMaxValue(100);
scale.setLeft(new Length(50, LengthType.Relative));
scale.setTop(new Length(5, LengthType.Relative));
scale.setScaleLength(new Length(80, LengthType.Relative));
scale.setStartWidth(new Length(8));
scale.setEndWidth(new Length(8));

var majorSettings = scale.majorTickSettings;
majorSettings.setTickShape(TickShape.Rectangle);
majorSettings.setTickWidth(new Length(10));
majorSettings.setTickHeight(new Length(1));
majorSettings.setTickAlignment(Alignment.InnerInside);
majorSettings.setLabelAlignment(Alignment.InnerInside);
majorSettings.setTickOffset(new Length(0));
majorSettings.setLabelOffset(new Length(12));
majorSettings.setLabelRotation(LabelRotation.Sideways);
majorSettings.setFontSize(new Length(10, LengthType.Relative));
majorSettings.setNumberPrecision(0);
majorSettings.setFill("Transparent");
majorSettings.setStroke("White");
majorSettings.setLabelForeground("White");
majorSettings.setCount(10);

var middleSettings = scale.middleTickSettings;
middleSettings.setShowLabels(false);
middleSettings.setTickShape(TickShape.Rectangle);
middleSettings.setTickWidth(new Length(4));
middleSettings.setTickHeight(new Length(1));
middleSettings.setTickOffset(new Length(0));
middleSettings.setTickAlignment(Alignment.InnerInside);
middleSettings.setFill("Transparent");
middleSettings.setStroke("White");
middleSettings.setCount(5);

var minorSettings = scale.minorTickSettings;
minorSettings.setShowTicks(false);

var scale2 = new LinearScale(gauge);
scale2.setOrientation(Orientation.Vertical);
scale2.setFill("Transparent");
scale2.setStroke("White");
scale2.setMinValue(32);
scale2.setMaxValue(212);
scale2.setLeft(new Length(50, LengthType.Relative));
scale2.setTop(new Length(5, LengthType.Relative));
scale2.setScaleLength(new Length(80, LengthType.Relative));
scale2.setStartWidth(new Length(8));
scale2.setEndWidth(new Length(8));

majorSettings = scale2.majorTickSettings;
majorSettings.setTickShape(TickShape.Rectangle);
majorSettings.setTickWidth(new Length(10));
majorSettings.setTickHeight(new Length(1));
majorSettings.setTickAlignment(Alignment.OuterOutside);
majorSettings.setLabelAlignment(Alignment.OuterOutside);
majorSettings.setTickOffset(new Length(0));
majorSettings.setLabelOffset(new Length(-12));
majorSettings.setLabelRotation(LabelRotation.Sideways);
majorSettings.setFontSize(new Length(10, LengthType.Relative));
majorSettings.setNumberPrecision(0);
majorSettings.setFill("Transparent");
majorSettings.setStroke("White");
majorSettings.setLabelForeground("White");
majorSettings.setCount(10);

middleSettings = scale2.middleTickSettings;
middleSettings.setShowLabels(false);
middleSettings.setTickShape(TickShape.Rectangle);
middleSettings.setTickWidth(new Length(4));
middleSettings.setTickHeight(new Length(1));
middleSettings.setTickAlignment(Alignment.OuterOutside);
middleSettings.setFill("Transparent");
middleSettings.setStroke("Transparent");
middleSettings.setCount(5);

minorSettings = scale2.minorTickSettings;
minorSettings.setShowTicks(false);

var pointer = new Pointer();
pointer.setIsInteractive(true);
pointer.setFill("Red");
pointer.setValue(0);
scale2.addPointer(pointer);
gauge.addEventListener(g.Events.valueChanging, onPointerChanged, pointer);
gauge.addEventListener(g.Events.valueChanged, onPointerChanged, pointer);

var range = new Range();
range.setAlignment(Alignment.TrueCenter);
range.setMinValue(scale2.getMinValue() - 12);
range.setMaxValue(50);
range.setAutoSize(true);
range.setFill(g.Utils.createLinearGradient(0, [
	0.00, "#ffaa00",
	0.30, "rgba(255, 255, 102, 0.4)",
	0.31, "rgba(255, 255, 255, 0.6)",
	0.35, "rgba(255, 255, 102, 0.4)",
	1.00, "#ffaa00"]));
range.setStroke("Transparent");
scale2.addRange(range);

range = new Range();
range.setAlignment(Alignment.OuterOutside);
range.setMinValue(150);
range.setMaxValue(212);
range.setStartWidth(new Length(0));
range.setEndWidth(new Length(10));
range.setFill(g.Utils.createLinearGradient(90, [
	0.25, "Yellow",
    0.90, "#ce0000"]));
range.setStroke("White");
scale2.addRange(range);

function onPrepaintBackground(sender, args)
{
	args.setCancelDefaultPainting(true);

	let context = args.getContext();
	let element = args.getElement();
	let size = element.getRenderSize();

	let rect = new g.RoundRectangle();
	rect.setRoundness(20);
	rect.setMargin(new g.Thickness(3, 3, 3, 3, false));
	rect.setFill(g.Utils.createLinearGradient(
		45,	[0, '#9a9a9a', 0.6, '#212121']));
	rect.setStroke('rgba(255,255,255,0.1)');
	args.paintVisualElement(rect, size);

	let rect2 = new g.RoundRectangle();
	rect2.setRoundness(20);
	rect2.setStroke('#7a7a7a');
	args.paintVisualElement(rect2, size);
}

function onPrepaintForeground(sender, args)
{
	args.setCancelDefaultPainting(true);

	let context = args.getContext();
	let element = args.getElement();
	let size = element.getRenderSize();

	let rect = new g.RoundRectangle();
	rect.setRoundness(20);
	rect.setMargin(new g.Thickness(3, 3, 3, 3, false));
	rect.setFill(g.Utils.createLinearGradient(
		45, [0.2, 'rgba(255,255,255,0.18)', 0.6, 'rgba(255,255,255,0)']));
	args.paintVisualElement(rect, size);
}

function onPrepaintScale(sender, args)
{
	let context = args.getContext();
	let element = args.getElement();
	let size = element.getRenderSize();

	let el = new g.Ellipse();
	el.setMargin(new g.Thickness(0.35, 0.9, 0.35, 0.01, true));
	el.setFill(g.Utils.createRadialGradient(
		null, null, [0, '#990000', 1, '#ff6666'], null, null));
	el.setStroke('white');
	args.paintVisualElement(el, size);
}

function onPointerChanged(sender, args)
{
	let range = sender.parent.getRanges()[0];
	range.setMaxValue(args.getNewValue());
}