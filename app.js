const age = 18;

// age >= 18 ? console.log('Access granted') : console.log('Access denied');

// console.log('Access', age >= 18 ? 'granted' : 'denied');

// let status = 'idle';
// let statusNumber = status === 'idle' ? 0 : 1;
// console.log ({statusNumber});

const spainCapital = 'Valencia';
let isCorrectAnswer;

// Конструкция if..else
// if (spainCapital === 'Madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'MADRID') {
//     isCorrectAnswer = true;
// } else {
//     isCorrectAnswer = false;
// }

// Добавьте код здесь, переписав конструкцию выше на switch
switch (spainCapital) {
    case 'Madrid': { 
        console.log('isCorrectAnswer = true');
        break;
    }
    case 'madrid': { 
        console.log('isCorrectAnswer = true');
        break;
    }
    case 'MADRID': { 
        console.log('isCorrectAnswer = true');
        break;
    }
    default: { 
        console.log('Error');
        break;
    }
}

