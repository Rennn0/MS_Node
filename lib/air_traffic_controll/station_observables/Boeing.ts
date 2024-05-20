import { observer } from "@lib/design_patterns/behavioural/observer/core";

export class BoeingStation extends observer.Observable {
	constructor() {
		super();
	}
}
