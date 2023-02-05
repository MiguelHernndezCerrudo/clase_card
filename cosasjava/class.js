
function notaMedia(notasModulo){
    let total = 0 
    for ( let i = 0; i < notasModulo.length; i++){
        total += notasModulo[i];
    }
    return total/notasModulo.length;
}

let notasMiguel = [4,8,3,2,1];
let notasJuan = [10,9,5,8];

let nota = 9;
let mensaje = (nota>=9)?"Matricula aceptada":"Matricula no aceptada";
console.log ("Nota media de Miguel", notaMedia(notasMiguel))
console.log ("Nota media de Juan", notaMedia(notasJuan))

const IVA = 21;
let precioProducto=3560;
console.log("IVA producto",  ivaProducto(3000, 8));

precioProducto=25;

function ivaProducto(precio, iva){
    
}

let nombreCliente = "Juan";
console.log("Nombre:", nombreCliente.toUpperCase());
console.log("Nombr:", nombreCliente.indexOf("a"));

// Funcion que compruebe si un email tiene @ y despues de @ 1 '.'
function checkEmail(email){
//si este caso ocurre
    if (email.indexOf('@')===-1) return false;
//si este caso se da
    if (email.indexOf('.') <= email.indexOf('@')) return false;
//si lo anterior no ha sucedido
    return true;


} 


console.log("Es el email correcto?", checkEmail('mhc00@iesemilidarder.com'))

function notaAlumno(notaNumerica){
    if (notaNumerica >= 9) {
        return "Sobresaliente";
    }

    if (notaNumerica >= 7) {
        return "Notable";
    }

    if (notaNumerica === 6) {
        return "Bien";
    }

    if (notaNumerica === 5) {
        return "Suficiente";
    }
    

    if (notaNumerica <= 4){
        return "insuficiente";
    } 


}
console.log(notaAlumno(5));
console.log(notaAlumno(8));
console.log(notaAlumno(10));
console.log(notaAlumno(3));

//la sigiente funcion sirve para calcular descuentos 
function descuento(precio){
     //si el precio es mayor o igual que 100 descuento del 10%
     if (precio >= 100) {
        return (precio * 0.90);
    }
     //si el precio es igual que 50 y menor que 100 resta 10
     if (precio = 50)  (precio < 100 ); {
        return (precio - 10);
    }
     //si el precio es mayor que 10 y menor que 50 resta 5
     if (precio > 10)  (precio < 50); {
        return (precio - 5);
    }

     else {
        return (precio);
    }
}
console.log(descuento(100))

function loteria(acierto){
    if (acierto (end)) {
        return ('20€')
    }
    if (acierto = 2) {
        return ('5000€')
    }
    if (acierto = 3) {
        return ('20€')
    }

}

// la siguiente funcion puede servir para hacer cambioos de valencias
function romanos(deci){
    if (deci == 1) {
        return ('I')
    }
    if (deci == 2) {
        return ('II')
    }
    if (deci == 3) {
        return ('III')
    }
    if (deci == 4) {
        return ('IV')
    }
    if (deci == 5) {
        return ('V')
    }
    if (deci == 6) {
        return ('VI')
    }
    if (deci == 7) {
        return ('VII')
    }
    if (deci == 8) {
        return ('VIII')
    }
    if (deci == 9) {
        return ('IX')
    }
    if (deci == 10) {
        return ('X')
    }

}
console.log(romanos(8))

