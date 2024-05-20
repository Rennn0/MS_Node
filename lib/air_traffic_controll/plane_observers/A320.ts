import { observer } from "@lib/design_patterns/behavioural/observer/core";
export class A320 extends observer.Observer {
	notify(arg: any): void {
		console.log(`[A320 notification ] ${arg}`);
	}
}
