const http= require('http');

cost PORT= 7000;
cost PORTTWO= 7500;

var handleRequest= function(request, response){
	const.log(`This works! Path hit: ${request.url}`);
}

var server= http.createServer(handleRequest);
var server2= http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log(`Listening on http://localhost: ${PORT}. You are beautiful!`);

});

server2.listen(PORTTWO, function(){
	console.log(`Listening on http://localhost: ${PORTTWO}. You are ugly!`);

});