import { observer } from "@lib/design_patterns/behavioural/observer/core";

export class A350 extends observer.Observer {
	constructor(observable: observer.Observable) {
		super(observable);
	}
	notify(arg: any): void {
		console.log(`[A350] ${arg}`);
	}
}
