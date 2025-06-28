import express, { Request, Response } from 'express';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001; 

// define a sample api
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

// start the server on port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});