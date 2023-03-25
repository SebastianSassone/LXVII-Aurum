/*Toggle*/
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

/*Grafico bullionvault*/
var options = {
  bullion: 'gold',
  currency: 'USD',
  timeframe: '1w',
  chartType: 'line',
  miniChartModeAxis : 'oz',
  referrerID: 'MINOMBREDEUSUARIO',
  containerDefinedSize: true,
  miniChartMode: false,
  displayLatestPriceLine: true,
  switchBullion: true,
  switchCurrency: true,
  switchTimeframe: true,
  switchChartType: true,
  exportButton: true
};
var chartBV = new BullionVaultChart(options, 'embed');