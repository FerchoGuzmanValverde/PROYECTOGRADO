import express from "express";
import {pool} from '../conexion.js'
import jwt from "jsonwebtoken";

const router = express.Router();

///router.get('user', (req, res)=> {res.send("Hola Frenando!");});

/*router.get('user/:name', (req, res)=> {
    const { name } = req.params;
    res.send(`Hola ${name}!`);
  });  */

router.post('/user', async (req, res)=> {

   const token = req.header('Authorization').replace('Bearer ', '')
   //const data = jwt.verify(token, process.env.JWT_KEY)

   const data = jwt.verify(token, "GVF0026694")

   const [rows] = await pool.query("SELECT * FROM usuario WHERE id = ?", [data.id]);

    const { id } = req.body;
    res.status(200).json({id:rows[0].id,email:rows[0].email});

});  

router.post('/register', async (req, res)=> {
    const { email, password } = req.body;
    
    try {
        const [rows] = await pool.query(
          "INSERT INTO usuario (email, password) VALUES (?, ?)",
          [email, password]
        );
        //Creamos token para el usuario
        //const token = jwt.sign({ id:rows.insertId, email }, process.env.JWT_SECRET, { expiresIn: '20m' });
        const token = jwt.sign({ id:rows.insertId, email }, "GVF0026694", { expiresIn: '1h' });

        return res.status(201).json({user:{ id:rows.insertId, email },token});

        
      } catch (error) {
        console.log(error)
        return res.status(400).json({ message: error });
      }

  });  

router.post('/login', async (req, res)=> {

  const { email, password } = req.body;

  const [rows] = await pool.query("SELECT * FROM usuario WHERE email = ? AND password=?", [email, password]);

 // console.log(rows)

  if (rows.length==0)
  return res.status(401).json({ message: 'Contrasenia o password incorrecto' });

  const token = jwt.sign({ id:rows[0].id, email }, "GVF0026694", { expiresIn: '1h' });


  return res.status(401).json({user:{ id:rows[0].id, email },token});

 
  

  //const token = jwt.sign({ id:rows.insertId, email }, "GVF0026694", { expiresIn: '1h' });

  return res.status(201).json({user:{ id:rows.insertId, email }});




});  

router.post('logout', (req, res)=> {
  const { name } = req.params;
  res.send(`Hola ${name}!`);
});  

export default router