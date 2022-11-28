"use strict";
(() => {
    // Se pone un " ? ", para indicarle que esto puede venir o no, osea que ese argumento es obcional.
    const fullName = (firsName, lastName) => {
        // si no le llega un dato al lastname, entonces se pasa a undefine, pero con el operador || "or" puedo darle una condicion mas a cumplir,
        // en este caso, seria 'No lastname'
        return `${firsName} ${lastName || 'No lastname'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
