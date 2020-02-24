function timer() {
    let nowDate = new Date();
    let achieveDate = new Date(2020,11,31,00,0,0); //Задаем дату, к которой будет осуществляться обратный отсчет
    // console.log(achieveDate);
    let result = (achieveDate - nowDate)+1000;
    if (result < 0) {
        let element = document.getElementById('timer');
        element.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
    let seconds = Math.floor((result/1000)%60);
    let minutes = Math.floor((result/1000/60)%60);
    let hours = Math.floor((result/1000/60/60)%24);
    let days = Math.floor(result/1000/60/60/24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    let element = document.getElementById('timer');
    // element.innerHTML = `<b>${seconds}</b>`
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    setTimeout(timer, 1000);
}

window.onload = function() {
    timer();
}