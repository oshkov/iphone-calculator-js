let display = document.getElementById('screen');

const wipe = () => {
    display.value = '';
    display.style="font-size: 90px";
}

const show = (n) => {
    display.value += n;

    if ((display.value).length === 7) {
        display.style="font-size: 70px";
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

const calc = () => {
    console.log((display.value).replace(/%/g, "/100"))


    // display.value = eval(display.value);
    display.value = eval((display.value).replace(/%/g, "/100"));

    if ((display.value).length === 7) {
        display.style="font-size: 70px";
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