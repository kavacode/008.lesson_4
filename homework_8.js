//Вивести на сторінку в один рядок через кому числа від 10 до 20.
let numbers = '';
for (let i = 10; i <= 20; i++) {
	numbers += i + ', ';
}
console.log(numbers);


//Вивести квадрати чисел від 10 до 20.
for (let i = 10; i <= 20; i++) {
	console.log(i * i);
}


//Вивести таблицю множення на 7.
for (let i = 1; i <= 10; i++) {
	console.log(`${i} * 7 = ${i * 7}`);
}


//Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
	sum += i;
}
console.log(sum);


//Знайти добуток усіх цілих чисел від 15 до 35.
let product = 1;
for (let i = 15; i <= 35; i++) {
	product *= i;
}
console.log(product);


//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum = 0;
for (let i = 1; i <= 500; i++) {
	sum += i;
}
let average = sum / 500;
console.log(average);


//Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sum = 0;
for (let i = 30; i <= 80; i++) {
	if (i % 2 === 0) {
		sum += i;
	}
}
console.log(sum);


//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
for (let i = 100; i <= 200; i++) {
	if (i % 3 === 0) {
		console.log(i);
	}
}


//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let number = 8;
for (let i = 1; i <= number; i++) {
	if (number % i === 0) {
		console.log(i);
	}
}


//Визначити кількість його парних дільників та знайти їх суму.
let number = 8;
let count = 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
	if (number % i === 0) {
		if (i % 2 === 0) {
			count++;
			sum += i;
		}
	}
}
console.log(`Кількість парних дільників: ${count}`);
console.log(`Їх сума: ${sum}`);


//Надрукувати повну таблицю множення від 1 до 10.
for (let i = 1; i <= 10; i++) {
	console.log(`Таблиця множення на ${i}:`);
	for (let j = 1; j <= 10; j++) {
		console.log(`${i} * ${j} = ${i * j}`);
	}
}

