const grid = document.getElementById("grid");
const buscar = document.getElementById("buscar");
// const printArea = document.getElementById("printArea");
const hero = document.getElementById("hero");
const modal = document.getElementById("modalReceta");
const modalContenido = document.getElementById("modalContenido");
const modalOverlay = document.getElementById("modalOverlay");

let categoriaActual = "Todos";

/* ============================= */
/* CREAR TARJETAS */
/* ============================= */

function crearTarjetas() {

    grid.innerHTML = "";

    const texto = buscar.value.toLowerCase();

    const filtradas = recetas.filter(receta => {

        const nombre = receta.nombre.toLowerCase().includes(texto);

        const categoria =
            categoriaActual === "Todos" ||
            receta.categoria === categoriaActual;

        return nombre && categoria;

    });

    if (filtradas.length === 0) {

        grid.innerHTML = `
        <div class="col-span-full text-center py-20">

            <i class="fa-solid fa-cookie-bite text-6xl text-orange-300"></i>

            <h2 class="text-3xl font-bold mt-6">
                No se encontraron recetas
            </h2>

        </div>
        `;

        return;

    }

    filtradas.forEach(receta => {

        grid.innerHTML += `

<div class="card bg-white rounded-3xl overflow-hidden shadow-lg">

    <div class="relative h-60 overflow-hidden">

        <img
            src="${receta.imagen}"
            alt="${receta.nombre}"
            class="w-full h-full object-cover">

        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

        <div class="absolute bottom-5 left-5">

            <span class="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">

                ${receta.categoria}

            </span>

            <h2 class="text-white text-2xl font-bold mt-3">

                ${receta.nombre}

            </h2>

        </div>

    </div>

    <div class="p-6">

        <div class="mb-5">

            <span class="tag">

                ${receta.horno}

            </span>

        </div>

        <button

            class="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3 font-semibold transition"

            onclick="verReceta('${receta.nombre.replace(/'/g,"\\'")}')">

            Ver receta

        </button>

    </div>

</div>

`;

    });

}

// /* ============================= */
// /* VER RECETA */
// /* ============================= */

// function verReceta(nombre){

//     const receta = recetas.find(r=>r.nombre===nombre);

//     if(!receta) return;

//     grid.classList.add("hidden");

//     hero.classList.add("hidden");

//     printArea.classList.remove("hidden");

//     printArea.scrollIntoView({
//         behavior:"smooth"
//     });

//     printArea.innerHTML = `

// <div class="bg-white rounded-3xl shadow-xl overflow-hidden">

// <img

// src="${receta.imagen}"

// class="w-full h-72 object-cover">

// <div class="p-8">

// <button

// id="volver"

// onclick="volver()"

// class="mb-8 bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-xl">

// ← Regresar

// </button>

// <h1 class="text-5xl font-bold text-orange-700 mb-4">

// ${receta.nombre}

// </h1>

// <span class="tag">

// ${receta.horno}

// </span>

// <div class="grid md:grid-cols-2 gap-12 mt-10">

// <div>

// <h2 class="text-2xl font-bold mb-5">

// 🧂 Ingredientes

// </h2>

// <ul class="space-y-3">

// ${receta.ingredientes.map(i=>`

// <li class="flex gap-3">

// <span class="text-green-600">

// ✔

// </span>

// <span>

// ${i}

// </span>

// </li>

// `).join("")}

// </ul>

// </div>

// <div>

// <h2 class="text-2xl font-bold mb-5">

// 👨‍🍳 Procedimiento

// </h2>

// <ol class="space-y-5">

// ${receta.pasos.map((p,index)=>`

// <li class="flex gap-4">

// <div

// class="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">

// ${index+1}

// </div>

// <div>

// ${p}

// </div>

// </li>

// `).join("")}

// </ol>

// </div>

// </div>

// <div class="mt-12 text-center">

// <button

// id="btnImprimirReceta"

// onclick="imprimirReceta('${receta.nombre}')"

// class="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold">

// 🖨 Imprimir receta

// </button>

// </div>

// </div>

// </div>

// `;

// }

// /* ============================= */
// /* REGRESAR */
// /* ============================= */

// function volver(){

//     printArea.classList.add("hidden");

//     hero.classList.remove("hidden");

//     grid.classList.remove("hidden");

//     window.scrollTo({

//         top:0,

//         behavior:"smooth"

//     });

// }

/* ============================= */
/* BUSCADOR */
/* ============================= */

buscar.addEventListener("input",crearTarjetas);

/* ============================= */
/* CATEGORÍAS */
/* ============================= */

