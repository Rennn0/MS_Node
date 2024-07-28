import { db_config, DB_TYPE } from "@lib/db.config";
import { Client, connect, ResultIterator } from "ts-postgres";
import { EntityBase } from "./entities/base";

interface IDatabase {
	select<T extends EntityBase>(entityClass: { new (): T }): Promise<T[]>;
	insert<T extends EntityBase>(entityClass: { new (): T }, entity: T): Promise<void>;
}

export class PostgresContext implements IDatabase {
	private static _client: Client | null = null;
	private static _instance: PostgresContext | null = null;
	private constructor() {}

	public static getInstance(): PostgresContext {
		if (PostgresContext._instance === null) {
			PostgresContext._instance = new PostgresContext();
		}
		return PostgresContext._instance;
	}
	private static async getClient(): Promise<Client> {
		if (PostgresContext._client === null) {
			PostgresContext._client = await connect(db_config(DB_TYPE.POSTGRES));
		}
		return PostgresContext._client;
	}

	public async select<T extends EntityBase>(entityClass: { new (): T }): Promise<T[]> {
		const client: Client = await PostgresContext.getClient();
		const query: ResultIterator<T> = client.query<T>(
			`SELECT * FROM ${new entityClass().tableName}`,
		);
		const result: T[] = [];
		for await (const obj of query) {
			result.push(obj);
		}
		return result;
	}

	/**
	 * creates query `.... ($1,$2 ... ) values [val1,val2 ...]`
	 * @param entityClass generic type
	 * @param entity implemented generic
	 */
	public async insert<T extends EntityBase>(entityClass: { new (): T }, entity: T): Promise<void> {
		const client: Client = await PostgresContext.getClient();
		const keys = Object.keys(entity).filter((k) => k != "id");
		const values = keys.map((k) => (entity as any)[k]);
		const columns = keys.join(", ");
		const placeholders = keys.map((_, index) => `$${index + 1}`).join(", ");
		const query = `INSERT INTO ${new entityClass().tableName} (${columns}) VALUES (${placeholders})`;
		console.log(query);
		console.log(values);
		await client.query(query, values);
	}
}
