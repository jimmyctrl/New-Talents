const form = document.getElementById('formulario');

//genero un evento atravez de la constante form y el evento submit con el fin de que se pueda enviar el formulario y validarlo
form.addEventListener('submit', function(event){ 

    //aqui se llama al evento para ver en detalle lo que esta sucediendo o en este caso ingresando por inputs
    event.preventDefault();

    //genero estas variables para indicarle al programa que estoy trabajando con los bloques de imput y los .value para seleccionar solo los datos que son ingresados, y no toda la etiqueta input con sus atributos
    let mailnombre = document.getElementById('nombres').value
    let mailapellido = document.getElementById('apellidos').value
    let mailedad = document.getElementById('edad').value
    let mailprofesion = document.getElementById('profesion').value
    //llamo a los datos ingresados por consola
    console.log(mailnombre);
    console.log(mailapellido);
    console.log(mailedad);
    console.log(mailprofesion);
})

//accion menu 
document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
}