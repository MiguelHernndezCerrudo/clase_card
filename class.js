
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

// Funcion que compruebe si un email tiene @y despues de @ 1 '.'
function checkEmail(email){
//si este caso ocurre
    if (email.indexOf('@')===-1) return false;
//si este casi se da
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
