function genererRapport(U, I, analyseHTML) {

  return `
RAPPORT TP - INCERTITUDES

Tension :
U = ${U.moyenne.toFixed(2)} ± ${U.incertitude.toFixed(2)} V

Intensité :
I = ${I.moyenne.toFixed(2)} ± ${I.incertitude.toFixed(2)} A

Analyse :
- Variabilité des mesures observée
- Sources d'erreur instrumentales et humaines
- Qualité de la mesure : moyenne

Conclusion :
Les mesures présentent une incertitude liée aux instruments et aux conditions expérimentales.
`;
}
