import express from "express";
import bodyParser from 'body-parser'
import dotenv from "dotenv";
import RutasAutenticacion from './routes/routes.js'

dotenv.config();

const server = express();


server.use(bodyParser.json());
server.use('/api', RutasAutenticacion); 

const port = process.env.PORT || 8000;

server.listen(port, () => {
    console.log(`express API is running on port ${port}`);
});
