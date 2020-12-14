const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const routerAll = require('./all.routes');

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routerAll);

app.listen(3000, ()=> {
	console.log('Server on port 3000');
});
