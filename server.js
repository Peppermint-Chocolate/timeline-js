/* server.js - Express server*/
'use strict'; 
const log = console.log
log('Timeline server')

const express = require('express')
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '/pub')))

/*
EXAMPLE ROUTE 
app.get('/sompage', (req, res) => {
	res.sendFile(path.join(__dirname) + '/pub/somepage.html')
})
*/

// REMEMBER TO DO "git push heroku" 

// npm install 
// npm start or node server.js 

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname) + '/pub/homepage.html')
})

app.get('/examples', (req, res) => {
	res.sendFile(path.join(__dirname) + '/pub/examples.html')
    //res.send('<h1>This should be the example page!</h1>') 
})

app.get('/documentation', (req, res) => {
	res.sendFile(path.join(__dirname) + '/pub/documentation.html')
})

////////////////////////CODE FROM QUERCUS WEBSITE///////////////////////////// 
app.get('/secondRoot', (req, res) => {
	// sending a string
	//res.send('This should be the root route!')

	//sending some HTML
	res.send('<h1>This should be the second root route!</h1>') 
})
 
// Error codes 
app.get('/problem', (req, res) => { 
	// You can indicate a status code to send back
	// by default it is 200, but it's up to you
	// if you want to send something
	res.status(500).send('There was a problem on the server') 

	// don't send nonsense status codes like this one:
	//res.status(867).send('There was a problem on the server')
})

// Sending some JSON
app.get('/someJSON', (req, res) => { 
	// object converted to JSON string
	res.send({ 
		name: 'John', 
		year: 3,
		courses: ['csc309', 'csc301'] 
	}) 
})
////////////////////////CODE FROM QUERCUS WEBSITE/////////////////////////////

const port = process.env.PORT || 5000 
app.listen(port, () => { 
	log(`Listening on port ${port}...`)
})