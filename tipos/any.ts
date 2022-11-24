(()=>{

    let avenger:any= 123;
    let exists;
    let power;

    avenger = 'Dr Strange';
    console.log( (avenger as string ).charAt(10) );

    avenger = 150.123123;
    console.log(avenger.toFixed(2));

    console.log(exists);
    console.log(power);
    // console.log();



})()