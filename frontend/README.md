# Backend Folder Structure

The `Backend` directory is organized as follows:

```
backend/
│
├── config/
│   └── db.js             # MySQL connection setup
│
├── controllers/
│   └── analysisController.js
│
├── models/
│   └── scriptModel.js
│
├── routes/
│   └── analysisRoutes.js
│
├── services/
│   └── maStrategy.js     # Moving average logic
│
├── utils/
│   └── backtest.js       # P/L and signal analysis
│
├── .env                  # Environment variables
├── app.js                # Express app entry point
└── package.json
```

## Description
- **config/db.js**: Handles MySQL database connection using environment variables from `.env`.
- **controllers/analysisController.js**: Contains logic for handling analysis requests.
- **models/scriptModel.js**: Placeholder for database models related to scripts.
- **routes/analysisRoutes.js**: Express routes for analysis endpoints.
- **services/maStrategy.js**: Placeholder for moving average strategy logic.
- **utils/backtest.js**: Placeholder for backtesting and P/L analysis utilities.
- **.env**: Stores sensitive environment variables (not committed to version control).
- **app.js**: Main entry point for the backend server.
- **package.json**: Node.js dependencies and scripts for the backend.

> This structure is designed for clarity and scalability for backend development.
