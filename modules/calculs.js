function calculStats(tab) {

  const n = tab.length;

  const moyenne = tab.reduce((a, b) => a + b, 0) / n;

  const variance = tab.reduce((s, v) => s + Math.pow(v - moyenne, 2), 0) / n;

  const ecartType = Math.sqrt(variance);

  const incertitude = ecartType / Math.sqrt(n);

  return { moyenne, incertitude };
}
