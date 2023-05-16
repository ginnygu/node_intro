// http built-in module

const http = require("http");
const port = 3000; //between 3000 - 5000 are available

const server = http.createServer((request, response) => {
	const url = request.url;
	console.log(request.url);
	if (url === "/about") {
		return response.end("about page");
	}
	response.end("Hello Ginny");
});

server.listen(port, () => {
	console.log(`listening to port ${port}`);
});
