# ticket-viewer
Zendesk Ticket Viewer 

I chose to use Node.js along with express javascript framework and Jade 
for dynamic templating of html to complete the assignment given. 

Before running the web server, please ensure that the port 8000 is not being used. 
if it is being used, please change the port used by 'localhost' in the file www, located in the bin folder:
  line 15-- var port = normalizePort(process.env.PORT || 'CHANGE PORT HERE');

Ensure that all dependencies have been installed in the folder. to do so locate to the root folder in terminal and run the command: 'npm install' , this will create a folder inside the root folder called 'node_modules' with all the required dependencies that are located in package.json

to run the server just simple make sure your terminal is pointing to the root folder, and run the command:
'node bin/www' 

and in the web browser go to:  http://localhost:8000/

or change the 8000 with the port you had changed it too before, if changed. 

