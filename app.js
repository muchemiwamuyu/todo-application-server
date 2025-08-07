// server setup logic!
import express from 'express'
import dotenv from 'dotenv';
import connectDb from './config/database.js';

dotenv.config();

const app = express();

// middleware
app.use(express());

// database connect
connectDb();


// starting routes
app.get('/', async (req, res) => {
    try {
        const [rows] = await connectDb.query('SELECT * FROM users;');
        res.json({rows});
    } catch (error) {
        res.status(500).json({message: "error fetching users", error: error.message});
    }
});

export default app;



