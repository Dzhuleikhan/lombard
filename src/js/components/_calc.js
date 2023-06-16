let techSum = document.getElementById('tech-sum')
let zaymAmount = document.getElementById('amountPerMonth')
let monthly = document.getElementById('monthly')
let daysInput = document.getElementById("days")
let daysIndex = document.getElementById("days").selectedIndex;
let option = document.getElementsByTagName("option")[daysIndex].value;
let amountPerMonth = document.getElementById('amountPerMonth')
let onHandAmount = document.getElementById('onHanAmount')
const calcResetBtn = document.querySelector('.calc__reset')

function calcReset() {
  techSum.value = ''
  zaymAmount.value = ''
  onHandAmount.textContent = 0
  monthly.textContent = 0
}

calcResetBtn.addEventListener('click', () => {
  calcReset()
})

techSum.addEventListener('input', () => {
  if(techSum.value > 100000000) {
    techSum.value = 100000000
  }
  let a = techSum.value * 0.95
  let b = zaymAmount.value = a
  let daysIndex = document.getElementById("days").selectedIndex;
  let option = document.getElementsByTagName("option")[daysIndex].value;
  let monthlyPayment = b * 0.03
  monthly.textContent = (monthlyPayment * option).toLocaleString()
  onHandAmount.textContent = (techSum.value * 0.95).toLocaleString()
})

daysInput.addEventListener('change', () => {
  let a = amountPerMonth.value
  let daysIndex = document.getElementById("days").selectedIndex;
  let option = document.getElementsByTagName("option")[daysIndex].value;
  let monthlyPayment = a * 0.03
  monthly.textContent = (monthlyPayment * option).toLocaleString()
})

amountPerMonth.addEventListener('input', () => {
  if(amountPerMonth.value > techSum.value * 0.95) {
    amountPerMonth.value =  techSum.value * 0.95
  }
  let a = amountPerMonth.value
  let daysIndex = document.getElementById("days").selectedIndex;
  let option = document.getElementsByTagName("option")[daysIndex].value;
  let monthlyPayment = a * 0.03
  monthly.textContent = (monthlyPayment * option).toLocaleString()
})



