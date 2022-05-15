const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoDb = require('./config/db');

const app = express();

dotenv.config();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoDb();

app.use('/', require('./routes/user'));
app.use('/', require('./routes/events'));

// Events Data
app.use('/', require('./routes/eventData'));

// Activities Routes
app.use('/', require('./routes/activitiesData'));

// Adventures
app.use('/', require('./routes/adventuresData'));

// Bookings
app.use('/adventuresBooking', require('./routes/adventuresBooking'));

app.use('/activitiesBooking', require('./routes/activitiesBooking'));

// app.use('/auth', require('./routes/auth'));
// app.use('/posts', require('./routes/posts'));

// Specific Pages
app.use('/specific', require('./routes/specificPages'));

app.get('/', (req, res) => {
  res.send('Hello from the other side of the world 🌏');
});

app.listen(PORT, () => {
  console.log(` 🚀 Server is listening on port ${PORT}`);
});
