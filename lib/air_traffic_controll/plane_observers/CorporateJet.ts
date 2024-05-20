import { observer } from "@lib/design_patterns/behavioural/observer/core";

export class CorporateJet extends observer.Observer {
	constructor(observable: observer.Observable) {
		super(observable);
	}
	notify(arg: any): void {
		console.log(`[Corporate Jet] ${arg}`);
	}
}
