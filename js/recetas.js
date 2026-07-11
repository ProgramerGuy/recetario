const recetas = [

{
    nombre: "Polvorones de Nuez",

    categoria: "Galletas",

    imagen: "img/polvoron.png",

    horno: "🔥 180°C · 10-15 min",

    ingredientes: [
        "500 g de harina",
        "150 g de azúcar",
        "150 g de nuez en trozos",
        "50 g de manteca vegetal",
        "300 g de mantequilla Selecta"
    ],

    pasos: [
        "Acremar la manteca, la mantequilla y el azúcar.",
        "Agregar la harina y la nuez hasta formar una masa homogénea.",
        "Formar bolitas y aplastarlas ligeramente sobre una charola con papel para hornear.",
        "Hornear a 180 °C durante 10 a 15 minutos.",
        "Retirar del horno y espolvorear azúcar refinada."
    ]
},

{
    nombre:"Panqué con Chispas",

    categoria:"Panes",

    imagen:"img/panque.png",

    horno:"🔥 180°C · 30-45 min",

    ingredientes:[
        "3 huevos",
        "1 taza de azúcar",
        "½ taza de aceite",
        "1 taza de leche",
        "2 tazas de harina",
        "1 cucharadita de vainilla",
        "1 taza de chispas de chocolate",
        "2 cucharaditas de polvo para hornear",
        "1 pizca de sal"
    ],

    pasos:[
        "Batir huevos, azúcar, aceite, leche y vainilla durante 2 minutos.",
        "Mezclar harina, polvo para hornear y sal.",
        "Cubrir las chispas de chocolate con dos cucharadas de harina.",
        "Agregar los ingredientes secos a los líquidos sin sobrebatir.",
        "Incorporar las chispas con movimientos envolventes.",
        "Hornear a 180 °C durante 30 a 45 minutos."
    ]
},

{
    nombre:"Cupcakes de Chocolate",

    categoria:"Cupcakes",

    imagen:"img/cupcake.png",

    horno:"🔥 175°C · 18-22 min",

    ingredientes:[
        "1 taza de harina",
        "½ taza de cocoa",
        "½ taza de mantequilla",
        "¾ taza de azúcar",
        "1 huevo",
        "1 cucharadita de vainilla",
        "½ taza de leche",
        "¼ cucharadita de sal",
        "½ cucharadita de bicarbonato",
        "1 cucharadita de polvo para hornear"
    ],

    pasos:[
        "Colocar los capacillos.",
        "Mezclar harina, cocoa, bicarbonato, polvo para hornear y sal.",
        "Acremar mantequilla con azúcar.",
        "Agregar el huevo y la vainilla.",
        "Integrar los ingredientes secos alternando con la leche.",
        "Llenar los capacillos a dos tercios.",
        "Hornear a 175 °C durante 18 a 22 minutos."
    ]
},

{
    nombre:"Pan de Vainilla",

    categoria:"Panes",

    imagen:"img/pan-vainilla.png",

    horno:"🔥 180°C · 40-50 min",

    ingredientes:[
        "350 g de harina",
        "1 cucharada de polvo para hornear",
        "½ cucharadita de sal",
        "230 g de mantequilla",
        "400 g de azúcar",
        "4 huevos",
        "1 cucharadita de vainilla"
    ],

    pasos:[
        "Cernir harina, polvo para hornear y sal.",
        "Batir la mantequilla.",
        "Agregar el azúcar poco a poco.",
        "Añadir los huevos uno por uno.",
        "Agregar la vainilla.",
        "Alternar ingredientes secos con la leche.",
        "Vaciar en un molde preparado.",
        "Hornear de 40 a 50 minutos a 180 °C."
    ]
},

{
    nombre:"Galletas de Avena",

    categoria:"Galletas",

    imagen:"img/galletas-avena.png",

    horno:"🔥 180°C · 10-15 min",

    ingredientes:[
        "1 taza de harina",
        "1½ tazas de avena",
        "1 taza de azúcar mascabado",
        "1 huevo",
        "1 cucharada de vainilla",
        "½ cucharada de canela",
        "½ cucharada de bicarbonato",
        "¼ cucharada de sal",
        "½ taza de coco rallado",
        "½ taza de arándanos",
        "½ taza de nuez",
        "45 g de mantequilla"
    ],

    pasos:[
        "Batir mantequilla, huevo y vainilla.",
        "Mezclar ingredientes secos.",
        "Integrar ambas mezclas.",
        "Agregar coco, arándanos y nuez.",
        "Formar galletas.",
        "Hornear a 180 °C de 10 a 15 minutos."
    ]
},

{
    nombre:"Masa para Galletas",

    categoria:"Galletas",

    imagen:"img/masa.png",

    horno:"🔥 180°C · 15-20 min",

    ingredientes:[
        "500 g de manteca Inca",
        "1 kg de harina",
        "4 huevos",
        "1 cucharada de Rexal",
        "¾ taza de azúcar",
        "½ taza de leche en polvo",
        "1 cucharada de vainilla"
    ],

    pasos:[
        "Mezclar harina, Rexal y leche.",
        "Acremar la manteca durante 5 minutos.",
        "Agregar azúcar.",
        "Agregar huevos uno por uno.",
        "Añadir vainilla.",
        "Integrar ingredientes secos.",
        "Amasar.",
        "Hornear de 15 a 20 minutos."
    ]
},

{
    nombre:"Glasa Madre",

    categoria:"Decoración",

    imagen:"img/glasa.png",

    horno:"❄ No requiere horneado",

    ingredientes:[
        "1 kg de azúcar glass",
        "130 ml de agua",
        "30 g de merengue en polvo",
        "5 g de cremor tártaro",
        "2 cucharadas de vainilla transparente"
    ],

    pasos:[
        "Cernir azúcar glass.",
        "Agregar merengue y cremor tártaro.",
        "Mezclar el agua con la vainilla.",
        "Agregar poco a poco el líquido.",
        "Batir durante 5 minutos.",
        "Guardar tapado a temperatura ambiente."
    ]
},

{
    nombre:"Betún de Mantequilla",

    categoria:"Betunes",

    imagen:"img/betun.png",

    horno:"❄ No requiere horneado",

    ingredientes:[
        "150 g de mantequilla",
        "450 g de azúcar glass",
        "15 g de manteca",
        "1 cucharada de merengue en polvo",
        "2 a 4 cucharadas de leche"
    ],

    pasos:[
        "Batir mantequilla y manteca.",
        "Agregar la mitad del azúcar glass.",
        "Añadir vainilla y leche.",
        "Agregar el resto del azúcar.",
        "Batir hasta obtener un betún cremoso."
    ]
}

];