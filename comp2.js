/*Ejercicio complementario #2
Incorporando arrays
Simulador de ingresos de usuarios a un programa de vacantes
*/ 


class vacant{
    constructor(name, lastName, age, profession){
        this.name = name
        this.lastName = lastName
        this.age = age
        this.profession = profession
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

const showAllvacacines = () => {
    for(const vacant of vacancies)
    console.log(vacant.information());
}

const showAllvacant = () =>{
    console.log(vacancies);
}


showAllvacacines();
showAllvacant();