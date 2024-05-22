import { mediatR } from "@lib/design_patterns/behavioural/mediator/core";
import { ATCSolution } from "./air_traffic_controll";

// const airTrafficControll = new ATCSolution();
// airTrafficControll.main();

class Player extends mediatR.Member {
	private _name: string;
	constructor(name: string) {
		super();
		this._name = name;
	}
	public handle(command: any): void {
		console.log(`Player ${this._name} received command ${command}`);
	}
}

class Admin extends mediatR.Member {
	private _name: string;
	constructor(name: string) {
		super();
		this._name = name;
	}
	public handle(command: any): void {
		console.log(`Admin ${this._name} received command ${command}`);
	}
}

class ChatMediatR extends mediatR.Mediator {}

const chatMediator = new ChatMediatR();
const p1 = new Player("John");
const p2 = new Player("Luke");
const a1 = new Admin("Mark");
const a2 = new Admin("Rick");

p1.join(chatMediator);
p2.join(chatMediator);
a1.join(chatMediator);
a2.join(chatMediator);

p1.notify("Hello");
a1.notify("hi");
