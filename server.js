var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = new express();
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT);

var data = [{id:1},{id:2},{id:3}];

//CREATE new resource
app.post('/[resource_name]', function(request, response) { response.status(201).send(request.body); });

//READ all
app.get('/[resource_name]', function(request, response) { response.status(200).send(data); });

//READ one by id
app.get('/[resource_name]/:id', function(request, response) { response.status(200).send(data[0]); });

//UPDATE one by id
app.put('/[resource_name]/:id', function(request, response) { response.status(201).send(request.body); });

//DELETE one by id
app.delete('/[resource_name]/:id', function(request, response) { response.status(201).send('Deleted' + request.params.id); });