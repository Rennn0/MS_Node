import { config } from "dotenv";
config();

export const enum DB_TYPE {
	MSSQL,
	POSTGRES,
}

export function db_config(whatDb: DB_TYPE): db_base {
	switch (whatDb) {
		case DB_TYPE.POSTGRES:
			return postgres_config;
		case DB_TYPE.MSSQL:
			return mssql_config;
		default:
			break;
	}
}

interface db_base {
	database: string;
	user: string;
	password: string;
}

export interface postgres_conf extends db_base {
	host: string;
}

export interface mssql_conf extends db_base {
	server: string;
	options?: {
		encrypt: boolean;
		trustServerCertificate: boolean;
	};
	pool?: {
		max: number;
		min: number;
		idleTimeoutMillis: number;
	};
}

const mssql_config: mssql_conf = {
	user: process.env.MSSQL_DB_USER,
	password: process.env.MSSQL_DB_PASSWORD,
	server: process.env.MSSQL_DB_SERVER,
	database: process.env.MSSQL_DB_DATABASE,
	options: {
		encrypt: process.env.MSSQL_DB_ENCRYPT === "true",
		trustServerCertificate: process.env.MSSQL_DB_TRUST_SERVER_CERTIFICATE === "true",
	},
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 3000,
	},
};

const postgres_config: postgres_conf = {
	host: process.env.PG_HOST,
	database: process.env.PG_DATABASE,
	user: process.env.PG_USER,
	password: process.env.PG_PASSWORD,
};
