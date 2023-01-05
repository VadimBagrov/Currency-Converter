// Подключаем нужные нам документы для связки в JS
const valueInputNode = document.querySelector('.js-value-input');
const currencySelectorNode = document.querySelector('.js-currency-selector');
const outputNode = document.querySelector('.js-output')

function getInput() {
    return {
        rub: Number(valueInputNode.value), //Получил значение в рублях
        currency: currencySelectorNode.value
    }
}

// Перерисовка
function render(result) {
    outputNode.innerText = result;
}

valueInputNode.addEventListener('input', function() {
    const result = convert(getInput());

    render(result);
})

currencySelectorNode.addEventListener('change', function() {
    const result = convert(getInput());

    render(result);
});
