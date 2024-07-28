import { EntityBase, TableName } from "./base";

@TableName("stock")
export class Stock extends EntityBase {
	public name: string;
	public productId: number;
	public price: number;
	constructor() {
		super(Stock.prototype.tableName);
	}
}
