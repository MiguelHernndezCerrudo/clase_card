function sumar (){
   
    const puntuacion = [10,10,10];

    let total = 0;
    
    for(let i=0;i<puntuacion.length;i++){
    
        total+=puntuacion[i];
    
    }
   
    return total
}

console.log(sumar())

