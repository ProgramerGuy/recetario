const overlay=document.getElementById("overlayPrint");

function imprimirHTML(html, titulo = "Recetario") {

    mostrarOverlay("Preparando impresión...");

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            const frame = document.getElementById("printFrame");

            const doc = frame.contentWindow.document;

            doc.open();

            doc.write(`
                <!DOCTYPE html>
                <html>

                <head>

                    <title>${titulo}</title>

                    ${cssImpresion()}

                </head>

                <body>

                    ${html}

                </body>

                </html>
            `);

            doc.close();

            frame.onload = () => {

                setTimeout(() => {

                    frame.contentWindow.focus();

                    frame.contentWindow.print();

                },150);

            };

        });

    });

}

function mostrarOverlay(){

    overlay.classList.add("show");

}

function ocultarOverlay(){

    overlay.classList.remove("show");

}

function cssImpresion() {
return `
<style>

@page{
    size: Letter;
    margin:12mm;
}

*{
    box-sizing:border-box;
}

body{
    font-family:Arial,Helvetica,sans-serif;
    color:#222;
    margin:0;
}

.receta{
    page-break-after:always;
    break-after:page;
}

.receta:last-child{
    page-break-after:auto;
}

h1{
    text-align:center;
    color:#c45a00;
    margin:0 0 10px;
}

img{
    width:100%;
    height:220px;
    object-fit:cover;
    border-radius:10px;
    margin-bottom:15px;
}

h2{
    color:#c45a00;
    border-bottom:1px solid #ddd;
    padding-bottom:4px;
    margin-top:18px;
}

ul{
    padding-left:20px;
}

ol{
    padding-left:22px;
}

li{
    margin-bottom:6px;
    line-height:1.45;
}

.info{
    margin-top:20px;
    font-weight:bold;
    color:#555;
}

</style>
`;
}
