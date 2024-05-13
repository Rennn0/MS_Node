// import { readFile } from "fs";
// console.log("Start");

import { builder } from "@lib/builder/generics";
import { generics } from "@lib/factory_pattern/generics";
import { products } from "@lib/factory_pattern/products";

// import { generics } from "@lib/factory_pattern/generics";
// import { factories } from "@lib/factory_pattern/factories";
// import { products } from "@lib/factory_pattern/products";

// const fac1 = generics.Get<factories.ShapeFactory, products.Shape>(factories.ShapeFactory);
// const fac2 = generics.Get<factories.CircleFactory, products.Circle>(factories.CircleFactory);
// const fac3 = generics.Get<factories.RectanbleFactory, products.Rectangle>(factories.RectanbleFactory);
// const fac4 = generics.Get<factories.BetterShapeFactory, products.Shape>(factories.BetterShapeFactory);

// fac1.Invoke([1, 2, 3]);
// fac2.Invoke("random string");
// fac3.Invoke({ saxeli: "Luka" });
// fac4.Invoke("BETTER SHAPE");


// const read = (file: string) => {
//     readFile(file, "utf-8", (err, data) => {
//         if (err)
//             console.error(err);
//         else
//             console.log(`Content of ${file} - ${data}`);
//     })
// }    

// const files = ["test.txt", "test2.txt"]
// files.forEach(f => read(f));

// console.log("Start");

// const to = setTimeout(() => {
//     console.log("TIMEOUT 3000");
// }, 3000);

// let counter = 1;

// const i = setInterval(() => {
//     console.log(`Interval: Task ${counter} executed! 🔄`);
//     counter++;

//     if (counter > 3) {
//         clearInterval(i);
//         console.log('Interval: All tasks completed! 🎉');
//     }
// }, 1000)

// console.log("End");

// setImmediate(() => console.log("IMEDIATE"));
// setTimeout(() => console.log("TIMEOUT"));

// setImmediate(() => console.log("IMEDDD"));
// process.nextTick(() => console.log("TICKKKK"));

// console.log('script start')

// const interval = setInterval(() => {
//     console.log('setInterval')
// }, 0)

// setTimeout(() => {
//     console.log('setTimeout 1')

//     Promise.resolve()
//         .then(() => console.log('promise 3'))
//         .then(() => console.log('promise 4'))
//         .then(() => {
//             setTimeout(() => {
//                 console.log('setTimeout 2')
//                 Promise.resolve().then(() => console.log('promise 5'))
//                     .then(() => console.log('promise 6'))
//                     .then(() => clearInterval(interval))
//             }, 0)
//         })
// }, 0)

// Promise.resolve()
//     .then(() => console.log('promise 1'))
//     .then(() => console.log('promise 2'))


/**
 * script start
 * promise 1
 * promise 2
 * setInterval
 * settimeout 1
 * promise 3
 * promise 4
 * setInterval
 * settimeot 2
 * promise 5
 * promise 6
 */


// const seconds = Date.now();

// setTimeout(() => {
//     console.log(`Ran after ${Date.now() - seconds} ms`);
// }, 500);

// while ((Date.now() - seconds) <= 2000);

// (() => {
//     console.log("this is the start");

//     setTimeout(() => {
//         console.log("Callback 1: this is a msg from call back");
//     }); // has a default time value of 0

//     console.log("this is just a message");

//     setTimeout(() => {
//         console.log("Callback 2: this is a msg from call back");
//     }, 0);

//     console.log("this is the end");
// })();


// this is start
// this is just a message
// this is the end
// cb1 
// cb2

// interface Foo {
//     name: string,
//     age: number,
//     isMale: boolean
// }

// type Bar = Pick<Foo, "isMale">
// const baz: Bar = {
//     isMale: false
// }
// console.log(typeof (baz), baz)

// type Stringify<T> = { [K in keyof T]: number }[keyof T]
// type StringedFoo = Stringify<Foo>;
// let baz: StringedFoo =

// class Bar implements Foo {
//     name!: string;
//     age!: number;
//     isMale!: boolean;
// }

// const baz: Foo = {
//     name: "",
//     age: 0,
//     isMale: false
// }

// const bar: Bar = new Bar();
// console.log(typeof baz == "object");
// console.log(bar instanceof Bar);
// console.log("name" in baz)

// abstract class Base {
//     constructor() {
//         console.log("Created BASE class");
//     }
//     protected abstract Foo(): void;
//     abstract Bar(): void;
// }


// class Bar extends Base {
//     constructor() {
//         super();
//         console.log("Created Bar class");
//     }
//     protected override Foo(): void {
//         console.log("PROTECTED");
//     }
//     public override Bar(): void {
//         console.log("PUBLIC");
//     }
// }

// class Baz extends Bar {
//     constructor() {
//         super();
//         console.log("Created BAZ class");
//         super.Bar();
//         super.Foo();
//     }

//     protected override Foo(): void {
//         console.log("FOO MADE OUBLIC");
//     }
//     public override Bar(): void {
//         console.log("BAZ CALLED BAR");
//     }
// }


// interface Shape {
//     draw(): void;
// }

// interface ShapeFactory {
//     createShape(): Shape
// }

// class Circle implements Shape {
//     draw(): void {
//         console.log("Circle draws");
//     }
// }

// class Rectanble implements Shape {
//     draw(): void {
//         console.log("Rectangle draws");
//     }
// }

// class CircleFactory implements ShapeFactory {
//     createShape(): Shape {
//         return new Circle();
//     }
// }

// class RectangleFactory implements ShapeFactory {
//     createShape(): Shape {
//         return new Rectanble();
//     }
// }

// function drawShape(factory: ShapeFactory) {
//     factory.createShape().draw();
// }

