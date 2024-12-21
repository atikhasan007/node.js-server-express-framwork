//dependency 
const { StringDecoder } = require('string_decoder');
const url = require('url');
const routers = require('../route/routers'); // Ensure this file or directory exists
const { notfoundHandler } = require('../handlers/routeHandler/notfoundHandler');

// module scaffolding
const handler = {};

handler.handleRequest = (req, res) => {
    // request handling
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperty = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routers[trimmedPath] ? routers[trimmedPath] : notfoundHandler;

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();

        // Execute chosen handler
        chosenHandler(requestProperty, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {};

            const payloadString = JSON.stringify(payload);

            // Return the final response
            res.writeHead(statusCode, { 'Content-Type': 'application/json' });
          
        });

        res.end(payloadString);
    });
};

module.exports = handler;
