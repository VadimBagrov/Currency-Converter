// Логика конвертации
const RATES = {
    usd: 0.014,
    eur: 0.013
}; //Ставки

//Конвертация
function convert( {rub, currency} ) {
    if (!RATES[currency]) {
        return null;
    } //Если не та валюта что есть,то null

    return rub * RATES[currency];
    //Логика конвертации
}
