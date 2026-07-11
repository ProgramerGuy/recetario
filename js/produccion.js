//=========================================
// BakeBook
// Producción
//=========================================

function abrirProduccion(id){

    const receta=recetas.find(r=>r.id==id);

    let html=`

    <h1>

    🏭 Producción

    </h1>

    <h2>

    ${receta.nombre}

    </h2>

    <br>

    <label>

    ¿Cuántas piezas deseas producir?

    </label>

    <br><br>

    <input

    id="cantidadProduccion"

    type="number"

    value="1"

    min="1"

    class="input"

    >

    <br><br>

    <button

    class="btn"

    onclick="calcularProduccion(${id})">

    Calcular producción

    </button>

    <br><br>

    <div id="resultadoProduccion">

    </div>

    `;

    modalBody.innerHTML=html;

}

//=========================================

function calcularProduccion(id){

    const receta=

    recetas.find(r=>r.id==id);

    const piezas=

    Number(cantidadProduccion.value);

    const rendimiento=

    obtenerRendimiento(receta);

    const factor=

    piezas/rendimiento;

    let html=`

    <h2>

    Ingredientes necesarios

    </h2>

    <table class="tabla-costos">

    <tr>

    <th>

    Ingrediente

    </th>

    <th>

    Cantidad

    </th>

    </tr>

    `;

    receta.ingredientes.forEach(i=>{

        html+=`

        <tr>

        <td>

        ${i.nombre}

        </td>

        <td>

        ${formatoNumero(

            i.cantidad*factor

        )}

        ${i.unidad}

        </td>

        </tr>

        `;

    });

    html+=`

    </table>

    <br>

    <button

    class="btn"

    onclick="imprimirProduccion()">

    🖨 Imprimir Orden

    </button>

    `;

    resultadoProduccion.innerHTML=html;

}

//=========================================

function obtenerRendimiento(receta){

    const numero=

    parseInt(

        receta.rendimiento

    );

    if(isNaN(numero))

        return 1;

    return numero;

}

//=========================================

function imprimirProduccion(){

    window.print();

}