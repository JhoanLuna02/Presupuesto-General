class Dato{
        constructor(descripcion, valor){

            this._descripcion = descripcion;
            this._valor = valor;
        }


        //metodos get and set 

        get descripcion(){
            return this._descripcion;
        }
        set descripcion(descripcion){
            this._descripcion = descripcion;
        }

        get valor(){
            return this._valor;
        }
        set valor(valor){
            return this._valor = valor;
        }
}