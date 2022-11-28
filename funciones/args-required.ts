(()=>{
// Con esto puedo indicarle a la funcion que requiere y son obligatoris esos dos argumentos
// Si no los tienen o  no se los mandan entonces da error.
    const fullName = (firsName:string, lastName:string):string => {

        return `${firsName} ${lastName}`;

    }

    const name =  fullName('Tony', 'Stark');
    console.log({name})


})()


