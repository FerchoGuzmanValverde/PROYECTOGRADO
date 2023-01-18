import { createPool } from "mysql2/promise";
//console.log('env',process.env.password)

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'prueba',
    password: 'Gvf8922123sc+.'
    //password: process.env.password
  });

//export default pool