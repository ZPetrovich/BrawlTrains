// --
// let a = { a: "1" };
// let b = { a: "1" };
// console.log(a == b);
// console.log(a === b);

// -- Що виведе консоль на такий запит?
// console.log(0);
// console.log(1);
// setTimeout(() => console.log(2), 1000);
// setTimeout(() => console.log(3), 0);
// console.log(4);

// -- Як отримати UNIX timestamp у JavaScriptThis question
// const date = new Date();
// console.log(date.getDate());
// console.log(date.getTime());
// console.log(date.getTimestamp());
// console.log(date.getUNIXTimestamp());
//--

// -- Як number конвертувати у stringThis question
// console.log(String(1))
// // 1++
// // 1.toString()
// console.log(window.toString(1))

// -- Чим не є undefined у JavaScriptThis question
// A змінною, яка використовується у коді, але не існує
// B змінною, якій не надали жодного значення
// C невизначений стан змінної будь-якого типу
// D неіснуюча властивість об'єкту

// --
// console.log( Math.random(100.1, 2))

// -- Як викликати функцію foo у контексті bar з аргументами baz
// function foo(arg) {
//     console.log('foo() with', arg)
// }
// const baz = {
//     a: '1'
// }
// function bar() { foo(...baz);}
// foo.call(bar, ...baz)
// foo.apply(bar, ...baz)
// foo.bind(bar, baz)

// --
// throw new Error('a')

// -- Що виведе консоль на такий запит?
// console.log(0);
// setTimeout(function() { console.log(1) }, 1000);
// setTimeout(function() { console.log(2) }, 0)
// console.log(3);
// while(true) {}

// -- Що виведе консоль на такий запит?
// requestAnimationFrame(() => {
//   console.log("r");
// });
// setTimeout(() => {
//   console.log("s");
// }, 0);

// -- Як заборонити мутаціі об'єкту aThis question is required. *
// const a = {foo: 'bar'}
// var b = Object.freeze({foo: 'bar'});
// var v = {_foo: 'bar'};
// const d = Object.immutable({foo: 'bar'});

// Який найшвидший спосіб глибинного клонування об'єкту у якого значення є простими типами?
// const foo = {...bar};
// const foo = Object.assign({}, bar);
// const foo = JSON.parse(JSON.stringify(bar));
// варіанти a, b, c еквівалентні

// -- Що буде міститись у змінній a? let a = new Array(256).join(' ');This question is required. *
// let a = new Array(2).join('a')
// console.log(a)
// A строка що містить один пробіл
// B строка що містить 256 пробіл
// C строка що містить 255 пробіл
// D пуста строка

// --
// const a = undefined;
// const b =  a=='сірко собака' && a=='сірко собака мій пес'
// console.log(b)

// --Для плавності відтворення анімацій необхідно і достатньо, що б кожен крок циклу очікування подій займав не більшеThis question is required. *
// A 10 мс
// B 16 мс
// C 16.7 мс
// D 60 мс

// -- Яким буде вміст масиву sirko після виконання наступного коду?
// const sirko = [];
// sirko.push('собака');
// sirko.unshift('мій пес');
// sirko.length = 3;
// sirko.pop();
// console.log(sirko);

// -- Як буде виглядати масив arr після виконання наступного коду:
var arrLike = {length: 4, sirko: 'собака', 2: 'мій пес'};
var arr = Array.from(arrLike);
console.log(arr)

// --
// function withContext() {
//   var obj = {
//     name: "obj2",
//     a: () => this,
//     b: function () {
//       return this;
//     },
//   };

//   console.log(obj.a().name); // ???
//   console.log(obj.b().name); // ???
// }

// withContext.bind({ name: "obj1" })();

// --
// requestAnimationFrame(() => {
//   console.log("r");
// });
// setTimeout(() => {
//   console.log("s");
// }, 0);

// // --
// const sirko = [];
// sirko.push("собака");
// sirko.unshift("мій пес");
// sirko.length = 3;
// sirko.pop();

// // --
// var arrLike = {length: 4, sirko: 'собака', 2: 'мій пес'};
// var arr = Array.from(arrLike);

// // --
// let user = {
//     firstName: "John",
//     sayHi() {
//       console.log(`Hello, ${this.firstName}!`);
//     }
//   };

//   setTimeout(() => user.sayHi(), 1000);

//   // ...the value of user changes within 1 second
//   user = {
//     sayHi() { console.log("Another user in setTimeout!"); }
//   };
