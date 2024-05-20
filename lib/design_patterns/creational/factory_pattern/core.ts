import { randomBytes } from "crypto";

/**
 * Namespace for product and factory related classes.
 */
namespace f_p {
	/**
	 * Interface for products.
	 * @template T - Type of arguments that can be passed to the `Invoke` method.
	 */
	interface IProduct<T = any> {
		/**
		 * Invokes the product with given arguments.
		 * @param args - Arguments to be passed to the product.
		 * @returns The result of the product's execution.
		 */
		Invoke<T>(args?: T): any;
	}

	/**
	 * Abstract class representing a product.
	 * @template TProduct - Type of the product.
	 */
	export abstract class AbstractProduct<TProduct extends IProduct = IProduct> implements IProduct {
		/**
		 * Invokes the product with given arguments.
		 * @param args - Arguments to be passed to the product.
		 * @returns The result of the product's execution.
		 */
		abstract Invoke<T>(args?: T | undefined): any;

		/**
		 * Gets a hash code for the product.
		 * @returns A base64 encoded string representing the hash code.
		 */
		public GetHashCode(): string {
			if (this._opened) return this._hashCode!;
			else {
				this._opened = true;
				this._hashCode = randomBytes(8).toString("base64");
				return this._hashCode;
			}
		}

		/**
		 * Protected abstract property for the hash code.
		 * @type {string | undefined}
		 * @default undefined
		 */
		protected abstract _hashCode?: string | undefined;

		/**
		 * Private property indicating whether the product has been opened.
		 * @type {boolean}
		 * @default false
		 */
		private _opened = false;
	}

	/**
	 * Interface for factories.
	 * @template TProduct - Type of the product.
	 * @template T - Type of arguments that can be passed to the `Produce` method.
	 */
	export interface IFactory<TProduct extends IProduct, T = any> {
		/**
		 * Produces a new instance of the product.
		 * @param arg - Optional argument to be passed to the product.
		 * @returns A new instance of the product.
		 */
		Produce<T>(arg?: T): TProduct;
	}

	/**
	 * Function to get a product instance from a factory.
	 * @template TFactory - Type of the factory.
	 * @template TProduct - Type of the product.
	 * @param {new (): TFactory} ctor - Constructor function for the factory.
	 * @returns A new instance of the product produced by the factory.
	 */
	export function Get<TFactory extends IFactory<TProduct>, TProduct extends AbstractProduct>(ctor: {
		new (): TFactory;
	}): TProduct {
		return new ctor().Produce();
	}
}

export { f_p };
