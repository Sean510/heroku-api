var express = require("express");
var app = express();

var api_routes = require('./api_routes_dev.js');
app.use('/api', api_routes);

// static file route
app.use('/', express.static('front_end'));


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    
    console.log("Server is running")
    
});
