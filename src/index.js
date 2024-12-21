/*
1.Title       : Uptime Monitoring Application 
2.Description : A RESTful API to monitor uptime or downtime of user-defined links
3.Author      : md atik hasan 
4.Date        : 19/12/24
*/

// Dependencies
const http = require('http');
const { handleReqRes } = require('../helpers/handleReqRes'); // Ensure the path is correct
const environment = require('../helpers/environment'); // Ensure the path is correct

// App object - Module scaffolding
const app = {};

// Create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);

    // Start the server and add error handling
    server.listen(environment.port, (err) => {
        if (err) {
            console.error(`Server failed to start: ${err.message}`);
            process.exit(1); // Exit the process in case of failure
        }
        console.log(`Server running on port ${environment.port} in ${environment.envName} mode.`);
    });
};

// Handle request and response
app.handleReqRes = handleReqRes;

// Start the server
app.createServer();
