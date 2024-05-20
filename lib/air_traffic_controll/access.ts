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

export function planeStrategy(type: Planes): observer.Observer {
	switch (type) {
		case Planes.A320:
			return new A320();
		case Planes.A350:
			return new A350();
		case Planes.Boeing737:
			return new Boeing737();
		case Planes.CargoAircraft:
			return new CargoAircraft();
		case Planes.CorporateJet:
			return new CorporateJet();
	}
}
