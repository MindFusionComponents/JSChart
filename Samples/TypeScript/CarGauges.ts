
import MindFusion = require("mindfusion-common");
import Gauges = require("gauges-library");

var d = MindFusion.Drawing;
var OvalScale = Gauges.OvalScale;
var Length = Gauges.Length;
var LengthType = Gauges.LengthType;
var Thickness = Gauges.Thickness;
var Alignment = Gauges.Alignment;
var LabelRotation = Gauges.LabelRotation;
var TickShape = Gauges.TickShape;
var PointerShape = Gauges.PointerShape;

let speedometer = Gauges.OvalGauge.create(<HTMLCanvasElement>document.getElementById('speedometer'), false);
speedometer.addEventListener(Gauges.Events.prepaintBackground, onSpeedometerPrepaintBackground.bind(this));
speedometer.addEventListener(Gauges.Events.prepaintPointer, onPrepaintPointer.bind(this));

let cyclometer = Gauges.OvalGauge.create(<HTMLCanvasElement>document.getElementById('cyclometer'), false);
cyclometer.addEventListener(Gauges.Events.prepaintBackground, onSpeedometerPrepaintBackground.bind(this));
cyclometer.addEventListener(Gauges.Events.prepaintPointer, onPrepaintPointer.bind(this));

let batteryMeter = Gauges.OvalGauge.create(<HTMLCanvasElement>document.getElementById('batteryMeter'), false);
batteryMeter.addEventListener(Gauges.Events.prepaintBackground, onBatteryPrepaintBackground.bind(this));
batteryMeter.addEventListener(Gauges.Events.prepaintForeground, onBatteryPrepaintForeground.bind(this));
batteryMeter.addEventListener(Gauges.Events.prepaintPointer, onPrepaintPointer.bind(this));

let oilMeter = Gauges.OvalGauge.create(<HTMLCanvasElement>document.getElementById('oilMeter'), false);
oilMeter.addEventListener(Gauges.Events.prepaintBackground, onBatteryPrepaintBackground.bind(this));
oilMeter.addEventListener(Gauges.Events.prepaintForeground, onBatteryPrepaintForeground.bind(this));
oilMeter.addEventListener(Gauges.Events.prepaintPointer, onPrepaintPointer.bind(this));

let speed = <HTMLInputElement>document.getElementById('speed');
speed.onchange = speedChanged.bind(speed);

let fuel = <HTMLInputElement>document.getElementById('fuel');
fuel.onchange = fuelChanged.bind(fuel);

let rpm = <HTMLInputElement>document.getElementById('rpm');
rpm.onchange = valueChanged.bind(rpm, ['cyclometer']);

let volt = <HTMLInputElement>document.getElementById('volt');
volt.onchange = valueChanged.bind(volt, ['batteryMeter']);

let oil = <HTMLInputElement>document.getElementById('oil');
oil.onchange = valueChanged.bind(oil, ['oilMeter']);

// kphScale
let kphScale = new OvalScale(speedometer);
kphScale.setMinValue(0);
kphScale.setMaxValue(305);
kphScale.setStartAngle(120);
kphScale.setEndAngle(420);
kphScale.setStartWidth(new Length(10, LengthType.Relative));
kphScale.setEndWidth(new Length(10, LengthType.Relative));
kphScale.setFill('Tansparent');
kphScale.setStroke('Transparent');
kphScale.setMargin(new Thickness(0.20, 0.20, 0.20, 0.20));

let majorSettings = kphScale.majorTickSettings;
majorSettings.setTickShape(TickShape.Rectangle);
majorSettings.setTickWidth(new Length(4, LengthType.Relative));
majorSettings.setTickHeight(new Length(4, LengthType.Relative));
majorSettings.setFontSize(new Length(9, LengthType.Relative));
majorSettings.setNumberPrecision(0);
majorSettings.setFill('White');
majorSettings.setStroke('Transparent');
majorSettings.setLabelForeground('White');
majorSettings.setLabelAlignment(Alignment.InnerCenter);
majorSettings.setLabelRotation(LabelRotation.Auto);
majorSettings.setTickAlignment(Alignment.InnerCenter);
majorSettings.setLabelOffset(new Length(8, LengthType.Relative));
majorSettings.setStep(20);

