var mysql = require('mysql'), express = require('express'), bodyParser = require('body-parser'), 
logger = require('morgan'), methodOverride = require('method-override'), cors = require('cors'), 
app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cors());

let backendPort = 8084;

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "qwerty",
	database: "SD_PROJECT"
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.header(
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    );
    next();
});

// check if user exists
// if user exists, return their staff number, first name and last name
// additionally, return an initial list of 10 students to populate the list on the course management tab
{let data = {};
app.post('/signin', function(req, res,next){
    let witsemail =  JSON.parse(req.body).witsemail;
	let password =  JSON.parse(req.body).password;
		
	var sql = [
		"SELECT PASSWORD FROM STAFF WHERE STAFF_NO = ?",
		"SELECT STAFF_NO, STAFF_FNAME, LEVEL FROM STAFF WHERE STAFF_NO = ?"
		]; 
	var values = witsemail;									 
	con.query(sql[0],[values],function (err, result) {				
		if (err) return err;		
		if (result.length > 0){
			if (result[0].PASSWORD == password){
				con.query(sql[1],[values],function (err, result) {	
					if (err) return err;
					data['user'] = result[0]; // gets the staff member
					next();
				});
			}
			else {
				return res.status(401).send('Password entered does not match password on record.');
			}
		}
		else {
			return res.status(401).send('No such user in database.');
		}
	});	
},function(req,res){
	var sql = "SELECT FLAG, STU_NUMBER, STUDENT_FNAME, STUDENT_LNAME FROM (SELECT * FROM STUDENT LIMIT 10) AS STU_LIST"
	con.query(sql,function (err, result) {	
		if (err) return err;
		data['students'] = result;    // gets the first 10 students in the Student table
		return res.status(200).json(data);
	});			
}); }  


app.post('/home/course-management:task', function(req, res){
	let task = req.params.task
	switch (task) {
		case ':get': // select the mark data of the specified student
			var values = [JSON.parse(req.body)]
			var sql = "SELECT TUT_TEST1, TUT_TEST2, TEST_1, TEST_2, ASSIGNMENT, EXAM FROM MARKS WHERE STU_NUMBER = ?";
			con.query(sql,values,function (err, result) {
				if (err) return err;
				return res.status(200).json(result);
			});
		break;

		case ':update': // change the mark data for the specified student
			var values = Object.values(JSON.parse(req.body).data);
			values.push(JSON.parse(req.body).student[0].STU_NUMBER);
			var sql = "UPDATE MARKS SET TUT_TEST1 = ?, TUT_TEST2 = ?, TEST_1 = ?, TEST_2 = ?, ASSIGNMENT = ?, EXAM = ? WHERE STU_NUMBER = ?";
			con.query(sql,values,function (err, result) {
				if (err) return err;
				return res.status(200).json(result);
			});
		break;
	}
});
    
app.listen(backendPort, function() {
    console.log('Express server listening on port ' + backendPort);
});