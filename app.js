//Проверка на число двух значений
function isNumber2Dig(x, y) {
    if(isNaN(x) || (x === "") || (x === " ") || isNaN(y) || (y === "") || (y === " ")) {
        return true;
    } else {
        return false;
    }
}

//Проверка на число одного значения
function isNumber1Dig(x) {
    if(isNaN(x) || (x === "") || (x === " ")) {
        return true;
    } else {
        return false;
    }
}

// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
function sumDigital() {
    let num1 = prompt("Введите начало диапазона:") * 1, //Запрашиваем первое число
        num2 = prompt("Введите конец диапазона:") * 1,  //Запрашиваем второе число
        sumNum = 0,                                     //Переменная равная сумме всех чисел в заданном диапазоне
        i = 0,                                          //Начальное значение цикла, меньшее число
        myCase = isNumber2Dig(num1, num2),              //Переменная, проверка на число. Если число, возвращается false
        result = document.querySelector(".resultSum");
        
    //Если пользователь ввел нечисло, выдаем ошибку
    if(myCase) {
        return result.innerHTML = "ОШИБКА! Введите число!";
    }

    if(((num1 - num2) > 1) || ((num1 - num2) < -1)) {
        //Проверяем, какое число меньше: первое или второе
        if(num1 > num2) {   //Если первое больше второго, выполняется if
            i = num2 + 1;   //Задаем значение начала цикла

            for(; i < num1; i++) {  //Считаем сумму всех чисел
                sumNum += i;
            }
        } else {            //Если первое меньше второго, выполняется else
            i = num1 + 1;

            for(; i < num2; i++) {
                sumNum += i; 
            }
        }

        result.innerHTML = "Сумма диапазона от " + num1 + " до " + num2 + " равна: " + sumNum;
    } else {
        result.innerHTML = "ОШИБКА! Введите диапазон чисел больше 1";
    }
}

// 2. Запросить 2 числа и найти только наибольший общий делитель.
function largestDivisor() {
    let num1 = Math.abs(prompt("Введите певое число:")),
        num2 = Math.abs(prompt("Введите второе число:")),
        myCase = isNumber2Dig(num1, num2),
        myAnswer = "Наибольший общий делитель чисел " + num1 + " и " + num2 + " равен: ";
        result = document.querySelector(".resultBigDel");

    //Если пользователь ввел нечисло, выдаем ошибку
    if(myCase) {
        return result.innerHTML = "ОШИБКА! Введите число!";
    }

    while(num1 &&  num2) {
        if(num1 >  num2) {
            num1 = num1 %  num2;
        } else {
            num2 =  num2 % num1;
        }
    }

    if(num1 != 0) {
        result.innerHTML = myAnswer + num1;
    } else {
        result.innerHTML = myAnswer + num2; 
    }
}

// 3. Запросить у пользователя число и вывести все делители этого числа.
function numberDividers() {
    let num = prompt("Введите число:") * 1,
        myCase = isNumber1Dig(num),
        i = 1,
        restDividers = 0,
        result = document.querySelector(".resultDel"),
        myAnswer = "Делители числа " + num + ":";

    //Если пользователь ввел нечисло, выдаем ошибку
    if(myCase) {
        return result.innerHTML = "ОШИБКА! Введите число!";
    }

    if(num > 0) {
        while(i <= num) {
            restDividers = Math.abs(num % i);
    
            if(restDividers == 0) {
                myAnswer += (" " + i);
            }
    
            i++;
        }
    }

    if(num < 0) {
        i = -1;

        while(i >= num) {
            restDividers = num % i;
    
            if(restDividers == -0) {
                myAnswer += (" " + i);
            }
    
            i--;
        }
    }

    result.innerHTML = myAnswer;
}

// 4. Определить количество цифр в введенном числе.
function amountDigital() { 
    let numbUser = prompt("Введите число:") * 1,
        myCase = isNumber1Dig(numbUser),
        i = 0,
        restDividers = 0,
        result = document.querySelector(".resultAmountDigital");

    //Если пользователь ввел нечисло, выдаем ошибку
    if(myCase) {
        return result.innerHTML = "ОШИБКА! Введите число!";
    }

    for(; numbUser != 0; i++) {
        restDividers = numbUser % 10;
        numbUser = (numbUser - restDividers) / 10;
    }

    result.innerHTML = `В введенном числе ${i} цифр.`;
}

/*5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести
статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.*/
function tenDigital() {
    let numbUser = 0,
        positiveN = 0,
        negativeN = 0,
        numbZero = 0,
        evenNumb = 0,
        oddNumb = 0,
        i = 0,
        result = document.querySelector(".resultTenDigital"),
        myCase = false;

    do {
        numbUser = prompt(`Введите 10 чисел. ${i+1}:`) * 1;
        myCase = isNumber1Dig(numbUser);
        
        if(numbUser > 0) {
            ++positiveN;
        }
        
        if(numbUser < 0) {
            ++negativeN;
        }
        
        if(numbUser === 0) {
            ++numbZero;
        }

        if((numbUser % 2) == 0) {
            ++evenNumb;
        }
        
        if((numbUser % 2) !== 0) {
            ++oddNumb;
        }

        //Если пользователь ввел нечисло
        if(!myCase) {
            i++;
        }  
    } while(i < 10);
    
    result.innerHTML = `Положительных: ${positiveN} цифр; отрицательных: ${negativeN} цифр; нулей: ${numbZero}; четных: ${evenNumb} цифр; нечетных: ${oddNumb} цифр.`;
}

