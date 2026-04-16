function genererAnalyse(U, I) {

  let texte = "<ul>";

  texte += "<li>📌 Variations possibles de la tension : mauvais contact, alimentation instable</li>";
  texte += "<li>📌 Variations du courant : résistance interne des fils, échauffement</li>";

  if (U.incertitude > 0.5) {
    texte += "<li>⚠️ Incertitude tension élevée → vérifier le voltmètre</li>";
  }

  if (I.incertitude > 0.05) {
    texte += "<li>⚠️ Incertitude courant élevée → vérifier le calibre de l’ampèremètre</li>";
  }

  texte += "<li>🧪 Hypothèse globale : incertitudes principalement instrumentales + manipulation</li>";

  texte += "</ul>";

  return texte;
}
