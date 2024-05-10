// import { readFile } from "fs";
// console.log("Start");

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

interface Foo {
    name: string,
    age: number,
    isMale: boolean
}

// type Bar = Pick<Foo, "isMale">
// const baz: Bar = {
//     isMale: false
// }
// console.log(typeof (baz), baz)

// type Stringify<T> = { [K in keyof T]: number }[keyof T]
// type StringedFoo = Stringify<Foo>;
// let baz: StringedFoo =

class Bar implements Foo {
    name!: string;
    age!: number;
    isMale!: boolean;
}

const baz: Foo = {
    name: "",
    age: 0,
    isMale: false
}

const bar: Bar = new Bar();
console.log(typeof baz == "object");
console.log(bar instanceof Bar);
console.log("name" in baz)
