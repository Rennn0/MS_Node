import { observer } from "@lib/design_patterns/behavioural/observer/core";

export class Boeing737 extends observer.Observer {
	notify(arg: any): void {
		console.log(`[Boeing 737 notification] ${arg}`);
	}
}
