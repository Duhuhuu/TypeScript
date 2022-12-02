"use strict";
let numbersList = [];
const divisible = (x) => {
    const xTwo = 2;
    let numero = x;
    if (Number.isInteger(numero / xTwo)) {
        console.log('Si se puede dividir entre dos', numero);
        let result = numero / xTwo;
        alert(`El numero: ${numero} Si se puede dividir entre 2 y su resultado es: ${result}`);
    }
    else {
        console.log(`El numero ${numero} No se puede divir entre 2`);
        alert(`El numero: ${numero} No se puede dividir entre 2 !!`);
    }
};
const sumNum = (x) => {
    let count = 9;
    let suma = [];
    let totalSum = 0;
    suma = [...x];
    for (let i = 0; i < count; i++) {
        totalSum = suma[i] + suma[i + 1];
        count = count - 1;
    }
    if (totalSum <= 100) {
        alert(`Entro exitosamente y La suma es: ${totalSum}`);
    }
    else {
        alert(`No entro exitosamente la suma es: ${totalSum}. Tiene que ser 100!! `);
    }
};
(() => {
    let numero = prompt('Dame un numero');
    divisible(numero);
    for (let i = 0; i < 9; i++) {
        let numerosuma = prompt('Dame un numero');
        numbersList[i] = numerosuma;
    }
    sumNum(numbersList);
})();
const numbers = [5, 6, 7, 6, 5, 4, 9, 80, 2, 1, 6];
let contador = 14;
const ordenAscendente = (nmeros) => {
    const numbers2 = [...numbers];
    let count = contador;
    for (let i = 0; i < count; i++) {
        count = count - 1;
        for (let y = count; y >= i; y--) {
            if (numbers2[y - 1] > numbers2[y]) {
                const listNum = numbers2[y - 1];
                numbers2[y - 1] = numbers2[y];
                numbers2[y] = listNum;
            }
            ;
        }
        ;
    }
    return numbers2;
};
const ordenDesendente = (nmeros) => {
    const numbers2 = [...numbers];
    let count = contador;
    for (let i = 0; i < count; i++) {
        count = count - 1;
        for (let y = count; y >= i; y--) {
            if (numbers2[y - 1] < numbers2[y]) {
                const listNum = numbers2[y - 1];
                numbers2[y - 1] = numbers2[y];
                numbers2[y] = listNum;
            }
            ;
        }
        ;
    }
    return numbers2;
};
const RepitNumbers = (nmeros) => {
    const numbers2 = ordenAscendente(nmeros);
    let duplicados = [];
    let count = 11;
    for (let i = 0; i < count; i++) {
        if (numbers2[i + 1] === numbers2[i]) {
            const temporal = numbers2[i + 1];
            numbers2[i + 1] = numbers2[i];
            numbers2[i] = temporal;
            duplicados.push(numbers2[i]);
        }
    }
    return duplicados;
};
(() => {
    const menorMayor = ordenAscendente(numbers).join(', ');
    const mayorMenor = ordenDesendente(numbers).join(', ');
    const NumRepit = RepitNumbers(numbers).join(', ');
    console.log(`Ordenado de menor a mayor: ${menorMayor}`);
    console.log(`Ordenado de mayor a menor: ${mayorMenor}`);
    console.log(`Numeros Repetidos: ${NumRepit}`);
})();
(() => {
    const nombre = 'gato';
    const getName = () => {
        console.log('maurito');
    };
})();

const Vehiculo = {
    name: 'Super Bochito y tuneado',
    sucolor: 'red',
    placa: '2312s2',
    year: 2022,
    model: 'bochito',
    family: 'volkswagen',
    getName() {
        return this.name;
    },
    getModelFamily() {
        return this.name, this.family;
    },
};
//# sourceMappingURL=main.js.map