function enlace() {
    window.location.href = "index.html";
}

function enlace1() {
    window.location.href = "paginas/promocion.html";
}

 function enlace2() {
    window.location.href = "paginas/productos.html";
}

function enlace3() {
    window.location.href = "paginas/contacto.html";
}

function enlace4() {
    window.location.href = "paginas/diseñadores.html";
}


function enlace5() {
    window.location.href = "../index.html";
}

function enlace6() {
    window.location.href = "../paginas/promocion.html";
}

 function enlace7() {
    window.location.href = "../paginas/productos.html";
}

function enlace8() {
    window.location.href = "../paginas/contacto.html";
}

function enlace9() {
    window.location.href = "../paginas/diseñadores.html";
}






function colorBoton(boton) {
    const color = boton.closest("#menud") ? "#811ff1" : "#FF9933";

    boton.style.transition = "background-color 0.5s, transform 0.5s";
    boton.style.backgroundColor = color;
    boton.style.transform = "scale(1.1)";
}

function quitarColorBoton(boton) {
    boton.style.backgroundColor = "";
    boton.style.transform = "";
}



function voltearTarjeta(tarjeta) {
    const cuerpo = tarjeta.querySelector(".tarjeta-cuerpo");
    const volteada = tarjeta.getAttribute("aria-pressed") !== "true";

    tarjeta.setAttribute("aria-pressed", volteada);
    cuerpo.style.transform = volteada ? "rotateY(180deg)" : "";
}
