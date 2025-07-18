USE tradcalci;

CREATE TABLE stock_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    symbol VARCHAR(32),
    date DATE,
    open FLOAT,
    high FLOAT,
    low FLOAT,
    close FLOAT,
    volume BIGINT
);
