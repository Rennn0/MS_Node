import { observer } from "@lib/design_patterns/behavioural/observer/core";

export class Boeing737 extends observer.Observer {
	constructor(observable: observer.Observable) {
		super(observable);
	}
	notify(arg: any): void {
		console.log(`[Boeing 737] ${arg}`);
	}
}
