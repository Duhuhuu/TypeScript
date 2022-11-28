"use strict";
(() => {
    // Se pone un " ? ", para indicarle que esto puede venir o no, osea que ese argumento es obcional.
    const fullName = (firsName, lastName, upper = false) => {
        if (upper) {
            return `${firsName} ${lastName || '----'}`.toUpperCase();
        }
        else {
            return `${firsName} ${lastName || '----'}`;
        }
    };
    const name = fullName('Tony', 'maurito', true);
    console.log({ name });
})();
