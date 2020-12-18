function ex_01 () {
    let str = 'aaa@bbb@ccc';
    console.log(str.search(/@/g));
    alert(str.replace(/@/g, '!'));
}

function ex_02 () {
    let date = '2025-12-31',
        arr = date.split('-');        
    newDate = arr[2] + '/' + arr[1] + '/' + arr[0];
    alert(newDate);
}

function ex_03 () {
    let str = 'Я учу javascript!';
    alert(str.substr(2, 3) + '\n' + str.substring(2, 5) + '\n' + str.slice(2, 5));
}

function ex_04 () {
    let arr = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** 3;
    }
    console.log(Math.sqrt(sum));
}

function ex_5 (a,b) {
    let c = Math.abs(a - b);
    return c;       
}

function ex_05 () {
    let a = prompt('Введите А'),
        b = prompt('Введите В');
    console.log(ex_5(a, b));
}

function zero (int) {
    if (int >= 1 && int <= 9) {
        return '0' + int;
    }
}

function ex_06 () {
    let date = new Date();
    date.setDate(1);
    date.setMonth(1)
    alert(date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds() + '\n'+ zero(date.getDate()) + ' | ' + zero(date.getMonth()) + ' | ' + date.getFullYear());
}

function ex_07 () {
    let str = 'aa aba abba abbba abca abea';
    alert(str.replace(/ab+a/, '|'));
}

function ex_08 () {
    let num = prompt('Введите номер телефона');
    let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (reg.test(num) == true) {alert('Okey')}
    else {alert('Error!!!')}
}

function ex_09 () {
    let mail = prompt('Введите адрес электронной почты'),
        reg = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (reg.test(mail) == true) {alert('Okey')}
    else {alert('Error!!!')}
}