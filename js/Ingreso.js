class Ingreso extends Dato{

    static contIngesos = 0 ;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.contIngesos
    }
    get id (){
        return this._id;
    }
    
}