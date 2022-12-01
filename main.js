"use strict";
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
//# sourceMappingURL=main.js.map