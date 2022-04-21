const express = require('express');
var mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

// initialize our express app
const port = 5001;
const app = express();
require('dotenv').config();
app.use(cors());
// ata na dile server a undefined dekhabe, data asbe na. 
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var Db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "", 
    database: "demo_1st"
   });


//    const path = require('path');
//    app.use(express.static(path.join(__dirname, 'static')));
//    // Render login template
//    app.get('/', function(request, response) {
//     response.sendFile(path.join(__dirname + '/login.html'));
//    });
    


// Insert all data from Client.......
app.post('/insertInfo', async(req, res)=>{
  const {name, gender, birthday, department, batch, university, email, phone, password, confirmPass} = req.body;
  const SQLQuery = "INSERT INTO student_info (name, gender, birthday, department, batch, university, email, phone, password, confirmPass) VALUES ?"

   var values=[[name, gender, birthday, department, batch, university, email, phone, password, confirmPass]];

   Db.query(SQLQuery, [values], (err, result) => {
     if(err){console.log("Wrong pushing", err)}
     else{ console.log('hey post', result)}
   })

})


// Password verification.......  
app.post('/login', async(req, res) => {
	// Capture the input fields
	// let email = req.body.email;
	// let password = req.body.password;
	const {email, password} = req.body;
	if (email && password) {
		// Ensure the input fields exists and are not empty.
		// Execute SQL query that'll select the account from the database based on the specified username and password.
		Db.query('SELECT * FROM student_info WHERE email = ? AND password = ?', [email, password], function(err, result, fields){
			// console.log(password)
			// If there is an issue with the query, output the error
			if(err){res.send({err: err})};
			// If the account exists
			if (result.length > 0) {
				res.send(result);
			} else {
				res.send({message: 'Incorrect email or Password!'});
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});


// Success route showing after login.....
// app.get('/success', function(req, res) {
// 	console.log('Success', req.body);
// 	// If the user is loggedin
// 	// if (req.session.loggedin) {
// 	// 	// Output username
// 	// 	res.send('Welcome back, ' + req.session.username + '!');
// 	// } else {
// 	// 	// Not logged in
// 	// 	res.send('Please login to view this page!');
// 	// }
// 	// res.end();
// });




// Database Listing......
app.get("/", (req, res) => {
  console.log('Local database Working...')	
  res.send("Local database Working....");
});

app.listen(port, ()=>{ 
	console.log("Node Server running on", port) 
})

