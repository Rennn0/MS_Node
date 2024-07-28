import { EntityBase, TableName } from "./base";

@TableName("transactions")
export class Transaction extends EntityBase {
	stockId: string;
	price: number;
	timestamp: string;
	constructor() {
		super(Transaction.prototype.tableName);
	}
}
