define(["require", "exports", 'MindFusion.Common', 'MindFusion.Gauges'], function (require, exports, MindFusion_Common_1, g) {
    "use strict";
    var OvalScale = g.OvalScale;
    var Length = g.Length;
    var LengthType = g.LengthType;
    var Thickness = g.Thickness;
    var Alignment = g.Alignment;
    var LabelRotation = g.LabelRotation;
    var TickShape = g.TickShape;
    var Pointer = g.Pointer;
    var PointerShape = g.PointerShape;
    var clock = g.OvalGauge.create($('#clock')[0], false);
    clock.addEventListener(g.Events.prepaintBackground, onPrepaintBackground.bind(this));
    clock.addEventListener(g.Events.prepaintPointer, onPrepaintPointer.bind(this));
    var scale = new OvalScale(clock);
    scale.setMinValue(0);
    scale.setMaxValue(60);
    scale.setStartAngle(-90);
    scale.setEndAngle(270);
    scale.setFill('Transparent');
    scale.setStroke('Transparent');
    var majorSettings = scale.majorTickSettings;
    majorSettings.setShowLabels(false);
    majorSettings.setTickShape(TickShape.Rectangle);
    majorSettings.setTickWidth(new Length(10, LengthType.Relative));
    majorSettings.setTickHeight(new Length(1, LengthType.Relative));
    majorSettings.setFill('#5E6263');
    majorSettings.setStroke('#5E6263');
    majorSettings.setTickAlignment(Alignment.OuterInside);
    majorSettings.setCount(12);
    var middleSettings = scale.middleTickSettings;
    middleSettings.setShowLabels(false);
    middleSettings.setTickShape(TickShape.Ellipse);
    middleSettings.setTickWidth(new Length(3, LengthType.Relative));
    middleSettings.setTickHeight(new Length(3, LengthType.Relative));
    middleSettings.setFill('White');
    middleSettings.setStroke('White');
    middleSettings.setTickAlignment(Alignment.OuterInside);
    middleSettings.setCount(5);
    var minorSettings = scale.minorTickSettings;
    minorSettings.setShowLabels(false);
    minorSettings.setShowTicks(false);
    var now = new Date();
    var pointer = new Pointer();
    pointer.setName('HourHand');
    pointer.setFill('Transparent');
    pointer.setStroke('#333333');
    pointer.setPointerWidth(new Length(50, LengthType.Relative));
    pointer.setPointerHeight(new Length(4, LengthType.Relative));
    pointer.setShape(PointerShape.Needle);
    pointer.setValue((now.getHours() * 5) % 60);
    scale.addPointer(pointer);
    pointer = new Pointer();
    pointer.setName('MinuteHand');
    pointer.setFill('Transparent');
    pointer.setStroke('#333333');
    pointer.setPointerWidth(new Length(80, LengthType.Relative));
    pointer.setPointerHeight(new Length(4, LengthType.Relative));
    pointer.setShape(PointerShape.Needle);
    pointer.setValue(now.getMinutes() % 60);
    scale.addPointer(pointer);
    pointer = new Pointer();
    pointer.setName('SecondHand');
    pointer.setFill('Transparent');
    pointer.setStroke('#333333');
    pointer.setPointerWidth(new Length(90, LengthType.Relative));
    pointer.setPointerHeight(new Length(4, LengthType.Relative));
    pointer.setShape(PointerShape.Needle);
    pointer.setValue(now.getSeconds());
    scale.addPointer(pointer);
    setInterval(function () { updateTime(); }, 1000);
    function updateTime() {
        var clock = g.OvalGauge.find("clock");
        var hourHand = clock.getElementByName("HourHand");
        var minuteHand = clock.getElementByName("MinuteHand");
        var secondHand = clock.getElementByName("SecondHand");
        var now = new Date();
        hourHand.setValue((now.getHours() * 5) % 60);
        minuteHand.setValue(now.getMinutes() % 60);
        secondHand.setValue(now.getSeconds());
    }
    function onPrepaintBackground(sender, args) {
        args.setCancelDefaultPainting(true);
        var context = args.getContext();
        var element = args.getElement();
        var bounds = new MindFusion_Common_1.Drawing.Rect(0, 0, element.getRenderSize().width, element.getRenderSize().height);
        context.save();
        context.beginPath();
        context.strokeStyle = 'rgba(122,123,124,1)';
        var gradient1 = context.createLinearGradient(0, 0, 90, 0);
        gradient1.addColorStop(0, "rgba(245,245,245,1)");
        gradient1.addColorStop(1, "rgba(102, 154, 204,1)");
        context.fillStyle = gradient1;
        context.arc(bounds.center().x, bounds.center().y, bounds.width / 2, 2 * Math.PI, false);
        context.fill();
        context.stroke();
        var gradient2 = context.createRadialGradient(bounds.center().x, bounds.center().y, bounds.width / 2, bounds.center().x, bounds.center().y, bounds.width);
        gradient2.addColorStop(0, "rgba(225,236,238,0.5)");
        gradient2.addColorStop(0.3, "rgba(225, 236, 235,0.5)");
        gradient2.addColorStop(0.7, "rgba(255,255,255,0.5)");
        gradient2.addColorStop(1, "rgba(255,255,255,0.5)");
        context.fillStyle = gradient2;
        context.arc(bounds.center().x, bounds.center().y, bounds.width / 2, 2 * Math.PI, false);
        context.fill();
        context.stroke();
        context.restore();
    }
    ;
    function onPrepaintPointer(sender, args) {
        var context = args.getContext();
        var element = args.getElement();
        context.save();
        context.fillStyle = "rgba(94,98,99,1)";
        context.transform.apply(context, element.transform.matrix());
        context.scale(element.children[0].getRenderSize().width, element.children[0].getRenderSize().height);
        context.beginPath();
        if (args.getElement().name == "HourHand") {
            context.rect(0, 0.3, 1.0, 0.4);
        }
        if (args.getElement().name == "MinuteHand") {
            context.rect(0, 0.3, 1, 0.4);
        }
        context.fill();
        context.restore();
    }
    ;
});
//# sourceMappingURL=Clock.js.map