// 8. *С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.

function powNum (val, pow) {
    if (pow > 1) return val * powNum(val, pow - 1);
    else return val;
}

console.log(powNum(2, 5))
