var http=require('http');
var url=require('url');
var fs=require('fs');
http.createServer(function(req,res){

	res.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile('index.html', function(err,data)
	{
	res.end("testo" + req.url+ url.parse(req.url, true).query.year + ":" + data);
});
}).listen(8081);