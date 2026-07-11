// =========================================
// BakeBook
// Ficha Técnica
// =========================================

function abrirReceta(id){

    recetaActual = recetas.find(r=>r.id===id);

    construirFicha(recetaActual);

    recipeModal.showModal();

}

// =========================================

function construirFicha(receta){

    modalBody.innerHTML=`

    <div class="recipe-header">

        <img

        src="${receta.imagen}"

        class="recipe-cover">

        <div>

            <h1>${receta.nombre}</h1>

            <p>

                🌡 ${receta.temperatura}

                ·

                ⏱ ${receta.tiempo}

            </p>

            <p>

                🍪 ${receta.rendimiento}

            </p>

        </div>

    </div>

    <div class="tabs">

        <button

        class="tab active"

        onclick="tabReceta()">

        📖 Receta

        </button>

        <button

        class="tab"

        onclick="tabCostos()">

        💰 Costos

        </button>

        <button

        class="tab"

        onclick="tabEscalar()">

        ⚖ Escalar

        </button>

        <button

        class="tab"

        onclick="tabCompras()">

        🛒 Compras

        </button>

    </div>

    <div

    id="tabContent">

    </div>

    `;

    tabReceta();

}

// =========================================

function tabReceta(){

    activarTab(0);

    let html=`

    <h2>

    Ingredientes

    </h2>

    <ul>

    `;

    recetaActual.ingredientes.forEach(i=>{

        html+=`

        <li>

        ${i.cantidad}

        ${i.unidad}

        ${i.nombre}

        </li>

        `;

    });

    html+=`

    </ul>

    <h2>

    Procedimiento

    </h2>

    <ol>

    `;

    recetaActual.procedimiento.forEach(p=>{

        html+=`

        <li>

        ${p}

        </li>

        `;

    });

    html+=`

    </ol>

    `;

    tabContent.innerHTML=html;

}

// =========================================

function tabCostos(){

    activarTab(1);

    tabContent.innerHTML=

    mostrarCosto(recetaActual.id);

}

// =========================================

function tabEscalar(){

    activarTab(2);

    let html=`

    <h2>

    Escalar receta

    </h2>

    <div class="scale-grid">

    `;

    [0.5,1,2,3,5,10].forEach(f=>{

        html+=`

        <button

        class="btn"

        onclick="mostrarEscala(${f})">

        ${f}×

        </button>

        `;

    });

    html+=`

    </div>

    <div

    id="escalaResultado"

    class="mt-20">

    </div>

    `;

    tabContent.innerHTML=html;

}

// =========================================

function mostrarEscala(factor){

    let html=`

    <h2>

    Ingredientes

    </h2>

    <ul>

    `;

    recetaActual.ingredientes.forEach(i=>{

        html+=`

        <li>

        ${(i.cantidad*factor).toFixed(2)}

        ${i.unidad}

        ${i.nombre}

        </li>

        `;

    });

    html+=`

    </ul>

    `;

    escalaResultado.innerHTML=html;

}

// =========================================

function tabCompras(){

    activarTab(3);

    let html=`

    <h2>

    Lista de compras

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

    recetaActual.ingredientes.forEach(i=>{

        html+=`

        <tr>

        <td>

        ${i.nombre}

        </td>

        <td>

        ${i.cantidad}

        ${i.unidad}

        </td>

        </tr>

        `;

    });

    html+=`

    </table>

    <button

    class="btn"

    onclick="window.print()">

    🖨 Imprimir Lista

    </button>

    `;

    tabContent.innerHTML=html;

}

// =========================================

function activarTab(numero){

    document

    .querySelectorAll(".tab")

    .forEach(t=>t.classList.remove("active"));

    document

    .querySelectorAll(".tab")[numero]

    .classList.add("active");

}