const express = require('express');
const app = express();
const analysisRoutes = require('./routes/analysisRoutes');
require('dotenv').config();

app.use(express.json());
app.use('/api/analysis', analysisRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 