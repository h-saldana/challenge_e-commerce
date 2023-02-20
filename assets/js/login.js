
const emailData = document.querySelector("[data-email]");
const password =  document.querySelector("[data-password]");
const ingresarbtn = document.querySelector("[data-ingresar]")


emailData.addEventListener('blur', (evento) => {
    validaEmail(evento.target);
})
function validaEmail(input) {
    dataEmail = emailData.value;
    datosTipo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    mensajeEmail = "";

    if (!(datosTipo.test(dataEmail))) {
        mensajeEmail= "el correo es invalido";

    } else {
        console.log(dataEmail);
    }
    input.setCustomValidity(mensajeEmail);
    // return false;
}

password.addEventListener('blur', (evento) => {
    validaPassword(evento.target);
})

function validaPassword(input) {

    let datospassword = password.value;
    let keys = "@Html1234";
    var comp = datospassword.localeCompare(keys);

    console.log(comp);
    console.log(keys)
    console.log(datospassword);
    dataPassw = "";
    
  
    if(comp = -1 && datospassword == keys){

        ingresarbtn.addEventListener("click", () => {
            window.location.href = "/screens/productos.html";
    
            });
    }else{

        datosPassw = "Datos errados"
    }
    input.setCustomValidity(dataPassw);  

}









