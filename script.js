const buyPriceInput = document.getElementById('buy-price');
const buyAmountInput = document.getElementById('buy-amount');
const sellPriceInput = document.getElementById('sell-price');
const calculateButton = document.getElementById('calculate-button');
const resultParagraph = document.getElementById('result').querySelector('p');

calculateButton.addEventListener('click', calculateProfit);

function calculateProfit() {
  const buyPrice = parseFloat(buyPriceInput.value);
  const buyAmount = parseFloat(buyAmountInput.value);
  const sellPrice = parseFloat(sellPriceInput.value);
  const coins = buyAmount / buyPrice;

  if (isNaN(buyPrice) || isNaN(buyAmount) || isNaN(sellPrice)) {
    resultParagraph.textContent = "Пожалуйста, введите все значения!";
    return;
  }

  const profit = (coins * sellPrice)-buyAmount  ;
  resultParagraph.textContent = `Прибыль: ${profit.toFixed(2)}`;
}