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

// stored requested data
var tickData = JSON.parse(req.responseText);	

// debuggings, displaying ticket subject in console
for (i = 0; i < tickData.tickets.length; i++) { 
    console.log(tickData.tickets[i].subject);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zendesk Ticket Viewer', data: tickData});
  
  console.log("item clicked: "+val);
  
});


/* GET details page */
router.get('/details', function(req, res, next) {
 val= req.query.search;
 res.render('details', { title:'Ticket Details for ticket id:  '+val, dData: tickData, tId: val});
 
 
});




module.exports = router;
