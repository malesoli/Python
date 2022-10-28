const countdown = () => {
    const fecha_inicio = new Date("2022-11-21 07:00:00").getTime();
    const hoy = new Date().getTime();
    const restan = fecha_inicio - hoy;

    const segundos = 1000;
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dias = horas * 24;

    const texto_dias = Math.floor(restan / dias);
    const texto_horas = Math.floor((restan % dias) / horas);
    const texto_minutos = Math.floor((restan % horas) / minutos);
    const text_segundos = Math.floor((restan % minutos) / segundos);

    document.getElementById("dias").innerText = texto_dias > 0 ? texto_dias : 0;
    document.getElementById("horas").innerText = texto_horas > 0 ? texto_horas : 0;
    document.getElementById("minutos").innerText = texto_minutos > 0 ? texto_minutos : 0;
    document.getElementById("segundos").innerText = text_segundos > 0 ? text_segundos : 0;
};
document.addEventListener("DOMContentLoaded", function() {
    countdown();
});
setInterval(countdown, 1000);
