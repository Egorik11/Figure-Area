function showResultInDomKvadrat() {
  const dlinaStoroniKvadrata = document.querySelector(
    '#dlinaStoroniKvadrata'
  ).value;

  const ploschadKvadrata = document.querySelector('#ploschadKvadrata');

  checkParams(getSquareArea, ploschadKvadrata, dlinaStoroniKvadrata);
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

  checkParams(
    getSquareRectangle,
    ploschadPriamougolnika,
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

  checkParams(
    getSquareParalelograma,
    ploschadParalelograma,
    dlinaStoronyParalelograma,
    dlinaVisotyParalelograma
  );
}

function showResultInDomRomba() {
  const dlinaStoronyRomba = document.querySelector('#dlinaStoronyRomba').value;

  const dlinaVisotyRomba = document.querySelector('#dlinaVisotyRomba').value;

  const ploschadRomba = document.querySelector('#ploschadRomba');

  checkParams(
    getSquareRomb,
    ploschadRomba,
    dlinaStoronyRomba,
    dlinaVisotyRomba
  );
}

function checkParams(fn, dom, param1, param2) {
  if (param1 < 0) {
    console.error('Введите положительное число');
    return;
  } else {
    dom.innerHTML = fn(param1, param2);
  }
}
