let account = [
    {
        'id':1,
        'name':'paga enero',
        'quantity':1000
    },
    {
        'id':2,
        'name':'Compra camisa',
        'quantity':-40
    },
    {
        'id':3,
        'name':'memoria ram de 32GB X2',
        'quantity':-300
    }
];

const inputName =document.querySelector('#name');
const inputQuantity =document.querySelector('#quantity');
const btnIncome = document.querySelector('#btn-income');
const btnExpense = document.querySelector('#btn-expense');
const conceptsList = document.querySelector('#concepts-list')
const borrar = document.querySelector('#btn-clear')

function clear(){
    borrar.addEventListener('mousemove' , ()=>{
        conceptsList.innerHTML='';
        
        
        
    })
}

function renderaccount(){
    conceptsList.innerHTML='';
    let = total=0;
    account.forEach(e =>{
        total+=e.quantity;
        conceptsList.innerHTML+=`
        <tr>
            <td>${e.name}</td>
            <td class='quantity'>${e.quantity}</td>
        </tr>
        `
        ;
    });

    conceptsList.innerHTML+=`
        <tr>
            <td>total:</td>
            <td class='quantity'>${total}</td>
        </tr>
        `
        ;
}

function addIcome(){
    const concept={
        'id':account.length+1,
        'name':inputName.value,
        'quantity':parseFloat(inputQuantity.value),
    }
    account.push(concept);
    // con esto añadimos datos 
    renderaccount();
}

function addExpense(){
    const concept={
        'id':account.length+1,
        'name':inputName.value,
        'quantity':parseFloat(inputQuantity.value)*-1,
    }
    account.push(concept);
    // con esto añadimos datos 
    renderaccount();
}

function init(){
    renderaccount()
    clear()
    btnIncome.addEventListener('click' , addIcome)
     
    btnExpense.addEventListener('click' , addExpense)
    
    
    
}
init();