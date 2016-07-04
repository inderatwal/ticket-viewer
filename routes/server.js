var express = require('express');
var router = express.Router();
//required modules for http request
var http= require('http');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
/*----------------------------------------------------------------------------*/

/*global variables used to store, info from api(tickData),what ticket was clicked on (val), and api request status(status)
*/
var val;
var tickData=null;
var status;


// run the get data from API function
getData();


/* GET home page. */
router.get('/', function(req, res, next) {

/*website loaded if no errors*/
if(status!=0 && status!=404 && status!=401 ){
	res.render('index', { title: 'Zendesk Ticket Viewer', data: tickData});
        //recieveing the URL search query, when ticket is selected
	val= req.query.search;
        console.log("connection made");
        /*debug code, to check what value was chosen
	console.log(val)
        */
}

/*error page displayed if no internet connection*/
else if(status==0 || status==404   ){
	res.render('error', { title: 'Error 404: No connection could be established with the API \n Please check your Internet Connection and try again'})
	console.log("Error 404, no Connection could be made");
}

/*error page displayed if authentication failed*/
else if(status==401 ){
	res.render('error', { title: 'Error 401: Authentication Failed, Please check username & Password'})
	console.log("Error 401, authentication Failed");
}
  
  
});


/* GET details page */
router.get('/details', function(req, res, next) {
// if ticket is selected from home page, then details page is accesssed, continue
if(val!=null){ 
	res.render('details', { title:'Details for Ticket:  '+val, dData: tickData, tId: val});
//if details page is accessed straight from url, then display error
}else {
	res.render('error', { title: ' Something went wrong ! Please go back to the Home Page and select the ticket to display again' });
}
 
});

/*--------------------------------------------------------------
	Make request from API Function
--------------------------------------------------------------*/
function getData(){
// new request
var req = new XMLHttpRequest();

// open request with zendesk account name
req.open("GET", "https://gabruapparel.zendesk.com/api/v2/tickets.json", false);

//basic authorisation with username and password

req.setRequestHeader("Authorization", "Basic " + new Buffer('inderpreet.atwal95@hotmail.com:test123').toString('base64'));
req.send();	

/* debugging code when connecting to API
console.log(req.status);
console.log(req.statusText);
*/
status=req.status


// stored requested data
if(status!=0 && status!=404 && status!=401){
	tickData = JSON.parse(req.responseText);
}
/*debug code, testing whether API was getting all tickets.
for(var i=0;i<tickData.tickets.length){
	console.log(tickData.tickets.id[i]);
}

*/
}



module.exports = router;
