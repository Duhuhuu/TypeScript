"use strict";
(() => {
    let myCustomVariable = 'Maurito';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'maurito',
        age: 15,
        powers: [666]
    };
    console.log(typeof myCustomVariable);
    console.log(typeof myCustomVariable);
})();
