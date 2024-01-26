const fs = require('fs')

// create a file
fs.writeFile('example.txt', 'This is an example', (err) => {
    if (err)
        console.log(err);
    else {
        console.log('File successfully created');
        fs.readFile('example.txt', 'utf8', (err, file) => {
            if (err)
                console.log(err);
            else
                console.log(file);
        });
    }
});

// update a file
fs.appendFile('example.txt', '\nSome data being appended', (err) => {
    if (err)
        console.log(err);
    else
        console.log('Successfully appended data to file');
});


// read a file
fs.readFile('example.txt', 'utf8', (err, file) => {
    if (err)
        console.log(err);
    else
        console.log(file);
});
