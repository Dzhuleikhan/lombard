import Inputmask from "inputmask";
const telSelector = document.querySelectorAll('.input-tel')

if (telSelector) {
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(telSelector);
}


