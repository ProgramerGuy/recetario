//==================================================
// BakeBook
// Panel de Administración
//==================================================

const STORAGE_RECETAS="bakebook_recetas";
const STORAGE_INGREDIENTES="bakebook_ingredientes";
const STORAGE_INVENTARIO="bakebook_inventario";

//--------------------------------------------------

function guardarTodo(){

    localStorage.setItem(

        STORAGE_RECETAS,

        JSON.stringify(recetas)

    );

    localStorage.setItem(

        STORAGE_INGREDIENTES,

        JSON.stringify(catalogoIngredientes)

    );

    localStorage.setItem(

        STORAGE_INVENTARIO,

        JSON.stringify(inventario)

    );

    alert("Información guardada.");

}

//--------------------------------------------------

function cargarLocalStorage(){

    let r=

    localStorage.getItem(

        STORAGE_RECETAS

    );

    if(r)

        recetas=

        JSON.parse(r);

    let i=

    localStorage.getItem(

        STORAGE_INGREDIENTES

    );

    if(i)

        catalogoIngredientes=

        JSON.parse(i);

    let inv=

    localStorage.getItem(

        STORAGE_INVENTARIO

    );

    if(inv)

        inventario=

        JSON.parse(inv);

}

//--------------------------------------------------

function exportarDatos(){

    const datos={

        recetas,

        ingredientes:catalogoIngredientes,

        inventario

    };

    const blob=

    new Blob(

        [

            JSON.stringify(

                datos,

                null,

                4

            )

        ],

        {

            type:"application/json"

        }

    );

    const url=

    URL.createObjectURL(blob);

    const a=

    document.createElement("a");

    a.href=url;

    a.download="BakeBook_Backup.json";

    a.click();

}

//--------------------------------------------------

function importarDatos(event){

    const archivo=

    event.target.files[0];

    if(!archivo)

        return;

    const lector=

    new FileReader();

    lector.onload=e=>{

        const datos=

        JSON.parse(e.target.result);

        recetas=

        datos.recetas;

        catalogoIngredientes=

        datos.ingredientes;

        inventario=

        datos.inventario;

        guardarTodo();

        mostrarRecetas(recetas);

    };

    lector.readAsText(archivo);

}

//--------------------------------------------------

function abrirPanelAdmin(){

modalBody.innerHTML=`

<h1>

⚙ Panel de Administración

</h1>

<br>

<button

class="btn"

onclick="guardarTodo()">

💾 Guardar

</button>

<br><br>

<button

class="btn"

onclick="exportarDatos()">

📤 Exportar respaldo

</button>

<br><br>

<label class="btn">

📥 Importar respaldo

<input

type="file"

accept=".json"

style="display:none"

onchange="importarDatos(event)"

>

</label>

<br><br>

<button

class="btn"

onclick="administrarIngredientes()">

🥣 Ingredientes

</button>

<br><br>

<button

class="btn"

onclick="administrarInventario()">

📦 Inventario

</button>

<br><br>

<button

class="btn"

onclick="administrarRecetas()">

📖 Recetas

</button>

`;

recipeModal.showModal();

}