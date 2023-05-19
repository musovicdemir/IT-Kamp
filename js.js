// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i + 15)
//     } else if (i % 3 == 0) {
//         console.log(i + 10)
//     } else {
//         console.log(i)
//     }
// }

// function sqrNum(a) {
//     return a*a;
// }

// function describeAge(age) {
//     if (age <= 12) {
//       return "You're a(n) kid";
//     } else if (age >= 13 && age <= 17) {
//       return "You're a(n) teenager";
//     } else if (age >= 18 && age <= 64) {
//       return "You're a(n) adult";
//     } else {
//       return "You're a(n) elderly";
//     }
//   }
// console.log(describeAge(20));

// function mystery() {
//     var results =
//       {sanity: 'Hello'};
//     return results;
//   }
// console.log(mystery())

//     function makeNegative(n) {
//         return n - n * 2;
//     }

// console.log(makeNegative(-5))

// function howManyLightsabersDoYouOwn(name) {
//     if name === "Zach" {
//         return 18;
//     }
// }

// console.log(howManyLightsabersDoYouOwn(Zach))

// function greet(a) {
//     return "hello world";
// }

// console.log(greet());
// function hello(name) {
//     if (name === undefined) {
//         return 'Hello, '+'World'+'!';
//     } 
//     if (name === null) {
//         return 'Hello, '+'World'+'!';
//     }
//     if (name === '') {
//         return 'Hello, '+'World'+'!';
//     }
//     else {
//         return 'Hello, '+name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()+'!';
// }
//   }

//   console.log(hello('dEmirR'))

// function square(a) {
//     return a*a;
// }
// console.log(square(4))

// function evenOrOdd(number) {
//     if (number % 2 == 0) {
//         return 'Even';
//     }
//     else {
//         return 'Odd';
//     }
// }

// console.log(evenOrOdd(2))

// var greet_abe = function() {
//     var name = 'Abe';
//   return "Hello, " + name + '!';
// };
// var greet_ben = function() {
//     var name = 'Ben';
//   return "Hello, " + name + '!';
// };
// console.log(greet_ben())

// function solution(str){
//   var split = str.split("");
//   var reverse = split.reverse();
//   var join = reverse.join("");
//   return join;
// }

// console.log(solution('hello'))

// function true1() {
//   console.log("True");
// }

// function false1() {
//   console.log("False");
// }


// console.log(if1(true))

// function simpleMultiplication(number) {
//   if (number % 2 == 0) {
//     return number * 8;
//   } else {
//     return number * 9;
//   }
// }

// console.log(simpleMultiplication(3))

// function periodIsLate(last, today, cycleLength) {
//     if (last - today > cycleLength) {
//         return "True";
//     } else {
//         return "false";
//     }
//   }

// console.log(sqrNum(5));

// function func1(a,b) {
//     if (a < b) {
//         return b - a;
//     } else {
//         return a - b;
//     }
// }

// console.log(func1(5,10));

// function ctoF(a) {
//     return a - 32 / 1.8;
// }

// console.log(ctoF(50));

// let newArr = ["BMW","AUDI","MERCEDES","FIAT"]

// newArr.push("ALFA","VW")

// newArr.unshift("PORSCHE","BUGHATTI")

// console.log(newArr);

// let numbers = [1, 3, 5, 7, 9];

// for (let i = 0; i < 10; i++) {
//     if ( i % 2 === 0 && i !== 0)
//     numbers.push(i);
// }

// console.log(numbers)
// console.log(numbers.reverse())

// let myLastName

// for( let i = 0 ; i < 5 ; i++){
//     if (i === 3) {
//         myLastName = "aldin"
//     }
//     if (myLastName) {
//         console.log("imam ime", i)
//     } else {
//         console.log("sacekaj redzi", i)
//     }
// }
// let b = 3;
// {
//     var a;
//     let b = 10;
//     const c = 15;
//     {
//         console.log(b,'blok koda')
//         console.log(c,'blok koda')
//     }
// }
// var greet_abe = function() {
//     var name = 'Abe';
//   return "Hello, " + name + '!';
// };
// var greet_ben = function() {
//     var name = 'Ben';
//   return "Hello, " + name + '!';
// };
// console.log(greet_ben())

// function noSpace(x){
//     split = x.split(" ").join("");
//     return split;
// }

// console.log(noSpace("wea wewa  wwewe  we"))
// function sayHello() {
//     console.log("Hello Aldin");
//   }
  
//   function helloSomeone() {
//     console.log("Cao Mehmed");
//   }
  
//   function anotherFunction(nekaFunkcija1, nekaFunkcija2) {
//     console.log("Cao Dzenis");
//     console.log("Cao Redzi");
//     console.log("prekid");
//     nekaFunkcija1();
//     nekaFunkcija2();
//     console.log("prekid");
//     console.log("Cao Tajra");
//   }

//   console.log(anotherFunction)

// const car = {
//   marka: "VW",
//   serija: "5",
//   godina: "2008",
//   vlasnici: [
//     {
//       ime: "Demir",
//       prezime: "Musovic",
//     },
//     {
//       ime: "Demir2",
//       prezime: "Musovic2"
//     }
//   ],
//   godinaA () {
//     console.log("godina:" + car.godina);
//   }
// };

// car.godinaA()

// console.log(car.vlasnici)

// const nasNiz = car.vlasnici;
// const imanNiz = nasNiz.map((el) => {
//   return {
//     ime: el.ime,
//   }
// });

// console.log(imanNiz)

// const nasCustomObjekat = {
//     odeljenje: "3-10",
//     dukserica: "zelena",
//     ja: "ne znam",
//     godine: 30,
//     brojLaptopova: 9,
// };

// const nasCustomObjekat2 = {
//     odeljenje: "3-10",
//     dukserica: "zelena",
//     ja: "ne znam",
//     godine: 40,
//     brojLaptopova: 9,
// };

// function ourFirstCallFunction(argumentFirst, argumentSecond) {
//     console.log(
//         `${argumentFirst} ima ${this.godine} godina i ${argumentSecond} mu je ${this.dukserica}`
//     )
// }

// ourFirstCallFunction.call(nasCustomObjekat, "Aldin","kapa");

// ourFirstCallFunction.apply(nasCustomObjekat, ["aldin","kapa"])

// const bindFunkcija = ourFirstCallFunction.bind(
//     nasCustomObjekat2,
//     "bronja",
//     "kapa"
// );

// const myCar = {
//     marka: "BMW",
//     godina: "2011",
//     gorivo: "dizel",
//     preso: "300 000 km",
//     boja: "siva",
//     brzina: "brz",
// }

// function callFunction(firstArg,secondArg) {
//     console.log(
//         `${this.marka} ${firstArg} ${this.godina} ${secondArg} i presao je ${this.preso} i mnogo je ${this.brzina}`
//     )
// };

// callFunction.call(myCar,"je", "godiste");

let a = 10;

function firstA() {
  let b = 5;
  console.log(b);
}

function secondA() {
  let b = 3;
  console.log(b);
}

function lastA() {
  console.log(a);
}

firstA();
secondA();
lastA();