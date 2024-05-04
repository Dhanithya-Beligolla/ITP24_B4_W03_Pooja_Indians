import dotenv from 'dotenv';
dotenv.config();
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router.js';


import uploadRouter from './routers/upload.router.js';

import { dbconnect } from './config/database.config.js';
import path2, { dirname } from 'path';
dbconnect();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3174'],
  })
);

app.use('/api/foods', foodRouter);

app.use('/api/upload', uploadRouter);

const publicFolder = path2.join(__dirname, 'public');
app.use(express.static(publicFolder));



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