var middleSettings = kphScale.middleTickSettings;
middleSettings.setShowLabels(false);
middleSettings.setShowTicks(false);

var minorSettings = kphScale.minorTickSettings;
minorSettings.setShowLabels(false);
minorSettings.setShowTicks(false);

// fuelScale
let fuelScale = new Gauges.OvalScale(speedometer);
fuelScale.setMinValue(0);
fuelScale.setMaxValue(100);
fuelScale.setStartAngle(120);
fuelScale.setEndAngle(60);
fuelScale.setStartWidth(new Length(0, LengthType.Relative));
fuelScale.setEndWidth(new Length(0, LengthType.Relative));
fuelScale.setFill('Gray');
fuelScale.setStroke('White');
fuelScale.setMargin(new Thickness(0.25, 0.4, 0.25, 0.1));

majorSettings = fuelScale.majorTickSettings;
majorSettings.setTickShape(TickShape.Rectangle);
majorSettings.setTickWidth(new Length(10, LengthType.Relative));
majorSettings.setTickHeight(new Length(3, LengthType.Relative));
majorSettings.setFontSize(new Length(16, LengthType.Relative));
majorSettings.setNumberPrecision(0);
majorSettings.setFill('White');
majorSettings.setStroke('Transparent');
majorSettings.setLabelForeground('White');
majorSettings.setLabelAlignment(Alignment.InnerCenter);
majorSettings.setLabelRotation(LabelRotation.None);
majorSettings.setTickAlignment(Alignment.InnerInside);
majorSettings.setLabelOffset(new Length(18, LengthType.Relative));
majorSettings.setCount(1);

middleSettings = fuelScale.middleTickSettings;
middleSettings.setTickShape(TickShape.Rectangle);
middleSettings.setTickWidth(new Length(8, LengthType.Relative));
middleSettings.setTickHeight(new Length(3, LengthType.Relative));
middleSettings.setShowLabels(false);
middleSettings.setFill('White');
middleSettings.setStroke('Transparent');
middleSettings.setTickAlignment(Alignment.InnerCenter);
middleSettings.setCount(3);

minorSettings = fuelScale.minorTickSettings;
minorSettings.setShowTicks(true);
minorSettings.setTickShape(TickShape.Rectangle);
minorSettings.setTickWidth(new Length(5, LengthType.Relative));
minorSettings.setTickHeight(new Length(1.5, LengthType.Relative));
minorSettings.setShowLabels(false);
minorSettings.setFill('White');
minorSettings.setStroke('Transparent');
minorSettings.setTickAlignment(Alignment.InnerInside);
minorSettings.setCount(6);

let range = new Gauges.Range();
range.setMinValue(0);
range.setMaxValue(15);
range.setOffset(new Length(6, LengthType.Absolute));
range.setFill('Red');
range.setStroke('Transparent');
range.setStartWidth(new Length(4, LengthType.Relative));
range.setEndWidth(new Length(4, LengthType.Relative));
fuelScale.addRange(range);

range = new Gauges.Range();
range.setMinValue(15);
range.setMaxValue(20);
range.setOffset(new Length(6, LengthType.Absolute));
range.setFill('Yellow');
range.setStroke('Transparent');
range.setStartWidth(new Length(4, LengthType.Relative));
range.setEndWidth(new Length(4, LengthType.Relative));
fuelScale.addRange(range);

