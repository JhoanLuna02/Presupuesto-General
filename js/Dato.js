class Dato{
        constructor(dato1, dato2){

            this.descripcion = dato1;
            this.valor = dato2;
        }


        //metodos get and set 

        // get: son los metodos que me permiten consultar
        get dato1(){
            return this.descripcion;
        }
        get dato2(){
            return this.valor;
        }

        //set: permien modificar una variable
        set dato1(dato1){
            this.descripcion = dato1;
        }
        set dato2(dato2){
            this.valor = dato2;
        }
}