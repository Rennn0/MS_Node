namespace observer {
	/**
	 * Interface representing an observable entity.
	 */
	interface IObservable {
		/**
		 * Subscribes an observer to the observable.
		 * @param observer - The observer to subscribe.
		 * @returns The unique ID assigned to the observer.
		 */
		subscribe(observer: Observer): number;

		/**
		 * Unsubscribes an observer from the observable.
		 * @param id - The unique ID of the observer to unsubscribe.
		 * @returns True if the observer was successfully unsubscribed, false otherwise.
		 */
		unsubscribe(id: number): boolean;

		/**
		 * Publishes an event to all subscribed observers.
		 * @param arg - The argument to pass to the observers.
		 */
		publish(arg: any): void;
	}

	/**
	 * Class representing an observable entity.
	 */
	export class Observable implements IObservable {
		private _audience: Map<number, Function>;

		/**
		 * Creates an instance of Observable.
		 * The constructor is protected to enforce the use of inheritance.
		 */
		protected constructor() {
			this._audience = new Map<number, Function>();
		}

		/**
		 * Subscribes an observer to the observable.
		 * @param observer - The observer to subscribe.
		 * @returns The unique ID assigned to the observer.
		 */
		subscribe(observer: Observer): number {
			if (this._audience.has(observer.getId())) throw new Error("Can subscribe twice");
			this._audience.set(observer.getId(), observer.notify);
			return observer.getId();
		}

		/**
		 * Unsubscribes an observer from the observable.
		 * @param id - The unique ID of the observer to unsubscribe.
		 * @returns True if the observer was successfully unsubscribed, false otherwise.
		 */
		unsubscribe(id: number): boolean {
			if (this._audience.has(id)) {
				this._audience.delete(id);
				return true;
			}
			return false;
		}

		/**
		 * Publishes an event to all subscribed observers.
		 * @param arg - The argument to pass to the observers.
		 */
		publish(arg: any): void {
			if (this._audience.size == 0) return;
			this._audience.forEach((value, key) => {
				value(arg);
			});
		}
	}

	export abstract class Observer {
		private _id: number;
		constructor() {
			this._id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
		}
		abstract notify(arg: any): void;
		public getId = () => this._id;
	}
}

export { observer };
