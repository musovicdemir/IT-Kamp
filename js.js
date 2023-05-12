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

const car = {
  marka: "VW",
  serija: "5",
  godina: "2008",
  vlasnici: [
    {
      ime: "Demir",
      prezime: "Musovic",
    },
    {
      ime: "Demir2",
      prezime: "Musovic2"
    }
  ],
  godinaA () {
    console.log("godina:" + car.godina);
  }
};

car.godinaA()

console.log(car.vlasnici)

const nasNiz = car.vlasnici;
const imanNiz = nasNiz.map((el) => {
  return {
    ime: el.ime,
  }
});

console.log(imanNiz)