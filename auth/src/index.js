import express from "express";
import 'express-async-errors';
import bodyParser from "body-parser";
import mongoose from 'mongoose';

const { json } = bodyParser;

// Router files
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.use(json());

// Router handling
app.get('/api/users/signup', (req,res) => {
  res.send("Hello World!!");
})
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', (req, res) => {
    new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});