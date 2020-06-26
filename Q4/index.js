const getInfo = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .catch(err => {
        console.error('Erro: ', JSON.stringify(err));
        throw err;
    });
}

const preparaInformacoes = (lista) => {
    let article = "article1";
    let section = "section1";

    for (let index = 0; index < lista.length; index++) {
        const item = lista[index];
        const postId = item.postId;
        const id = item.id;
        const name = item.name;
        const email = item.email;
        const body = item.body;

        var elemento = document.createElement("section");
        var node1 = document.createTextNode("postId: "+postId);
        var node2 = document.createTextNode("id: "+id);
        var node3 = document.createTextNode("name: "+name);
        var node4 = document.createTextNode("email: "+email);
        var node5 = document.createTextNode("body: "+body);
        elemento.appendChild(node1);
        elemento.appendChild(document.createElement("br"));
        elemento.appendChild(node2);
        elemento.appendChild(document.createElement("br"));
        elemento.appendChild(node3);
        elemento.appendChild(document.createElement("br"));
        elemento.appendChild(node4);
        elemento.appendChild(document.createElement("br"));
        elemento.appendChild(node5);
        
        var htmlArticle = document.getElementById(article);
        var child = document.getElementById(section);
        htmlArticle.insertBefore(elemento,child);

        if(index - 3 == (lista.length / 2)) {
            article = "article2";
            section = "section2"
        }  
    }
}

const exibeInformacoes = async () => {
    const lista = await getInfo();
    preparaInformacoes(lista);
}

exibeInformacoes();