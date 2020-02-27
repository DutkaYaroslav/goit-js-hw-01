let input;
let total = 0;


do {
    input = prompt('Введіть число');
    total += +input;
} while (input !== null);


if (Number.isNaN(Number(total))) {
    alert('нужно вводить только цифры')
}
else {
    alert(`Общая сумма чисел равна ${total}`)
}



