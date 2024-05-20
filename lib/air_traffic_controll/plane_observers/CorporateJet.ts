import { observer } from "@lib/design_patterns/behavioural/observer/core";

export class CorporateJet extends observer.Observer {
	notify(arg: any): void {
		console.log(`[Corporate Jet notification] ${arg}`);
	}
}
