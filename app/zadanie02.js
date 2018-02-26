// 2. Zawartość wszystkich plików w katalogu

const fs = require('fs');

fs.readdir('./data/zadanie02', (err, files) => {
    if(err === null) {
        files.forEach(file => {
            console.log(file);
        });
    } else {
        console.log('Wystąpił błąd podczas listowania plików');
    }
});