let pointer = new Gauges.Pointer();
pointer.setName('fuelPointer');
pointer.setFill({ "type": "LinearGradientBrush", "color1": "#CCCCCC", "color2": "#666666", "angle": 225 });
pointer.setStroke('Gray');
pointer.setPointerHeight(new Length(20, LengthType.Relative));
pointer.setPointerWidth(new Length(100, LengthType.Relative));
pointer.setShape(PointerShape.Needle);
fuelScale.addPointer(pointer);

// outer scale
let outerScale = new Gauges.OvalScale(speedometer);
outerScale.setMinValue(0);
outerScale.setMaxValue(190);
outerScale.setStartWidth(new Length(10, LengthType.Relative));
outerScale.setEndWidth(new Length(10, LengthType.Relative));
outerScale.setFill('Transparent');
outerScale.setStroke('Transparent');

majorSettings = outerScale.majorTickSettings;
majorSettings.setShowLabels(false);
majorSettings.setTickShape(TickShape.Rectangle);
majorSettings.setTickWidth(new Length(5, LengthType.Relative));
majorSettings.setTickHeight(new Length(3, LengthType.Relative));
majorSettings.setFill("#CCCCCC");
majorSettings.setStroke('Transparent');
majorSettings.setTickAlignment(Alignment.OuterOutside);
majorSettings.setStep(20);

middleSettings = outerScale.middleTickSettings;
middleSettings.setShowLabels(false);
middleSettings.setTickShape(TickShape.Rectangle);
middleSettings.setTickWidth(new Length(5, LengthType.Relative));
middleSettings.setTickHeight(new Length(3, LengthType.Relative));
middleSettings.setFill("#999999");
middleSettings.setStroke('Transparent');
middleSettings.setTickAlignment(Alignment.OuterOutside);
middleSettings.setCount(2);

minorSettings = outerScale.minorTickSettings;
minorSettings.setShowLabels(false);
minorSettings.setShowTicks(false);

// mph scale
let mphScale = new Gauges.OvalScale(speedometer);
mphScale.setMinValue(0);
mphScale.setMaxValue(190);
mphScale.setStartWidth(new Length(10, LengthType.Relative));
mphScale.setEndWidth(new Length(10, LengthType.Relative));
mphScale.setFill('Transparent');
mphScale.setStroke('Transparent');

majorSettings = mphScale.majorTickSettings;
majorSettings.setTickShape(TickShape.Rectangle);
majorSettings.setTickWidth(new Length(10, LengthType.Relative));
majorSettings.setTickHeight(new Length(2, LengthType.Relative));
majorSettings.setFontSize(new Length(9, LengthType.Relative));
majorSettings.setNumberPrecision(0);
majorSettings.setFill('White');
majorSettings.setStroke('Transparent');
majorSettings.setLabelForeground('White');
majorSettings.setLabelRotation(LabelRotation.Auto);
majorSettings.setTickAlignment(Alignment.OuterInside);
majorSettings.setStep(20);

let interval = new Gauges.CustomInterval();
interval.setMinValue(60);
interval.setMaxValue(80);
interval.setFill('Red');
majorSettings.addCustomInterval(interval);

middleSettings = mphScale.middleTickSettings;
middleSettings.setShowLabels(false);
middleSettings.setTickShape(TickShape.Rectangle);
middleSettings.setTickWidth(new Length(8, LengthType.Relative));
middleSettings.setTickHeight(new Length(3, LengthType.Relative));
middleSettings.setFill('White');
middleSettings.setStroke('Transparent');
middleSettings.setTickAlignment(Alignment.OuterInside);
middleSettings.setCount(2);

interval = new Gauges.CustomInterval();
interval.setMinValue(3);
interval.setMaxValue(30);
interval.setFill('Red');
middleSettings.addCustomInterval(interval);

