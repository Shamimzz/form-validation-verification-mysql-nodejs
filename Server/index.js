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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("."));



var Db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "", 
    database: "demo_1st"
   });




app.get('/', async(req, res)=>{
 res.sendFile(__dirname+'/register.html');
});
 

// Insert all data from Client........   
app.post('/', async(req, res)=>{
  // const {name,gender,birthday,department,batch,university,email,phone,password,confirmPass} = req.body;

  console.log("hitting post body", req.body);

  const name = req.body.name;
  const gender = req.body.gender;
  const birthday = req.body.birthday;
  const department = req.body.department;
  const batch = req.body.batch;

  const SQLQuery =
   "INSERT INTO student_info(name, gender, birthday, department, batch) VALUES =(?,?,?,?,?)";

  //  var values = [
  //    [name, gender, birthday, department, batch, university, email, phone, password, confirmPass]
  //  ];

  Db.query(SQLQuery, [name, gender, birthday, department, batch], (err, result)=>{
    if(err){
      console.log("Wrong pushing")
    }else{
      console.log(result)
    }
  })

})







// Database Listing......
app.get("/", (req, res) => {
  res.send("Local database Working....");
});

app.listen(port, ()=>{
  console.log("Node Server running on", port)
})