// drawShape(new CircleFactory());
// drawShape(new RectangleFactory());

// import { appendFileSync } from "fs";

// const enum Logger_Type {
//     Console,
//     File
// }

// interface ILogger {
//     log(message: string): void;
// }

// interface ILoggerFactory {
//     createLogger(type: Logger_Type, options?: any): ILogger;
// }

// class ConsoleLogger implements ILogger {
//     log(message: string): void {
//         console.log(`[Console] ${message}`);
//     }
// }

// class FileLogger implements ILogger {
//     private _filePath: string;
//     constructor(filePath: string) {
//         this._filePath = filePath;
//     }

//     log(message: string): void {
//         appendFileSync(this._filePath, `[File ${new Date().toLocaleString()}] ${message}\n`);
//     }
// }

// class LoggerFct implements ILoggerFactory {
//     createLogger(type: Logger_Type, options?: any): ILogger {
//         switch (type) {
//             case Logger_Type.Console:
//                 return new ConsoleLogger();
//             case Logger_Type.File:
//                 if (options && options.filePath)
//                     return new FileLogger(options.filePath);
//                 else
//                     throw new Error("File path not specified");
//             default:
//                 throw new Error("Unknown type");
//         }
//     }
// }


// const cLogger = new LoggerFct().createLogger(Logger_Type.Console);
// const fLogger = new LoggerFct().createLogger(Logger_Type.File, { filePath: "testLog.out" });
// cLogger.log("Hello from cLogger");
// fLogger.log("Hello from fLogger");

// const enum Car {
//     Mazda, Honda
// }

// interface IPart {
//     MakePart(): string;
// }

// interface IFactory {
//     GetRightPart(): IPart;
//     GetLeftPart(): IPart;
// }

// interface IBase {
//     GetFactory(type: Car): IFactory;
// }

// class HondaLeft implements IPart {
//     MakePart(): string {
//         return "Honda left";
//     }
// }

// class HondaRight implements IPart {
//     MakePart(): string {
//         return "Honda right";
//     }
// }

// class MazdaLeft implements IPart {
//     MakePart(): string {
//         return "Mazda left";
//     }
// }

// class MazdaRight implements IPart {
//     MakePart(): string {
//         return "Mazda right";
//     }
// }


// class HondaFactory implements IFactory {
//     GetRightPart(): IPart {
//         return new HondaRight();
//     }
//     GetLeftPart(): IPart {
//         return new HondaLeft();
//     }
// }

// class MazdaFactory implements IFactory {
//     GetRightPart(): IPart {
//         return new MazdaRight();
//     }
//     GetLeftPart(): IPart {
//         return new MazdaLeft();
//     }
// }

// class Base implements IBase {
//     GetFactory(type: Car): IFactory {
//         switch (type) {
//             case Car.Honda:
//                 return new HondaFactory();
//             case Car.Mazda:
//                 return new MazdaFactory();
//             default:tsc
//                 throw new Error("Dumbass?");
//         }
//     }
// }

// const base = new Base();
// let factory = base.GetFactory(Car.Honda);
// let rightDoor = factory.GetRightPart();

// console.log(rightDoor.MakePart());

// factory = base.GetFactory(Car.Mazda);
// rightDoor = factory.GetRightPart();
// let leftDoor = factory.GetLeftPart();

// console.log(rightDoor.MakePart());
// console.log(leftDoor.MakePart());


// type AuthParams = {
//     name: string;
//     key: string;
//     time: number;
// }

// @Authorizer({
//     key: "Luka",
//     name: "Danelia",
//     time: 12,
// })
// class Greeter {
//     private _age: number;
//     constructor() {
//         console.log("U PASSED");
//     }

//     get age() {
//         return this._age;
//     }

//     @ValidateAge(18)
//     set age(val: number) {
//         this._age = val;
//     }
// }

// function ValidateAge(minAge: number): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void {
//     return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
//         const originalSet = descriptor.set;

//         descriptor.set = function (value: number) {
//             if (value < minAge) {
//                 throw new Error(`Age must be more than ${minAge}`);
//             }
//             originalSet.call(this, value);
//         };
//         console.log("VALIDATPR")
//     }
// }


// function Authorizer(arg: AuthParams): (target: typeof Greeter) => void | typeof Greeter {
//     return (target: typeof Greeter) => {
//         if (arg.key != "Luka")
//             throw new Error("FUCK U");
//         console.log("AUTH")
//     }
// }


// const greeter = new Greeter();

type Builder<T> = {
    [K in keyof T]: (arg: T[K]) => Builder<T>
} & { build: () => T }

function builder<T>(template: T = {} as T): Builder<T> {
    const proxy = new Proxy({}, {
        get(_, prop) {
            if (prop == "build") {
                return () => Object.assign({}, template);
            }
            return (value?: any) => {
                if (value) {
                    template[prop] = value;
                }
                return proxy;
            }
        }
    })

    return proxy as Builder<T>;
}

interface Person {
    name: string;
    email: string;
    age: number;
}

const pb1 = builder<Person>();
const person1 = pb1
    .age(12)
    .email("moskito")
    .name("PERSON1")
    .build(); // garantia araq yvela propze, arc custom validacia

class pb2 implements builder.Hefestos<Person, pb2> {
    setName = (arg: string) => {
        this.entity.name = arg;
        return this;
    }
    setEmail = (arg: string) => {
        this.entity.email = arg;
        return this;
    };
    setAge = (arg: number) => {
        this.entity.age = arg;
        return this;
    };
    build = () => this.entity;

    entity: Person = {
        name: "",
        email: "",
        age: 0
    };
}
const person2 = new pb2()
    // .setAge(3)
    .setEmail("axaxa")
    .setName("PREDATOR")
    .build();

console.log(person1);
console.log(person2);
