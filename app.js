var brain = require('brain');
var net = brain.NeuralNetwork();
net.train([{input: [1, 2], output: [2]},
           {input: [1, 2], output: [2]},
           {input: [1, 2], output: [2]}]);
var output = net.run([1, 2]);
console.log(output);
