const apiKey = '3e188cb17010067e888bd06d';
const apiUrl = `https://api.exchangerate-api.com/v4/latest/`;

const form = document.getElementById('converter-form');
const amountInput = document.getElementById('amount');
const sourceCurrencySelect = document.getElementById('source-currency');
const targetCurrencySelect = document.getElementById('target-currency');
const convertedAmountSpan = document.getElementById('converted-amount');
const exchangeRateSpan = document.getElementById('exchange-rate');

form.addEventListener('submit', async function (e) {
    e.preventDefault(); 

    const amount = parseFloat(amountInput.value);
    const sourceCurrency = sourceCurrencySelect.value;
    const targetCurrency = targetCurrencySelect.value;

    if (!amount || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    try {
        const response = await fetch(`${apiUrl}${sourceCurrency}`);
        const data = await response.json();

        if (!data.rates) {
            alert('Failed to fetch exchange rates.');
            return;
        }

        const exchangeRate = data.rates[targetCurrency];

        if (!exchangeRate) {
            alert('Failed to get the exchange rate.');
            return;
        }

        const convertedAmount = amount * exchangeRate;

        convertedAmountSpan.textContent = `${convertedAmount.toFixed(2)} ${targetCurrency}`;
        exchangeRateSpan.textContent = `${exchangeRate.toFixed(2)}`;

    } catch (error) {
        console.error('Error fetching data:', error);
        alert('An error occurred. Please try again later.');
    }
});
