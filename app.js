"use strict";
//tsc -w : modo watch
//Declaracion de variables con su tipo de datos... Se declara el tipo de dato poniendo el ":{TipoDeDato}" 
// :number - :string - :boolean - Etc...
// const a:number = 10;
// // const a = 10; // Declaracion de variable sin declarar el tipo y el tipo esta inferido por Ts
// // let b:number = 10;
// //Otra forma de declarar variables, solamente declarando el tipo y luego asignandole el valor a la variable.
// let b:number;
// b= 3.1416;
/*
Declaracion de tipo de variable con el Famoso tipo ANY.
Con Any la variable puede ser cualquier tipo de dato. int, bool, string, double, array, object, etc..

let b;
b= 3.1416;
b = {};
b = [];
*/
(() => {
    const a = 10;
    console.log(a);
})();