minorSettings = mphScale.minorTickSettings;
minorSettings.setShowTicks(true);
minorSettings.setShowLabels(false);
minorSettings.setTickShape(TickShape.Rectangle);
minorSettings.setTickWidth(new Length(6, LengthType.Relative));
minorSettings.setTickHeight(new Length(1, LengthType.Relative));
minorSettings.setFill('White');
minorSettings.setStroke('Transparent');
minorSettings.setTickAlignment(Alignment.OuterInside);
minorSettings.setCount(5);
minorSettings.addCustomInterval(interval);

pointer = new Gauges.Pointer();
pointer.setName("speedPointer");
pointer.setFill({ "type": "LinearGradientBrush", "color1": "#CCCCCC", "color2": "#666666", "angle": 225 });
pointer.setStroke("#333333");
pointer.setPointerHeight(new Length(20, LengthType.Relative));
pointer.setPointerWidth(new Length(100, LengthType.Relative));
pointer.setShape(PointerShape.Needle);
mphScale.addPointer(pointer);

// cyclometer
// rpmScale
var rpmScale = new Gauges.OvalScale(cyclometer);
rpmScale.setMinValue(0);
rpmScale.setMaxValue(90);
rpmScale.setStartAngle(120);
rpmScale.setEndAngle(420);
rpmScale.setFill('Transparent');
rpmScale.setStroke('Transparent');

majorSettings = rpmScale.majorTickSettings;
majorSettings.setTickShape(TickShape.Ellipse);
majorSettings.setTickWidth(new Length(10, LengthType.Relative));
majorSettings.setTickHeight(new Length(2, LengthType.Relative));
majorSettings.setFontSize(new Length(9, LengthType.Relative));
majorSettings.setNumberPrecision(0);
majorSettings.setFill('White');
majorSettings.setStroke('Transparent');
majorSettings.setLabelForeground('White');
majorSettings.setLabelAlignment(Alignment.InnerCenter);
majorSettings.setLabelRotation(LabelRotation.Auto);
majorSettings.setTickAlignment(Alignment.TrueCenter);
majorSettings.setLabelOffset(new Length(4, LengthType.Relative));
majorSettings.setStep(10);

interval = new Gauges.CustomInterval();
interval.setMinValue(60);
interval.setFill('Red');
majorSettings.addCustomInterval(interval);

middleSettings = rpmScale.middleTickSettings;
middleSettings.setShowLabels(false);
middleSettings.setTickShape(TickShape.Ellipse);
middleSettings.setTickWidth(new Length(6, LengthType.Relative));
middleSettings.setTickHeight(new Length(3, LengthType.Relative));
middleSettings.setFontSize(new Length(12, LengthType.Relative));
middleSettings.setFill('White');
middleSettings.setStroke('Transparent');
middleSettings.setLabelForeground('rgb(50, 50, 50)');
middleSettings.setTickAlignment(Alignment.TrueCenter);
middleSettings.setCount(5);
middleSettings.addCustomInterval(interval);

minorSettings = rpmScale.minorTickSettings;
minorSettings.setShowLabels(false);
minorSettings.setShowTicks(false);

range = new Gauges.Range();
range.setMinValue(60);
range.setMaxValue(90);
range.setFill('rgba(255, 0, 0, 0.4)');
range.setStroke('Transparent');
range.setStartWidth(new Length(0, LengthType.Relative));
range.setEndWidth(new Length(8, LengthType.Relative));
range.setAlignment(Alignment.TrueCenter);
rpmScale.addRange(range);

pointer = new Gauges.Pointer();
pointer.setFill({ "type": "LinearGradientBrush", "color1": "#CCCCCC", "color2": "#666666", "angle": 225 });
pointer.setStroke("#333333");
pointer.setPointerHeight(new Length(20, LengthType.Relative));
pointer.setPointerWidth(new Length(100, LengthType.Relative));
pointer.setShape(PointerShape.Needle);
rpmScale.addPointer(pointer);

