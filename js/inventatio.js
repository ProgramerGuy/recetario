//=========================================
// Inventario
//=========================================

let inventario=[];

async function cargarInventario(){

    const r=await fetch("data/inventario.json");

    inventario=await r.json();

}

//=========================================

function buscarExistencia(nombre){

    return inventario.find(

        i=>i.nombre.toLowerCase()==

        nombre.toLowerCase()

    );

}

//=========================================

function recetasPosibles(){

    let resultado=[];

    recetas.forEach(receta=>{

        let posible=true;

        let maximo=999999;

        receta.ingredientes.forEach(i=>{

            const stock=

            buscarExistencia(i.nombre);

            if(!stock){

                posible=false;

                return;

            }

            let cantidad=

            stock.cantidad/i.cantidad;

            if(cantidad<maximo)

                maximo=cantidad;

        });

        if(posible){

            resultado.push({

                receta:receta.nombre,

                veces:Math.floor(maximo)

            });

        }

    });

    return resultado;

}

//=========================================

function abrirInventario(){

    let lista=

    recetasPosibles();

    let html=`

    <h1>

    📦 Inventario

    </h1>

    <table class="tabla-costos">

    <tr>

    <th>

    Receta

    </th>

    <th>

    Puedes preparar

    </th>

    </tr>

    `;

    lista.forEach(r=>{

        html+=`

        <tr>

        <td>

        ${r.receta}

        </td>

        <td>

        ${r.veces}

        lote(s)

        </td>

        </tr>

        `;

    });

    html+=`

    </table>

    `;

    modalBody.innerHTML=html;

}