const csv = require('csv-parser');
const fs = require('fs');

const writeStream = fs.createWriteStream('canada.txt', { flags: 'a' });
let headersWritten = false;

// Input and output file paths
const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

// Deleting canada.txt and usa.txt if they already exist
[canadaFile, usaFile].forEach((file) => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`${file} deleted successfully.`);
    }
  });


// Step 3b & 3c: Read and filter data from CSV file
fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    const { country, year, population } = row;

    // Filter data and write to respective files
    if (country.toLowerCase() === 'canada') {
      fs.appendFileSync(canadaFile, `${country},${year},${population}\n`);
    } else if (country.toLowerCase() === 'united states') {
      fs.appendFileSync(usaFile, `${country},${year},${population}\n`);
    }
  })
  .on('end', () => {
    console.log('CSV processing complete.');
    console.log(`Filtered data written to ${canadaFile} and ${usaFile}`);
  });