const http= require('http');

const PORT= 7000;
const PORTTWO= 7500;

var handleRequest= function(request, response){
	console.log(`You're good!`);
	response.end(`This works! Path hit: ${request.url}  You are beautiful!`);
};

var handleRequest2= function(request, response){
	console.log(`You're not good!`);
	response.end(`This works! Path hit: ${request.url}  You are ugly!`);
};

var server= http.createServer(handleRequest);
var server2= http.createServer(handleRequest2);

server.listen(PORT, function(){
	console.log(`Listening on http://localhost:${PORT}.`);

});

server2.listen(PORTTWO, function(){
	console.log(`Listening on http://localhost:${PORTTWO}.`);

});