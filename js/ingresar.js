class Usuario {
    constructor(nombre, edad, peso, estatura, entrenamientoPorSemana) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.estatura = estatura;
        this.entrenamientoPorSemana = entrenamientoPorSemana;
    }
}
let btnRegistrarse = document.querySelector(".btn_registro");
btnRegistrarse.addEventListener("click", registrarse);

function registrarse() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const peso = document.getElementById("peso").value;
    const estatura = document.getElementById("estatura").value;
    const entrenamientoPorSemana = document.getElementById("sesionesPorSemana").value

    usuario1 = new Usuario(nombre, edad, peso, estatura, entrenamientoPorSemana);

    const usuario1Json = JSON.stringify(usuario1);
    localStorage.setItem("usuario1", usuario1Json);

    const nuevoRegistro = document.querySelector(".datosRegistro")




    function renderRegistro() {
        let formulario = document.querySelector(".main_formulario");
        formulario.remove();

        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Estamos confirmando tus datos',
            showConfirmButton: false,
            timer: 2500
        })

        setTimeout(() => {
            let nuevoReg = document.createElement('div')
            nuevoReg.innerHTML = `<h4> ESTAMOS FELICES DE RECIBIRTE </h4> <h4>${usuario1.nombre}</h4>
            <h4> Edad: ${usuario1.edad}</h4>
            <h4> Peso: ${usuario1.peso}</h4>
            <h4> Estatura: ${usuario1.estatura}</h4>
            <h4> Sesiones por Semana: ${usuario1.entrenamientoPorSemana}</h4>
            <h4> Desea realizar el pago de la mensualidad?
            <Button class="botonSi" onclick="location.href = '/modelos/miCuenta.html'"> si </Button> <Button class="botonNo"> no </Button>`
            nuevoRegistro.append(nuevoReg);
        }, 3000)

    }    
    renderRegistro();
}

  

  