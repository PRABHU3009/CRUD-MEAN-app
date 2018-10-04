var express = require('express');
var bodyparser=require('body-parser');
var cors = require('cors');

const {mongoose} = require('./db_crud.js');
var ctrl_employee = require('./controller/controller_employee.js');

var app=express();
app.set('port', (process.env.PORT || 3000));
app.use(bodyparser.json());
app.use(cors());
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.listen(app.get('port'),()=> console.log("Express stared......"));

app.use('/employee',ctrl_employee);