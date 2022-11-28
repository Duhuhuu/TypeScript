(()=>{

    // Se pone un " ? ", para indicarle que esto puede venir o no, osea que ese argumento es obcional.
        const fullName = (firsName:string, lastName?:string, upper:boolean = false):string => {
    
            if(upper){
                return `${firsName} ${lastName || '----'}`.toUpperCase();
            }else{
                
                return `${firsName} ${lastName || '----'}`;
            }
        }
    
        const name =  fullName('Tony', 'maurito', true);
        console.log({name})
    
    
    })()
    