//функція, яка виводить кількість переданих нею аргументів
function myFunction(a, b, c) {
    console.log(arguments.length)
}

//функція, яка приймає два числа і повертає: -1 - якщо перше число менше за друге; 1 - якщо перше число більше за друге; 0 - якщо числа рівні
function myNumbers (a, b) {
    if (a < b) {
        console.log('-1');
    } else if (a > b) {
        console.log('1');
    } else if (a === b) {
        console.log('0');
    }
}

//функція, яка обчислює факторіал переданого їй числа (рекурсія)
function factorial(a) {
    if (a == 1) {
        return 1
    } else {
        return a * factorial(a - 1)
    }
}

//функція, яка приймає три окремі числа і перевторює їх в одне число
function num(a, b, c) {
    let first = String(a)
    let second = String(b)
    let third = String(c)
    return first + second + third
}
