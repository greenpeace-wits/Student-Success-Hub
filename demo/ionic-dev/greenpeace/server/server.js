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

app.post('/signin', function(req, res, next){
    let data = JSON.parse(req.body);
    let witsemail = data.witsemail;
	let password = data.password;
		
	var sql = "SELECT STAFF_NO, PASSWORD,STAFF_FNAME , LEVEL FROM STAFF WHERE STAFF_NO = ?"; 
	var values = witsemail;									 
	con.query(sql,[values],function (err, result) {				
		if (err) {
			return err;
		}									//staff number inputed in the login page
		if (result.length > 0){
			if (result[0].PASSWORD == password){
				return res.status(200).json(result[0]); // returns the staff member
			}
			else {
				return res.status(401).send('Password entered does not match password on record.');
			}
		}
		else {
			return res.status(401).send('No such user in database.');
		}
	});	
});    
    
app.listen(backendPort, function() {
    console.log('Express server listening on port ' + backendPort);
});