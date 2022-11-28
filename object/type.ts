(()=>{

    // Sirve para definir los tipos de datos de un objeto, con sus restricciones y todo.
    type Hero = {
        name:string; 
        age:number;
        powers:string[];
        getName?: ()=> string;
    }

    // Definicion de objetos, puede ser con var o con const.
    let flash: Hero   = {
        name: 'barry Alen',
        age: 24,
        powers: ['super Velocidad', 'Viajar en el tiempo']
      
    }

    // Definicion de objetos, puede ser con var o con const.
    let Superman: Hero  = {
        name: 'Clark Kent',
        age: 34,
        powers: ['Super Velocidad', 'Super Mamado'],
        getName(){
            return this.name
        }
      
    }


    
})()



