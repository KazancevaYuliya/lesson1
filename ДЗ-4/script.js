numberFactorial = prompt('Введите число');
let n = 1;

for (i = 0; i < numberFactorial; i++){
    n = n * (numberFactorial - i);
}

alert(numberFactorial + '! = ' + n);