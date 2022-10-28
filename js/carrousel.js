const carrousel = document.querySelector("#carrousel");
let estadio = document.querySelectorAll(".contenedor-imagen");
let estadioUltimo = estadio[estadio.length -1];

const btnIzquierda = document.querySelector("#btn-izquierda");
const btnDerecha = document.querySelector("#btn-derecha");

carrousel.insertAdjacentElement('afterbegin', estadioUltimo);

function moverDerecha() {
    let estadioPrimero = document.querySelectorAll(".contenedor-imagen")[0];
    carrousel.style.marginLeft = "-200%";
    carrousel.style.transition = "all 0.5s";
    setTimeout(function() {
        carrousel.style.transition = "none";
        carrousel.insertAdjacentElement('beforeend', estadioPrimero);
        carrousel.style.marginLeft = "-100%";
    }, 100);
}

btnDerecha.addEventListener('click', function() {
    moverDerecha();
});

function moverIzquierda() {
    let estadio = document.querySelectorAll(".contenedor-imagen");
    let estadioUltimo = estadio[estadio.length -1];
    carrousel.style.marginLeft = "0";
    carrousel.style.transition = "all 0.5s";
    setTimeout(function() {
        carrousel.style.transition = "none";
        carrousel.insertAdjacentElement('afterbegin', estadioUltimo);
        carrousel.style.marginLeft = "-100%";
    }, 100);
}

btnIzquierda.addEventListener('click', function() {
    moverIzquierda();
});