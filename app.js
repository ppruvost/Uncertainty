function analyser() {

  const lignes = document.querySelectorAll("#table-mesures tbody tr");

  let U = [];
  let I = [];

  lignes.forEach(ligne => {
    const u = parseFloat(ligne.querySelector(".U").value);
    const i = parseFloat(ligne.querySelector(".I").value);

    if (!isNaN(u)) U.push(u);
    if (!isNaN(i)) I.push(i);
  });

  const resultU = calculStats(U);
  const resultI = calculStats(I);

  document.getElementById("resultats").innerHTML = `
    <p><b>Tension :</b> ${resultU.moyenne.toFixed(2)} ± ${resultU.incertitude.toFixed(2)} V</p>
    <p><b>Intensité :</b> ${resultI.moyenne.toFixed(2)} ± ${resultI.incertitude.toFixed(2)} A</p>
  `;

  const analyse = genererAnalyse(resultU, resultI);

  document.getElementById("analyse").innerHTML = analyse;

  const rapport = genererRapport(resultU, resultI, analyse);

  document.getElementById("rapport").textContent = rapport;
}
