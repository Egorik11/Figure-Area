function showResultInDomKvadrat() {
  const dlinaStoroniKvadrata = document.querySelector(
    '#dlinaStoroniKvadrata'
  ).value;

  const ploschadKvadrata = document.querySelector('#ploschadKvadrata');

  ploschadKvadrata.innerHTML = getSquareArea(dlinaStoroniKvadrata);
}

function showResultInDomPriamougolnika() {
  const pervayaStoronaPriamougolnika = document.querySelector(
    '#pervayaStoronaPriamougolnika'
  ).value;

  const drugayaStoronaPriamougolnika = document.querySelector(
    '#drugayaStoronaPriamougolnika'
  ).value;

  const ploschadPriamougolnika = document.querySelector(
    '#ploschadPriamougolnika'
  );

  ploschadPriamougolnika.innerHTML = getSquareRectangle(
    pervayaStoronaPriamougolnika,
    drugayaStoronaPriamougolnika
  );
}

function showResultInDomParalelograma() {
  const dlinaStoronyParalelograma = document.querySelector(
    '#dlinaStoronyParalelograma'
  ).value;

  const dlinaVisotyParalelograma = document.querySelector(
    '#dlinaVisotyParalelograma'
  ).value;

  const ploschadParalelograma = document.querySelector(
    '#ploschadParalelograma'
  );

  ploschadParalelograma.innerHTML = getSquareParalelograma(
    dlinaStoronyParalelograma,
    dlinaVisotyParalelograma
  );
}

function showResultInDomRomba() {
  const dlinaStoronyRomba = document.querySelector('#dlinaStoronyRomba').value;

  const dlinaVisotyRomba = document.querySelector('#dlinaVisotyRomba').value;

  const ploschadRomba = document.querySelector('#ploschadRomba');

  ploschadRomba.innerHTML = getSquareRomb(dlinaStoronyRomba, dlinaVisotyRomba);
}
