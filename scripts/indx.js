//accion menu 
document.querySelector("#btn_menu").addEventListener("click", mostrar_menu);

document.querySelector("#back_menu").addEventListener("click", ocultar_menu);

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

//tamaniobott

document.getElementById("change").addEventListener("mouseover", mouseOver);
document.getElementById("change").addEventListener("mouseout", mouseOut);

function mouseOver(){
    document.getElementById("change").style.fontSize = "22px";
}
function mouseOut(){
    document.getElementById("change").style.fontSize = "18px";
}