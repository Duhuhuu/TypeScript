"use strict";
(() => {
    //Especificarle el tipo de funcion que es
    //Si es void se declara con el ():void
    function callBatman() {
    }
    //Lo mismo que callBatman, pero ahora con una funcion de flecha.
    const callSuperman = () => {
    };
    const a = callBatman();
    console.log(a);
})();
