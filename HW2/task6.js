// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation){
    switch (operation){
        case '+':
            return arg1 + arg2;
        case '-':
            return arg1 - arg2;
        case '*':
            return arg1 * arg2;
        case '/':
            return arg1 / arg2;
    }
}

let a = parseInt(prompt('a = ')), b = parseInt(prompt('b = ')), oper = prompt('operation');
alert('result ' + mathOperation(a, b, oper))

