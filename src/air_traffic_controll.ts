import { stationMessage, stations, planes } from "./setup";

export function main() {
	let airbus1 = stations.Airbus.subscribe(planes.A320);
	let airbus2 = stations.Airbus.subscribe(planes.A350);
	let airbus3 = stations.Airbus.subscribe(planes.Boeing737);
	let airbus4 = stations.Airbus.subscribe(planes.CargoAircraft);
	let airbus5 = stations.Airbus.subscribe(planes.CorporateJet);

	let boeing1 = stations.Boeing.subscribe(planes.CorporateJet);
	let boeing2 = stations.Boeing.subscribe(planes.Boeing737);

	let ga1 = stations.GeorgianAirways.subscribe(planes.CargoAircraft);
	let ga2 = stations.GeorgianAirways.subscribe(planes.A320);

	setInterval(() => {
		console.clear();
		stationMessage("ping from Airbus", stations.Airbus);
		stationMessage("ping from Boeing", stations.Boeing);
		stationMessage("ping from GA", stations.GeorgianAirways);
	}, 2000);

	// unsubscribe from airbus
	setTimeout(() => {
		stations.Airbus.unsubscribe(airbus1);
		stations.Airbus.unsubscribe(airbus2);
		stations.Airbus.unsubscribe(airbus3);
		stations.Airbus.unsubscribe(airbus4);
	}, 3000);

	// unsubscribe from ga
	setTimeout(() => {
		stations.GeorgianAirways.unsubscribe(ga2);
		stations.GeorgianAirways.unsubscribe(ga1);
	}, 5000);

	// unsubscribe from boeing
	setTimeout(() => {
		stations.Boeing.unsubscribe(boeing1);
		stations.Boeing.unsubscribe(boeing2);
	}, 7000);

	// subscribe again
	setTimeout(() => {
		stations.Airbus.unsubscribe(airbus5);
		ga1 = stations.GeorgianAirways.subscribe(planes.A320);
		ga2 = stations.GeorgianAirways.subscribe(planes.CargoAircraft);

		boeing1 = stations.Boeing.subscribe(planes.A350);
		boeing2 = stations.Boeing.subscribe(planes.CorporateJet);

		airbus1 = stations.Airbus.subscribe(planes.Boeing737);
	}, 9000);

	setTimeout(() => {
		airbus1 = stations.Airbus.subscribe(planes.CargoAircraft);
		airbus2 = stations.Airbus.subscribe(planes.A320);
		airbus3 = stations.Airbus.subscribe(planes.A350);
		// same plane cant subscribe twcie
		try {
			airbus4 = stations.Airbus.subscribe(planes.A350);
		} catch (e) {
			console.error(e);
		}
	}, 11000);
}
