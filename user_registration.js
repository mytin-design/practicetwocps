const mysql = require('mysql');

//Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mytin',
    password: 'password',
    database: 'user_registration'
});


//Connect to the databse

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err.stack);
        return;
    }

    console.log('Connected to database');
});

//Define form data



const formData = {
    firstname: "document.getElementById('f-name')",
    surname: "document.getElementById('s-name')",
    username: "document.getElementById('n-name')",
    passcode: "document.getElementById('initial-passcode')",
    confirm_passcode: "document.getElementById('confirm-passcode')"
};


//Insert the form data into the database
const query = 'INSERT INTO user_registration SET ?';
connection.query(query, formData, (error, results) => {
    if(error) {
        console.error('Error inserting data', error);
        return;
    }

    console.log('Data inserted successfully');
    connection.end(); //Close the connection
});



