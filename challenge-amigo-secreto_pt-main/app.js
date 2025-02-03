let amigos = []

function adicionarAmigo() {
    let nome = document.querySelector('input').value
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    } else {
        amigos.push(nome)
    }
    console.log(amigos)
    atualizarLista();
    nome = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    
    if (amigos.length === 0){
        alert ("Introduzir amigo");
        return;
    }
    
    let mensagem = document.getElementById("mensagem");
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    //Oculta lista de amigos
    let lista = document.getElementById("listaAmigos");
    lista.style.display = "none";

    //Mostra amigo sorteado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> Amigo Sorteado: ${amigoSorteado}</li>`;
}