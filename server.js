
//-----------------------------------------------------------------
//---------------------------ACTION LIST---------------------------
//-----------------------------------------------------------------
/* - 
*/

//-----------------------------------------------------------------
//----------------------ENVIRONMENT VARIABLES----------------------
//-----------------------------------------------------------------
const express = require('express');                                 // easier to work with than the HTTP module.
const path = require('path');                                       // works with diretories and file paths
var bodyParser = require("body-parser");                            // middleware
const app = express();                                              // instantiate the module into a variable

//-----------------------------------------------------------------
//------------------------ENVIRONMENT SETUP------------------------
//-----------------------------------------------------------------
app.use(bodyParser.json());                                         // not sure exactly what this is used for
app.set('views', __dirname + '/public/views');                      // sets filepath for view rendering
app.set('view engine', 'ejs');                                      // sets the view engine to 'ejs'

app.use(require('morgan')('combined'));                             // Use application-level middleware for common functionality, including
app.use(bodyParser.urlencoded({ extended: true }));                 // logging, parsing, and session handling.