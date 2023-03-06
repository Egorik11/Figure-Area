function showResultInDomKvadrat() {
  const dlinaStoroniKvadrata = document.querySelector(
    '#dlinaStoroniKvadrata'
  ).value;

  const ploschadKvadrata = document.querySelector('#ploschadKvadrata');

  if (dlinaStoroniKvadrata < 0) {
    console.error('Введите положительное число');
    return;
  } else {
    ploschadKvadrata.innerHTML = getSquareArea(dlinaStoroniKvadrata);
  }
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

  if (pervayaStoronaPriamougolnika < 0 || drugayaStoronaPriamougolnika < 0) {
    console.error('Введите положительное число');
    return;
  } else {
    ploschadPriamougolnika.innerHTML = getSquareRectangle(
      pervayaStoronaPriamougolnika,
      drugayaStoronaPriamougolnika
    );
  }
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

  if (dlinaStoronyParalelograma < 0 || dlinaVisotyParalelograma < 0) {
    console.error('Введите положительное число');
    return;
  } else {
    ploschadParalelograma.innerHTML = getSquareParalelograma(
      dlinaStoronyParalelograma,
      dlinaVisotyParalelograma
    );
  }
}

function showResultInDomRomba() {
  const dlinaStoronyRomba = document.querySelector('#dlinaStoronyRomba').value;

  const dlinaVisotyRomba = document.querySelector('#dlinaVisotyRomba').value;

  const ploschadRomba = document.querySelector('#ploschadRomba');

  if (dlinaStoronyRomba < 0 || dlinaVisotyRomba < 0) {
    console.error('Введите положительное число');
    return;
  } else {
    ploschadRomba.innerHTML = getSquareRomb(
      dlinaStoronyRomba,
      dlinaVisotyRomba
    );
  }
}
