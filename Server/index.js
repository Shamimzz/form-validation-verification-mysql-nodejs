const express = require('express');
var mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser')

// initialize our express app
const port = 5000;
const app = express();
require('dotenv').config()
app.use(cors());
// ata na dile server a undefined dekhabe, data asbe na. 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


var Db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "", 
    database: "demo_1st"
   });



// Insert all data from Client........   
app.post("/crud/insert", async(req, res)=>{
  const {name,gender,birthday,department,batch,university,email,phone,password,confirmPass} = req.body;
  // console.log(name, director);

  const SQLQuery =
   "INSERT INTO student_info (name, director, date, price) VALUES = ?";

   const value = [
     [name,gender,birthday,department,batch,university,email,phone,password,confirmPass]
   ]

  Db.query(SQLQuery, [value], (err, result)=>{
    if(err){
      console.log("Wrong")
    }else{
      console.log(result)
    }
  })

})




app.get('/', async(req, res)=>{
   res.send(__dirname+'/register.html');
})






// Database Listing......
app.get("/", (req, res) => {
  res.send("Local database Working....");
});

app.listen(port, ()=>{
  console.log("Node Server running on", port)
})