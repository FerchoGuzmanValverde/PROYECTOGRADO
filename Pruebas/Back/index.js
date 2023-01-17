import express from "express";
import bodyParser from 'body-parser'

const server = express();

const router = express.Router();

router.get('/api/user', (req, res)=> {res.send("Hola Frenando!");});

router.get('/api/user/:name', (req, res)=> {
    const { name } = req.params;
    res.send(`Hola ${name}!`);
  });  

router.post('/api/user', (req, res)=> {
    console.log(req.body)
  const { id } = req.body;
  res.send(`Hola ${id}!`);
});  

server.use(bodyParser.json());
server.use(router); 

const port = process.env.PORT || 8000;

server.listen(port, () => {
    console.log(`express API is running on port ${port}`);
});
