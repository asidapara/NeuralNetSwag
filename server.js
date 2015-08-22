var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var brain = require('brain');
// var net = brain.NeuralNetwork();


// var http = require('http');

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.bodyParser());

// app.get('/myaction', function(req, res) {
//   var input1 = req.body.number1();
//   var input2 = req.body.number12();
//   var output1 = req.body.number13();
//   var input12 = req.body.number2();
//   var input22 = req.body.number22();
//   var output2 = req.body.number23();
//   var input13 = req.body.number3();
//   var input23 = req.body.number32();
//   var output3 = req.body.number33();
//   var desiredinput = req.body.number5();
//   var desiredinput2 = req.body.number52();
//
// net.train([{input: [input1, input2], output: [output1]},
//            {input: [input12, input22], output: [output2]},
//            {input: [input12, input23], output: [output3]}]);
// var output = net.run([desiredinput, desiredinput2]);
// res.send(200, {
//     'Content-Type': 'text/html',
//     'Content-Length': output,
//
//   });
// });
console.log(output);


app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
  app.get('/myaction', function(req, res) {
    var net = brain.NeuralNetwork();
    var input1 = req.body.number1();
    var input2 = req.body.number12();
    var output1 = req.body.number13();
    var input12 = req.body.number2();
    var input22 = req.body.number22();
    var output2 = req.body.number23();
    var input13 = req.body.number3();
    var input23 = req.body.number32();
    var output3 = req.body.number33();
    var desiredinput = req.body.number5();
    var desiredinput2 = req.body.number52();

  net.train([{input: [input1, input2], output: [output1]},
             {input: [input12, input22], output: [output2]},
             {input: [input12, input23], output: [output3]}]);
  var output = net.run([desiredinput, desiredinput2]);
  console.log(output);
});
