import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';

import path from 'path';
import { fileURLToPath } from 'url';
import resumeRoutes from './routes/resumeRoutes.js';
 


// Get the current directory name and file name
// This is necessary to use __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Initialize express app
const app = express();
const PORT = 5000;

app.use(cors());



// CONNECT DB
connectDB();


// MIDDLEWARE
app.use(express.json());

// Serve static files from uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', userRoutes); // User authentication routes
app.use('/api/resume', resumeRoutes); // Resume management routes
app.use(
  '/uploads',
  express.static(
    path.join(__dirname, 'uploads'),
    {
      setHeaders: (res, _path) => {
        res.set('Access-Control-Allow-Origin', 'http://localhost:5000/');
      }
    }
  )
);



//ROUTES


app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });