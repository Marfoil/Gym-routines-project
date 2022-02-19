const createServer = require('http').createServer;
const express = require('express');
const path = require('path');

const { PORT = 8080 } = process.env;

const app = express();

app.use(express.static('dist'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '', 'index.html'));
});

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
