import express, { Request, Response } from 'express';
import 'express-async-errors';
import { json } from "body-parser";
import mongoose from 'mongoose';

// Router files
import { currentUserRouter } from "./routes/current-user.js";
import { signinRouter } from "./routes/signin.js";
import { signoutRouter } from "./routes/signout.js";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler.js";
import { NotFoundError } from "./errors/not-found-error.js";

const app = express();
app.use(json());

// Router handling
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError(req.url);
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log("Connected to MongoDB")
  } catch (err) {
    console.error(err);
  }


  app.listen(3000, () => {
      console.log('Listening on port 3000!');
  });
}

start();
