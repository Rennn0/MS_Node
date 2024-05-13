import { generics } from "./generics";
import { products } from "@lib/factory_pattern/products"

namespace factories {
    export class ShapeFactory implements generics.IFactory<products.Shape> {
        Produce<T>(_arg?: T | undefined): products.Shape {
            return new products.Shape();
        };
    };

    export class CircleFactory implements generics.IFactory<products.Circle> {
        Produce<T>(_arg?: T | undefined): products.Circle {
            return new products.Circle();
        };
    };

    export class RectanbleFactory implements generics.IFactory<products.Rectangle> {
        Produce<T>(_arg?: T | undefined): products.Rectangle {
            return new products.Rectangle();
        };
    };

    export class BetterShapeFactory implements generics.IFactory<products.Shape> {
        Produce<T>(arg?: T): products.Shape {
            return new products.Shape();
        };
    };
    ;
}

export { factories };