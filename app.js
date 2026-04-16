window.analyser = function() {

  const lignes = document.querySelectorAll("#table-mesures tbody tr");

  let U = [];
  let I = [];

  lignes.forEach(ligne => {
    const u = parseFloat(ligne.querySelector(".U").value);
    const i = parseFloat(ligne.querySelector(".I").value);

    if (!isNaN(u)) U.push(u);
    if (!isNaN(i)) I.push(i);
  });

  const statsU = calculStats(U);
  const statsI = calculStats(I);

  // HISTOGRAMME
  construireHistogramme(U, "histogramme");

  // DISPERSION QUALITATIVE (BAC PRO)
  const interpretation = analyserDispersion(statsU);

  document.getElementById("resultats").innerHTML = `
    <p><b>Tension :</b> ${formaterResultat(statsU.moyenne, statsU.incertitudeA)} V</p>
    <p><b>Intensité :</b> ${formaterResultat(statsI.moyenne, statsI.incertitudeA)} A</p>
    <p><b>Écart-type :</b> ${statsU.ecartType.toFixed(3)}</p>
  `;

  document.getElementById("analyse").innerHTML = interpretation;

  document.getElementById("rapport").textContent =
    genererRapport(statsU, statsI);
}
