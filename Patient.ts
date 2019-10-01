import m = require('Scripts/MindFusion.Charting');

export class Patient
{
	public constructor(name: string, age: number, weight: number, bmindex: string)
	{
		this.name = name;
		this.age = age;
		this.weight = weight;
		this.bmindex = bmindex;
	}

	name: string;
	age: number;
	weight: number;
	bmindex: string;
}

export class PatientSeries
	implements m.MindFusion.Charting.Series
{
	public constructor(patients: Array<Patient>)
	{
		this.values = patients;
	}

	public getValue(index: number, dimension: number): number
	{
		if (this.dimensions == 0)
			return this.values[index].age;
		else return this.values[index].weight;
	}

	public getLabel(index: number, kind: m.MindFusion.Charting.LabelKinds): string
	{
		if (kind == m.MindFusion.Charting.LabelKinds.InnerLabel) return this.values[index].name;
		if (kind == m.MindFusion.Charting.LabelKinds.ToolTip) return `${this.values[index].name}(${this.values[index].bmindex})`;

		return null;
	}

	public isSorted(dimension: number): boolean
	{
		return false;
	}

	public isEmphasized(index: number): boolean
	{
		return false;
	}

	public get size(): number { return this.values.length; }

	public get dimensions(): number { return 2; }

	public get title(): string { return this.values[0].bmindex; }

	public get supportedLabels(): m.MindFusion.Charting.LabelKinds { return m.MindFusion.Charting.LabelKinds.InnerLabel | m.MindFusion.Charting.LabelKinds.ToolTip; }

	public toJson():any { }
	dataChanged = new m.MindFusion.Charting.Common.EventDispatcher<EventArgs>();

	values: Array<Patient>;
} 