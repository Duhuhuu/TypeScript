const numbers:number[] = [5,6,7,6,5,4,9,80,2,1,6];

let contador:number = 14;

const ordenAscendente = ( nmeros:number[] ):number[] =>{

    const numbers2:number[] = [...numbers];
    let count:number = contador;
    // console.log(numbers2)

    for (let i = 0; i < count; i++) {
        count = count - 1

          for (let y = count; y >= i; y--) {
              if( numbers2[y - 1] > numbers2[y]){
            
                const listNum = numbers2[y-1] ;
                numbers2[y-1] = numbers2[y]
                numbers2[y] = listNum;

            };
        };
    }
    return numbers2;
}

const ordenDesendente = ( nmeros:number[] ):number[] =>{
    const numbers2:number[] = [...numbers];
    let count:number = contador;

    for (let i = 0; i < count; i++) {
        count = count - 1
          for (let y = count; y >= i; y--) {

              if( numbers2[y - 1] < numbers2[y]){
            
                // console.log(y)
                const listNum = numbers2[y-1] ;
                numbers2[y-1] = numbers2[y]
                numbers2[y] = listNum;

            };
        };
    }
    return numbers2;
}

const RepitNumbers = ( nmeros:number[] ):number[] =>{
    const numbers2:number[] = ordenAscendente(nmeros);
    let duplicados:number[] = [];
    
    let count:number = 11;
    for (let i = 0; i < count; i++) {
      
        if (numbers2[i + 1] === numbers2[i] ) {
            
            const temporal = numbers2[i+1];
            numbers2[i+1] = numbers2[i];
            numbers2[i] = temporal;
            duplicados.push(numbers2[i]);
        }
    }
    return duplicados;
}

(()=>{

    const menorMayor:string = ordenAscendente(numbers).join(', ')
    const mayorMenor:string = ordenDesendente(numbers).join(', ')
    const NumRepit:string = RepitNumbers(numbers).join(', ')

    console.log(`Ordenado de menor a mayor: ${ menorMayor }`);

    console.log(`Ordenado de mayor a menor: ${ mayorMenor }`);

    console.log(`Numeros Repetidos: ${ NumRepit }`);
    // numbers2 = [...numbers];
    // console.log(numbers2)
})()
    