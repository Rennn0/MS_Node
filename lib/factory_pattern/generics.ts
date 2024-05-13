import { randomBytes } from "crypto";

namespace generics {
    interface IProduct {
        Invoke<T>(args?: T): any;
    };

    export abstract class AbstractProduct implements IProduct {
        abstract Invoke<T>(args?: T | undefined): any;

        public GetHashCode(): string {
            if (this._opened)
                return this._hashCode!;
            else {
                this._opened = true;
                this._hashCode = randomBytes(8).toString("base64");
                return this._hashCode;
            }
        }

        protected abstract _hashCode?: string | undefined;
        private _opened = false;
    };

    export interface IFactory<TProduct extends IProduct> {
        Produce<T>(arg?: T): TProduct;
    };

    export function Get<TFactory extends IFactory<TProduct>, TProduct extends AbstractProduct>(ctor: { new(): TFactory }): TProduct {
        return new ctor().Produce();
    };
}

export { generics };