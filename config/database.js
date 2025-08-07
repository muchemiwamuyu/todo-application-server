import mysql from 'mysql2/promise'
import dotenv from 'dotenv';

dotenv.config();


const connectDb = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })
        console.log('mySQL has been Connected');
        return connection;
    } catch (error) {
        console.error('error connecting to database', error);
        process.exit(1);
    }
};

export default connectDb;