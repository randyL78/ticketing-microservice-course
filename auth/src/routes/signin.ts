import express, { Request, Response } from 'express'
import { body } from 'express-validator'
import { BadRequestError } from '../errors/bad-request-error'
import { validateRequest } from '../middlewares/validate-request'
import { User } from '../models/user'
import { Password } from '../services/password'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post(
  '/api/users/signin',
  [
    body('email')
      .isEmail()
      .withMessage('Email must be valid.'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('Password must not be empty')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if(!existingUser) {
      throw new BadRequestError("Invalid credentials");
    }

    const passwordsMatch = await Password.compare(existingUser.password, password);
    if(!passwordsMatch) {
      throw new BadRequestError("Invalid credentials");
    }

    // Generate JSON Web Token
    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email
      },
      process.env.JWT_KEY!
    )

    // Store JWT in a session
    req.session = {
      jwt: userJwt
    }

    console.log(`User ${existingUser} signend in`);
    res.status(200).send('User authenticated');
  }
)

export { router as signinRouter }