/*6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока
пользователь не откажется.*/
function calculator() {
    let numbUser1,
        numbUser2,
        sign,
        result = document.querySelector(".resultCalculator"),
        myCase = true,
        userDesire = true; /* Переменная отказа пользователя от дальнейших рассчетов*/
 
    do {
        numbUser1 = prompt("Введите певое число:") * 1;
        numbUser2 = prompt("Введите второе число:") * 1;
        
        //Если пользователь ввел нечисло, выдаем ошибку
        myCase = isNumber2Dig(numbUser1, numbUser2);
        if(myCase) {
            return result.innerHTML = "ОШИБКА! Введите число!";
        }

        sign = prompt("Введите знак для выполнения расчета: + - / *");

        switch(sign) {
            case "+":
                alert(`${numbUser1} ${sign} ${numbUser2} = ${numbUser1 + numbUser2}`);
                break;
            case "-":
                alert(`${numbUser1} ${sign} ${numbUser2} = ${numbUser1 - numbUser2}`);
                break;
            case "/":
                alert(`${numbUser1} ${sign} ${numbUser2} = ${numbUser1 / numbUser2}`);
                break;
            case "*":
                alert(`${numbUser1} ${sign} ${numbUser2} = ${numbUser1 * numbUser2}`);
                break;
            default:
                alert("ОШИБКА! Некорректный знак операции!");
                break;
        }

        userDesire = confirm("Продолжить?");
    } while(userDesire);    
}
       
/* 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и 
вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).*/
function moveDig() {
    let numbUser = prompt("Введите число:"),
        moveNumb = prompt("На сколько цифр сдвинуть число?"),
        myCase = isNumber2Dig(numbUser, moveNumb),
        result = document.querySelector(".resultShiftDigital"),
        firstSign = "",
        otherSign = "";

        if(myCase) {
            return result.innerHTML = "ОШИБКА! Введите число!";
        }

        if((numbUser > 9999999) || (moveNumb > 9999)) {
            return result.innerHTML = "ОШИБКА! Число должно быть не больше 10000000. Сдвиг должен быть не больше 10000!";
        }

        for(let i = 0; i < moveNumb; i++) {
            firstSign = numbUser[0];
            otherSign = numbUser.substring(1);
            numbUser = otherSign + firstSign;
        }

        result.innerHTML = numbUser;
}

//8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK. 
function dayOfWeek() {
    let dayWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
        userDesire = true,
        i = 0;

    do {
        userDesire = confirm(`${dayWeek[i]}. Хотите увидеть следующий день?`);

        if(i < 6) {
            i++;
        } else {
            i = 0;
        }

    } while(userDesire);
}

// 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
function multTable() {
    let lenI = 10,
        lenJ = 11,
        result,
        DOMBr = "<br>";

    for(let i = 2; i < lenI; i++) {
        result = document.querySelector(`.range${i}`);

        for(let j = 1; j < lenJ; j++) {
            result.innerHTML += `${i} * ${j} = ${i * j}${DOMBr}`;
        }
    }
}

/*10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам,
записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того что указал пользователь, уменьшаете диапазон. Начальный
диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь 
не выберет == N.*/
function guessNumber() {
    let numbUser = confirm("Загадайте число от 0 до 100."),
        n1 = 0,
        n2 = 100,
        n = 50,
        answer = true,
        outUser = "",
        result = document.querySelector(".resultGuessNumber");

    do {
        numbUser = prompt(`Ваше число > ${n}, < ${n} или = ${n}?`);

        switch(numbUser) {
            case ">":
                n1 = n;
                n = Math.round((n1 + n2) / 2);
                break;
            case "<":
                n2 = n;
                n = Math.round((n1 + n2) / 2);
                break;
            case "=":
                result.innerHTML = `Ваше число: ${n}.`;
                answer = false;
                break;
            default:
                result.innerHTML = "ОШИБКА! Некорректный знак операции!";
                outUser = prompt("Выходим (Y/N)?");

                if(outUser === "Y" || outUser === "y") {
                    answer = false;
                } else {
                    answer = true;
                }
                break;
        }
    } while(answer);
}


let btnSum = document.querySelector("#btnSum"),
    btnBigDel = document.querySelector("#btnBigDel"),
    btnDel = document.querySelector("#btnDel"),
    btnAmountDigital = document.querySelector("#btnAmountDigital"),
    btnTenDigital = document.querySelector("#btnTenDigital"),
    btnCalculator = document.querySelector("#btnCalculator"),
    btnShiftDigital = document.querySelector("#btnShiftDigital"),
    btnDayOfWeek = document.querySelector("#btnDayOfWeek"),
    btnMultTable = document.querySelector("#btnMultTable"),
    btnGuessNumber = document.querySelector("#btnGuessNumber");

btnSum.addEventListener("click", sumDigital);
btnBigDel.addEventListener("click", largestDivisor);
btnDel.addEventListener("click", numberDividers);
btnAmountDigital.addEventListener("click", amountDigital);
btnTenDigital.addEventListener("click", tenDigital);
btnCalculator.addEventListener("click", calculator);
btnShiftDigital.addEventListener("click", moveDig);
btnDayOfWeek.addEventListener("click", dayOfWeek);
btnMultTable.addEventListener("click", multTable);
btnGuessNumber.addEventListener("click", guessNumber);
