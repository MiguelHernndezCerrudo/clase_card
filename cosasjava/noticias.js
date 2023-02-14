let fakeNews = [
    {
        "id": 1,
        "title": "Nuevo Píxel 7a de Google",
        "content": "Este teléfono es maravilloso"
    },
    {
        "id": 2,
        "title": "Nuevo juego de cartas SNAP",
        "content": "Todos los personajes de Marvel en cartas..."
    },
    {
        "id": 3,
        "title": "Calisto protocol ya a la venta",
        "content": "Impresionante y terrorífico...da miedo de verdad dicho por Ibay"
    },
    {
        "id": 4,
        "title": "MSI portátil gamer",
        "content": "Última generación de portátiles de la marca"
    },
    {
        "id": 5,
        "title": "Curso javascript",
        "content": "Aprende java en 400H"
    }
];

const containerList = document.getElementById("news-list");
const btnAdd = document.getElementById("btn-add");

function init(){
    printNews(fakeNews);
    btnAdd.addEventListener("click", addNews);
}

function addNews(){
    const inputTitle=document.getElementById("title");
    const inputContent=document.getElementById("content");
    
    if(existNews(fakeNews, inputTitle.value)){
        alert('Ya existe una noticia con este titulo')
        return false;
    }
    // 1. Creamos una nueva noticia con los datos del formulario
    const newItem={
        "id":fakeNews.length+1,
        "title":inputTitle.value,
        "content":inputContent.value,
    };
    // 2. Añadimos el nuevo item a la lista de las noticias
    fakeNews.push(newItem);

    //3. Repintamos las noticias en HTML
    printNews(fakeNews);

    // 4. Reiniciar valores de los campos del formulario
    document.forms[0].reset();
}

function printNews(news) {
    containerList.innerHTML="";

    news.forEach(item => {
        containerList.innerHTML += `
            <article>
                <h2>${item.title}</h2>
                <p>${item.content}</p>
                <p><button onclick="removeNews(${item.id})">Eliminar</button></p>
            </article>
        `;
    });
}

function removeNews(id) {
    // fakeNews.forEach( (item, index) => {
    //     if(item.id===id){
    //         fakeNews.splice(index, 1);
    //     }
    // });
    
fakeNews = fakeNews.filter(noticia=>noticia.id!=id);

    printNews(fakeNews);
    
}

// devuele un dato booleano : verdadero o falso.

function existNews (news , title){
    let founfTitle=false;
    news.forEach(item =>{
    if (item.title===title){
        founfTitle=true;
    } 
})

    return founfTitle;

}

init();




