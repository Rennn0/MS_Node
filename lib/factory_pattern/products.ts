import { generics } from "./generics";

namespace products {
  export class Shape extends generics.AbstractProduct {
    override Invoke<T>(args?: T | undefined) {
      console.log("Im shape", args);
    }
    protected override _hashCode?: string | undefined;
  }

  export class Circle extends generics.AbstractProduct {
    override Invoke<T>(args?: T | undefined) {
      console.log("Im circle", args);
    }
    protected override _hashCode?: string | undefined;
  }

  export class Rectangle extends generics.AbstractProduct {
    override Invoke<T>(args?: T | undefined) {
      console.log("Im rectangle", args);
    }
    protected override _hashCode?: string | undefined;
  }
}

export { products };
