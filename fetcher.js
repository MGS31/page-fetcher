// take in a url as a command line arg = DONE
// take in a file path as a command line arg
// Use request library
// Use FS module to write the file
// Use a callback
// don't use pipe functiona and don't use sychronous functions
// download the resources to the specified path

const request = require('request');
const fs = require('fs');
const { Console } = require('console');

const link = process.argv[2];
const path = process.argv[3];

// reviewing the request from HTTP call
request(link, (error, response, body) => {
  // if the response status is not correct exit and explain why.
  if (response && response.statusCode !== 200) {
    console.log(`${link} returned an error`)
    process.exit();
  }
  // use FS to write to a specific file.
  fs.writeFile(path, body, 'utf8', function (err) {
    fs.access(path, (err) => {
      console.log(`Path ${err ? 'does not exist. No file was created.': 'exists, File was created successfully.'}`);
    });
    // throw error if it doesn't work
    if (err) throw err;
  });
});



