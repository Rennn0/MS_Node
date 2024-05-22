export namespace mediatR {
	export class Mediator {
		private _members: Member[];

		constructor() {
			this._members = [];
		}

		public join(participant: Member): Mediator {
			if (this._members.indexOf(participant) != -1) throw new Error("U already here");
			this._members.push(participant);
			return this;
		}

		public quit(participant: Member): void {
			this._members = this._members.filter((m) => m != participant);
		}

		public send(sender: Member, command: any): void {
			this._members.forEach((member) => {
				if (member != sender) member.handle(command);
			});
		}
	}

	export abstract class Member {
		private _mediatr: Mediator | undefined;

		public abstract handle(command: any): void;

		public join(mediator: Mediator): void {
			this._mediatr = mediator.join(this);
		}

		public notify(command: any): void {
			if (this._mediatr != undefined) this._mediatr.send(this, command);
		}

		public quit() {
			this._mediatr.quit(this);
			this._mediatr = undefined;
		}
	}
}
