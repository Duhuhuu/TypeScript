"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta Salvado!`;
    //? Defino el tipo de variable como una funcion, que recibe 2 parametros de tipo numero y regresa un valor de tipo number.
    //* let myFunction: (a:number, b:number)=> number;
    //* myFunction = addNumbers;
    //* console.log( myFunction(1,2) )
    //? Defino el la variable como un tipo de funcion, que recibe un parametro de tipo string y regresa un dato de tipo string
    //* let myFunction: (a:string)=> string;
    //* myFunction = greet;
    //* console.log( myFunction('maurito') )
    //? Con esta no recibo ningun argumento y regresa un string
    //* let myFunction: ()=> string;
    // myFunction = saveTheWorld;
    // console.log( myFunction() )
})();
