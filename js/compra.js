//==================================================
// BakeBook
// Lista Inteligente de Compras
//==================================================

let produccion = [];

/*
Ejemplo:

produccion = [
    { id:1, lotes:5 },
    { id:3, lotes:2 }
];

*/

function agregarProduccion(id,lotes=1){

    const existe = produccion.find(p=>p.id==id);

    if(existe){

        existe.lotes += lotes;

    }else{

        produccion.push({

            id,

            lotes

        });

    }

}

/////////////////////////////////////////////////////

function generarListaCompras(){

    let ingredientes={};

    produccion.forEach(item=>{

        const receta=

        recetas.find(r=>r.id==item.id);

        receta.ingredientes.forEach(i=>{

            if(!ingredientes[i.nombre]){

                ingredientes[i.nombre]={

                    nombre:i.nombre,

                    unidad:i.unidad,

                    cantidad:0

                };

            }

            ingredientes[i.nombre].cantidad +=

            i.cantidad * item.lotes;

        });

    });

    descontarInventario(ingredientes);

}

/////////////////////////////////////////////////////

function descontarInventario(lista){

    Object.values(lista).forEach(i=>{

        const stock=

        buscarExistencia(i.nombre);

        if(stock){

            i.cantidad -= stock.cantidad;

            if(i.cantidad<0)

                i.cantidad=0;

        }

    });

    mostrarCompras(lista);

}

/////////////////////////////////////////////////////

function mostrarCompras(lista){

    let html=`

    <h1>

    🛒 Lista Inteligente de Compras

    </h1>

    <table class="tabla-costos">

    <tr>

    <th>

    Ingrediente

    </th>

    <th>

    Comprar

    </th>

    </tr>

    `;

    let total=0;

    Object.values(lista).forEach(i=>{

        if(i.cantidad==0)

            return;

        const costo=

        calcularCostoCompra(i);

        total+=costo;

        html+=`

        <tr>

        <td>

        ${i.nombre}

        </td>

        <td>

        ${formatoNumero(i.cantidad)}

        ${i.unidad}

        </td>

        </tr>

        `;

    });

    html+=`

    </table>

    <br>

    <h2>

    Total estimado

    </h2>

    <h1>

    ${formatoMoneda(total)}

    </h1>

    <br>

    <button

    class="btn"

    onclick="window.print()">

    🖨 Imprimir

    </button>

    `;

    modalBody.innerHTML=html;

}

/////////////////////////////////////////////////////

function calcularCostoCompra(item){

    const ing=

    buscarIngrediente(item.nombre);

    if(!ing)

        return 0;

    switch(item.unidad){

        case "g":

            return item.cantidad*

            (ing.precio/1000);

        case "ml":

            return item.cantidad*

            (ing.precio/1000);

        default:

            return item.cantidad*

            ing.precio;

    }

}