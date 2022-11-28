(()=>{

    // Definicion de objetos, puede ser con var o con const.
    let flash: { name:string, age:number, powers:string[], getName?: ()=> string }  = {
        name: 'barry Alen',
        age: 24,
        powers: ['super Velocidad', 'Viajar en el tiempo']
      
    }


    // asignacion de nuevos datos en el objeto
    flash = {
        name: 'Superman',
        age: 33,
        powers: ['super Velocidad', 'SuperFuerza'],
        getName(){
            return this.name
        }
    }
    console.log( flash.getName() )
})()



