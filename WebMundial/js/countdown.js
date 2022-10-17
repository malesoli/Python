const segundo = 1000
const minuto = segundo * 60
const hora = minuto * 60
const dia = hora * 24

const fechaInicial = new Date('2022-11-21 07:00:00')

function zeroLeft (number) {
    return String(number).padStart(2, '0')
}

function diferenciaEntreFechas () {
    const currentDate = new Date().getTime()
    return fechaInicial.getTime() - currentDate
}

function setCountDown (element, value) {
    document.querySelector(`.${element}`).innerHTML = value
}

function diffdia (diff) {
    return Math.floor(diff / dia)
}

function diffhora (diff) {
    const round = Math.floor(diff % dia / hora)
    return zeroLeft(round)
}

function diffminuto (diff) {
    const round = Math.floor(diff % hora / minuto)
    return zeroLeft(round)
}

function diffsegundo (diff) {
    const round = Math.floor(diff % minuto / segundo)
    return zeroLeft(round)
}

function countDown () {
    const diff = diferenciaEntreFechas()

    setCountDown('dias', diffdia(diff))
    setCountDown('horas', diffhora(diff))
    setCountDown('minutos', diffminuto(diff))
    setCountDown('segundos', diffsegundo(diff))
}

window.load = setInterval(countDown, 1000)