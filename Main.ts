import { series } from './Data.js';
import type { Serie } from './Serie.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioDiv: HTMLElement = document.getElementById('promedio')!;

renderSeriesInTable(series);

promedioDiv.innerHTML = `Seasons average: ${calcularPromedioTemporadas(series)}`;

function renderSeriesInTable(series: Serie[]): void {
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

function calcularPromedioTemporadas(series: Serie[]): number {
  let totalSeasons = 0;
  series.forEach((serie) => totalSeasons += serie.temporadas);
  return totalSeasons / series.length;
}
