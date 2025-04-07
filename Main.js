"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_js_1 = require("./Data.js");
let seriesTbody = document.getElementById('series');
const promedioDiv = document.getElementById('promedio');
renderSeriesInTable(Data_js_1.series);
promedioDiv.innerHTML = `Promedio de temporadas: ${calcularPromedioTemporadas(Data_js_1.series)}`;
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.nombre}</td>
                           <td>${serie.canal}</td>
                           <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
function calcularPromedioTemporadas(series) {
    let totalSeasons = 0;
    series.forEach((serie) => totalSeasons += serie.temporadas);
    return totalSeasons / series.length;
}
