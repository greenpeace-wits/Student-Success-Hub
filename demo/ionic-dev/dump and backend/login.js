var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());




var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "qwerty",
	database: "SD_PROJECT",
});

// app.post('/somefilename', function(req, res){
// con.connect(function(err) {
// 	if (err) throw err;
// 	console.log("connected!");
// 	var sql = "SELECT STAFF_NO, PASSWORD,STAFF_FNAME , LEVEL FROM STAFF WHERE STAFF_NO = ?"; //this queries the db to get the staff number
// 	var values = 138931;									 //and password which i think you compare (in the
//   	con.query(sql,values,function (err, result) {						 //front end) to the given one. Change values to the
//     	if (err) throw err;									//staff number inputed in the login page
//     	console.log("1 record inserted");
// 	console.log(result);
//   	});
// 	con.end(function (){
// 	});

// });
// });

app.post('/somefilename', function(req, res){
con.connect(function(err) {	//this just gets the marks from the database so just change values to whatever student number is being searced for
        if (err) throw err;
        console.log("connected!");
        var sql = "SELECT TUT_TEST1, TUT_TEST2, TEST_1, TEST_2, ASSIGNMENT, EXAM FROM MARKS WHERE STU_NUMBER = ?";
        var values = 1326514;
        con.query(sql,values,function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        console.log(result);
        });
	con.end(function (){
	});

});
});

/*app.post('/somefilename', function(req, res){
con.connect(function(err) {	//this one just changes the mark in the database. values should be an array containing the six marks
	if (err) throw err;	//in order of tuttest1 and 2, test1 and 2, assignment, project and student number of student you wanna
	console.log("connected!"); //add the marks too
	var sql = "UPDATE MARKS SET TUT_TEST1 = ?, TUT_TEST2 = ?,TEST_1 = ?, TEST_2 = ?, ASSIGNMENT = ?, EXAM = ? WHERE STU_NUMBER = ?"
	var values = [85,null,65,null,null,null,1326514];
	con.query(sql,values,function (err, result) {
	if (err) throw err;
	console.log("1 record inserted");
	console.log(result.affectedRows);
	});
	con.end(function (){
	});
});
});*/





