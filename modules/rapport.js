function genererRapport(U, I) {

  return `
=============================
📄 RAPPORT TP - INCERTITUDES
=============================

📊 TENSION
U = ${formaterResultat(U.moyenne, U.incertitudeA)} V

- Moyenne = meilleur estimateur de la grandeur
- Écart-type = ${U.ecartType.toFixed(3)} (dispersion des mesures)
- Incertitude type A = ${U.incertitudeA.toFixed(3)}

📊 INTENSITÉ
I = ${formaterResultat(I.moyenne, I.incertitudeA)} A

- Moyenne = valeur la plus probable
- Écart-type = ${I.ecartType.toFixed(3)}
- Incertitude type A = ${I.incertitudeA.toFixed(3)}

🧠 ANALYSE STATISTIQUE
- La dispersion des mesures traduit la variabilité expérimentale
- L’écart-type est un estimateur de cette dispersion
- La moyenne est le meilleur estimateur de la grandeur physique

⚠️ SOURCES D’INCERTITUDE
- Instrument de mesure (résolution, précision constructeur)
- Manipulation expérimentale (lecture, contact, réglage)
- Variations du circuit électrique

📌 INTERPRÉTATION BAC PRO
- Faible dispersion → mesure fiable
- Forte dispersion → refaire les mesures
- L’incertitude augmente avec la variabilité

✔ CONCLUSION
La valeur retenue est la moyenne des mesures, associée à une incertitude liée à la dispersion et aux instruments de mesure.

=============================
`;
}
