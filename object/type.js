"use strict";
(() => {
    // Definicion de objetos, puede ser con var o con const.
    let flash = {
        name: 'barry Alen',
        age: 24,
        powers: ['super Velocidad', 'Viajar en el tiempo']
    };
    // Definicion de objetos, puede ser con var o con const.
    let Superman = {
        name: 'Clark Kent',
        age: 34,
        powers: ['Super Velocidad', 'Super Mamado'],
        getName() {
            return this.name;
        }
    };
})();
