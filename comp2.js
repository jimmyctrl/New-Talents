/*Ejercicio complementario #2
Incorporando arrays
Simulador de ingresos de usuarios a un programa de vacantes
*/ 


/* class vacant{
    constructor(name, lastName, age, profession){
        this.name = name
        this.lastName = lastName
        this.age = age
        this.profession = profession
    }

    getvacantes(){
        return this.name
    }

    getprofession(){
        return this.profession
    }

    information(){
        return `El candidato ${this.name} de apellido ${this.lastName}, se desempenia en el rol de ${this.profession}, su edad es ${this.age} anios, y ya se encuentra inscrito dentro de las vacantes de la empresa.`
    }
}

const vacancies = []

while(vacancies.length < 2){
    alert("BIENVENIDO A LA PLATAFORMA DE INSCRIPCION \n \n A continuacion, digitara sus datos personales.");
    let name = prompt("Ingrese su nombre")
    let lastName = prompt("Ingrese su apellido")
    let age = prompt("Ingrese su edad")
    let profession = prompt("Ingrese el rol que desea desempeniar en la empresa \n 'Backend' \n 'Frontend'").toLocaleLowerCase()

    if(name != "" && lastName != "" && !isNaN(age) && age.length == 2 && (profession == 'backend' || profession == "frontend" || profession == 'back end' || profession == 'front end')){
        vacancies.push(new vacant(name, lastName, age, profession))
    }
}

const showAllvacancines = () => {
    console.log(vacancies);
}

const showVacants = () => {
    let vacantArray = []

    for(const vacante of vacancies){
        vacantArray.push(vacante.getvacantes());
    }
    console.log(vacantArray.sort()); // regresar alfabeticamente con los nombres ingresados
}

const showProfession = () => {
    const vacant1 = prompt("Introduce la profesion para que salgan los perfiles inscritos")
    for(const vacante of vacancies){
        if(vacante.getprofession() == vacant1){
            console.log(vacante.information());
        }
    }
    
}

console.log("Todos los datos personales");
showAllvacancines();
console.log("Nombres alfabeticamente");
showVacants();
console.log("Filtro con datos de las personas que se encontraron por profesion");
showProfession(); */


///////////// MANEJO DEL DOM ///////////////  DESAFIO COMPLEMENTARIO DOM 14/04/2022

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

