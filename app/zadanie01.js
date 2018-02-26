// 1. Przetwarzanie danych

const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf-8', (err, data) => {
    if (err === null) {
        let arr = JSON.parse(data);
        let sum = 0;
        arr.forEach(num => {
            sum += num;
        });
        fs.writeFile('./data/zadanie01/sum.txt', sum, err => {
            if (err === null) {
                console.log('Poprawnie zapisano plik!');
            } else {
                console.log('Coś poszło nie tak', err);
            }
        });
    } else {
        console.log('Błąd odczytu!');
    }
});