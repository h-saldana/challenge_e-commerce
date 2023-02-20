
const btnConsola = document.querySelector("[data-consolas]");

export function verConsolas() {

    $("#button").click(function () {
        $(document).scrollTop(1200)
    });

    return console.log("realizando funcion")
}

btnConsola.onclick = verConsolas();

// Validando formulario hable con nosotros

const nombre = document.querySelector("[data-nombre]");
const mensaje = document.querySelector("[data-mensaje]");
const btn = document.querySelector("[data-btn]");

nombre.addEventListener('blur', (evento) => {
    validandoNombre(evento.target);
})

function validandoNombre(input) {
    nombredata = nombre.value;
    textoDividido = nombredata.split("");
    numeroCaracteres = textoDividido.length;
    let mensajeNombre = "";

    if (numeroCaracteres > 40) {
        mensajeNombre = "error NOMBRE no cumple con lo requerido, máximo 40 caracteres";

    } else {
        console.log(nombredata);
    }
    input.setCustomValidity(mensajeNombre);

}

mensaje.addEventListener('blur', (evento) => {
    validandoTextArea(evento.target);
})

function validandoTextArea(textarea) {
    mensajedata = mensaje.value;
    mensajeDividido = mensajedata.split("");
    mensajeCaracteres = mensajeDividido.length;

    let mensajeText = "";
    if (mensajeCaracteres > 120) {

        mensajeText = "error, MENSAJE no cumple con lo requerido, maximo 120 caracteres";

    } else {
        console.log(mensajedata);
    }
    textarea.setCustomValidity(mensajeText);
}

// enviando mensaje:

const enviarMensaje = document.querySelector("[data-btn]");


enviarMensaje.addEventListener('click', (evento) => {
    evento.preventDefault();

    if (validandoNombre);
    if (validandoTextArea);   
    
    return alert("Mensaje enviado con exito");   
       
});











