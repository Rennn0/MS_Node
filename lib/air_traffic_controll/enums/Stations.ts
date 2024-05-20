import { observer } from "@lib/assembly";

export const enum Stations {
	Airbus = "Airbus",
	Boeing = "Boeing",
	GeorgianAirways = "GeorgianAirways",
}

export type MappedStations = {
	[K in Stations]: observer.Observable;
};
