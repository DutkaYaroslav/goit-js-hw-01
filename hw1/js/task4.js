const credits = 23580;
const pricePerDroid = 3000;
const input = prompt('How many droids do you want?');
let totalPrice = input * pricePerDroid;
let message;


if (input === null) {
    message = 'Отменено пользователем'
}
else if (credits < totalPrice) {
    message = 'Недостаточно средств на счету!'
}
else {
    message = `Вы купили ${input} дроидов, на счету осталось ${credits - totalPrice} кредитов.`
}

console.log(message);
alert(message);