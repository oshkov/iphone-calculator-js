let display = document.getElementById('screen');

// Очистка поля ввода
const wipe = () => {
    display.value = '';
    display.style="font-size: 90px";
}

// Вывод цифр на экран
const show = (n) => {
    display.value += n;

    // Проверка на количество цифр в строке, чтобы все умещались
    if ((display.value).length === 7) {
        display.style="font-size: 70px"; // Уменьшение шрифта цифр
    } else if ((display.value).length === 9) {
        display.style="font-size: 60px";
    } else if ((display.value).length === 10) {
        display.style="font-size: 50px";
    } else if ((display.value).length === 11) {
        display.style="font-size: 40px";
    } else if ((display.value).length === 15) {
        display.style="font-size: 30px";
    } else {
    }
}

// Подсчет результата
const calc = () => {
    console.log((display.value).replace(/%/g, "/100")) // Замена символа процента на "/100"

    display.value = eval((display.value).replace(/%/g, "/100")); // Подсчет результата

    // Проверка на количество цифр в строке, чтобы все умещались
    if ((display.value).length === 7) {
        display.style="font-size: 70px"; // Уменьшение шрифта цифр
    } else if ((display.value).length === 9) {
        display.style="font-size: 60px";
    } else if ((display.value).length === 10) {
        display.style="font-size: 50px";
    } else if ((display.value).length === 11) {
        display.style="font-size: 40px";
    } else if ((display.value).length === 15) {
        display.style="font-size: 30px";
    } else if ((display.value).length < 7) {
        display.style="font-size: 90px";
    } else if ((display.value).length < 9) {
        display.style="font-size: 70px";
    } else if ((display.value).length < 10) {
        display.style="font-size: 60px";
    } else if ((display.value).length < 11) {
        display.style="font-size: 50px";
    } else if ((display.value).length < 15) {
        display.style="font-size: 40px";
    } else if ((display.value).length > 15) {
        display.style="font-size: 20px";
    } else { 
    }
}