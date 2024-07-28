import { EntityBase, TableName } from "./base";

@TableName("categories")
export class Categorie extends EntityBase {
	public name: string;
	public parentId: number;
	constructor() {
		super(Categorie.prototype.tableName);
	}
}
