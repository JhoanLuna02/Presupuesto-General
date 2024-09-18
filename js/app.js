const ingresos = [
    new Ingreso('Salario', 1300000),
    new Ingreso('Desarollo', 2500000)
];

const egresos = [
    new Egreso('arriendo',630000),
    new Egreso('mercado', 250000)

];

let cargarApp = () => {

    cargarCabecera();
    
}

let cargarCabecera = () =>{
    console.log('hola soy puto el que lo lea');
    console.log(ingresos)
}