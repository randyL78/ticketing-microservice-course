import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
  res.send("Well hello there.")
});

export { router as signinRouter };