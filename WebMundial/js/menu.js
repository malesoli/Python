document.querySelector(".barras-menu").addEventListener("click", barraAnimada );

var linea1Barras = document.querySelector(".linea1-barras-menu");
var linea2Barras = document.querySelector(".linea2-barras-menu");
var linea3Barras = document.querySelector(".linea3-barras-menu");
const barrasMenu = document.querySelector(".barras-menu");
const enlacesMenu = document.querySelector(".enlaces-menu");

function barraAnimada(){
    linea1Barras.classList.toggle("active-linea1-barras-menu");
    linea2Barras.classList.toggle("active-linea2-barras-menu");
    linea3Barras.classList.toggle("active-linea3-barras-menu");
    enlacesMenu.classList.toggle("active");
}