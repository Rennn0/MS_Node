import { bridge } from "./logic";
export namespace objects {
  export class FourLegs implements bridge.IAbstractMove {
    move(arg?: any) {
      console.log("hunts");
    }
  }
  export class Wings implements bridge.IAbstractMove {
    move(arg?: any) {
      console.log("flies");
    }
  }
  export class TwoLegs implements bridge.IAbstractMove {
    move(arg?: any) {
      console.log("walks");
    }
  }
}
