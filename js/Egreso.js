//extend es de la clase donde viene a ser hijo de:
//en este caso egreso es hijo de dato
class Egreso extends Dato{

    // static es para usar la variable cuando va dentro del constructor
    static contEgreso = 0 ;

    constructor(dato1, dato2){

        //super envia a los datos al padre "dato"
        super(dato1, dato2);
        this._id = ++Egreso.contEgreso
        //this id( ++"Egreso"variable "id" que pertenece a la clase "Egreso")
    }
    get id (){
        return this._id;
    }
    
}