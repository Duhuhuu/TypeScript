
const Vehiculo:{name:string,sucolor:string, placa:string, year:number, model:string, family:string, getName: () => string, getModelFamily: () => string} = {

    name:'Super Bochito y tuneado',
    sucolor:'red',
    placa:'2312s2',
    year:2022,
    model:'bochito',
    family:'volkswagen',
    getName(){
        return this.name
    },
    getModelFamily(){
        return this.name, this.family
    },

}