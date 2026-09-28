// Console.log para prueba de conxión js...
console.log("Prueba de conexión js...")
let contador = 0;
let boton1 = document.querySelector("#boton1")
let boton2 = document.querySelector("#boton2")
let boton3 = document.querySelector("#boton3")
let libro = document.querySelector(".contador")

// Ingreso de la seccion:

const barraDeTexto = document.querySelector("#email")
const botonLogin = document.querySelector(".login")

// Contador de libros seleccionados:

boton1.addEventListener("click", function () {
    if(boton1 !== null) {
        contador = contador + 1 /* Contador +1 para los libros seleccionados */
        libro.textContent = contador
    } else {
        console.log("No existe el botón.")
    }
});

boton2.addEventListener("click", function () {
    if(boton1 !== null) {
        contador = contador + 1
        libro.textContent = contador
    } else {
        console.log("No existe el botón.")
    }
});

boton3.addEventListener("click", function () {
    if(boton1 !== null) {
        contador = contador + 1
        libro.textContent = contador
    } else {
        console.log("No existe el botón.")
    }
});

// Sistema Login:

if (botonLogin !== null && barraDeTexto !== null) {
    botonLogin.addEventListener("click", function () {
        let correo = barraDeTexto.value
        if (correo !== ""){
            alert(`Bienvenido ${correo}`)
        } else {
            alert(`por favor ingrese un valor válido.`)
        }
    })
} else {
    console.log("el botón o la barra de texto no existe.")
}

// Sistema de cambio de imágen: 

let imagen = document.querySelector("#imagenCambiante")
imagen.addEventListener("mouseover", function () {
    this.src = "static/images/biblioteca.png"
})

imagen.addEventListener("mouseout", function () {
    this.src = "static/images/biblioteca3.png"
})