// batteryMeter
// batteryScale
let batteryScale = new Gauges.OvalScale(batteryMeter);
batteryScale.setMinValue(0);
batteryScale.setMaxValue(96);
batteryScale.setStartAngle(195);
batteryScale.setEndAngle(345);
batteryScale.setScaleRelativeCenter(new d.Point(0.5, 0.9));
batteryScale.setScaleRelativeRadius(0.85);
batteryScale.setFill('White');
batteryScale.setStroke("#808080");

majorSettings = batteryScale.majorTickSettings;
majorSettings.setTickShape(TickShape.Rectangle);
majorSettings.setTickWidth(new Length(12, LengthType.Relative));
majorSettings.setTickHeight(new Length(4, LengthType.Relative));
majorSettings.setTickOffset(new Length(-3, LengthType.Relative));
majorSettings.setFontSize(new Length(20, LengthType.Relative));
majorSettings.setNumberPrecision(0);
majorSettings.setFill('White');
majorSettings.setStroke('White');
majorSettings.setLabelForeground('White');
majorSettings.setLabelAlignment(Alignment.InnerInside);
majorSettings.setLabelRotation(LabelRotation.None);
majorSettings.setTickAlignment(Alignment.CenterInside);
majorSettings.setLabelOffset(new Length(8, LengthType.Relative));
majorSettings.setCount(4);

middleSettings = batteryScale.middleTickSettings;
middleSettings.setShowLabels(false);
middleSettings.setShowTicks(false);

minorSettings = batteryScale.minorTickSettings;
minorSettings.setShowLabels(false);
minorSettings.setShowTicks(false);

range = new Gauges.Range();
range.setMinValue(0);
range.setMaxValue(30);
range.setOffset(new Length(-1, LengthType.Absolute));
range.setFill('Red');
range.setStroke('Transparent');
range.setStartWidth(new Length(6, LengthType.Relative));
range.setEndWidth(new Length(6, LengthType.Relative));
range.setAlignment(Alignment.OuterOutside);
batteryScale.addRange(range);

range = new Gauges.Range();
range.setMinValue(30);
range.setMaxValue(48);
range.setOffset(new Length(-1, LengthType.Absolute));
range.setFill('Yellow');
range.setStroke('Transparent');
range.setStartWidth(new Length(6, LengthType.Relative));
range.setEndWidth(new Length(6, LengthType.Relative));
range.setAlignment(Alignment.OuterOutside);
batteryScale.addRange(range);

range = new Gauges.Range();
range.setMinValue(48);
range.setMaxValue(96);
range.setOffset(new Length(-1, LengthType.Absolute));
range.setFill('Green');
range.setStroke('Transparent');
range.setStartWidth(new Length(6, LengthType.Relative));
range.setEndWidth(new Length(6, LengthType.Relative));
range.setAlignment(Alignment.OuterOutside);
batteryScale.addRange(range);

pointer = new Gauges.Pointer();
pointer.setFill({ "type": "LinearGradientBrush", "color1": "#CCCCCC", "color2": "#666666", "angle": 225 });
pointer.setStroke("#333333");
pointer.setPointerHeight(new Length(22, LengthType.Relative));
pointer.setPointerWidth(new Length(110, LengthType.Relative));
pointer.setShape(PointerShape.Needle);
batteryScale.addPointer(pointer);

// oilMeter
// oilScale
let oilScale = new Gauges.OvalScale(oilMeter);
oilScale.setMinValue(0);
oilScale.setMaxValue(96);
oilScale.setStartAngle(195);
oilScale.setEndAngle(345);
oilScale.setStartWidth(new Length(6, LengthType.Relative));
oilScale.setEndWidth(new Length(6, LengthType.Relative));
oilScale.setScaleRelativeCenter(new d.Point(0.5, 0.9));
oilScale.setScaleRelativeRadius(0.85);
oilScale.setFill('White');
oilScale.setStroke('Transparent');

