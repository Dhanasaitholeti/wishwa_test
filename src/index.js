const express = require('express');
const cors = require('cors');
const Routehandler = require('./routes/index');
const errorMiddleware = require('./middlewares/error.middleware');
const { connectToDb, sequelize } = require('./utils/db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

Routehandler(app);

connectToDb();

sequelize
  .sync()
  .then(() => console.log('Database synced'))
  .catch(() => console.log('unable to sync Database'));

app.use(errorMiddleware);

app.listen(8000, () => {
  console.log('The server is started on http://localhost:8000');
});
