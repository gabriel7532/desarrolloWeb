//El simulador se va a encargar de añadir personas a un programa de entrenamiento que va a pedir el nombre junto con sus datos y cuantas veces(hrs) va a entrenar a la semana. Luego hará el calculo del valor de la hora por el número de horas del mes, y calculará el valor del plan mensual.

class Usuario {
    constructor(nombre, edad, estatura, peso, entrenamientoPorSemana) {
        this.nombre = nombre;
        this.edad = edad;
        this.estatura = estatura;
        this.peso = peso;
        this.entrenamientoPorSemana = entrenamientoPorSemana;
    }
}


//Registro de Usuario nuevo

//Cambiando el DOM
cliente1 = localStorage.getItem('usuario1');
cliente1 = JSON.parse(cliente1)

let usuarioNombre = document.querySelector(".usuario_nombre");
usuarioNombre.innerText = cliente1.nombre

let usuarioEdad = document.querySelector(".usuario_edad");
usuarioEdad.innerText = "Edad: " + cliente1.edad;

let usuarioPeso = document.querySelector(".usuario_peso");
usuarioPeso.innerText = "Peso: " + cliente1.peso;

let usuarioEstatura = document.querySelector(".usuario_estatura");
usuarioEstatura.innerText = "Estatura: " + cliente1.estatura;

let usuarioImc = document.querySelector(".usuario_imc");

usuarioImc.innerText = "Indice de masa corporal: " + cliente1.peso + "/" + cliente1.estatura + "^2 = " + (cliente1.peso / (cliente1.estatura * cliente1.estatura));

let usuarioSesiones = document.querySelector(".usuario_sesiones");
usuarioSesiones.innerText = "Sesiones por semana: " + cliente1.entrenamientoPorSemana;


let tarifaHrDeEntrenamiento = 27.500;

Swal.fire({
    position: 'center',
    icon: 'info',
    title: cliente1.nombre + " el valor de tu plan de entrenamiento mensual es: " + tarifaHrDeEntrenamiento * parseFloat(cliente1.entrenamientoPorSemana) * 4 + " mil pesos",
    showConfirmButton: false,
    timer: 4500
})


    // Evento del boton "Agregar Rutina"
    let btnRegistrarSesion = document.querySelector(".agregar");
    btnRegistrarSesion.addEventListener("click", escogerRutina);

    
    let btnEliminarSesion = document.querySelector(".eliminar");
    btnEliminarSesion.addEventListener("click", eliminarRutina);

    function eliminarRutina(){
        let eliminar = document.querySelector(".rutinaDia");
        eliminar.remove();
    }
    

    function escogerRutina() {

        class Rutina {
            constructor(obj) {
                this.id = obj.id;
                this.ejercicio = obj.ejercicio;
                this.repeticiones = obj.repeticiones;
                this.tiempo = obj.tiempo
            }
        }

        let num = parseInt(prompt(cliente1.nombre + " elige el tipo de entrenamiento que desea realizar hoy \n1. Areobico \n2. fuerza \n3. HIIT(High Intense Interval Training"));


        switch (num) {

            case 1:

            fetch('/planes.json')
            .then((res) => res.json())
            .then((json)=>{
            console.log(json)
            const contenedorAerobico = document.querySelector('.rutinaDia')
            function renderRutina() {
                    let nuevoDiv = document.createElement('div')
                    nuevoDiv.innerHTML = `<h4> ${json[0].name}</h4>
                <p>${json[0].contenido.ejercicio1}</p> <p>${json[0].contenido.repeticiones1}</p>
                <p>${json[0].contenido.ejercicio2}</p> <p>${json[0].contenido.repeticiones2}</p>
                <p>${json[0].contenido.ejercicio3}</p> <p>${json[0].contenido.repeticiones3}</p>
                <p>${json[0].contenido.ejercicio4}</p> <p>${json[0].contenido.repeticiones4}</p>`
                    contenedorAerobico.append(nuevoDiv);
                }
            
            renderRutina()
        } )
            .catch((error)=>{
                console.log(error)
            })

                break;

            case 2:
                
            fetch('/planes.json')
            .then((res) => res.json())
            .then((json)=>{
            console.log(json)
            const contenedorFuerza = document.querySelector('.rutinaDia')
            function renderRutina() {
                    let nuevoDiv = document.createElement('div')
                    nuevoDiv.innerHTML = `<h4> ${json[1].name}</h4>
                <p>${json[1].contenido.ejercicio1}</p> <p>${json[1].contenido.repeticiones1}</p>
                <p>${json[1].contenido.ejercicio2}</p> <p>${json[1].contenido.repeticiones2}</p>
                <p>${json[1].contenido.ejercicio3}</p> <p>${json[1].contenido.repeticiones3}</p>
                <p>${json[1].contenido.ejercicio4}</p> <p>${json[1].contenido.repeticiones4}</p>`
                    contenedorFuerza.append(nuevoDiv);
                }
            
            renderRutina()
        } )
            .catch((error)=>{
                console.log(error)
            })

                break;

            case 3:
                fetch('/planes.json')
            .then((res) => res.json())
            .then((json)=>{
            console.log(json)
            const contenedorHiit = document.querySelector('.rutinaDia')
            function renderRutina() {
                    let nuevoDiv = document.createElement('div')
                    nuevoDiv.innerHTML = `<h4> ${json[2].name}</h4>
                <p>${json[2].contenido.ejercicio1}</p> <p>${json[2].contenido.repeticiones1}</p>
                <p>${json[2].contenido.ejercicio2}</p> <p>${json[2].contenido.repeticiones2}</p>
                <p>${json[2].contenido.ejercicio3}</p> <p>${json[2].contenido.repeticiones3}</p>
                <p>${json[2].contenido.ejercicio4}</p> <p>${json[2].contenido.repeticiones4}</p>`
                    contenedorHiit.append(nuevoDiv);
                }
            
            renderRutina()
        } )
            .catch((error)=>{
                console.log(error)
            })

            break;
        }
    }

