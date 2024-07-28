import { EntityBase, TableName } from "./base";

@TableName("products")
export class Product extends EntityBase {
	public name: string;
	public description: string;
	public categories: number[];
	constructor() {
		super(Product.prototype.tableName);
	}
}
