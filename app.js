// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo.trim() === "") {;
        alert("Por favor, inserte un nombre")
        return;
    }
    nombreAmigo = capitalizarNombre(nombreAmigo);
    amigos.push(nombreAmigo);
    document.getElementById("amigo").value = "";
    actualizarListaAmigos();
}

function capitalizarNombre(nombre) {
    nombre = nombre.toLowerCase();
    let palabras = nombre.split(" ");
    palabras = palabras.map(palabra => {
        if (palabra.length > 0) {
            return palabra[0].toUpperCase() + palabra.slice(1);
        } else {
            return palabra;
        }
    });
    return palabras.join(" ");    
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach(function (amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("listaAmigos").textContent = amigoSorteado.innerHTML = `
    El amigo sorteado es: ${amigoSorteado}`;
}


