#!/usr/bin/env node
var app = require('./app.js');
app.listen(process.env.C9_PORT, "0.0.0.0");//|| 3000