const ingresos = [
    new Ingreso('Salario', 1300000),
    new Ingreso('Desarollo', 2500000)

];

const egresos = [
    new Egreso('arriendo', 950000),
    new Egreso('mercado', 250000)

];

let cargarApp = () => {

    cargarCabecera();

}
let totalIngresos = () => {
    let totalIngreso = 0; // Acomulador de ingresos
    for (let ingreso of ingresos) {//recorre cada ingreso del array ingresos
        totalIngreso += ingreso.dato2;

    }
    return totalIngreso;
}

const cargarIngersos = () => {
    let ingresosHTML = '';
    for (let ingreso of ingresos)
        ingresosHTML += crearIngresoHTML(ingreso);
}

const crearIngresoHTML = (ingreso) => {

    let ingresosHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elementoDescripcion">Salario</div>
        <div class="derecha limpiarEstilos">
            <div class="elementoValor">5000</div>
            <div class="elementoEliminar">
                <button class="elementoEliminarBtn">X</button>
            </div>
        </div>
    </div>
    `;
    return ingresosHTML;
}

let totalEgresos = () => {
    let totalEgreso = 0; // Acomulador de ingresos
    for (let egreso of egresos) {//recorre cada ingreso del array ingresos
        totalEgreso += egreso.dato2;

    }
    return totalEgreso;
}


let cargarCabecera = () => {
    let total = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(total);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
    document.getElementById('porcentajeEgreso').innerHTML = formatoPorcentaje(porcentajeEgreso);
}

const formatoMoneda = (dato2) => {
    return dato2.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    });
}

const formatoPorcentaje = (dato2) => {
    return dato2.toLocaleString('es-CO', {
        style: 'percent',
        minimumFractionDigits: 0
    });
}
