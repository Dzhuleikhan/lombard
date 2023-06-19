const modalBtn = document.querySelectorAll('.modal-btn')
const modalOverlay = document.querySelector('.overlay')
const modalCloseBtn = document.querySelectorAll('.modal__close-btn')
const modalForm = document.querySelector('.form-2')
const modalMain = document.querySelector('.modal__main')
const modalThank = document.querySelector('.modal__thank')
const modalBack = document.querySelector('.modal__back')
const form = document.querySelector('.form-1')

function showModal() {
  modalOverlay.classList.add('open')
  document.querySelector('body').style.overflow = 'hidden'
}
function hideModal() {
  modalOverlay.classList.remove('open')
  document.querySelector('body').style.overflow = 'visible'
}

modalBack.addEventListener('click', () => {
  hideModal()
  modalMain.classList.remove('hidden')
  modalThank.classList.remove('active')
  modalForm.reset()
})

modalBtn.forEach(el => {
  el.addEventListener('click', () => {
    showModal()
  })
})
modalCloseBtn.forEach(el => {
  el.addEventListener('click', () => {
    hideModal()
    modalMain.classList.remove('hidden')
    modalThank.classList.remove('active')
    modalForm.reset()
  })
})
modalOverlay.addEventListener('click', (e) => {
  if(e.target === modalOverlay) {
    hideModal()
  }
})

import JustValidate from 'just-validate';
import Inputmask from "inputmask";

export const validateForms = (selector, rules, afterSend) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('input[type="tel"]');

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }

  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }

  if (telSelector) {
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: 'function',
          validator: function() {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: item.telError
        });
      }
    }
  }

  const validation = new JustValidate(selector);

  for (let item of rules) {
    validation
      .addField(item.ruleSelector, item.rules);
  }

  validation.onSuccess((ev) => {
    // let formData = new FormData(ev.target);

    // let xhr = new XMLHttpRequest();

    // xhr.onreadystatechange = function () {
    //   if (xhr.readyState === 4) {
    //     if (xhr.status === 200) {
    //       if (afterSend) {
    //         afterSend();
    //       }
    //       console.log('Отправлено');
    //     }
    //   }
    // }

    // xhr.open('POST', 'mail.php', true);
    // xhr.send(formData);

    ev.target.reset();

    // modalMain.classList.add('hidden')
    // modalThank.classList.add('active')
    // console.log('sent')
    showModal()
    modalMain.classList.add('hidden')
    modalThank.classList.add('active')
  })

};

const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 1
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Некорректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  }
];
const rules2 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 1
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Некорректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  }
];

validateForms('.form-2', rules1);
validateForms('.form-1', rules2);
