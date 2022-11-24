(()=>{

    //En la tupla podemos definir el tipo de los datos que tiene, como condicion
    //levando un orden de primero hasta ultimo ---> 1, 2, 3 
    const hero: [string, number, boolean] = ['Dr Strange', 100, true]

    hero.push('Maurito', 777, true)

    hero[1] = 50;
    hero[0] = 'ironman';
    hero[2] = false

    console.log(hero)


})()