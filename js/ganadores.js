fetch('https://ipcsoluciones.com.ar/worldcup/api/v1/winners.php', {
    method: "GET",
    headers: {"Content-type": "application/json;charset=UTF-8"}
})
    .then(response => response.json())
    .then(function(data) {
        let listado = document.getElementById("listado");
        for (var i = 0; i < data.length; i++) {
            let row = listado.insertRow(i)
            let ano = row.insertCell(0);
            let pais = row.insertCell(1);

            let textoPais = document.createTextNode(data[i].country);
            let textoAno = document.createTextNode(data[i].year);

            pais.appendChild(textoPais);
            ano.appendChild(textoAno);
        }
    })
    .catch(err => console.log('Error al obtener la info: ', err));