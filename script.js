const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select-to-convert')
const currencyTop = document.querySelector('.currency-top')


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.5
    const libraToday = 7
    const bitcoinToday = 362.623
    const realToday = 0.19


    //CONVERTENDO REAL PARA OUTRAS MOEDAS

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value == 'dolar') {//se o select tiver selecionado o valor de dolar entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }
    if (currencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == 'bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)
    }

}
function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')


    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dolar americano'
        currencyImage.src = "./assets/logo-EUA.png"
    }
    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = "./assets/EURO.png"
    }
    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra'
        currencyImage.src = "./assets/Libra-logo.png"
    }
    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = "./assets/bitcoin-logo.png"
    }

    convertValues()
}


currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues) //ouvinte de eventos

