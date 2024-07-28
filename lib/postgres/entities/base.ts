export class EntityBase {
	public readonly id: string | number;
	public readonly tableName: string;
	constructor(name: string) {
		this.tableName = name;
	}
}

export function TableName(tableName: string) {
	return function (constructor: Function) {
		constructor.prototype.tableName = tableName;
	};
}
