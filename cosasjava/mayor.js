// calcular mayor de 2 números


function mayor (num1 , num2){
    if (num1 > num2){
        return console.log(`${num1} es mayor que ${num2}`);
    }else{
        return console.log(`${num2} es mayor que ${num1}`);
    }
}

mayor(6,5)



console.log('');
console.log('otra alternativa');
console.log('');

function menor (num1 , num2 , num3){
    
    return console.log(`${Math.min(num1,num2,num3)} es el numero mas grande entre ${num1} , ${num2} , ${num3} .`);

    return Math.min(num1,num2,num3); 
}



