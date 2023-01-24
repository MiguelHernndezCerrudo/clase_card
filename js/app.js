// Referencias a elementos HTML
//---------------------------------//
const btnDescuento = document.getElementById('btn-descuento');
const listaBotonesCursos = document.querySelectorAll(".card button");
const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const codigoPromocion = document.getElementById('promocion');
const contenedorPrecioFinal = document.getElementById('contenedor-precio-final');

// Asignación de evento click al botón descuento
btnDescuento.addEventListener("click", calcularPrecioFinal);

// A cada botón "Seleccionar" le asignamos el mismo evento
listaBotonesCursos.forEach(botonCurso =>{
    
    botonCurso.addEventListener("click", (event)=>{
        seleccionarCurso(event);
    });

});

// Accede a los datos del curso y los muestra en el carrito
//-----------------------------------------------------------//
function seleccionarCurso(event) {
    // Accedemos el botón
    let boton = event.target;

    // Accedemos al padre
    let curso = boton.parentElement;

    // Leemos los datos
    let id = curso.dataset.id;
    let price = curso.dataset.price;
    let name = curso.querySelector(".name-course");

    productName.textContent = name.textContent;
    productPrice.textContent=price;    
}

// Calculamos el precio final
//-----------------------------------------------------------//
function calcularPrecioFinal() {
    // Leemos los valores del formulario
    const precio = +productPrice.textContent;
    const promocion = codigoPromocion.value;
    // Comprobamos que ha seleccionado un curso
    if (precio===0 || isNaN(precio)){
        alert("No ha seleccionado ningún curso");
        return false;
    }

    // Realizamos el cálculo con la función desarrollada
    let precioFinal = aplicarPromocion(precio);

    contenedorPrecioFinal.innerHTML = `Precio final: ${precioFinal} €`;
}

// Aplica la promoción al precio del procuto
//-----------------------------------------------------------// 
function aplicarPromocion(precio) {
    
    let descuento = codigoPromocion.value.toUpperCase().trim();
    if (descuento == "SUMMER") {
        return precio * 0.8; // Descuento del 20%
    } else if (descuento == "IESEMILI") {
        return precio * 0.7; // Descuento del 30%
    } else {
        alert("Código de descuento incorrecto");
        codigoPromocion.value="";
        return precio;
    }
}
