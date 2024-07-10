const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/create-coach-account', require('./api/create-coach-account'));
app.use('/api/handle-booking-payment', require('./api/handle-booking-payment'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
