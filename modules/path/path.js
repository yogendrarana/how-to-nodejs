const path = require('path');

// returns the basename of the path
console.log("Basename: ", path.basename(__filename));

// returns delimiter of the path
console.log("Delimiter: ", path.delimiter);

// returns directory name of the path
console.log("Directory name: ", path.dirname(__filename));

// returns extension of the file
console.log("Extension: ", path.extname(__filename));

// returns the parsed path
console.log("Parsed path: ", path.parse(__filename));

// joins the path
console.log("Joined path: ", path.join(__dirname, 'test', 'hello.html'));

// resolves the path
console.log("Resolved path: ", path.resolve(__dirname, 'test', 'hello.html'));