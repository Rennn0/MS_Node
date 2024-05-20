import { observer } from "@lib/design_patterns/behavioural/observer/core";

export class CargoAircraft extends observer.Observer {
	notify(arg: any): void {
		console.log(`[Cargo Aircraft notification] ${arg}`);
	}
}
