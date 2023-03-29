//https://sujeitoprogramador.com/rn-api/?api=posts

let listaElement = document.querySelector("#app");

let posts = [];

function nutriapp(){
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((r) => r.json())
    .then((json) =>{
        posts = json;

        posts.map((item) => {
            let listElement = document.createElement("li"); 
            let titleElement = document.createElement("strong");
            let imgElement = document.createElement("img");
            let descriptionElement = document.createElement("a");

            let titleText = document.createTextNode(item.titulo);
            titleElement.appendChild(titleText);
            listElement.append(titleElement);   

            imgElement.src = item.capa;
            listElement.appendChild(imgElement);

            let descriptionText = document.createTextNode(item.subtitulo);
            descriptionElement.appendChild(descriptionText);
            listElement.appendChild(descriptionElement);

            listaElement.appendChild(listElement);





        })
    })
    .catch(() => {
        console.log("Erro")
    })
} 


nutriapp();