(()=>{

    // Sirve para definir los tipos de datos de un objeto, con sus restricciones y todo.
    type Hero = {
        name:string; 
        age:number;
        powers:number[];
        getName?: ()=> string;
    }

    let myCustomVariable: (string | number | Hero) = 'Maurito';

    console.log(typeof myCustomVariable)
    
    myCustomVariable = 20;
    console.log(typeof myCustomVariable)

    myCustomVariable = {
        name: 'maurito',
        age: 15,
        powers:[666]
    }
    console.log(typeof myCustomVariable)
    console.log(typeof myCustomVariable)
})()


