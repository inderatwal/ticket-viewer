var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://gabruapparel.zendesk.com/api/v2/tickets.json", false);
xhr.setRequestHeader("Authorization", "Basic " + new Buffer('inderpreet.atwal95@hotmail.com:Karan1998').toString('base64'));
xhr.send();	

console.log(xhr.status);
console.log(xhr.statusText);

var myArr = JSON.parse(xhr.responseText);	

for (i = 0; i < myArr.tickets.length; i++) { 
    console.log(myArr.tickets[i].subject);
}
