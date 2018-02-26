// Zadanie dnia: Program TrAwKa

const fs = require('fs');

let filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err === null) {
        let letters = [...data];
        let wholeText = "";

        for(let i = 0; i < letters.length; i++) {
            if (i % 2 == 0) letters[i] = letters[i].toUpperCase();
            else letters[i] = letters[i].toLowerCase();

            wholeText += letters[i];
        }
        
        fs.writeFile(filePath, wholeText, err => {
            if(err === null) console.log('Everything is fine!');
            else console.log('Something went wrong! Cannot save file.');
        });
    } else {
        console.log('Some error! Cannot read the file.', data);
    }
});