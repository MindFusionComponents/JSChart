define(["require", "exports", 'Scripts/MindFusion.Charting'], function (require, exports, m) {
    "use strict";
    var Patient = (function () {
        function Patient(name, age, weight, bmindex) {
            this.name = name;
            this.age = age;
            this.weight = weight;
            this.bmindex = bmindex;
        }
        return Patient;
    }());
    exports.Patient = Patient;
    var PatientSeries = (function () {
        function PatientSeries(patients) {
            this.dataChanged = new m.MindFusion.Charting.Common.EventDispatcher();
            this.values = patients;
        }
        PatientSeries.prototype.getValue = function (index, dimension) {
            if (this.dimensions == 0)
                return this.values[index].age;
            else
                return this.values[index].weight;
        };
        PatientSeries.prototype.getLabel = function (index, kind) {
            if (kind == m.MindFusion.Charting.LabelKinds.InnerLabel)
                return this.values[index].name;
            if (kind == m.MindFusion.Charting.LabelKinds.ToolTip)
                return this.values[index].name + "(" + this.values[index].bmindex + ")";
            return null;
        };
        PatientSeries.prototype.isSorted = function (dimension) {
            return false;
        };
        PatientSeries.prototype.isEmphasized = function (index) {
            return false;
        };
        Object.defineProperty(PatientSeries.prototype, "size", {
            get: function () { return this.values.length; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PatientSeries.prototype, "dimensions", {
            get: function () { return 2; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PatientSeries.prototype, "title", {
            get: function () { return this.values[0].bmindex; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PatientSeries.prototype, "supportedLabels", {
            get: function () { return m.MindFusion.Charting.LabelKinds.InnerLabel | m.MindFusion.Charting.LabelKinds.ToolTip; },
            enumerable: true,
            configurable: true
        });
        PatientSeries.prototype.toJson = function () { };
        return PatientSeries;
    }());
    exports.PatientSeries = PatientSeries;
});
//# sourceMappingURL=Patient.js.map