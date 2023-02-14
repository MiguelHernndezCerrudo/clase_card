const numbers = document.getElementById(`numbers`);
const result = document.getElementById(`result`);

let a=prompt(`intruduzca el primer número`);
let b=prompt(`intruduzca el segundo número`);
let c=prompt(`intruduzca el tercer número`);

numbers.textContent =`los números introducidos son ${a}, ${b}, ${c} `

if(a>b && a>c){
    if(b>c){
        result.textContent = `el orden es : ${a}, ${b}, ${c}`
    }else{
        result.textContent = `el orden es : ${a}, ${c}, ${b}`
    }
}else if(b=>a && b>=c){
    if(a>c){
        result.textContent = `el orden es : ${b}, ${a}, ${c}`
    }else{
        result.textContent = `el orden es : ${b}, ${c}, ${a}`
    }
}