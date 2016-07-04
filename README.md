# ticket-viewer
Zendesk Ticket Viewer 

I chose to use Node.js along with express javascript framework and Jade 
for dynamic templating of html to complete the assignment given. 

Before running the web server, please ensure that the port 8000 is not being used. 
if it is, please change the port used by 'localhost' in the file: www, located in the bin folder:
  line 15-- var port = normalizePort(process.env.PORT || 'CHANGE PORT HERE');

Ensure that all dependencies have been installed in the folder.

to do so locate to the root folder in terminal and run the command: 'npm install' , this will create a folder inside the root folder called 'node_modules' with all the required dependencies that are located in package.json


to run the server just simple make sure your terminal is pointing to the root folder, and run the command:
'node bin/www' 

and in the web browser go to:  http://localhost:8000/
or change the 8000 with the port you had changed it too before, if changed. 

Some basic information about the code

app.js -> is a javascript file created by express framework, and contains all the needed bits and pieces for website to work
routes/server.js -> handles all serverside functions including getting from API , and handles the routes from page to page
public/javascripts/global.js -> handles all global javascript functions used in the html
views/ *.jade  all files here are the seperate html pages, that extend the basic layout.jade page
public/stylesheet/style.css -> css coding for html


the account being used currently for running the program is a test account i made for zendesk, with username:inderpreet.atwal95@hotmail.com and password: test123
this can also be changed if need be from the server.js file line 73


all testing code has been commented out for final project.

also note: tickets update when server is run again. since tickets load up when the server is loaded, not when website is loaded. 
