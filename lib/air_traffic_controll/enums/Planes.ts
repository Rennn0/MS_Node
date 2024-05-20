import { observer } from "@lib/assembly";

export const enum Planes {
	A320 = "A320",
	A350 = "A350",
	Boeing737 = "Boeing737",
	CargoAircraft = "CargoAircraft",
	CorporateJet = "CorporateJet",
}

export type MappedPlanes = {
	[K in Planes]: observer.Observer;
};
