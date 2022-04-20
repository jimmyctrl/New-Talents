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


    function abrirRegistro(){
        document.querySelector("#form1").style.display = "block";
        document.querySelector("#menu").style.display = "none";
    }
    document.querySelector("#registrate").addEventListener("click",abrirRegistro);


const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menu y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'assets/open-menu.png'){
        e.target.setAttribute('src','assets/open-menu2.png');
    }else{
        e.target.setAttribute('src','assets/open-menu.png');
    }
});

