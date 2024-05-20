import { observer } from "@lib/design_patterns/behavioural/observer/core";

export class A350 extends observer.Observer {
	notify(arg: any): void {
		console.log(`[A350 notification] ${arg}`);
	}
}
