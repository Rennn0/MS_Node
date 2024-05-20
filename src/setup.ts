import {
	MappedPlanes,
	MappedStations,
	Planes,
	Stations,
	observer,
	planeStrategy,
	stationStrategy,
} from "@lib/assembly";

export const stations: MappedStations = {
	[Stations.Airbus]: stationStrategy(Stations.Airbus),
	[Stations.Boeing]: stationStrategy(Stations.Boeing),
	[Stations.GeorgianAirways]: stationStrategy(Stations.GeorgianAirways),
};

export const planes: MappedPlanes = {
	[Planes.A320]: planeStrategy(Planes.A320),
	[Planes.A350]: planeStrategy(Planes.A350),
	[Planes.Boeing737]: planeStrategy(Planes.Boeing737),
	[Planes.CargoAircraft]: planeStrategy(Planes.CargoAircraft),
	[Planes.CorporateJet]: planeStrategy(Planes.CorporateJet),
};

export function stationMessage(msg: string, station: observer.Observable) {
	console.log("=======================");
	station.publish(msg + ` ${new Date().toLocaleTimeString()}`);
	console.log("=======================");
}
