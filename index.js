function mensajeAleatorio() {
    var mensajes = ["¡Te atrapé!", "¡Se escapó!"];
    var indice = Math.floor(Math.random() * mensajes.length);
    var mensaje = mensajes[indice];
    document.getElementById("mensaje").textContent = mensaje;
}