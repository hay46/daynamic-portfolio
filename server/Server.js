const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3000;

app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server:', err);
        return;
    }
  console.log(`Server is running on port ${PORT}`);
});
