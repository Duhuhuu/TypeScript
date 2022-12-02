let numbersList: (number[] | any) = [];

const divisible = (x:number | any):void =>{
const xTwo:number = 2;

let numero:number = x;

if(Number.isInteger(numero/xTwo) ){

    console.log('Si se puede dividir entre dos', numero)
    let result:number = numero / xTwo;
    alert(`El numero: ${ numero } Si se puede dividir entre 2 y su resultado es: ${result}`)
} 
    else{
        console.log(`El numero ${numero} No se puede divir entre 2`)
        alert(`El numero: ${ numero } No se puede dividir entre 2 !!`)
        }
}

const sumNum = (x:number[] | any):void =>{

    let count:number = 9;
let suma:number[] = [];
let totalSum:number = 0;

    suma = [...x];
    for (let i = 0; i < count; i++) {

        totalSum = suma[i] + suma[i+1]
        count = count - 1
    }
    if(totalSum <= 100){

        alert(`Entro exitosamente y La suma es: ${ totalSum }`);
    }else{
        alert(`No entro exitosamente la suma es: ${ totalSum }. Tiene que ser 100!! `);
    }
}



(()=>{


    let numero = prompt('Dame un numero');
    divisible(numero);

    for (let i = 0; i < 9; i++) {
    let numerosuma = prompt('Dame un numero');
        numbersList[i] = numerosuma;
    }
    sumNum(numbersList);

})()