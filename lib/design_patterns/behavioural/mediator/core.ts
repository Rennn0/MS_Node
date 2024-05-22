export namespace mediatR {
	export class Mediator {
		private _members: { id: number; member: Member }[];

		constructor() {
			this._members = [];
		}

		public join(newMember: Member): Mediator {
			if (this._members.some((x) => x.id == newMember.getId())) throw new Error("U already here");
			this._members.push({ id: newMember.getId(), member: newMember });
			return this;
		}

		public quit(newMember: Member): void {
			this._members = this._members.filter((m) => m.id != newMember.getId());
		}

		public send(sender: Member, command: any): void {
			this._members.forEach((x) => {
				if (x.id != sender.getId()) x.member.handle(command);
			});
		}
	}

	export abstract class Member {
		private _mediatr: Mediator | undefined;
		protected _id: number;

		constructor() {
			this._id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
		}

		public getId = () => this._id;

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
