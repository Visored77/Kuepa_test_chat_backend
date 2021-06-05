

const {Poll, Pool} = require('pg');
const pool= new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'amylee777',
    database: 'api',
    port: '5432'
    //connectionString: process.env.DATABASE_URL,
    //ssl: {
    //    rejectUnauthorized: false
    //    }
    

})
const home=async(req,res )=>{
    res.send("BIENVENIDO A API KUAP")
}
const getUsers = async (req, res)=>{
   //res.send("correindo api")
   const response = await pool.query('SELECT * FROM users');
   res.header("Access-Control-Allow-Origin", "*");
   res.status(200).json(response.rows);
   
}

const getUserById = async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id= $1', [id])
    res.status(200).json(response.rows)
    
}

const createuser= async(req, res)=>{
  const { name, email, password } = req.body;
  const response = await pool.query('INSERT INTO users (name , email, password) VALUES ($1, $2, $3)', [name, email, password] );
  console.log(response);
  res.json({
      message: 'User Added Succesfully',
      body:{
          user: {name, email, password}
      }
  })
};

const deleteUser= async(req, res)=>{
//console.log (req.params.id)
const id = req.params.id;
const response = await pool.query('DELETE FROM users WHERE id= $1', [id])
console.log(response);
res.json({
    message: 'User ' + id + ' Delete successfully' 
})
};
module.exports= {
    home,
    getUsers,
    getUserById,
    createuser,
    deleteUser,
}