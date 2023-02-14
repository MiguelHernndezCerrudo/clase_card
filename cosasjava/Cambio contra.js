


function cambiarContra(contraseña){
    let nuevaContra = contraseña;
    nuevaContra = nuevaContra.replaceAll(/a/gi,'1');
    nuevaContra = nuevaContra.replaceAll(/e/gi,'2');
    nuevaContra = nuevaContra.replaceAll(/i/gi,'3');
    nuevaContra = nuevaContra.replaceAll(/o/gi,'4');
    nuevaContra = nuevaContra.replaceAll(/u/gi,'5');
    return nuevaContra
}

console.log(cambiarContra('galileo'));


function nuevaPassword(password){
    let newPassword = password;
    newPassword = newPassword.replaceAll(/a/gi,"1");
    newPassword = newPassword.replaceAll("e","2");
    newPassword = newPassword.replaceAll("i","3");
    newPassword = newPassword.replaceAll("o","4");
    newPassword = newPassword.replaceAll("u","5");
    return newPassword;
}

console.log( cambiarContra("establecimiento"));