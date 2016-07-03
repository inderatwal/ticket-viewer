var express = require('express');
var router = express.Router();
//required module for http request
var http= require('http');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
/*----------------------------------------------------------------------------*/
var val;
// new request
var req = new XMLHttpRequest();

// open request with zendesk account name
req.open("GET", "https://gabruapparel.zendesk.com/api/v2/tickets.json", false);

//basic authorisation with username and password
req.setRequestHeader("Authorization", "Basic " + new Buffer('inderpreet.atwal95@hotmail.com:Karan1998').toString('base64'));
req.send();	

//debugging
console.log(req.status);
console.log(req.statusText);
var status=req.status
var tickData=null;

// stored requested data
if(status!=0 && status!=404 && status!=401){
	tickData = JSON.parse(req.responseText);
}

/* GET home page. */
router.get('/', function(req, res, next) {

/*website loaded if no errors*/
if(status!=0 && status!=404 && status!=401 ){
	res.render('index', { title: 'Zendesk Ticket Viewer', data: tickData});
        //recieveing the URL search query, when ticket is selected
	val= req.query.search;
        console.log("connection made");
	console.log(val)
}
/*error page displayed if no internet connection*/
else if(status==0 || status==404  ){
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
 
res.render('details', { title:'Ticket Details for ticket id:  '+val, dData: tickData, tId: val});
 
 
});




module.exports = router;
