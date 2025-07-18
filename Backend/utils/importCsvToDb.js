const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const db = require('../config/db');

const dataDir = path.join(__dirname, '../../Data');

fs.readdir(dataDir, (err, files) => {
  if (err) throw err;
  files.filter(f => f.endsWith('.csv')).forEach(file => {
    const symbol = file.replace('.csv', '');
    const results = [];
    fs.createReadStream(path.join(dataDir, file))
      .pipe(csv({ headers: false }))
      .on('data', (row) => {
        // row[0]: DateTime, row[1]: Open, row[2]: High, row[3]: Low, row[4]: Close, row[5]: Volume
        const date = row[0].split(' ')[0].split('-').reverse().join('-'); // Convert DD-MM-YYYY to YYYY-MM-DD
        results.push([
          symbol,
          date,
          parseFloat(row[1]),
          parseFloat(row[2]),
          parseFloat(row[3]),
          parseFloat(row[4]),
          parseInt(row[5])
        ]);
      })
      .on('end', () => {
        const sql = 'INSERT INTO stock_data (symbol, date, open, high, low, close, volume) VALUES ?';
        db.query(sql, [results], (err) => {
          if (err) console.error(`Error inserting ${file}:`, err);
          else console.log(`Inserted data from ${file}`);
        });
      });
  });
});
