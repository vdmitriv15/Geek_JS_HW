// 7. *Сравнить null и 0. Попробуйте объяснить результат.

console.log(null == 0); // false
console.log(null > 0);  // false
console.log(null < 0);  // false

console.log(null >= 0);  //true
console.log(null <= 0);  //true
// null > 0 и null < 0 false, потому что, если мы используем операторы сравнения (<,>,<=,>=),
// null преабразуется в число = 0, поэтому null >= 0 и null <= 0 true
// Если же мы сравниваем с помошью оператора ==, null перобразуется в undefined,
// поэтому null == 0 false