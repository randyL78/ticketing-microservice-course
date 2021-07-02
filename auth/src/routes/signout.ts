import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  res.send("Well hello there.")
});

export { router as signoutRouter };