majorSettings = oilScale.majorTickSettings;
majorSettings.setTickShape(TickShape.Rectangle);
majorSettings.setTickWidth(new Length(12, LengthType.Relative));
majorSettings.setTickHeight(new Length(4, LengthType.Relative));
majorSettings.setTickOffset(new Length(-3, LengthType.Relative));
majorSettings.setFill('White');
majorSettings.setShowLabels(false);
majorSettings.setTickAlignment(Alignment.CenterInside);
majorSettings.setCount(4);

middleSettings = oilScale.middleTickSettings;
middleSettings.setShowLabels(false);
middleSettings.setShowTicks(false);

minorSettings = oilScale.minorTickSettings;
minorSettings.setShowLabels(false);
minorSettings.setShowTicks(false);

range = new Gauges.Range();
range.setMinValue(0);
range.setMaxValue(20);
range.setOffset(new Length(-1, LengthType.Absolute));
range.setFill('Red');
range.setStroke('Transparent');
range.setStartWidth(new Length(6, LengthType.Relative));
range.setEndWidth(new Length(0, LengthType.Relative));
range.setAlignment(Alignment.OuterOutside);
oilScale.addRange(range);

range = new Gauges.Range();
range.setMinValue(80);
range.setMaxValue(100);
range.setOffset(new Length(-1, LengthType.Absolute));
range.setFill('Red');
range.setStroke('Transparent');
range.setStartWidth(new Length(0, LengthType.Relative));
range.setEndWidth(new Length(6, LengthType.Relative));
range.setAlignment(Alignment.OuterOutside);
oilScale.addRange(range);

pointer = new Gauges.Pointer();
pointer.setFill({ "type": "LinearGradientBrush", "color1": "#CCCCCC", "color2": "#666666", "angle": 225 });
pointer.setStroke("#333333");
pointer.setPointerHeight(new Length(22, LengthType.Relative));
pointer.setPointerWidth(new Length(110, LengthType.Relative));
pointer.setShape(PointerShape.Needle);
oilScale.addPointer(pointer);

function onSpeedometerPrepaintBackground(sender, args)
{
	args.setCancelDefaultPainting(true);

	var context = args.getContext();
	var element = args.getElement();
	var size = sender.getSize();

	var ellipse = new Gauges.Ellipse();
	ellipse.setFill('gray');
	ellipse.setStroke('transparent');
	args.paintVisualElement(ellipse, size);

	var ellipse = new Gauges.Ellipse();
	ellipse.setFill(Gauges.Utils.createLinearGradient(300, [0, '#303030', 0.2, '#303030', 0.8, '#909090', 1, '#909090']));
	ellipse.setStroke('transparent');
	ellipse.setMargin(new Gauges.Thickness(0.015));
	args.paintVisualElement(ellipse, size);
};

function onPrepaintPointer(sender, args)
{
	args.setCancelDefaultPainting(true);

	var context = args.getContext();
	var element = args.getElement();
	var size = element.getRenderSize();
	var psize = new d.Size(0.2 * size.width, size.height);

	context.save();
	context.transform.apply(context, element.transform.matrix());

	context.beginPath();
	context.arc(psize.width / 2, psize.height / 2, psize.height / 2, 0, 2 * Math.PI, false);
	var fill = element.getFill();
	context.fillStyle = Gauges.Utils.getBrush(context, fill, new d.Rect(0, 0, size.width, size.height), false);
	context.fill();
	context.strokeStyle = '#333333';
	context.stroke();

	context.beginPath();
	context.moveTo(0, 0.425 * size.height);
	context.lineTo(0, 0.575 * size.height);
	context.lineTo(0.95 * size.width, 0.575 * size.height);
	context.lineTo(size.width, 0.5 * size.height);
	context.lineTo(0.95 * size.width, 0.425 * size.height);
	context.fillStyle = 'red';
	context.fill();
	context.stroke();

	context.restore();
};

