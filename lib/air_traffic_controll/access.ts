import {
	A320,
	A350,
	AirbusStation,
	Boeing737,
	BoeingStation,
	CargoAircraft,
	CorporateJet,
	GeorgianAirways,
	Planes,
	Stations,
	observer,
} from "@lib/assembly";

/**
 * This function returns an observable of the appropriate station type based on the input parameter.
 *
 * @param type - The type of station to create an observable for.
 * @returns An observable of the appropriate station type.
 */
export function stationStrategy(type: Stations): observer.Observable {
	switch (type) {
		case Stations.Airbus:
			return new AirbusStation();
		case Stations.Boeing:
			return new BoeingStation();
		case Stations.GeorgianAirways:
			return new GeorgianAirways();
	}
}

/**
 * This function returns an observer of the appropriate aircraft type based on the input parameter.
 *
 * @param type - The type of aircraft to create an observer for.
 * @param station - The observable of the appropriate station type.
 * @returns An observer of the appropriate aircraft type.
 */
export function planeStrategy(type: Planes, station: observer.Observable): observer.Observer {
	switch (type) {
		case Planes.A320:
			return new A320(station);
		case Planes.A350:
			return new A350(station);
		case Planes.Boeing737:
			return new Boeing737(station);
		case Planes.CargoAircraft:
			return new CargoAircraft(station);
		case Planes.CorporateJet:
			return new CorporateJet(station);
	}
}
