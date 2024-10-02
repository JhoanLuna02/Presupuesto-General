class Ingreso extends Dato{

    static contIngesos = 0 ;

    constructor(dato1, dato2){
        super(dato1, dato2);
        this._id = ++Ingreso.contIngesos
    }
    get id (){
        return this._id;
    }
    
}