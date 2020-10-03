import express from 'express';

const app = express();

app.use(express.json());

app.post('/translate', (req, resp) => {
  const {number} =  req.body;

  

  return resp.json(number)
})

export default app;