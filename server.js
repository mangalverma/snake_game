http=require("http")
fs=require("fs")
http.createServer((req,res)=>{
	fs.readFile('snake.html',function(err,data)
	{
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(8080);