function onBatteryPrepaintBackground(sender, args)
{
	args.setCancelDefaultPainting(true);

	var context = args.getContext();
	var element = args.getElement();
	var size = element.getRenderSize();
	var gaugeSize = sender.getSize();
	var widthExtent = (gaugeSize.width - gaugeSize.height) / 2

	var rect = new Gauges.RoundRectangle();
	rect.setRoundness(20);
	rect.setX(-widthExtent);
	rect.setFill(Gauges.Utils.createLinearGradient(45, [0.2, '#909090', 0.8, '#303030']));
	rect.setStroke('transparent');
	args.paintVisualElement(rect, gaugeSize);

	var rect = new Gauges.RoundRectangle();
	rect.setRoundness(20);
	rect.setMargin(new Gauges.Thickness(0.015 * gaugeSize.width, 0.015 * gaugeSize.width, 0.015 * gaugeSize.width, 0.015 * gaugeSize.width, false));
	rect.setX(-widthExtent);
	rect.setFill(Gauges.Utils.createLinearGradient(45, [0.2, '#303030', 0.8, '#909090']));
	rect.setStroke('transparent');
	args.paintVisualElement(rect, gaugeSize);

	var rect = new Gauges.RoundRectangle();
	rect.setRoundness(20);
	rect.setMargin(new Gauges.Thickness(0.03 * gaugeSize.width, 0.03 * gaugeSize.width, 0.03 * gaugeSize.width, 0.03 * gaugeSize.width, false));
	rect.setX(-widthExtent);
	rect.setFill('#606060');
	rect.setStroke('transparent');
	args.paintVisualElement(rect, gaugeSize);

	var rect = new Gauges.RoundRectangle();
	rect.setRoundness(20);
	rect.setMargin(new Gauges.Thickness(0.06 * gaugeSize.width, 0.06 * gaugeSize.width, 0.06 * gaugeSize.width, 0.06 * gaugeSize.width, false));
	rect.setX(-widthExtent);
	rect.setFill(Gauges.Utils.createRadialGradient(null, null, [0.2, '#606060', 0.8, '#bbbbbb'], null, null));
	rect.setStroke('transparent');
	args.paintVisualElement(rect, gaugeSize);
};

function onBatteryPrepaintForeground(sender, args)
{
	args.setCancelDefaultPainting(true);

	var context = args.getContext();
	var element = args.getElement();
	var size = element.getRenderSize();

	var area = new Gauges.ArcArea();
	area.setStartAngle(160);
	area.setEndAngle(-20);
	area.setMargin(new Gauges.Thickness(0.03));
	area.setFill(Gauges.Utils.createRadialGradient(null, null, [0, 'rgba(255,255,255,0)', 1, 'rgba(255,255,255,0.6)'], null, null));
	args.paintVisualElement(area, size);

	var area = new Gauges.ArcArea();
	area.setStartAngle(140);
	area.setEndAngle(-40);
	area.setMargin(new Gauges.Thickness(0.03));
	area.setFill(Gauges.Utils.createRadialGradient(null, null, [0, 'rgba(255,255,255,0)', 1, 'rgba(255,255,255,0.2)'], null, null));
	args.paintVisualElement(area, size);
};

function speedChanged()
{
	if (isNaN(this.value)) return;
	var speedometer = Gauges.OvalGauge.find('speedometer');
	var speedPointer: any = speedometer.getElementByName("speedPointer");
	speedPointer.setValue(+this.value);
};

function fuelChanged()
{
	if (isNaN(this.value)) return;
	var speedometer = Gauges.OvalGauge.find('speedometer');
	let fuelPointer: any = speedometer.getElementByName("fuelPointer");
	fuelPointer.setValue(+this.value);
};

function valueChanged(id)
{
	if (isNaN(this.value)) return;
	var gauge = Gauges.OvalGauge.find(id);
	var pointer = gauge.scales[0].pointers[0];
	pointer.setValue(+this.value);
};