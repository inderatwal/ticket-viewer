var express = require('express');
var router = express.Router();

var http= require('http');
var fs=require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://gabruapparel.zendesk.com/api/v2/tickets.json", false);
xhr.setRequestHeader("Authorization", "Basic " + new Buffer('inderpreet.atwal95@hotmail.com:Karan1998').toString('base64'));
xhr.send();	
// all debugging to view ticket subjects and what not
console.log(xhr.status);
console.log(xhr.statusText);

var myArr = JSON.parse(xhr.responseText);	





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'zendesk Ticket Viewer' , ticketNo: myArr.tickets.length});

	/*for(var i=0; i< myArr.tickets.length;i++){
		
		res.send({subject: myArr.tickets[i].subject});
		res.send({type: myArr.tickets[i].type});
		}*/

});

module.exports = router;
