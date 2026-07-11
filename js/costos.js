// ======================================================
// BakeBook - Módulo de Costos
// Versión 1.0
// ======================================================

let catalogoIngredientes = [];

async function cargarCatalogoIngredientes() {

    const respuesta = await fetch("data/ingredientes.json");

    catalogoIngredientes = await respuesta.json();

}

// ======================================================

function buscarIngrediente(nombre) {

    return catalogoIngredientes.find(i =>
        i.nombre.toLowerCase() === nombre.toLowerCase()
    );

}

// ======================================================

function convertirAGramos(cantidad, unidad){

    switch(unidad.toLowerCase()){

        case "kg":
            return cantidad*1000;

        case "g":
            return cantidad;

        case "litro":
            return cantidad*1000;

        case "ml":
            return cantidad;

        default:
            return cantidad;

    }

}

// ======================================================

function precioUnitario(ingrediente){

    switch(ingrediente.unidadCompra){

        case "kg":

            return ingrediente.precio/1000;

        case "litro":

            return ingrediente.precio/1000;

        case "pieza":

            return ingrediente.precio;

        default:

            return ingrediente.precio;

    }

}

// ======================================================

function costoIngrediente(item){

    const ingrediente=buscarIngrediente(item.nombre);

    if(!ingrediente){

        return{

            nombre:item.nombre,

            costo:0,

            encontrado:false

        };

    }

    let costo=0;

    //----------------------------------

    if(item.unidad=="g"){

        costo=item.cantidad*
        precioUnitario(ingrediente);

    }

    //----------------------------------

    else if(item.unidad=="kg"){

        costo=(item.cantidad*1000)*
        precioUnitario(ingrediente);

    }

    //----------------------------------

    else if(item.unidad=="ml"){

        costo=item.cantidad*
        precioUnitario(ingrediente);

    }

    //----------------------------------

    else if(item.unidad=="litro"){

        costo=(item.cantidad*1000)*
        precioUnitario(ingrediente);

    }

    //----------------------------------

    else{

        costo=item.cantidad*
        precioUnitario(ingrediente);

    }

    return{

        nombre:item.nombre,

        costo:costo,

        encontrado:true

    };

}

// ======================================================

function calcularCostoReceta(receta){

    let total=0;

    let detalle=[];

    receta.ingredientes.forEach(i=>{

        const resultado=
        costoIngrediente(i);

        detalle.push(resultado);

        total+=resultado.costo;

    });

    return{

        detalle,

        total

    };

}

// ======================================================

function costoPorPieza(costo,rendimiento){

    const numero=parseInt(rendimiento);

    if(isNaN(numero))

        return costo;

    return costo/numero;

}

// ======================================================

function precioVenta(costo,utilidad){

    return costo*(1+(utilidad/100));

}

// ======================================================

function formatoMoneda(numero){

    return numero.toLocaleString(

        "es-MX",

        {

            style:"currency",

            currency:"MXN"

        }

    );

}

// ======================================================

function mostrarCosto(id){

    const receta=

    recetas.find(r=>r.id==id);

    const datos=

    calcularCostoReceta(receta);

    const costoPieza=

    costoPorPieza(

        datos.total,

        receta.rendimiento

    );

    const precioSugerido=

    precioVenta(

        costoPieza,

        100

    );

    let html="";

    html+=`

    <h2>

    💰 Costos

    </h2>

    <table class="tabla-costos">

    <thead>

    <tr>

    <th>Ingrediente</th>

    <th>Costo</th>

    </tr>

    </thead>

    <tbody>

    `;

    datos.detalle.forEach(i=>{

        html+=`

        <tr>

        <td>

        ${i.nombre}

        </td>

        <td>

        ${formatoMoneda(i.costo)}

        </td>

        </tr>

        `;

    });

    html+=`

    </tbody>

    </table>

    <div class="resume">

    <h3>

    Total receta

    </h3>

    <strong>

    ${formatoMoneda(datos.total)}

    </strong>

    <br><br>

    <h3>

    Costo por pieza

    </h3>

    <strong>

    ${formatoMoneda(costoPieza)}

    </strong>

    <br><br>

    <h3>

    Precio sugerido

    </h3>

    <strong>

    ${formatoMoneda(precioSugerido)}

    </strong>

    </div>

    `;

    return html;

}