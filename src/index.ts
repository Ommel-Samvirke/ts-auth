import express from 'express';
import 'dotenv/config';
import cookieParser = require('cookie-parser');
import cors = require('cors');
import { verify } from 'jsonwebtoken';
import { hash, compare } from 'bcrypt';

const app = express();

// Middleware
app.use(cookieParser());

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(process.env.PORT, () => {
  return console.log(
    `Express is listening at http://localhost:${process.env.PORT}`
  );
});