document.querySelectorAll(".categoria").forEach(btn=>{

    btn.addEventListener("click",()=>{

        categoriaActual=btn.dataset.cat;

        document.querySelectorAll(".categoria").forEach(b=>{

            b.classList.remove("bg-white","text-orange-700");

            b.classList.add("bg-white/20","text-white");

        });

        btn.classList.remove("bg-white/20","text-white");

        btn.classList.add("bg-white","text-orange-700");

        crearTarjetas();

    });

});

/* ============================= */
/* INICIAR */
/* ============================= */

crearTarjetas();

// function imprimirReceta(){

//     modoImpresion = "una";

//     document.body.classList.remove("imprimir-todas");
//     document.body.classList.add("imprimir-una");

//     window.print();

// }

// function imprimirTodo(){

//     modoImpresion = "todas";

//     generarRecetarioCompleto();

//     document.body.classList.remove("imprimir-una");
//     document.body.classList.add("imprimir-todas");

//     window.print();

// }

function htmlReceta(receta){

return `

<section class="receta">

<h1>${receta.nombre}</h1>

<img src="${receta.imagen}">

<div class="info">${receta.horno}</div>

<h2>Ingredientes</h2>

<ul>

${receta.ingredientes.map(i=>`<li>${i}</li>`).join("")}

</ul>

<h2>Procedimiento</h2>

<ol>

${receta.pasos.map(p=>`<li>${p}</li>`).join("")}

</ol>

</section>

`;

}

function imprimirReceta(nombre){

    const receta = recetas.find(r=>r.nombre===nombre);

    imprimirHTML(

        htmlReceta(receta),

        receta.nombre

    );

}

function imprimirTodo(){

    let html="";

    recetas.forEach(r=>{

        html += htmlReceta(r);

    });

    imprimirHTML(

        html,

        "Mi Recetario"

    );

}

function abrirModal(){

    modal.classList.remove("hidden");

    document.body.classList.add("overflow-hidden");

    requestAnimationFrame(()=>{

        modalContenido.classList.remove("opacity-0","scale-95");

        modalContenido.classList.add("opacity-100","scale-100");

    });

}

function cerrarModal(){

    modalContenido.classList.remove("opacity-100","scale-100");

    modalContenido.classList.add("opacity-0","scale-95");

    setTimeout(()=>{

        modal.classList.add("hidden");

        document.body.classList.remove("overflow-hidden");

    },250);

}

modalOverlay.onclick = cerrarModal;

document.addEventListener("keydown",e=>{

    if(e.key==="Escape"){

        cerrarModal();

    }

});

function verReceta(nombre){

    const receta = recetas.find(r=>r.nombre===nombre);

    if(!receta) return;

    modalContenido.innerHTML = `

<header class="sticky top-0 z-20 bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">

    <div>

        <span class="text-xs uppercase tracking-widest text-orange-500">

            ${receta.categoria}

        </span>

        <h1 class="text-3xl font-bold text-orange-700">

            ${receta.nombre}

        </h1>

    </div>

    <div class="flex gap-3">

        <button

            onclick="imprimirReceta('${receta.nombre}')"

            class="bg-green-600 hover:bg-green-700 text-white rounded-xl px-4 py-3 transition">

            🖨

        </button>

        <button

            onclick="cerrarModal()"

            class="bg-gray-200 hover:bg-gray-300 rounded-xl px-4 py-3 transition">

            ✕

        </button>

    </div>

</header>

<div class="overflow-y-auto h-full">

    <img

        src="${receta.imagen}"

        class="w-full h-80 object-cover">

    <div class="p-8">

        <div class="mb-8">

            <span class="inline-block bg-orange-100 text-orange-700 rounded-full px-4 py-2">

                ${receta.horno}

            </span>

        </div>

        <div class="grid lg:grid-cols-2 gap-10">

            <div>

                <h2 class="text-2xl font-bold mb-5">

                    🧂 Ingredientes

                </h2>

                <ul class="space-y-3">

                    ${receta.ingredientes.map(i=>`

                    <li class="flex gap-3">

                        <span class="text-green-600 mt-1">

                            ✔

                        </span>

                        <span>

                            ${i}

                        </span>

                    </li>

                    `).join("")}

                </ul>

            </div>

            <div>

                <h2 class="text-2xl font-bold mb-5">

                    👨‍🍳 Procedimiento

                </h2>

                <ol class="space-y-5">

                    ${receta.pasos.map((p,index)=>`

                    <li class="flex gap-4">

                        <div

                            class="w-9 h-9 flex-shrink-0 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">

                            ${index+1}

                        </div>

                        <div>

                            ${p}

                        </div>

                    </li>

                    `).join("")}

                </ol>

            </div>

        </div>

    </div>

</div>

`;

    abrirModal();

}