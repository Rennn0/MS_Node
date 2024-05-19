import { bridge } from "./logic";

export namespace instances {
	export class Lion implements bridge.IMove {
		private _myMove: bridge.IAbstractMove;

		constructor(move: bridge.IAbstractMove) {
			this._myMove = move;
		}

		doMove(arg?: any) {
			this._myMove.move();
		}
	}

	export class Eagle implements bridge.IMove {
		private _myMove: bridge.IAbstractMove;

		constructor(move: bridge.IAbstractMove) {
			this._myMove = move;
		}

		doMove(arg?: any) {
			this._myMove.move();
		}
	}
}
