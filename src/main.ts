import { Stations, stationStrategy } from "@lib/assembly";

function main() {
	const airbus = stationStrategy(Stations.Airbus);
	const boeing = stationStrategy(Stations.Boeing);
	const georgianAirways = stationStrategy(Stations.GeorgianAirways);
}

main();
