
var http = require('http');

try{
	var httpServer = http.createServer( function(req,res){
	res.end('this is my first node app 123');
});
} catch(err) {
	console.log(err);
}

try
{
	httpServer.listen(8081, function(){
	console.log('Server listening on port 8080');
});
} catch(err) {
	console.log(err);
}


