// http, fs  built-in node module

const http = require("http");
const fs = require("fs");
const port = 3000; //between 3000 - 5000 are available

const server = http.createServer((request, response) => {
	// req, res
	const url = request.url;
	console.log(request.url);
	if (url === "/about") {
		fs.readFile("./public/indexs.html", (error, data) => {
			if (error) {
				console.log(error.message);
				response.end(error.message);
			} else {
				response.writeHeader(200, { "content-type": "text/html" });
				response.write(data);
				response.end();
			}
		});
	} else {
		response.writeHeader(400);
		response.end("No page found");
	}
});

server.listen(port, () => {
	console.log(`listening to port ${port}`);
});

// - create another html page called contact
// - create another if statement that if the route matches /contact then repond with the page that you just made.
// - if there's any error, display the error on the page not console.log

// - create another html page called whatever you like
// - create another if statement that if the route matches /_______ then repond with the page that you just made.
// - if there's any error, display the error on the page not console.log
